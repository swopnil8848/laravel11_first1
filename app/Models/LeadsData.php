<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeadsData extends Model
{
    public $timestamps = false;
    use HasFactory;

    // protected $table = 'leads_data';

    // Define the relationship with Service
    public function services()
    {
        return $this->belongsToMany(Service::class, 'lead_service', 'lead_id', 'service_id');
    }

    // Define the relationship with Workflow
    public function workflows()
    {
        return $this->belongsToMany(Workflow::class, 'workflow_leads', 'lead_id', 'workflow_id');
    }

    // Define the relationship with User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }


    protected $fillable = [
        'importance',
        'first_name',
        'last_name',
        'organization_name',
        'job_title',
        'created',
        'updated',
        'last_contact',
        'phone_number',
        'office_number',
        'fax',
        'home_number',
        'direct_phone',
        'home_email',
        'work_email',
        'customer_city',
        'customer_state',
        'customer_street',
        'customer_country',
        'customer_postal',
        'organization_city',
        'organization_state',
        'organization_street',
        'organization_country',
        'organization_postal',
        'facebook',
        'website',
        'linkedin',
        'twitter',
        'instagram',
        'skype',
        'youtube',
        'shipping_city',
        'shipping_state',
        'shipping_street',
        'shipping_country',
        'shipping_postal',
        'mailing_city',
        'mailing_state',
        'mailing_street',
        'mailing_country',
        'mailing_postal',
        'billing_city',
        'billing_state',
        'billing_street',
        'billing_country',
        'billing_postal',
        'user_id',
        'created_at',
        'updated_at',
    ];
}
