<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class stagaire extends Model
{
    use HasFactory;
  protected  $table="stagaires";
  protected  $fillables=[
    'id',
    'nom',
    'prenom'
  ];
}
