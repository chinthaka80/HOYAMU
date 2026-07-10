<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Listing extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'business_id',
        'title',
        'description',
        'category_id',
        'price',
        'district_id',
        'city_id',
        'images',
        'videos',
        'contact_phone',
        'tags',
        'views_count',
        'status',
    ];

    protected $casts = [
        'images' => 'array',
        'videos' => 'array',
        'tags' => 'array',
        'price' => 'decimal:2',
        'views_count' => 'integer',
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
     * Get the publisher user profile.
     */
    public function publisher()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the category metadata nodes.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
