<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyNote extends Model
{
    protected $table = 'company_notes';

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    protected $fillable = [
        'company_id',
        'content',
    ];
}
