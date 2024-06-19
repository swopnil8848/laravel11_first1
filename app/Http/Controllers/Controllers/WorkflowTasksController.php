<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workflow;
use App\Models\WorkflowTask;

class WorkflowTasksController extends Controller
{
    public function index($workflow_id)
    {
        $workflow = Workflow::findOrFail($workflow_id);
        $workflow_tasks = WorkflowTask::where('workflow_id', $workflow_id)->get();
        return view('workflows.tasks.index', compact('workflow', 'workflow_tasks'));
    }

    public function create($workflow_id)
    {
        $workflow = Workflow::findOrFail($workflow_id);
        return view('workflows.tasks.create', compact('workflow'));
    }

    public function store(Request $request, $workflow_id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        WorkflowTask::create([
            'name' => $request->name,
            'description' => $request->description,
            'workflow_id' => $workflow_id,
            'email_content' => $request->email_content,
            'days_after_start' => $request->days_after_start,
            'custom_time' => $request->custom_time,
        ]);

        return redirect()->route('workflows.tasks.index', $workflow_id)
            ->with('success', 'Workflow task created successfully.');
    }

    public function show($workflow_id, $task_id)
    {
        $workflow_task = WorkflowTask::findOrFail($task_id);

        // Check if the workflow task belongs to the given workflow
        if ($workflow_task->workflow_id != $workflow_id) {
            return redirect()->route('workflows.tasks.index', $workflow_id)
                ->with('error', 'You are not allowed to view this workflow task.');
        }

        return view('workflows.tasks.show', compact('workflow_task'));
    }

    public function edit($workflow_id, $task_id)
    {
        $workflow_task = WorkflowTask::findOrFail($task_id);
    
        // Check if the workflow task belongs to the given workflow
        if ($workflow_task->workflow_id != $workflow_id) {
            return redirect()->route('workflows.tasks.index', $workflow_id)
                ->with('error', 'You are not allowed to edit this workflow task.');
        }
    
        // Retrieve the workflow associated with the task
        $workflow = Workflow::findOrFail($workflow_id);
    
        return view('workflows.tasks.edit', compact('workflow', 'workflow_task'));
    }
    

    public function update(Request $request, $workflow_id, $task_id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $workflow_task = WorkflowTask::findOrFail($task_id);

        // Check if the workflow task belongs to the given workflow
        if ($workflow_task->workflow_id != $workflow_id) {
            return redirect()->route('workflows.tasks.index', $workflow_id)
                ->with('error', 'You are not allowed to update this workflow task.');
        }

        $workflow_task->update([
            'name' => $request->name,
            'description' => $request->description,
            'email_content' => $request->email_content,
            'days_after_start' => $request->days_after_start,
            'custom_time' => $request->custom_time,
        ]);

        return redirect()->route('workflows.tasks.index', $workflow_id)
            ->with('success', 'Workflow task updated successfully.');
    }

    public function destroy($workflow_id, $task_id)
    {
        $workflow_task = WorkflowTask::findOrFail($task_id);

        // Check if the workflow task belongs to the given workflow
        if ($workflow_task->workflow_id != $workflow_id) {
            return redirect()->route('workflows.tasks.index', $workflow_id)
                ->with('error', 'You are not allowed to delete this workflow task.');
        }

        $workflow_task->delete();

        return redirect()->route('workflows.tasks.index', $workflow_id)
            ->with('success', 'Workflow task deleted successfully.');
    }
}
