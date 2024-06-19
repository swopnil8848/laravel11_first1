<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkflowTask extends Model
{
    use HasFactory;

    protected $table = 'workflow_tasks';

    protected $fillable = [
        'workflow_id',
        'name',
        'description',
        'email_content',
        'days_after_start',
        'custom_time',
    ];

    public function workflow()
    {
        return $this->belongsTo(Workflow::class);
    }
}
