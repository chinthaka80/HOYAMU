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
        Schema::create('edu_subjects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('grade');
            $table->string('stream');
            $table->string('slug')->unique();
            $table->string('icon')->nullable();
            $table->timestamps();
        });

        Schema::create('edu_lessons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subject_id')->constrained('edu_subjects')->onDelete('cascade');
            $table->string('title');
            $table->longText('content');
            $table->string('type')->default('theory');
            $table->string('slug')->unique();
            $table->timestamps();
        });

        Schema::create('edu_papers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subject_id')->constrained('edu_subjects')->onDelete('cascade');
            $table->string('title');
            $table->integer('year')->nullable();
            $table->string('type')->default('past_paper'); // past_paper, model_paper
            $table->string('file_url');
            $table->timestamps();
        });

        Schema::create('edu_ai_chats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->foreignId('subject_id')->constrained('edu_subjects')->onDelete('cascade');
            $table->string('title');
            $table->timestamps();
        });

        Schema::create('edu_ai_messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('chat_id')->constrained('edu_ai_chats')->onDelete('cascade');
            $table->enum('role', ['user', 'assistant']);
            $table->text('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('edu_ai_messages');
        Schema::dropIfExists('edu_ai_chats');
        Schema::dropIfExists('edu_papers');
        Schema::dropIfExists('edu_lessons');
        Schema::dropIfExists('edu_subjects');
    }
};
