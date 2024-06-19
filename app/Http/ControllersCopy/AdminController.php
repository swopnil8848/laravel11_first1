<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Mail\BulkEmail;

use App\Models\User;

use Illuminate\Support\Facades\Artisan;

class AdminController extends Controller
{
    public function showUsers()
    {
        // Get all users
        $users = User::all();
        return view('admin.users.index', compact('users'));
    }

    public function createUser()
    {
        // only superadmin and admin can create user
        if (auth()->user()->role !== 'superadmin' && auth()->user()->role !== 'admin') {
            return redirect()->route('admin.users.index')->with('error', 'You are not authorized to create user!');
        }
        return view('admin.users.create');
    }

    public function storeUser(Request $request)
    {
        // only superadmin and admin can store user
        if (auth()->user()->role !== 'superadmin' && auth()->user()->role !== 'admin') {
            return redirect()->route('admin.users.index')->with('error', 'You are not authorized to store user!');
        }

        // Validate request
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'role' => 'required|in:admin,user',
        ]);

        // admin cannot create superadmin
        if ($request->role === 'superadmin') {
            return redirect()->route('admin.users.index')->with('error', 'Cannot create superadmin user!');
        }

        // generate random password
        $request->password = Str::random(8);

        // check if email already exists
        $user = User::where('email', $request->email)->first();
        if ($user) {
            return redirect()->route('admin.users.index')->with('error', 'User already exists with that email!');
        }

        $Newuser = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($Newuser));

        $subject = 'Welcome to '. $siteSettings->site_name .'!';
        $htmlbody = 'Dear <b>' . $request->name .'</b>,<br />Your account has been created successfully.<br />Your password is: ' . $request->password . '<br />You can login to your account <a href="'. route('login') .'">here</a><br />Thank you,<br />' . $siteSettings->site_name;

        // send welcome email using the BulkEmail mailable
        $mailData = [
            'subject' => $subject,
            'body' => 'Your account has been created successfully. Your password is: ' . $request->password,
            'recipient' => $request->email,
        ];

        Mail::to($request->email)->send(new BulkEmail($mailData));

        return redirect()->route('admin.users.index')->with('message', 'User created successfully!');
    }

    public function editUser($id)
    {
        // only superadmin and admin can edit user
        if (auth()->user()->role !== 'superadmin' && auth()->user()->role !== 'admin') {
            return redirect()->route('admin.users.index')->with('error', 'You are not authorized to edit user!');
        }
        
        // Get user by id
        $account = User::findOrFail($id);
        return view('admin.users.edit', compact('account'));
    }

    public function updateUser(Request $request, $id)
    {
        // only superadmin and admin can update user
        if (auth()->user()->role !== 'superadmin' && auth()->user()->role !== 'admin') {
            return redirect()->route('admin.users.index')->with('error', 'You are not authorized to update user!');
        }

        // admin cannot update superadmin
        $user = User::findOrFail($id);
        if ($user->role === 'superadmin') {
            return redirect()->route('admin.users.index')->with('error', 'Cannot update superadmin user!');
        }

        // Validate request
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'role' => 'required|in:admin,user',
        ]);

        // Update user
        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->role = $request->role;
        $user->save();

        return redirect()->route('admin.users.index')->with('message', 'User updated successfully!');
    }

    public function deleteUser($id)
    {
        // only superadmin and admin can delete user
        if (auth()->user()->role !== 'superadmin' && auth()->user()->role !== 'admin') {
            return redirect()->route('admin.users.index')->with('error', 'You are not authorized to delete user!');
        }
        // if the user is admin, cannot delete
        $user = User::findOrFail($id);
        if ($user->role === 'admin') {
            return redirect()->route('admin.users.index')->with('error', 'Cannot delete admin user!');
        }

        // cannot delete self
        if ($user->id === auth()->user()->id) {
            return redirect()->route('admin.users.index')->with('error', 'Cannot delete yourself!');
        }

        // Delete user
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('admin.users.index')->with('message', 'User deleted successfully!');
    }

    // migrate
    public function migrate()
    {
        // only superadmin can migrate
        if (auth()->user()->role !== 'superadmin') {
            return redirect()->route('admin.users.index')->with('error', 'You are not authorized to migrate!');
        }

        // Migrate
        Artisan::call('migrate');

        return redirect()->route('admin.users.index')->with('message', 'Migrated successfully!');
    }

    // migrate and seed
    public function migrateAndSeed()
    {
        // only superadmin can migrate and seed
        if (auth()->user()->role !== 'superadmin') {
            return redirect()->route('admin.users.index')->with('error', 'You are not authorized to migrate and seed!');
        }

        // Migrate and seed
        Artisan::call('migrate:fresh --seed');

        return redirect()->route('admin.users.index')->with('message', 'Migrated and seeded successfully!');
    }
}
