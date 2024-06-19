<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workflow;

class WorkflowsController extends Controller
{
    public function index()
    {
        // see own workflows only
        $user = auth()->user();
        $workflows = Workflow::where('user_id', $user->id)->get();
        return view('workflows.index', compact('workflows'));
    }

    public function create()
    {
        return view('workflows.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        Workflow::create([
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => auth()->id(),
        ]);
        
        return redirect()->route('workflows.index')
            ->with('success', 'Workflow created successfully.');
    }

    public function show(Workflow $workflow)
    {
        // only allow show from the owner
        if ($workflow->user_id != auth()->id()) {
            return redirect()->route('workflows.index')
                ->with('error', 'You are not allowed to view this workflow.');
        }
        return view('workflows.show', compact('workflow'));
    }

    public function edit(Workflow $workflow)
    {
        // only allow edit from the owner
        if ($workflow->user_id != auth()->id()) {
            return redirect()->route('workflows.index')
                ->with('error', 'You are not allowed to edit this workflow.');
        }
        return view('workflows.edit', compact('workflow'));
    }

    public function update(Request $request, Workflow $workflow)
    {
        // only allow update from the owner
        if ($workflow->user_id != auth()->id()) {
            return redirect()->route('workflows.index')
                ->with('error', 'You are not allowed to update this workflow.');
        }
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $workflow->update($request->all());

        return redirect()->route('workflows.index')
            ->with('success', 'Workflow updated successfully');
    }

    public function destroy(Workflow $workflow)
    {
        // only allow delete from the owner
        if ($workflow->user_id != auth()->id()) {
            return redirect()->route('workflows.index')
                ->with('error', 'You are not allowed to delete this workflow.');
        }
        $workflow->delete();

        return redirect()->route('workflows.index')
            ->with('success', 'Workflow deleted successfully');
    }
    
}
