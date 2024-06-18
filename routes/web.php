<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardGenX;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboardGenX', function () {
    return Inertia::render('DashboardGenX');
})->middleware(['auth', 'verified'])->name('dashboardGenX');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->middleware(['auth', 'verified'])->name('contact');

// Route::post('/dashboardGenX', function ($name) {
//     dd($name)
//     return Inertia::render('DashboardGenX');
// })
// ->middleware(['auth', 'verified'])->name('dashboardGenX');

Route::post('/dashboardGenX', [dashboardGenX::class, 'create'])->middleware(['auth', 'verified'])->name('dashboardGenX');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
