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
        Schema::create('leads_data', function (Blueprint $table) {
            $table->id();
            $table->string('importance')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('organization_name')->nullable();
            $table->string('job_title')->nullable();
            $table->string('created')->nullable();
            $table->string('updated')->nullable();
            $table->string('last_contact')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('office_number')->nullable();
            $table->string('fax')->nullable();
            $table->string('home_number')->nullable();
            $table->string('direct_phone')->nullable();
            $table->string('home_email')->nullable();
            $table->string('work_email')->nullable();
            $table->string('customer_city')->nullable();
            $table->string('customer_state')->nullable();
            $table->string('customer_street')->nullable();
            $table->string('customer_country')->nullable();
            $table->string('customer_postal')->nullable();
            $table->string('organization_city')->nullable();
            $table->string('organization_state')->nullable();
            $table->string('organization_street')->nullable();
            $table->string('organization_country')->nullable();
            $table->string('organization_postal')->nullable();
            $table->string('facebook')->nullable();
            $table->string('website')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->string('skype')->nullable();
            $table->string('youtube')->nullable();
            $table->string('shipping_city')->nullable();
            $table->string('shipping_state')->nullable();
            $table->string('shipping_street')->nullable();
            $table->string('shipping_country')->nullable();
            $table->string('shipping_postal')->nullable();
            $table->string('mailing_city')->nullable();
            $table->string('mailing_state')->nullable();
            $table->string('mailing_street')->nullable();
            $table->string('mailing_country')->nullable();
            $table->string('mailing_postal')->nullable();
            $table->string('billing_city')->nullable();
            $table->string('billing_state')->nullable();
            $table->string('billing_street')->nullable();
            $table->string('billing_country')->nullable();
            $table->string('billing_postal')->nullable();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads_data');
    }
};
