<?php

namespace App\Http\Controllers;

use App\Models\Notes as ModelsNotes;
use Illuminate\Http\Request;

class Notes extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
            ModelsNotes::create([
                'leads_id'=>$id,
                'user_id'=>auth()->user()->id,
                'name' => $request->note_name,
                'description' => $request->note_description,
                

            ]);
            return back()->with('success', 'Notes updated successfully');
        } catch (\Throwable $th) {
            echo "error in creatng group database: " . $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $lead = ModelsNotes::findOrFail($id);
        $lead->delete();

        return back()->with('success', 'Notes deleted successfully');
        //
    }
}
