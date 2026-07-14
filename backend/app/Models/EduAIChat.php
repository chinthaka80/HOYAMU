<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EduAIChat extends Model
{
    use HasFactory;

    protected $table = 'edu_ai_chats';

    protected $fillable = [
        'user_id',
        'subject_id',
        'title',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subject()
    {
        return $this->belongsTo(EduSubject::class, 'subject_id');
    }

    public function messages()
    {
        return $this->hasMany(EduAIMessage::class, 'chat_id');
    }
}
