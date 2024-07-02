<?php

namespace App\Http\Controllers;

use App\Models\Deals;
use App\Models\LeadsData;
use App\Models\Service;
use Illuminate\Http\Request;

use App\Models\EmailLog;
use App\Models\Notes;
use App\Models\task_table;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
{
    try {
        // Get the authenticated user
        $user = Auth::user();

            $data = LeadsData::with(['services', 'user'])->paginate(10);
        // Fetch all services
        $services = Service::all();

        // Return the view with the fetched data
         return Inertia::render('Contact', [
            'data' => $data,
            'services' => $services,
        ]);
    } catch (\Exception $e) {
        // Return the view with the error message
        echo $e;
    }
}


    public function create()
    {
        return view('leads.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            // Add validation rules for your request fields here
        ]);
        // include timestamps in the request
        $request->request->add(['created_at' => now(), 'updated_at' => now()]);
        LeadsData::create($request->all());

        return redirect()->route('leads.index')->with('message', 'Lead created successfully');
    }

    public function show($id)
    {
        // only allow viewing of leads that belong to the authenticated user but if the user is admin or superadmin allow it
        $lead = LeadsData::findOrFail($id);
        $task=task_table::where('leads_id',$id)->get();
        $logs = EmailLog::where('leads_id', $id)->get();
        $notes=Notes::where('leads_id',$id)->get();
        $deals =Deals::where('leads_id',$id)->get();

         return Inertia::render('ContactDetail', [
            'lead' => $lead,
            'logs' => $logs,
            'task'=>$task,
            'notes'=>$notes,
            'deals'=>$deals
        ]);
    }

    public function edit($id)
    {
        $task=task_table::where('leads_id',$id)->get();
        if(auth()->user()->role=="admin" || auth()->user()->role=="superadmin"){
            $lead = LeadsData::findOrFail($id);
            return view('leads.edit', compact('lead'));
        }
        // only allow editing of leads that belong to the authenticated user
        $lead = Auth::user()->leads()->findOrFail($id);
        return view('leads.edit', compact('lead','task'));
    }

    public function update(Request $request, $id)
    {
        if(auth()->user()->role=="admin" || auth()->user()->role=="superadmin"){
            $request->validate([
                // Add validation rules for your request fields here
            ]);
            $lead = LeadsData::findOrFail($id);
            // include timestamps in the request
            $request->request->add(['updated_at' => now()]);
            $lead->update($request->all());
            return back()->with('success', 'Lead updated successfully');
        }
        // only allow editing of leads that belong to the authenticated user
        $lead = Auth::user()->leads()->findOrFail($id);
        // include timestamps in the request
        $request->request->add(['updated_at' => now()]);
        $lead->update($request->all());

        return back()->with('success', 'Lead updated successfully');
    }

    public function destroy($id)
    {
        if(auth()->user()->role=="admin" || auth()->user()->role=="superadmin"){
            $lead = LeadsData::findOrFail($id);
            $lead->delete();
            return redirect()->route('leads.index')->with('message', 'Lead deleted successfully');
        }
        // only allow deletion of leads that belong to the authenticated user
        $lead = Auth::user()->leads()->findOrFail($id);
        $lead->delete();

        return redirect()->route('leads.index')->with('message', 'Lead deleted successfully');
    }
}

