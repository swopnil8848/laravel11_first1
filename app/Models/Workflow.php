<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workflow extends Model
{
    use HasFactory;

    // define table
    protected $table = 'workflow';

    // define fillable columns
    protected $fillable = [
        'name',
        'description',
        'user_id',
    ];

    // define relationship
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // define relationship
    public function workflowTasks()
    {
        return $this->hasMany(WorkflowTask::class);
    }

    // define relationship
    public function leads()
    {
        return $this->belongsToMany(LeadsData::class, 'workflow_leads', 'workflow_id', 'lead_id');
    }
}
