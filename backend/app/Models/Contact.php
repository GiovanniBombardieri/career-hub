<?php

namespace App\Models;

use App\Enums\ContactRelationshipStatus;
use Couchbase\Role;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function role()
    {
        return $this->belongsTo(ContactRole::class, 'contact_role_id');
    }

    protected function casts(): array
    {
        return [
            'relationship_status' => ContactRelationshipStatus::class,
        ];
    }

    protected $fillable = [
        'company_id',
        'contact_role_id',
        'full_name',
        'email',
        'linkedin_url',
        'relationship_status',
        'notes',
    ];
}
