<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use Illuminate\Support\Facades\Validator;

class ListingController extends Controller
{
    /**
     * List all active listings.
     */
    public function index()
    {
        $listings = Listing::where('status', 'active')->orderBy('created_at', 'desc')->paginate(15);

        return response()->json([
            'success' => true,
            'data' => $listings
        ]);
    }

    /**
     * Store new listing.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category_id' => 'required|integer',
            'price' => 'required|numeric',
            'district_id' => 'required|integer',
            'city_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $listing = Listing::create(array_merge($request->all(), [
            'user_id' => $request->user()->id,
            'status' => 'pending', // Awaiting moderation checks
            'views_count' => 0
        ]));

        return response()->json([
            'success' => true,
            'data' => $listing,
            'message' => 'Listing created successfully and sent to moderation.'
        ], 201);
    }

    /**
     * Show single listing details.
     */
    public function show($uuid)
    {
        $listing = Listing::where('uuid', $uuid)->firstOrFail();
        $listing->increment('views_count'); // Record listing visits count

        return response()->json([
            'success' => true,
            'data' => $listing
        ]);
    }

    /**
     * Perform global search and filters.
     */
    public function search(Request $request)
    {
        $query = Listing::query()->where('status', 'active');

        if ($request->has('q')) {
            $query->where('title', 'like', '%' . $request->q . '%');
        }

        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        if ($request->has('district_id')) {
            $query->where('district_id', $request->district_id);
        }

        $listings = $query->orderBy('created_at', 'desc')->paginate(15);

        return response()->json([
            'success' => true,
            'data' => $listings
        ]);
    }
}
