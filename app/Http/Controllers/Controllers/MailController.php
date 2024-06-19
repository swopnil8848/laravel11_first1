<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\BulkEmail;

class MailController extends Controller
{
    public function sendBulkEmail(Request $request)
    {
        $mailData = [
            'subject' => $request->subject,
            'body' => $request->body,
            'recipient' => $request->email,
        ];

        Mail::to($request->email)->send(new BulkEmail($mailData));

        return 'Email sent successfully!';
    }
}
