<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class task_table extends Model
{
    protected $fillable=['leads_id','name','description','status','priority','due_date'];
    use HasFactory;

}
