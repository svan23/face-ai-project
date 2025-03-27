<?php
// Example: app/Services/FaceRecognitionService.php
namespace App\Services;

use Illuminate\Support\Facades\Http;

class FaceRecognitionService
{
    protected $apiUrl;
    protected $apiKey;

    public function __construct()
    {
        $this->apiUrl = config('services.deepface.url');
        $this->apiKey = config('services.deepface.key');
    }

    public function analyzeImage($imagePath)
    {
        // Implement the logic to send the image to DeepFace API and return the response
        $response = Http::attach(
            'file',
            fopen($imagePath, 'r'),
            'image.jpg'
        )->post($this->apiUrl, [
            'api_key' => $this->apiKey,
        ]);

        return $response->json();
    }
}
