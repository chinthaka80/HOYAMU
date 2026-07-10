<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Business extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'business_name',
        'description',
        'category_id',
        'address',
        'phone',
        'email',
        'website',
        'social_links',
        'opening_hours',
        'google_map_url',
        'is_verified',
    ];

    protected $casts = [
        'social_links' => 'array',
        'opening_hours' => 'array',
        'is_verified' => 'boolean',
    ];

    /**
     * Auto-generate UUIDv4 on creation.
     */
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }

    /**
     * Get the owner user of this business profile page.
     */
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the listings linked to this business directory portal.
     */
    public function listings()
    {
        return $this->hasMany(Listing::class);
    }
}
