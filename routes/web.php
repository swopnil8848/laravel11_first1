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

Route::get('/dashboardGenX', function () {
    return Inertia::render('DashboardGenX');
})->middleware(['auth', 'verified'])->name('dashboardGenX');

Route::get('/card', function () {
    return Inertia::render('Card');
})->middleware(['auth', 'verified'])->name('card');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->middleware(['auth', 'verified'])->name('Contact');

Route::get('/contactdetail/{name}', function ($name) {
    return Inertia::render('ContactDetail');
})->middleware(['auth', 'verified'])->name('ContactId');

Route::get('/dashboard', [HomeController::class, 'root'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->middleware(['auth'])->name('contact');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
