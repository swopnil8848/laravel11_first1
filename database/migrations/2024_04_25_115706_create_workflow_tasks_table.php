<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkflowTasksTable extends Migration
{
    public function up()
    {
        Schema::create('workflow_tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('workflow_id');
            $table->foreign('workflow_id')->references('id')->on('workflow')->onDelete('cascade');
            $table->text('email_content')->nullable();
            $table->integer('days_after_start')->nullable();
            $table->dateTime('custom_time')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('workflow_tasks');
    }
}
