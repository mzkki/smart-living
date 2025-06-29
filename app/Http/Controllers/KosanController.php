<?php

namespace App\Http\Controllers;

use App\Models\Kosan;
use App\Models\KosanFacility;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class KosanController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $kosans = Kosan::with('facilities')->get();

    return Inertia::render('Kosan/Index', [
      'kosans' => $kosans
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('Kosan/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'price' => 'required|integer',
      'address' => 'required|string|max:255',
      'description' => 'nullable|string',
      'status' => 'required|string|max:255',
      'type' => 'required|string|max:255',
      'room_size' => 'nullable|string|max:255',
      'image' => 'nullable|image|max:2048',
      'featured' => 'boolean',
      'area' => 'required|string|max:255',
      'facilities' => 'nullable|array',
      'facilities.*.name' => 'required|string|max:255',
      'facilities.*.icon' => 'nullable|string',
    ]);

    // Handle image upload if provided
    if ($request->hasFile('image')) {
      $path = $request->file('image')->store('kosans', 'public');
      $validated['image'] = $path;
    }

    // Create the kosan
    $kosan = Kosan::create([
      'name' => $validated['name'],
      'price' => $validated['price'],
      'address' => $validated['address'],
      'description' => $validated['description'] ?? null,
      'status' => $validated['status'],
      'type' => $validated['type'],
      'room_size' => $validated['room_size'] ?? null,
      'image' => $validated['image'] ?? null,
      'featured' => $validated['featured'] ?? false,
      'area' => $validated['area'],
    ]);

    // Create the facilities
    if (isset($validated['facilities']) && is_array($validated['facilities'])) {
      foreach ($validated['facilities'] as $facility) {
        KosanFacility::create([
          'kosan_id' => $kosan->id,
          'name' => $facility['name'],
          'icon' => $facility['icon'] ?? null,
        ]);
      }
    }

    return redirect()->route('kosans.index')->with('success', 'Kosan created successfully.');
  }

  /**
   * Display the specified resource.
   */
  public function show(Kosan $kosan)
  {
    $kosan->load('facilities');

    return Inertia::render('Kosan/Show', [
      'kosan' => $kosan
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Kosan $kosan)
  {
    $kosan->load('facilities');

    return Inertia::render('Kosan/Edit', [
      'kosan' => $kosan
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Kosan $kosan)
  {
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'price' => 'required|integer',
      'address' => 'required|string|max:255',
      'description' => 'nullable|string',
      'status' => 'required|string|max:255',
      'type' => 'required|string|max:255',
      'room_size' => 'nullable|string|max:255',
      'image' => 'nullable|image|max:2048',
      'featured' => 'boolean',
      'area' => 'required|string|max:255',
      'facilities' => 'nullable|array',
      'facilities.*.id' => 'nullable|integer|exists:kosan_facilities,id',
      'facilities.*.name' => 'required|string|max:255',
      'facilities.*.icon' => 'nullable|string',
    ]);

    // Handle image upload if provided
    if ($request->hasFile('image')) {
      // Delete old image if exists
      if ($kosan->image && Storage::disk('public')->exists($kosan->image)) {
        Storage::disk('public')->delete($kosan->image);
      }

      $path = $request->file('image')->store('kosans', 'public');
      $validated['image'] = $path;
    }

    // Update the kosan
    $kosan->update([
      'name' => $validated['name'],
      'price' => $validated['price'],
      'address' => $validated['address'],
      'description' => $validated['description'] ?? null,
      'status' => $validated['status'],
      'type' => $validated['type'],
      'room_size' => $validated['room_size'] ?? null,
      'image' => $validated['image'] ?? $kosan->image,
      'featured' => $validated['featured'] ?? false,
      'area' => $validated['area'],
    ]);

    // Update facilities
    if (isset($validated['facilities']) && is_array($validated['facilities'])) {
      // Get current facility IDs
      $currentFacilityIds = $kosan->facilities->pluck('id')->toArray();
      $newFacilityIds = [];

      foreach ($validated['facilities'] as $facility) {
        if (isset($facility['id'])) {
          // Update existing facility
          KosanFacility::find($facility['id'])->update([
            'name' => $facility['name'],
            'icon' => $facility['icon'] ?? null,
          ]);
          $newFacilityIds[] = $facility['id'];
        } else {
          // Create new facility
          $newFacility = KosanFacility::create([
            'kosan_id' => $kosan->id,
            'name' => $facility['name'],
            'icon' => $facility['icon'] ?? null,
          ]);
          $newFacilityIds[] = $newFacility->id;
        }
      }

      // Delete facilities that are no longer present
      $facilitiesToDelete = array_diff($currentFacilityIds, $newFacilityIds);
      KosanFacility::whereIn('id', $facilitiesToDelete)->delete();
    } else {
      // If no facilities provided, delete all
      $kosan->facilities()->delete();
    }

    return redirect()->route('kosans.index')->with('success', 'Kosan updated successfully.');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Kosan $kosan)
  {
    // Delete image if exists
    if ($kosan->image && Storage::disk('public')->exists($kosan->image)) {
      Storage::disk('public')->delete($kosan->image);
    }

    // Delete related facilities (should also be handled by the foreign key constraint with onDelete('cascade'))
    $kosan->facilities()->delete();

    // Delete the kosan
    $kosan->delete();

    return redirect()->route('kosans.index')->with('success', 'Kosan deleted successfully.');
  }
}
