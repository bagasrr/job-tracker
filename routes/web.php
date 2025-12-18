<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JobAppController;
use App\Http\Controllers\Profile\ChangeThemeController;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/', [HomeController::class, 'index'])->name('home');

// Added job application
Route::get('/add-job', [JobAppController::class, 'create'])->name('jobs.create');
Route::post('/store-job', [JobAppController::class, 'store'])->name('jobs.store');

// Job application details
Route::get('/jobs/{id}/details', [JobAppController::class, 'details'])->name('jobs.details');

// Edit job application
Route::get('/jobs/{id}/edit', [JobAppController::class, 'edit_details'])->name('jobs.edit');
Route::patch('/jobs/{id}/update', [JobAppController::class, 'update'])->name('jobs.update');

// Delete job application
Route::delete('/jobs/{id}/delete', [JobAppController::class, 'delete'])->name('jobs.delete');


// Route::post('/personalization/set-theme', [ChangeThemeController::class, 'setTheme']);



require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/personalization.php';