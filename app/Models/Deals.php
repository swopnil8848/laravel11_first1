<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deals extends Model
{
    use HasFactory;
    protected $fillable = [
        'leads_id',
        'products',
        'original_price',
        'discounted_price',
        'deal_status',
        'deal_quantity',

    ];
}
