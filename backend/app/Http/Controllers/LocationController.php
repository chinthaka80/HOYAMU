<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
{
    /**
     * List all provinces.
     */
    public function provinces()
    {
        $provinces = DB::table('provinces')->orderBy('name', 'asc')->get();

        return response()->json([
            'success' => true,
            'data' => $provinces
        ]);
    }

    /**
     * List districts, optionally filtered by province.
     */
    public function districts(Request $request)
    {
        $query = DB::table('districts');

        if ($request->has('province_id')) {
            $query->where('province_id', $request->province_id);
        }

        $districts = $query->orderBy('name', 'asc')->get();

        return response()->json([
            'success' => true,
            'data' => $districts
        ]);
    }

    /**
     * List cities, optionally filtered by district.
     */
    public function cities(Request $request)
    {
        $query = DB::table('cities');

        if ($request->has('district_id')) {
            $query->where('district_id', $request->district_id);
        }

        $cities = $query->orderBy('name', 'asc')->get();

        return response()->json([
            'success' => true,
            'data' => $cities
        ]);
    }
}
