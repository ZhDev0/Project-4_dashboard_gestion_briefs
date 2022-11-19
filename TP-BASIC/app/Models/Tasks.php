<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    protected $table = "task";
    public $timestamps= false;
    protected $fillable = [

        'Task',

    ];
}
