<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('positions', function (Blueprint $table) {
            $table->id();

            $table->foreignId('company_id')->constrained()->cascadeOnDelete();

            $table->string('title');
            $table->integer('salary_min')->nullable();
            $table->integer('salary_max')->nullable();
            $table->string('currency', 3);

            $table->boolean('remote');

            $table->string('source')->nullable();
            $table->string('url')->nullable();
            $table->text('description')->nullable();

            $table->timestamp('published_at')->nullable();

            $table->timestamps();

            $table->index('company_id');
            $table->index('title');
            $table->index('published_at');
            $table->index(['company_id', 'published_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('positions');
    }
};
