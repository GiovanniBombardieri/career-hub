<?php

namespace App\Http\Resources;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Company
*/
class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'website' => $this->website,
            'linkedin_url' => $this->linkedin_url,
            'country' => $this->country,
            'region' => $this->region,
            'city' => $this->city,
            'remote_policy' => $this->remote_policy,
            'company_size' => $this->company_size,
            'status' => $this->status,
            'score' => $this->score,
            'why_interested' => $this->why_interested,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
