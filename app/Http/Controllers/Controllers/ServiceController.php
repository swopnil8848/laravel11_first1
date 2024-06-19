<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::all();
        return view('services.index', compact('services'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return view('services.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'service_name' => 'required',
            'service_description' => 'required',
            'onboard_email' => 'required',
        ]);

        Service::create($request->all());

        return redirect()->route('services.index')
            ->with('success', 'Service created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show the service
        $service = Service::find($id);
        return view('services.show', compact('service'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // edit the service
        $service = Service::find($id);
        return view('services.edit', compact('service'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update the service
        $service = Service::find($id);
        // $service->update($request->all());
        $service->service_name = $request->input('service_name');
        $service->service_description = $request->input('service_description');
        $service->onboard_email = $request->input('onboard_email');
        $service->save();
        
        return redirect()->route('services.index')
            ->with('success', 'Service updated successfully');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete the service
        $delete = Service::find($id);
        $delete->delete();
        return redirect()->route('services.index')
            ->with('success', 'Service deleted successfully.');
    }
}
