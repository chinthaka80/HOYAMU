<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use Illuminate\Support\Facades\Validator;

class BusinessController extends Controller
{
    /**
     * List verified business directory records.
     */
    public function index()
    {
        $businesses = Business::where('is_verified', true)->orderBy('created_at', 'desc')->paginate(15);

        return response()->json([
            'success' => true,
            'data' => $businesses
        ]);
    }

    /**
     * Show single business profile.
     */
    public function show($uuid)
    {
        $business = Business::where('uuid', $uuid)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $business
        ]);
    }

    /**
     * Store new business profile details.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'business_name' => 'required|string|max:255',
            'description' => 'required|string',
            'category_id' => 'required|integer',
            'address' => 'required|string',
            'phone' => 'required|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Limit one business profile per user
        $existing = Business::where('user_id', $request->user()->id)->first();
        if ($existing) {
            return response()->json([
                'success' => false,
                'message' => 'Users are restricted to creating one primary business profile directory.'
            ], 400);
        }

        $business = Business::create(array_merge($request->all(), [
            'user_id' => $request->user()->id,
            'is_verified' => false, // Requires administrator moderation
        ]));

        return response()->json([
            'success' => true,
            'data' => $business,
            'message' => 'Business profile created successfully.'
        ], 201);
    }
}
