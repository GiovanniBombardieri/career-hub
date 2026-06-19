<?php

namespace App\Http\Requests;

use App\Enums\CompanyStatus;
use App\Enums\RemotePolicy;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class UpdateCompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required, string, max:255'],
            'website' => ['nullable, url'],
            'linkedin_url' => ['nullable, url'],
            'country' => ['required, string, max:100'],
            'region' => ['nullable, string, max:100'],
            'city' => ['nullable, string, max:100'],
            'remote_policy' => ['required', new Enum(RemotePolicy::class)],
            'company_size' => ['required', 'string', 'max:100'],
            'status' => ['required', new Enum(CompanyStatus::class)],
            'score' => ['nullable', 'numeric', 'between:0,100'],
            'why_interested' => ['nullable', 'string'],
        ];
    }
}
