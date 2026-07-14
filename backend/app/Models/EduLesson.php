<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EduLesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject_id',
        'title',
        'content',
        'type',
        'slug',
    ];

    public function subject()
    {
        return $this->belongsTo(EduSubject::class, 'subject_id');
    }
}
