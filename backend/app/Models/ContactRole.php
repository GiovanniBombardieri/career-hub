<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactRole extends Model
{
    public $timestamps = false;

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    protected $fillable = [
        'name',
        'description',
    ];
}
