<?php

namespace App\Http\Controllers\Api;

use App\Models\Company;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompanyNoteController extends Controller
{
    public function index(Company $company)
    {
        return $company->notes()
            ->latest()
            ->get();
    }

    public function store(Request $request, Company $company)
    {
        $validated = $request->validate([
            'content' => ['required', 'string'],
        ]);

        $note = $company->notes()->create($validated);

        return response()->json($note, 201);
    }
}
