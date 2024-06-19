<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    public const ROLE_SUPERADMIN = 'superadmin';
    public const ROLE_ADMIN = 'admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // isSuperAdmin
    public function isSuperAdmin()
    {
        return $this->role === self::ROLE_SUPERADMIN;
    }

    // isAdmin
    public function isAdmin()
    {
        return $this->role === self::ROLE_ADMIN;
    }

    public function workflows()
    {
        return $this->hasMany(Workflow::class);
    }

    public function settings()
    {
        return $this->hasOne(UserSetting::class);
    }

    public function leads()
    {
        return $this->hasMany(LeadsData::class, 'user_id');
    }

    public function emailTemplates()
    {
        return $this->hasMany(EmailTemplate::class, 'user_id');
    }
}
