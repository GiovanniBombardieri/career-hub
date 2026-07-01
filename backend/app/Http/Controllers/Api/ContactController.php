<?php

namespace App\Http\Controllers\Api;

use App\Models\Company;
use App\Http\Controllers\Controller;
use App\Http\Responses\ApiResponse;
use App\Http\Resources\ContactResource;

class ContactController extends Controller
{
    public function index(Company $company)
    {
        return ApiResponse::success(
            ContactResource::collection(
                $company->contacts()
                    ->with('contactRole')
                    ->latest()
                    ->get()
            ),
            'Contacts retrieved successfully'
        );
    }
}
