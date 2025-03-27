<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class FaceController extends Controller
{
    public function analyze(Request $request)
    {
        // Validate that an image is provided
        $request->validate([
            'image' => 'required|image'
        ]);

        // Store the uploaded image temporarily in storage/app/temp
        $imagePath = $request->file('image')->store('temp');
        $fullImagePath = storage_path('app/' . $imagePath);

        // Define the actions to perform (e.g., age, gender, emotion, race)
        $actions = ['age', 'gender', 'emotion', 'race'];

        // Make an HTTP POST request to the Python microservice
        $response = Http::attach(
            'img', fopen($fullImagePath, 'r'), 'image.jpg'
        )->post('http://127.0.0.1:5005/analyze', [
            'actions' => json_encode($actions)
        ]);

        // Clean up the temporary image file
        Storage::delete($imagePath);

        // Check if the microservice responded successfully
        if ($response->successful()) {
            $result = $response->json();
            return response()->json([
                'status' => 'success',
                'data' => $result,
            ]);
        } else {
            return response()->json([
                'status'  => 'error',
                'message' => 'Face analysis failed.',
            ], 500);
        }
    }
}