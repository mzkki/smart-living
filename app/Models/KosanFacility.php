<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KosanFacility extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'kosan_id',
    'name', // e.g. 'WiFi', 'AC', 'Kamar Mandi Dalam', etc.
    'icon', // SVG path or icon class
  ];

  /**
   * Get the kosan that owns the facility.
   */
  public function kosan()
  {
    return $this->belongsTo(Kosan::class);
  }
}
