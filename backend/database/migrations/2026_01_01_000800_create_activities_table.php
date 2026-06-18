<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();

            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('application_id')->nullable()
                ->constrained()
                ->nullOnDelete();

            $table->enum('type', array_column(\App\Enums\ActivityType::cases(), 'value'));
            $table->string('title');
            $table->text('description')->nullable();

            $table->timestamp('occurred_at');

            $table->timestamps();

            $table->index('company_id');
            $table->index('application_id');
            $table->index('type');
            $table->index('occurred_at');
            $table->index(['company_id', 'occurred_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
