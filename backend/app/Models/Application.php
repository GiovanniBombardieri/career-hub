<?php

namespace App\Models;

use App\Enums\ApplicationStatus;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

    protected function casts(): array
    {
        return [
            'status' => ApplicationStatus::class,
            'applied_at' => 'datetime'
        ];
    }

    protected $fillable = [
        'position_id',
        'status',
        'expected_salary',
        'offer_salary',
        'applied_at',
        'rejection_reason',
        'notes',
    ];
}
