<?php

namespace App\Http\Requests;

use App\Enums\ContactRelationshipStatus;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class StoreContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => ['required', 'string', 'max:255'],
            'email' => ['nullable', 'email'],
            'linkedin_url' => ['nullable', 'url'],
            'contact_role_id' => ['required', 'exists:contact_roles,id'],
            'relationship_status' => ['required', new Enum(ContactRelationshipStatus::class)],
            'notes' => ['nullable', 'string'],
        ];
    }
}
