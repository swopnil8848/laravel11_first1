<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkflowLead extends Model
{
    use HasFactory;

    protected $fillable = [
        'workflow_id',
        'lead_id',
    ];

    public function workflow()
    {
        return $this->belongsTo(Workflow::class);
    }

    public function lead()
    {
        return $this->belongsTo(LeadsData::class);
    }
}
