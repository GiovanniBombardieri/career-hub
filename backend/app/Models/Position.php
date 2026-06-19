<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    protected function casts(): array
    {
        return [
            'remote' => 'boolean',
            'published_at' => 'datetime',
        ];
    }

    protected $fillable = [
        'company_id',
        'title',
        'salary_min',
        'salary_max',
        'currency',
        'remote',
        'source',
        'url',
        'description',
        'published_at',
    ];
}
