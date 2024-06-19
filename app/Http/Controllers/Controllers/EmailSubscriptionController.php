<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EmailSubscription;

class EmailSubscriptionController extends Controller
{

    public function showSubscriptionPreferences($token)
    {
        $emailSubscription = EmailSubscription::where('subscription_change_token', $token)->first();
        if (!$emailSubscription) {
            $error = 'Invalid token';
            return view('email_subscription.preferences', compact('emailSubscription', 'error'));
        }
        return view('email_subscription.preferences', compact('emailSubscription'));
    }

    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'is_subscribed' => 'required|boolean',
            'newsletter' => 'required|boolean',
            'onboarding_emails' => 'required|boolean',
            'new_features' => 'required|boolean',
            'promotions' => 'required|boolean',
            'subscription_change_token' => 'required|string',
        ]);

        $emailSubscription = new EmailSubscription();
        $emailSubscription->email = $request->email;
        $emailSubscription->is_subscribed = $request->is_subscribed;
        $emailSubscription->newsletter = $request->newsletter;
        $emailSubscription->onboarding_emails = $request->onboarding_emails;
        $emailSubscription->new_features = $request->new_features;
        $emailSubscription->promotions = $request->promotions;
        $emailSubscription->subscription_change_token = $request->subscription_change_token;
        $emailSubscription->save();

        return redirect()->back()->with('message', 'Email subscription updated successfully!');
    }

    public function unsubscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $emailSubscription = EmailSubscription::where('email', $request->email)->first();
        $emailSubscription->is_subscribed = false;
        $emailSubscription->save();

        return redirect()->back()->with('message', 'Email subscription updated successfully!');
    }

    public function updateSubscriptionPreferences(Request $request)
    {
        // $request->validate([
        //     'token' => 'required|string',
        //     'newsletter' => 'required|boolean',
        //     'onboarding_emails' => 'required|boolean',
        //     'new_features' => 'required|boolean',
        //     'promotions' => 'required|boolean',
        // ]);

        // if boolean values are not passed in the request, they will be set to false
        $request->merge([
            'newsletter' => $request->newsletter ?? false,
            'onboarding_emails' => $request->onboarding_emails ?? false,
            'new_features' => $request->new_features ?? false,
            'promotions' => $request->promotions ?? false,
        ]);

        $request->validate([
            'token' => 'required|string',
            'newsletter' => 'required|boolean',
            'onboarding_emails' => 'required|boolean',
            'new_features' => 'required|boolean',
            'promotions' => 'required|boolean',
        ]);

        $emailSubscription = EmailSubscription::where('subscription_change_token', $request->token)->first();
        $emailSubscription->newsletter = $request->newsletter;
        $emailSubscription->onboarding_emails = $request->onboarding_emails;
        $emailSubscription->new_features = $request->new_features;
        $emailSubscription->promotions = $request->promotions;
        $emailSubscription->save();

        return redirect()->back()->with('message', 'Email subscription preferences updated successfully!');
    }
}
