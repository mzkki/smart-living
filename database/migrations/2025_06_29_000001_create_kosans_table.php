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
    Schema::create('kosans', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->integer('price');
      $table->string('address');
      $table->text('description')->nullable();
      $table->string('status')->default('Tersedia'); // Tersedia, Terisi, etc.
      $table->string('type'); // Putra, Putri, Campur
      $table->string('room_size')->nullable();
      $table->string('image')->nullable();
      $table->boolean('featured')->default(false);
      $table->string('area'); // Balikpapan Selatan, etc.
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('kosans');
  }
};
