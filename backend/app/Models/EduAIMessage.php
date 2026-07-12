<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EduAIMessage extends Model
{
    use HasFactory;

    protected $table = 'edu_ai_messages';

    protected $fillable = [
        'chat_id',
        'role',
        'content',
    ];

    public function chat()
    {
        return $this->belongsTo(EduAIChat::class, 'chat_id');
    }
}
