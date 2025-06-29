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
        // Get kosans for dashboard display (limit to recent 5)
        $kosans = \App\Models\Kosan::with('facilities')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        // Calculate stats
        $totalKosans = \App\Models\Kosan::count();
        $availableKosans = \App\Models\Kosan::where('status', 'Tersedia')->count();
        $featuredKosans = \App\Models\Kosan::where('featured', true)->count();

        // Get counts by type
        $kosanTypes = \App\Models\Kosan::select('type')
            ->distinct()
            ->get()
            ->pluck('type')
            ->toArray();

        $typeStats = [];
        foreach ($kosanTypes as $type) {
            $typeStats[$type] = \App\Models\Kosan::where('type', $type)->count();
        }

        return Inertia::render('dashboard', [
            'kosans' => $kosans,
            'stats' => [
                'total' => $totalKosans,
                'available' => $availableKosans,
                'featured' => $featuredKosans,
                'types' => $typeStats,
            ]
        ]);
    })->name('dashboard');

    // Kosan CRUD routes
    Route::resource('kosans', \App\Http\Controllers\KosanController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
