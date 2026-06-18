<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CompanyController;

Route::get('/', function () {
    return view('welcome');
});

Route::apiResource('companies', CompanyController::class);
