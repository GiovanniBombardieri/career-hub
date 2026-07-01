<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,

            'full_name' => $this->full_name,
            'email' => $this->email,
            'linkedin_url' => $this->linkedin_url,

            'relationship_status' => $this->relationship_status,
            'notes' => $this->notes,

            'role' => [
                'id' => $this->contactRole->id,
                'name' => $this->contactRole->name,
            ],

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
