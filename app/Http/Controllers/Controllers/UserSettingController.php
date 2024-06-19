<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserSettingController extends Controller
{
    //email signature
    public function settings()
    {
        $user = Auth::user();
        return view('settings.index', compact('user'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'password' => 'required|string|min:8|confirmed',
        ]);
        $user = Auth::user();

        $user->update([
            'password' => bcrypt($request->input('password')),
        ]);

        return redirect()->back()->with('success', 'Password updated successfully.');
    }

    public function updateEmailSignature(Request $request)
    {
        $request->validate([
            'email_signature' => 'required|string',
        ]);

        // if does not exist in the user_settings table, create it
        if (!Auth::user()->settings) {
            Auth::user()->settings()->create(['email_signature' => $request->input('email_signature')]);
            return redirect()->back()->with('success', 'Email signature updated successfully.');
        } else {
            $user = Auth::user();
            $user->settings()->update(['email_signature' => $request->input('email_signature')]);
            return redirect()->back()->with('success', 'Email signature updated successfully.');
        }
    }
    
}
