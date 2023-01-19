<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSelection extends Model
{
    use HasFactory;

    protected $table = 'user_selections';
    protected $fillables = [
        'name'
    ];

    public $timestampe = false;
}
