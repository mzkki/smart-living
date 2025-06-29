<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $featuredKosans = \App\Models\Kosan::with('facilities')
        ->where('featured', true)
        ->take(3)
        ->get();

    return Inertia::render('welcome', [
        'featuredKosans' => $featuredKosans
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Kosan CRUD routes
    Route::resource('kosans', \App\Http\Controllers\KosanController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
