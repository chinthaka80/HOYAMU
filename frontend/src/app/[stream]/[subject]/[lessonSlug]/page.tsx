'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Bot, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { eduService } from '@/services/edu';
import Loading from '@/components/Loading';

interface PageProps {
  params: Promise<{ stream: string; subject: string; lessonSlug: string }>;
}

// Simple Custom Markdown and Math Parser Component
function MarkdownMathRenderer({ content }: { content: string }) {
  if (!content) return null;

  const blocks = content.split('\n\n');

  return (
    <div className="space-y-6 leading-relaxed text-[#222222]">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith('# ')) {
          return <h1 key={idx} className="text-2xl sm:text-3xl font-black text-[#222222] tracking-tight border-b border-[#E5E7EB] pb-3 mt-6">{trimmed.slice(2)}</h1>;
        }
        if (trimmed.startsWith('## ')) {
          return <h2 key={idx} className="text-xl sm:text-2xl font-extrabold text-[#222222] tracking-tight mt-6">{trimmed.slice(3)}</h2>;
        }
        if (trimmed.startsWith('### ')) {
          return <h3 key={idx} className="text-lg sm:text-xl font-bold text-[#222222] tracking-tight mt-4">{trimmed.slice(4)}</h3>;
        }

        if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
          const formula = trimmed.slice(2, -2).trim();
          return (
            <div key={idx} className="my-6 p-6 bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl flex items-center justify-center font-serif text-lg overflow-x-auto shadow-inner text-[#E25704]">
              {formula}
            </div>
          );
        }

        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').map(line => line.replace(/^[\-\*]\s+/, ''));
          return (
            <ul key={idx} className="list-disc pl-6 space-y-2 text-sm text-[#4B5563]">
              {items.map((item, itemIdx) => (
                <li key={itemIdx}>{parseInlineStyles(item)}</li>
              ))}
            </ul>
          );
        }

        if (trimmed.startsWith('1. ') || /^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split('\n').map(line => line.replace(/^\d+\.\s+/, ''));
          return (
            <ol key={idx} className="list-decimal pl-6 space-y-2 text-sm text-[#4B5563]">
              {items.map((item, itemIdx) => (
                <li key={itemIdx}>{parseInlineStyles(item)}</li>
              ))}
            </ol>
          );
        }

        return (
          <p key={idx} className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            {parseInlineStyles(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function parseInlineStyles(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\$[^\$]+\$)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-extrabold text-[#222222]">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      return (
        <code key={index} className="font-serif italic bg-slate-100 text-[#E25704] px-1.5 py-0.5 rounded text-sm mx-0.5">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export default function LessonDetailPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const stream = resolvedParams.stream;
  const subjectSlug = resolvedParams.subject;
  const lessonSlug = resolvedParams.lessonSlug;

  const [subject, setSubject] = useState<any>(null);
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (subjectSlug && lessonSlug) {
      eduService.getLessonDetail(subjectSlug, lessonSlug)
        .then((res) => {
          if (res.success) {
            setSubject(res.data.subject);
            setLesson(res.data.lesson);
          }
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [subjectSlug, lessonSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <Loading />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <p className="text-sm text-[#6B7280]">Lesson study notes not found.</p>
        <Link href="/edu" className="mt-4">
          <Button variant="outline" className="h-9 px-4 rounded-xl text-xs font-semibold">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Link */}
        <div className="flex items-center justify-between">
          <Link href={`/${stream}/${subjectSlug}`} className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#222222] font-semibold">
            <ArrowLeft size={14} />
            Back to {subject.name}
          </Link>
          
          <Link href="/edu/ai-tutor">
            <Button size="sm" className="h-9 px-4 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all">
              <Bot size={14} />
              Ask AI Tutor about this
            </Button>
          </Link>
        </div>

        {/* Note Body Sheet */}
        <div className="bg-white border border-[#E5E7EB] p-8 sm:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="space-y-2 border-b border-[#E5E7EB] pb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E25704]">
              <BookOpen size={14} />
              <span>Syllabus Notes</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{lesson.title}</h1>
            <p className="text-xs text-[#6B7280]">Grade {subject.grade} • {subject.stream.toUpperCase()} stream</p>
          </div>

          {/* Render Markdown Content */}
          <MarkdownMathRenderer content={lesson.content} />
        </div>
      </div>
    </div>
  );
}
