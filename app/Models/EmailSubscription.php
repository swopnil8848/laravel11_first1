<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailSubscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'is_subscribed',
        'newsletter',
        'onboarding_emails',
        'new_features',
        'promotions',
        'subscription_change_token',
    ];

    
}
