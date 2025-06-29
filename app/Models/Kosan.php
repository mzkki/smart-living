<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kosan extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'price',
    'address',
    'description',
    'status',
    'type', // e.g. 'Putra', 'Putri', 'Campur'
    'room_size',
    'image',
    'featured',
    'area', // e.g. 'Balikpapan Selatan', 'Balikpapan Utara', etc.
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'featured' => 'boolean',
    'price' => 'integer',
  ];

  /**
   * Get the facilities for the kosan.
   */
  public function facilities()
  {
    return $this->hasMany(KosanFacility::class);
  }
}
