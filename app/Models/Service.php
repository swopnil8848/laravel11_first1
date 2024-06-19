<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    // protected $table = 'service';

    // Define the relationship with LeadsData
    public function leads()
    {
        return $this->belongsToMany(LeadsData::class, 'lead_service', 'service_id', 'lead_id');
    }

    protected $fillable = [
        'service_name',
        'service_description',
        'onboard_email'
    ];
}
