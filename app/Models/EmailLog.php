<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'from',
        'to',
        'cc',
        'bcc',
        'subject',
        'body',
        'leads_id',
        'sent_by',
    ];

    public function sender()
    {
        return $this->belongsTo(User::class, 'sent_by');
    }
}
