<?php

namespace App\Http\Controllers;

use App\Models\Deals;
use Illuminate\Http\Request;

class DealsController extends Controller
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
           // dd($request->deals_status." id : \n".$id);
          
            Deals::create([
                'leads_id'=>$id,
                'products'=>$request->product,
                'original_price' => $request->original_price,
                'discounted_price' => $request->discounted_price,
                'deal_quantity' => $request->deals_quantity,
                'deal_status' => $request->deals_status,
                
                

            ]);
            return back()->with('success', 'Notes updated successfully');
        }
        catch (\Throwable $th) {
            echo "error in creatng group database: " . $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $lead = Deals::findOrFail($id);
        $lead->delete();

        return back()->with('success', 'Deals deleted successfully');
        //
    }
}
