<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EduSubject;
use App\Models\EduLesson;
use App\Models\EduPaper;

class EduController extends Controller
{
    /**
     * List all educational subjects.
     */
    public function subjects(Request $request)
    {
        $subjects = EduSubject::all();
        
        return response()->json([
            'success' => true,
            'data' => $subjects,
            'message' => 'Subjects fetched successfully.'
        ]);
    }

    /**
     * List all lessons for a specific subject slug.
     */
    public function lessons($subjectSlug)
    {
        $subject = EduSubject::where('slug', $subjectSlug)->first();

        if (!$subject) {
            return response()->json([
                'success' => false,
                'message' => 'Subject not found.'
            ], 404);
        }

        $lessons = EduLesson::where('subject_id', $subject->id)
            ->select('id', 'title', 'slug', 'type', 'created_at')
            ->get();

        return response()->json([
            'success' => true,
            'data' => [
                'subject' => $subject,
                'lessons' => $lessons
            ],
            'message' => 'Lessons fetched successfully.'
        ]);
    }

    /**
     * Get details of a specific lesson by subject and lesson slug.
     */
    public function lessonDetail($subjectSlug, $lessonSlug)
    {
        $subject = EduSubject::where('slug', $subjectSlug)->first();

        if (!$subject) {
            return response()->json([
                'success' => false,
                'message' => 'Subject not found.'
            ], 404);
        }

        $lesson = EduLesson::where('subject_id', $subject->id)
            ->where('slug', $lessonSlug)
            ->first();

        if (!$lesson) {
            return response()->json([
                'success' => false,
                'message' => 'Lesson not found.'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'subject' => $subject,
                'lesson' => $lesson
            ],
            'message' => 'Lesson details fetched successfully.'
        ]);
    }

    /**
     * List all exam papers (past/model) for a specific subject slug.
     */
    public function papers($subjectSlug)
    {
        $subject = EduSubject::where('slug', $subjectSlug)->first();

        if (!$subject) {
            return response()->json([
                'success' => false,
                'message' => 'Subject not found.'
            ], 404);
        }

        $papers = EduPaper::where('subject_id', $subject->id)->get();

        return response()->json([
            'success' => true,
            'data' => [
                'subject' => $subject,
                'papers' => $papers
            ],
            'message' => 'Papers fetched successfully.'
        ]);
    }

    /**
     * List all exam papers filtered by release year.
     */
    public function papersByYear($year)
    {
        $papers = EduPaper::where('year', $year)
            ->with('subject')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $papers,
            'message' => 'Papers for year ' . $year . ' fetched successfully.'
        ]);
    }
}
