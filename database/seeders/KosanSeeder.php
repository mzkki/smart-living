<?php

namespace Database\Seeders;

use App\Models\Kosan;
use App\Models\KosanFacility;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KosanSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    // Create kosans based on the dummy data from the welcome page
    $kosan1 = Kosan::create([
      'name' => 'Kos Permata Balikpapan',
      'price' => 1800000,
      'address' => 'Balikpapan Selatan, 5 menit ke mall',
      'description' => 'Kos nyaman dengan fasilitas lengkap, lokasi strategis dekat dengan pusat perbelanjaan.',
      'status' => 'Tersedia',
      'type' => 'Campur',
      'room_size' => '3x4m',
      'image' => null, // Will use default image in frontend
      'featured' => true,
      'area' => 'Balikpapan Selatan',
    ]);

    // Add facilities for kosan 1
    KosanFacility::create([
      'kosan_id' => $kosan1->id,
      'name' => 'WiFi',
      'icon' => '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',
    ]);

    KosanFacility::create([
      'kosan_id' => $kosan1->id,
      'name' => 'AC',
      'icon' => '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />',
    ]);

    $kosan2 = Kosan::create([
      'name' => 'Kos Putri Balikpapan Tengah',
      'price' => 1200000,
      'address' => 'Balikpapan Tengah, dekat dengan pusat kota',
      'description' => 'Kos khusus putri yang nyaman dengan lingkungan yang aman dan tenang.',
      'status' => 'Tersedia',
      'type' => 'Putri',
      'room_size' => '3x3m',
      'image' => null, // Will use default image in frontend
      'featured' => false,
      'area' => 'Balikpapan Tengah',
    ]);

    // Add facilities for kosan 2
    KosanFacility::create([
      'kosan_id' => $kosan2->id,
      'name' => 'Kipas Angin',
      'icon' => '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />',
    ]);

    KosanFacility::create([
      'kosan_id' => $kosan2->id,
      'name' => 'WiFi',
      'icon' => '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',
    ]);

    $kosan3 = Kosan::create([
      'name' => 'Kos Eksekutif Gunung Balikpapan',
      'price' => 2500000,
      'address' => 'Balikpapan Utara, lingkungan tenang dan asri',
      'description' => 'Kos eksekutif dengan fasilitas premium dan pemandangan indah.',
      'status' => 'Tersedia',
      'type' => 'Campur',
      'room_size' => '4x5m',
      'image' => null, // Will use default image in frontend
      'featured' => true,
      'area' => 'Balikpapan Utara',
    ]);

    // Add facilities for kosan 3
    KosanFacility::create([
      'kosan_id' => $kosan3->id,
      'name' => 'AC',
      'icon' => '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />',
    ]);

    KosanFacility::create([
      'kosan_id' => $kosan3->id,
      'name' => 'WiFi',
      'icon' => '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',
    ]);
  }
}
