<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EduSubject extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'grade',
        'stream',
        'slug',
        'icon',
    ];

    public function lessons()
    {
        return $this->hasMany(EduLesson::class, 'subject_id');
    }

    public function papers()
    {
        return $this->hasMany(EduPaper::class, 'subject_id');
    }

    public function chats()
    {
        return $this->hasMany(EduAIChat::class, 'subject_id');
    }
}
