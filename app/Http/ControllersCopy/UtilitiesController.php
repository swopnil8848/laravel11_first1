<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\BulkEmail;
use App\Models\EmailLog;
use App\Models\LeadsData;


class UtilitiesController extends Controller
{
    //show sendEmail
    public function showSendEmail($id)
    {
        // get work_email from leads_data table
        $leads = LeadsData::findOrFail($id);
        $email = $leads->work_email;
        return view('utilities.send-email', compact('email'));
    }


    public function sendEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'subject' => 'required',
            'body' => 'required',
        ]);
    
        $email = $request->email;
    
        $mailData = [
            'subject' => $request->subject,
            'body' => $request->body,
            'recipient' => $email,
        ];
    
        Mail::to($email)->send(new BulkEmail($mailData));

        // Save email details to email__logs table
        $auditLog = new EmailLog();
        $auditLog->from = $request->user()->email; // Assuming you want to store the sender's email
        $auditLog->to = $request->email;
        $auditLog->cc = $request->cc;
        $auditLog->bcc = $request->bcc;
        $auditLog->subject = $mailData['subject'];
        $auditLog->body = $mailData['body'];
        $auditLog->leads_id = $request->leads_id;
        $auditLog->sent_by = $request->user()->id;
        $auditLog->save();

        return redirect()->back()->with('message', 'Email sent successfully!');
    }
}
