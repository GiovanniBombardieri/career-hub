<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Responses\ApiResponse;
use App\Models\ContactRole;

class ContactRoleController extends Controller
{
    public function index()
    {
        return ApiResponse::success(
            ContactRole::orderBy('name')->get(),
            'Contact roles retrieved successfully'
        );
    }
}
