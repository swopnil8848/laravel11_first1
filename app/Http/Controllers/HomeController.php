<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\LeadsData;
use App\Models\Service;
use App\Models\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function root()
    {
        // Count records
        $leadsCount = LeadsData::count();
        $servicesCount = Service::count();
        $usersCount = User::count();
    
        // Count unique roles
        $rolesCount = User::distinct('role')->count();        
    
        // Fetch recent leads and services for display on the dashboard
        $recentLeads = LeadsData::orderBy('updated_at', 'desc')->take(5)->get();
        $recentServices = Service::orderBy('created_at', 'desc')->take(5)->get();
    
        // Pass data to the view using compact array
        // return view('DashboardGenX', compact('leadsCount', 'servicesCount', 'usersCount', 'rolesCount', 'recentLeads', 'recentServices'));
        return Inertia::render('DashboardGenX', [
            'leadsCount' => $leadsCount,
            'servicesCount' => $servicesCount,
            'usersCount' => $usersCount,
            'rolesCount' => $rolesCount,
            'recentLeads' => $recentLeads,
            'recentServices' => $recentServices,
        ]);

    }

    

    public function dashboard()
    {
        return Inertia::render('DashboardGenX');
    }

    public function index(Request $request)
    {
        if (view()->exists($request->path())) {
            return view($request->path());
        }
        return view('errors.404');
    }

    public function verify()
    {
        return view('auth-confirm-mail');
    }
}
