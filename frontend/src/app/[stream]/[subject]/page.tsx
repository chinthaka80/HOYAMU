'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, FileText, Download, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { eduService } from '@/services/edu';
import Loading from '@/components/Loading';

interface PageProps {
  params: Promise<{ stream: string; subject: string }>;
}

export default function SubjectDetailPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const stream = resolvedParams.stream;
  const subjectSlug = resolvedParams.subject;

  const [subject, setSubject] = useState<any>(null);
  const [lessons, setLessons] = useState<any[]>([]);
  const [papers, setPapers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSubTab, setActiveSubTab] = useState<'notes' | 'papers'>('notes');

  useEffect(() => {
    if (subjectSlug) {
      Promise.all([
        eduService.getLessons(subjectSlug),
        eduService.getPapers(subjectSlug)
      ])
        .then(([lessonsRes, papersRes]) => {
          if (lessonsRes.success) {
            setSubject(lessonsRes.data.subject);
            setLessons(lessonsRes.data.lessons);
          }
          if (papersRes.success) {
            setPapers(papersRes.data.papers);
          }
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [subjectSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <Loading />
      </div>
    );
  }

  if (!subject) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <p className="text-sm text-[#6B7280]">Subject not found.</p>
        <Link href="/edu" className="mt-4">
          <Button variant="outline" className="h-9 px-4 rounded-xl text-xs font-semibold">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  // Format stream names for breadcrumbs
  const getStreamName = (str: string) => {
    if (str === 'al') return 'Advanced Level (A/L)';
    if (str === 'ol') return 'Ordinary Level (O/L)';
    if (str.startsWith('grade-')) return `Grade ${str.split('-')[1]}`;
    return str.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Link */}
        <div className="flex items-center gap-2">
          <Link href="/edu" className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#222222] font-semibold">
            <ArrowLeft size={14} />
            Back to Dashboard
          </Link>
        </div>

        {/* Subject Header */}
        <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-block bg-[#E25704]/10 text-[#E25704] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {getStreamName(stream)}
            </span>
            <h1 className="text-2xl font-black tracking-tight">{subject.name}</h1>
            <p className="text-xs text-[#6B7280]">Grade {subject.grade} • Syllabus Notes & Materials</p>
          </div>
          <Link href="/edu/ai-tutor">
            <Button className="h-10 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all">
              <Bot size={16} />
              Ask AI Tutor
            </Button>
          </Link>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#E5E7EB] gap-6">
          <button
            onClick={() => setActiveSubTab('notes')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all ${
              activeSubTab === 'notes' ? 'border-[#E25704] text-[#E25704]' : 'border-transparent text-[#6B7280] hover:text-[#222222]'
            }`}
          >
            Lessons & Notes (පාඩම් සහ සටහන්)
          </button>
          <button
            onClick={() => setActiveSubTab('papers')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all ${
              activeSubTab === 'papers' ? 'border-[#E25704] text-[#E25704]' : 'border-transparent text-[#6B7280] hover:text-[#222222]'
            }`}
          >
            Past Papers & Model Papers (ප්‍රශ්න පත්‍ර)
          </button>
        </div>

        {/* Content Listing */}
        <div className="space-y-4">
          {activeSubTab === 'notes' ? (
            lessons.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm flex justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 bg-[#E25704]/10 text-[#E25704] rounded-lg flex items-center justify-center">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{lesson.title}</h4>
                        <p className="text-[10px] text-[#6B7280]">Study Notes • {new Date(lesson.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    {/* Dynamic SEO URL Link */}
                    <Link href={`/${stream}/${subjectSlug}/${lesson.slug}`}>
                      <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl text-xs font-semibold">
                        Read Notes
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#E5E7EB] p-12 rounded-2xl text-center text-[#6B7280] text-sm">
                No lessons or study notes uploaded yet.
              </div>
            )
          ) : (
            papers.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {papers.map((paper) => (
                  <div key={paper.id} className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm flex justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{paper.title}</h4>
                        <p className="text-[10px] text-[#6B7280] uppercase tracking-wider">{paper.type.replace('_', ' ')} • Year {paper.year || 'N/A'}</p>
                      </div>
                    </div>
                    <a href={paper.file_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl text-xs font-semibold flex items-center gap-1">
                        <Download size={14} />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#E5E7EB] p-12 rounded-2xl text-center text-[#6B7280] text-sm">
                No exam papers or model papers uploaded yet.
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
