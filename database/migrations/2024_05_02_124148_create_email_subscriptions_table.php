<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('email_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->boolean('is_subscribed')->default(true);
            // individual subscription preferences for newsletter, onboarding emails, new features, promotions etc.
            $table->boolean('newsletter')->default(true);
            $table->boolean('onboarding_emails')->default(true);
            $table->boolean('new_features')->default(true);
            $table->boolean('promotions')->default(true);
            $table->string('subscription_change_token')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('email_subscriptions');
    }
};
