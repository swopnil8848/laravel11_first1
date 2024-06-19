<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardGenX;
use App\Http\Controllers\HomeController;
// use App\Http\Controllers\Controllers\HomeController;
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

// Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('dashboard')->middleware(['auth','verified']);

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('dashboard');
// });

Route::get('/dashboardGenX', function () {
    return Inertia::render('DashboardGenX');
})->middleware(['auth', 'verified'])->name('dashboardGenX');

Route::get('/dashboard', [HomeController::class, 'root'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->middleware(['auth'])->name('contact');

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
