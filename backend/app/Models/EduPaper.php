<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EduPaper extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject_id',
        'title',
        'year',
        'type',
        'file_url',
    ];

    public function subject()
    {
        return $this->belongsTo(EduSubject::class, 'subject_id');
    }
}
