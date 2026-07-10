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
        Schema::create('listings', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('business_id')->nullable()->constrained('businesses')->onDelete('set null');
            $table->string('title');
            $table->string('slug')->unique()->nullable();
            $table->text('description');
            $table->unsignedInteger('category_id');
            $table->decimal('price', 15, 2);
            $table->unsignedInteger('district_id');
            $table->unsignedInteger('city_id');
            $table->json('images')->nullable();
            $table->json('videos')->nullable();
            $table->string('contact_phone');
            $table->json('tags')->nullable();
            $table->unsignedInteger('views_count')->default(0);
            $table->string('status')->default('pending'); // active, pending, suspended
            $table->timestamps();
            $table->softDeletes();

            // Composite indexes for fast classified search execution
            $table->index(['status', 'category_id', 'district_id']);
            $table->index('title');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listings');
    }
};
