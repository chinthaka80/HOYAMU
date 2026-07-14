<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EduSubject;
use App\Models\EduAIChat;
use App\Models\EduAIMessage;
use Illuminate\Support\Facades\Http;

class AITutorController extends Controller
{
    /**
     * Post a question to the AI Tutor.
     */
    public function ask(Request $request)
    {
        $request->validate([
            'subject_id' => 'required|exists:edu_subjects,id',
            'chat_id' => 'nullable|exists:edu_ai_chats,id',
            'message' => 'required|string|max:5000',
        ]);

        $subject = EduSubject::find($request->subject_id);
        $user = $request->user();

        // 1. Get or create Chat Session
        $chat = null;
        if ($request->chat_id) {
            $chat = EduAIChat::find($request->chat_id);
        } else {
            $chat = EduAIChat::create([
                'user_id' => $user ? $user->id : null,
                'subject_id' => $subject->id,
                'title' => substr($request->message, 0, 50) . '...',
            ]);
        }

        // 2. Save User Message
        EduAIMessage::create([
            'chat_id' => $chat->id,
            'role' => 'user',
            'content' => $request->message,
        ]);

        // 3. Request AI Response (Gemini API Integration)
        $apiKey = env('GEMINI_API_KEY');
        $aiResponseText = "";

        if ($apiKey) {
            // Get past chat messages to include in Gemini context
            $history = $chat->messages()->orderBy('created_at', 'asc')->get();
            $contents = [];
            
            // Add system instructions as first turn
            $systemInstruction = "You are HOYAMU EDU AI Tutor, a friendly, professional AI academic assistant. You specialize in the Sri Lankan O/L and A/L syllabus for the subject: {$subject->name} (Grade: {$subject->grade}, Stream: {$subject->stream}). Answer in a helpful manner, explaining terms clearly. If asked to solve equations or physics problems, show step-by-step calculations. Respond in Sinhala, English, or Singlish matching the user's language choice.";
            
            foreach ($history as $msg) {
                $contents[] = [
                    'role' => $msg->role === 'user' ? 'user' : 'model',
                    'parts' => [['text' => $msg->content]]
                ];
            }
            
            try {
                $response = Http::withHeaders([
                    'Content-Type' => 'application/json',
                ])->post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" . $apiKey, [
                    'contents' => $contents,
                    'systemInstruction' => [
                        'parts' => [['text' => $systemInstruction]]
                    ]
                ]);

                if ($response->successful()) {
                    $resData = $response->json();
                    $aiResponseText = $resData['candidates'][0]['content']['parts'][0]['text'] ?? '';
                } else {
                    \Log::error("Gemini API Error: " . $response->body());
                    $aiResponseText = "Sorry, I had trouble connecting to my brain. Please try again.";
                }
            } catch (\Exception $e) {
                \Log::error("Gemini API Exception: " . $e->getMessage());
                $aiResponseText = "An unexpected error occurred: " . $e->getMessage();
            }
        }

        // 4. Fallback if Gemini key is missing or failed
        if (empty($aiResponseText)) {
            $aiResponseText = "Hello! I am your AI Tutor for {$subject->name}. To enable live interactive responses, please set up a valid `GEMINI_API_KEY` in the environment settings.\n\nFor now, here is a helpful tip: In {$subject->name}, always make sure to read the problem statement twice. If it's a science or mathematics equation, identify all given parameters and unknowns first before attempting to apply formulas.";
        }

        // 5. Save AI Message
        EduAIMessage::create([
            'chat_id' => $chat->id,
            'role' => 'assistant',
            'content' => $aiResponseText,
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'chat_id' => $chat->id,
                'message' => $aiResponseText,
                'chat_title' => $chat->title,
            ],
            'message' => 'AI response generated successfully.'
        ]);
    }

    /**
     * Get chat session history.
     */
    public function chatHistory($chatId)
    {
        $chat = EduAIChat::find($chatId);
        if (!$chat) {
            return response()->json([
                'success' => false,
                'message' => 'Chat session not found.'
            ], 404);
        }

        $messages = $chat->messages()->orderBy('created_at', 'asc')->get();

        return response()->json([
            'success' => true,
            'data' => $messages,
            'message' => 'Chat history fetched successfully.'
        ]);
    }
}
