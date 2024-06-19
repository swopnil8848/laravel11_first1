<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\EmailTemplate;

use App\Models\LeadsData;
use App\Models\Service;

use App\Mail\BulkEmail;
use App\Models\EmailLog;

use Illuminate\Support\Facades\Auth;


class EmailWriterController extends Controller
{
    public function showEmailWriter()
    {
        return view('email-writer');
    }

    public function showEmailTemplates()
    {
        // $emailTemplates = EmailTemplate::all();
        // $services = Service::all();

        // // Retrieve the authenticated user's leads
        $leads = LeadsData::where('user_id', Auth::id())
                        ->select('id', 'work_email', 'first_name', 'last_name')
                        ->get();

        // return view('email_templates.index', compact('emailTemplates', 'services', 'leads'));

        $emailTemplates = EmailTemplate::all();
        $groupedTemplates = $emailTemplates->groupBy('category');

        // category in ascending order
        $groupedTemplates = $groupedTemplates->sortKeys();

        dd($groupedTemplates);

        return view('email_templates.index', compact('groupedTemplates', 'leads'));
    }

    public function sendEmail(Request $request)
    {
        $request->validate([
            'prompt' => 'required|string',
        ]);

        $response = Http::withHeaders([
            'Accept' => '*/*',
            'Content-Type' => 'application/json',
        ])->post('https://chat.fagoondigital.com/api/email/', [
            'prompt' => $request->input('prompt'),
        ]);

        $response = json_decode($response->body(), true);

        if (isset($response['response'])) {
            $message = $response['response'];
            return $message;
        } else {
            return "Response key not found in JSON.";
        }
    }

    public function saveEmail(Request $request)
    {
        try {
            $content = $request->input('content');

            $emailTemplate = new EmailTemplate();
            $emailTemplate->content = $content;
            $emailTemplate->save();

            return redirect()->route('email-templates')->with('success', 'Email saved successfully!');
        } catch (\Exception $e) {
            Log::error('Error saving email: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error saving email');
        }
    }

    public function updateEmailTemplate(Request $request)
    {
        $request->validate([
            'category' => 'required|string',
            'subject' => 'required|string',
            'body' => 'required|string',
        ]);

        // only allow editing of email templates that belong to the authenticated use
        $emailTemplate= EmailTemplate::find($request->id);
        // check owner

        // dd($emailTemplate->user_id, auth()->id());

        if ($emailTemplate->user_id !== auth()->id()) {
            return redirect()->back()->with('error', 'You are not authorized to edit this email template');
        }

        $emailTemplate->category = $request->category;
        $emailTemplate->subject = $request->subject;
        $emailTemplate->body = $request->body;
        $emailTemplate->save();

        return redirect()->route('email-templates')->with('success', 'Email template updated successfully!');
    }

    public function deleteEmailTemplate(EmailTemplate $emailTemplate)
    {
        try {
            $emailTemplate->delete();
            return redirect()->route('email-templates')->with('success', 'Email template deleted successfully!');
        } catch (\Exception $e) {
            Log::error('Error deleting email template: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error deleting email template');
        }
    }

    public function notifyViaEmail(Request $request)
    {
        try {
            $subject = $request->subject;
            $body = $request->body;

            Log::info('Subject: ' . $subject);
            Log::info('Body: ' . $body);

            $emails = LeadsData::select('home_email', 'work_email')->get()->toArray();

            foreach ($emails as $email) {
                $mailData = [
                    'subject' => $subject,
                    'body' => $body,
                    'recipient' => $email['work_email'],
                ];
                Mail::to($email['work_email'])->send(new BulkEmail($mailData));
            }

            return redirect()->back()->with('success', 'Emails sent successfully');
        } catch (\Exception $e) {
            Log::error('Error sending email notification: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error sending email notification');
        }
    }

    public function showEmailTestForm()
    {
        return view('email_templates.email-test');
    }

    public function createManualEmailTemplates()
    {
        return view('email_templates.create-manual-email-templates');
    }

    public function storeManualEmailTemplate(Request $request)
    {
        // validate the request
        $request->validate([
            'category' => 'required|string',
            'subject' => 'required|string',
            'body' => 'required|string',
        ]);


        try {
            // create a new email template
            $emailTemplate = new EmailTemplate();
            $emailTemplate->category = $request->category;
            $emailTemplate->subject = $request->subject;
            $emailTemplate->body = $request->body;
            $emailTemplate->user_id = auth()->id();

            $emailTemplate->save();

            return redirect()->route('email-templates')->with('success', 'Email saved successfully!');
        } catch (\Exception $e) {
            Log::error('Error saving email: ' . $e->getMessage());
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    public function sendManualEmail(Request $request)
    {
        // Retrieve the selected leads' IDs from the request
        $leadIds = $request->input('leads');

        // Retrieve the email template subject and body from the request
        $subject = $request->input('subject');
        $body = $request->input('body');

        // Fetch the work_email addresses of the selected leads from the database
        $leads = LeadsData::whereIn('id', $leadIds)->get(['id', 'work_email']);

        // Iterate through the leads and send emails
        foreach ($leads as $lead) {
            $mailData = [
                'subject' => $subject,
                'body' => $body,
                'recipient' => $lead->work_email,
            ];
            // Send email to each lead's work_email address
            Mail::to($lead->work_email)->send(new BulkEmail($mailData));

            // Save email details to email__logs table
            $auditLog = new EmailLog();
            $auditLog->to = $lead->work_email;
            $auditLog->from = env('MAIL_FROM_ADDRESS');
            $auditLog->subject = $mailData['subject'];
            $auditLog->body = $mailData['body'];
            $auditLog->leads_id = $lead->id;
            $auditLog->sent_by = auth()->id();
            $auditLog->save();
        }
        return redirect()->back()->with('success', 'Email sent successfully!');
    }

    // clone email template
    public function cloneEmailTemplate(Request $request)
    {
        $emailTemplate = EmailTemplate::find($request->id);
        $newEmailTemplate = $emailTemplate->replicate();
        $newEmailTemplate->subject = $emailTemplate->subject . ' (Clone)';
        $newEmailTemplate->user_id = auth()->id();
        $newEmailTemplate->save();

        return redirect()->route('email-templates')->with('success', 'Email template cloned successfully!');
    }
}
