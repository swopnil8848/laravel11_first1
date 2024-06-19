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
        Schema::create('task_tables', function (Blueprint $table) {
            $table->id();
            $table->foreignId('leads_id')->constrained('leads_data')->onDelete('cascade');
            $table->string('name')->onDelete('cascade');
            $table->string('description')->nullable()->onDelete('cascade');
            $table->string('status')->onDelete('cascade');
            $table->string('priority')->onDelete('cascade');
            $table->string('due_date')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('task_tables');
    }
};
