<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

class SiteSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Define default site settings
        $defaultSettings = [
            'site_logo' => '/assets/images/logo-dark.png',
            'site_favicon' => '/assets/images/favicon.ico',
            'site_name' => 'Default Site Name',
            'site_email' => 'info@example.com',
            'site_phone' => '+977-1234567890',
            'site_address' => 'Kathmandu, Nepal',
        ];

        // Get all site settings from the database
        $siteSettings = SiteSetting::all();

        // Check if any of the default site settings are missing in the database, and create them if necessary
        foreach ($defaultSettings as $key => $value) {
            if (!$siteSettings->contains('key', $key)) {
                SiteSetting::create(['key' => $key, 'value' => $value]);
            }
        }

        // Retrieve the updated site settings from the database
        $site_settings = SiteSetting::all();

        // return view('admin.site_settings.index', compact('site_settings'));
        return view('admin.site_settings.index', compact('site_settings'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'site_name' => 'required',
            'site_email' => 'required|email',
            'site_phone' => 'required',
            'site_address' => 'required',
        ]);
    
        // Upload site_logo and site_favicon
        if ($request->hasFile('site_logo')) {
            // get the existing site_logo including the extension and move it to the /assets/images directory
            $site_logo = $request->file('site_logo');
            // set the filename as logo-dark.png
            $filename = 'logo-dark.png';
            $site_logo_path = 'assets/images/' . $filename;
            $site_logo->move(public_path('assets/images'), $filename);
            // Update the site_logo in the database
            SiteSetting::where('key', 'site_logo')->update(['value' => $site_logo_path]);
        }

        if ($request->hasFile('site_favicon')) {
            // get the existing site_favicon including the extension and move it to the /assets/images directory
            $site_favicon = $request->file('site_favicon');
            $filename = 'favicon.ico';
            $site_favicon_path = 'assets/images/' . $filename;
            $site_favicon->move(public_path('assets/images'), $filename);
            // Update the site_favicon in the database
            SiteSetting::where('key', 'site_favicon')->update(['value' => $site_favicon_path]);
        }

        // Update site settings
        SiteSetting::where('key', 'site_name')->update(['value' => $request->site_name]);
        SiteSetting::where('key', 'site_email')->update(['value' => $request->site_email]);
        SiteSetting::where('key', 'site_phone')->update(['value' => $request->site_phone]);
        SiteSetting::where('key', 'site_address')->update(['value' => $request->site_address]);
    
        return redirect()->back()->with('success', 'Settings updated successfully!');
    }
    

}
