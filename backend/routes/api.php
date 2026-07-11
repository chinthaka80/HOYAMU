<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\BusinessController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Database & Server Health Check
Route::get('/db-check', function () {
    try {
        \DB::connection()->getPdo();
        return response()->json([
            'status' => 'success',
            'message' => 'PostgreSQL connection established successfully.',
            'database' => \DB::connection()->getDatabaseName()
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Could not connect to database: ' . $e->getMessage()
        ], 500);
    }
});

// Authentication Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public Listings & Search Routes
Route::get('/listings', [ListingController::class, 'index']);
Route::get('/listings/{uuid}', [ListingController::class, 'show']);
Route::get('/search', [ListingController::class, 'search']);

// Public Business Directory Routes
Route::get('/businesses', [BusinessController::class, 'index']);
Route::get('/businesses/{uuid}', [BusinessController::class, 'show']);

// Public Locations Lookup Routes
Route::get('/provinces', [\App\Http\Controllers\LocationController::class, 'provinces']);
Route::get('/districts', [\App\Http\Controllers\LocationController::class, 'districts']);
Route::get('/cities', [\App\Http\Controllers\LocationController::class, 'cities']);

// Authenticated Routes (Sanctum Protected)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::put('/profile', [AuthController::class, 'updateProfile']);

    // Listings Management
    Route::post('/listings', [ListingController::class, 'store']);
    Route::put('/listings/{uuid}', [ListingController::class, 'update']);
    Route::delete('/listings/{uuid}', [ListingController::class, 'destroy']);

    // Business Management
    Route::post('/businesses', [BusinessController::class, 'store']);
    Route::put('/businesses/{uuid}', [BusinessController::class, 'update']);
});
