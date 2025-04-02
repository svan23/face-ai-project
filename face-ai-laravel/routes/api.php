<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FaceController;
use Illuminate\Http\Request;

Route::post('/analyze-face', [FaceController::class, 'analyze']);
