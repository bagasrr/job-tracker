<?php

use App\Http\Controllers\Profile\ChangeThemeController;
use Illuminate\Support\Facades\Route;

Route::post('/personalization/set-theme', [ChangeThemeController::class, 'setTheme']);