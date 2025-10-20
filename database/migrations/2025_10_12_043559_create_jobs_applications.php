<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Gunakan nama tabel snake_case dan plural
        Schema::create('jobs_applications', function (Blueprint $table) { // DIUBAH
            $table->id('id_jobs');
            $table->string('companyName');
            $table->string('position');
            $table->string('applicationPlatform');
            $table->date('applicationDate');
            $table->string('status')->default('Applied'); // DIUBAH: default lebih bermakna
            $table->date('statusUpdateDate')->nullable();
            $table->text('notes')->nullable();
            
            // DITAMBAHKAN: Definisikan kolomnya dulu
            $table->unsignedBigInteger('user_id'); 
            
            // Baru buat foreign key constraint
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('jobs_applications'); // DIUBAH
    }
};