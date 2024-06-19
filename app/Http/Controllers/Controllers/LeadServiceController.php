<?php

namespace App\Http\Controllers;

use App\Models\LeadsData;
use App\Models\Service;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;
use App\Mail\BulkEmail;

use App\Models\EmailLog;
use App\Models\EmailSubscription;


class LeadServiceController extends Controller
{
    public function manageService(Request $request, $leadId)
    {
        try {
            $lead = LeadsData::findOrFail($leadId);
            $serviceIds = $request->input('service_id');

            if ($serviceIds === null || empty($serviceIds)) {
                // Detach all services related to the lead
                $lead->services()->detach();
            } else {
    
            foreach ($lead->services as $service) {
                // Detach services not present in the request
                if (!in_array($service->id, $serviceIds)) {
                    $lead->services()->detach($service->id);
                }
            }
    
            foreach ($serviceIds as $serviceId) {
                // Attach services present in the request
                if (!$lead->services->contains($serviceId)) {
                    $lead->services()->attach($serviceId);

                    // Get the service with the onboard_email column
                    $service = Service::findOrFail($serviceId);

                    // add firstname to the email if it exists
                    $onboard_email = $service->onboard_email;

                    // check if the email is subscribed to onboarding emails
                    if(EmailSubscription::where('email', $lead->work_email)->where('onboarding_emails', 1)->exists()) {
                        // proceed to send the email
                    } // if email does not exist in the table, add it
                    elseif(EmailSubscription::where('email', $lead->work_email)->doesntExist()) {
                        $emailSubscription = new EmailSubscription();
                        $emailSubscription->email = $lead->work_email;
                        $emailSubscription->is_subscribed = 1;
                        $emailSubscription->onboarding_emails = 1;
                        $emailSubscription->save();
                    }
                    else {
                        // skip sending the email
                        continue;
                    }

                    $onboard_email = str_replace('{firstname}', $lead->first_name, $onboard_email);

                    $subject = 'Onboarding Email: ' . $service->service_name;

                    // Send email to the lead
                    $mailData = [
                        'subject' => $subject,
                        'body' => $onboard_email,
                        'recipient' => $lead->work_email,
                    ];

                    // Save email details to email__logs table
                    $auditLog = new EmailLog();
                    $auditLog->to = $lead->work_email;
                    $auditLog->from = env('MAIL_FROM_ADDRESS');
                    $auditLog->subject = $mailData['subject'];
                    $auditLog->body = $mailData['body'];
                    $auditLog->leads_id = $lead->id;
                    $auditLog->sent_by = auth()->id();
                    $auditLog->save();
            
                    Mail::to($lead->work_email)->send(new BulkEmail($mailData));
                }
            }
        }
    
            return back()->with('success', 'Services updated successfully');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }
}
