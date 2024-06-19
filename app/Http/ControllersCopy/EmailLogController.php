<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EmailLog;
use Illuminate\Support\Facades\DB;

use App\Models\LeadsData;

use Webklex\IMAP\Facades\Client;


class EmailLogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $logs = EmailLog::with('sender')->orderBy('created_at', 'desc')->get();
        return view('email-logs.index')->with('logs', $logs);
    }

    public function fetchEmails() {
        $client = Client::account('default');
        $client->connect();

        $folder = $client->getFolder('INBOX');
        $messages = $folder->query()->all()->get();

        $emails = [];
        foreach ($messages as $message) {
            $decodedSubject = mb_decode_mimeheader($message->getSubject());
            $emails[] = [
                'subject' => $decodedSubject,
                'body' => $message->getHTMLBody(true)
            ];
        }

        // dd($emails);

        // Pass emails to the view
        return view('email-logs.fetch', ['logs' => $emails]);
    }

    // store
    public function store(Request $request, LeadsData $lead)
    {
        $request->validate([
            'medium' => 'required',
            'subject' => 'required',
            'body' => 'required',
        ]);

        // Create the concatenated subject
        $subject = '[' . $request->medium . '] ' . $request->subject;

        // Create and save the new email log
        $log = new EmailLog();
        $log->leads_id = $lead->id;
        $log->from = auth()->user()->email;
        $log->sent_by = auth()->user()->id;
        $log->to = $lead->work_email;
        $log->subject = $subject;
        $log->body = $request->body;
        $log->save();

        return back()->with('success', 'Record added successfully');
    }

    public function search(Request $request, $email)
    {
        if($request->has('search'))
        {
            $search = $request->search;
            $logs = EmailLog::where('to', $search)
                            ->orWhere('to', 'like', "%$search%")
                            ->orWhere('subject', $search)
                            ->orWhere('subject', 'like', "%$search%")
                            ->orWhere('body', 'like', "%$search%")
                            ->orderBy('created_at', 'desc')
                            ->get();
        }
        else
        {
            $logs = EmailLog::where('to', 'like', "%$email%")
                            ->orderBy('created_at', 'desc')
                            ->get();
        }
        // $search = $request->search;
    
        // // Search in every column for exact matches and partial matches
        // $logs = EmailLog::where('to', $search)
        //                 ->orWhere('to', 'like', "%$search%")
        //                 ->orWhere('subject', $search)
        //                 ->orWhere('subject', 'like', "%$search%")
        //                 ->orWhere('body', 'like', "%$search%")
        //                 ->orderBy('created_at', 'desc')
        //                 ->get();
    
        return view('email-logs.index')->with('logs', $logs);
    }

    public function searchById(Request $request, $id)
    {
        $logs = EmailLog::where('leads_id', $id)->get();
    
        return view('email-logs.index')->with('logs', $logs);
    }
    
    
}
