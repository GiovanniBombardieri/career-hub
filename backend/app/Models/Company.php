<?php

namespace App\Models;

use App\Enums\CompanyStatus;
use App\Enums\RemotePolicy;
use Illuminate\Database\Eloquent\Model;
use Laravel\Prompts\Note;

class Company extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    public function positions()
    {
        return $this->hasMany(Position::class);
    }

    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

    public function notes()
    {
        return $this->hasMany(CompanyNote::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function applications()
    {
        return $this->hasManyThrough(Application::class, Position::class);
    }

    protected function casts(): array
    {
        return [
            'status' => CompanyStatus::class,
            'remote_policy' => RemotePolicy::class,
            'score' => 'decimal:2',
        ];
    }

    protected $fillable = [
        'user_id',
        'name',
        'website',
        'linkedin_url',
        'country',
        'region',
        'city',
        'remote_policy',
        'company_size',
        'status',
        'score',
        'why_interested',
    ];
}
