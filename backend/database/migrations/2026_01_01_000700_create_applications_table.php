<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();

            $table->foreignId('position_id')->constrained()->cascadeOnDelete();

            $table->enum('status', array_column(\App\Enums\ApplicationStatus::cases(), 'value'));

            $table->integer('expected_salary')->nullable();
            $table->integer('offer_salary')->nullable();

            $table->timestamp('applied_at')->nullable();

            $table->text('rejection_reason')->nullable();
            $table->text('notes')->nullable();

            $table->timestamps();

            $table->index('position_id');
            $table->index('status');
            $table->index('applied_at');
            $table->index(['status', 'applied_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
