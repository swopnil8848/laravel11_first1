<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeadsGroup extends Model
{

    protected $fillable=['leads_id','group_id','user_id'];

    use HasFactory;
}
