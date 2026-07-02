<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\CompanyNoteController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ContactRoleController;

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')
    ->group(function () {
        Route::get('/me', [AuthController::class, 'me']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::apiResource('companies', CompanyController::class);

        Route::get('/companies/{company}/notes', [CompanyNoteController::class, 'index']);
        Route::post('/companies/{company}/notes', [CompanyNoteController::class, 'store']);

        Route::get('/companies/{company}/contacts', [ContactController::class, 'index']);
        Route::post('/companies/{company}/contacts', [ContactController::class, 'store']);

        Route::get('/contact-roles', [ContactRoleController::class, 'index']);
    });
