<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            $table->string('name');
            $table->string('website')->nullable();
            $table->string('linkedin_url')->nullable();

            $table->string('country');
            $table->string('region')->nullable();
            $table->string('city')->nullable();

            $table->enum('remote_policy', array_column(\App\Enums\RemotePolicy::cases(), 'value'));
            $table->string('company_size');
            $table->enum('status', array_column(\App\Enums\CompanyStatus::cases(), 'value'));

            $table->decimal('score', 5, 2)->nullable();
            $table->text('why_interested')->nullable();

            $table->timestamps();

            $table->index('user_id');
            $table->index('status');
            $table->index('remote_policy');
            $table->index('city');
            $table->index('created_at');
            $table->index(['user_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
