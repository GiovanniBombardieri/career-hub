<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();

            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('contact_role_id')->constrained();

            $table->string('full_name');
            $table->string('email')->nullable();
            $table->string('linkedin_url')->nullable();

            $table->enum('relationship_status', array_column(\App\Enums\ContactRelationshipStatus::cases(), 'value'));
            $table->text('notes')->nullable();

            $table->timestamps();

            $table->index('company_id');
            $table->index('contact_role_id');
            $table->index('relationship_status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
