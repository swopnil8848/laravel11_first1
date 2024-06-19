<?php

namespace App\Http\Controllers;

use App\Models\LeadsData;
use App\Models\LeadsGroup;

use App\Models\Groups;

use Illuminate\Http\Request;

class TaskAssignController extends Controller

{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $groupNameArray = [];
        $groupDescArray = [];
        $groupIdArray=[];
        $leadsUserArray = [];
        try {
            if(auth()->user()->role=="admin"|| auth()->user()->role=="superadmin"){
                $data = LeadsGroup::distinct()->pluck('group_id');
                
            }else{
            $data = LeadsGroup::where('user_id',auth()->user()->id)->distinct()->pluck('group_id');
            }


            foreach ($data as $groupid) {
                try {
                    $templeadsdata = [];
                    $groupdata = groups::find($groupid);
                    $leads = LeadsGroup::where('group_id', $groupid)->pluck('leads_id');
                    foreach ($leads as $leadsid) {
                        $leads = LeadsData::find($leadsid);
                        array_push($templeadsdata, $leads->first_name . " " . $leads->last_name);
                    }
                    array_push($groupNameArray, $groupdata->name);
                    array_push($groupIdArray, $groupdata->id);
                    array_push($groupDescArray, $groupdata->description);
                    array_push($leadsUserArray, $templeadsdata);
                } catch (\throwable $th) {
                    echo $th;
                }
            }

            //return view('groups.index', compact('groupnamearray','groupdescarray'));
            return view('task.index', compact('groupNameArray', 'groupDescArray', 'leadsUserArray','groupIdArray',));
        } catch (\exception $e) {
            //return response()->view('error', ['error' => $e->getmessage()], 500);
            echo $e;
        }
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
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
