<?php

namespace App\Http\Controllers;

use App\Models\Groups;
use App\Models\LeadsData;
use App\Models\LeadsGroup;
use App\Models\User;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
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
            return view('groups.index', compact('groupNameArray', 'groupDescArray', 'leadsUserArray','groupIdArray',));
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
        try {
            //code...
            Groups::create([
                'name' => $request->namedata,
                'description' => $request->textareadata
            ]);
        } catch (\Throwable $th) {
            echo "error in creatng group database: " . $th;
        }


        try {
            foreach ($request->pushedData as $key => $firstname) {
                $words = explode(" ", $firstname);
                $first_word = $words[0];
                $leads = LeadsData::where('first_name', $first_word)->first();
                $groups = Groups::where('name', $request->namedata)->first();


                if ($leads && $groups) {
                    $leadsId = $leads->id;
                    $groupId = $groups->id;

                    LeadsGroup::create([
                        'leads_id' => $leadsId,
                        'group_id' => $groupId,
                        'user_id'=>auth()->user()->id,

                    ]);
                } else {
                    echo "user not found";
                }
            }
        return redirect()->route('groups.index');
        } catch (\Throwable $th) {
            echo "error at second step " . $key . " =>=>" . $th;
        }



        /* Groups::create($request->);

        return redirect()->route('services.index')
            ->with('success', 'Service created successfully.');
        //
        */
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $leadsIds = LeadsGroup::where('group_id', $id)->pluck('leads_id');
            $leadsArray=[];

            foreach ($leadsIds as $i) {
                $first_name=LeadsData::findOrFail($i);
                $last_name=LeadsData::findOrFail($i);
                $org_name=LeadsData::findOrFail($i);
                $phone=LeadsData::findOrFail($i);
                array_push($leadsArray,[$first_name->first_name,$last_name->last_name,$org_name->organization_name,$phone->phone_number,$i]);

            }

            //dd($leadsArray);
            return view('groups.show', compact('leadsArray'));
        } catch (\exception $e) {
            return response()->view('error', ['error' => $e->getmessage()], 500);
        }
        //return view('groups.show', compact('group'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return response()->json("hello");
        //try {
            //$leadsIds = LeadsGroup::where('group_id', $id)->pluck('leads_id');
            //$leadsData = LeadsGroup::where('group_id',$id)->pluck('leads_id')->distinct();
            //$leadsArray=[];

            ////foreach ($leadsIds as $i) {
                ////$first_name=LeadsData::findOrFail($i);
                ////$last_name=LeadsData::findOrFail($i);
                ////$org_name=LeadsData::findOrFail($i);
                ////$phone=LeadsData::findOrFail($i);
                ////array_push($leadsArray,[$first_name->first_name,$last_name->last_name,$org_name->organization_name,$phone->phone_number,$i]);

            ////}

            //////dd($leadsArray);
            //return response()->json($leadsData);
        //} catch (\exception $e) {
            //return response()->view('error', ['error' => $e->getmessage()], 500);
        //}
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
        LeadsGroup::where('group_id', '=', $id)->delete();
        $group = Groups::findOrFail($id);
        $group->delete();

        return redirect()->route('groups.index')->with('message', 'Lead deleted successfully');
    }
}