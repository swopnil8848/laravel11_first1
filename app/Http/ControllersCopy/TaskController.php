<?php

namespace App\Http\Controllers;

use App\Models\LeadsData;
use App\Models\Task;
use App\Models\task_table;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {


        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        try {
            //code...
            task_table::create([
                'leads_id' => '10',
                'description' => $request->task_description
            ]);
        } catch (\Throwable $e) {
            return response()->$e;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        try {
        } catch (\exception $e) {
            return response()->view('error', ['error' => $e->getmessage()], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //

        try {


            //code...
            $task = task_table::where('leads_id', $id)->first();
            if ($task) {
                
                $task->description = $request->task_description;
               
               
                $task->save();
            } else {
                task_table::create([
                    'leads_id' => $id,
                    'name'=>$request->task_name,
                    'description' => $request->task_description,
                    'status'=>$request->status,
                    'priority'=>$request->priority,
                    'due_date'=>$request->due_date
                ]);
            }
            return back()->with('success', 'Task updated successfully');

        } catch (\Throwable $e) {
            echo $e;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
