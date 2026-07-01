<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\StoreContactRequest;
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

    public function store(
        StoreContactRequest $request,
        Company $company
    )
    {
        $contact = $company->contacts()->create(
            $request->validated()
        );

        $contact->load('contactRole');

        return ApiResponse::success(
            new ContactResource($contact),
            'Contact created successfully'
        );
    }
}
