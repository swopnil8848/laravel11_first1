<?php

namespace App\Http\Controllers;

use App\Models\LeadsData;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function getData(Request $request)
    {
        $search = $request['search'] ?? "";
        if ($search != "") {
        } else {
            $query = $request->input('query');

            $results = LeadsData::where('first_name', 'like', "%$query%")
            ->orWhere('last_name', 'like', "%$query%")
            ->orWhere('organization_name', 'like', "%$query%")
            -> orWhere('home_email', 'like', "%$query%")
            -> orWhere('work_email', 'like', "%$query%")
            -> orWhere('phone_number', 'like', "%$query%")
            -> orWhere('website', 'like', "%$query%")
            -> orWhere('facebook', 'like', "%$query%")
            ->limit(10)->get();

            return response()->json($results);
        }
    }
    //
}
