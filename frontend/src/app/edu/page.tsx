'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Calculator, Atom, FlaskConical, Dna, Bot, Award, GraduationCap, Map, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { eduService } from '@/services/edu';
import Loading from '@/components/Loading';

// Map icon string to component
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Calculator': return <Calculator className="h-6 w-6" />;
    case 'Atom': return <Atom className="h-6 w-6" />;
    case 'FlaskConical': return <FlaskConical className="h-6 w-6" />;
    case 'Dna': return <Dna className="h-6 w-6" />;
    default: return <GraduationCap className="h-6 w-6" />;
  }
};

export default function EduDashboardPage() {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStream, setSelectedStream] = useState<string>('All');

  useEffect(() => {
    eduService.getSubjects()
      .then((res) => {
        if (res.success) {
          setSubjects(res.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const streams = ['All', 'Physical Science', 'Biological Science', 'O/L'];

  const filteredSubjects = subjects.filter((subj) => {
    const matchesSearch = subj.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStream = selectedStream === 'All' || subj.stream === selectedStream;
    return matchesSearch && matchesStream;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Banner Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#E25704] to-[#C94D03] text-white rounded-3xl p-8 sm:p-12 shadow-md">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              HOYAMU EDU
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              ශ්‍රී ලංකාවේ AI බලගැන්වූ අධ්‍යාපන වේදිකාව
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              උසස් පෙළ සහ සාමාන්‍ය පෙළ සිසුන් සඳහා පාඩම් සටහන්, පසුගිය විභාග ප්‍රශ්න පත්‍ර, විශ්වවිද්‍යාල මඟපෙන්වීම් සහ AI Tutor සේවාව එකම තැනකින්.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-12 translate-y-12 pointer-events-none">
            <GraduationCap size={300} />
          </div>
        </div>

        {/* Quick Tools Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <Link href="/edu/ai-tutor" className="group bg-white border border-[#E5E7EB] hover:border-[#E25704] p-6 rounded-2xl shadow-sm transition-all duration-300 flex items-center gap-4">
            <div className="h-12 w-12 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-bold text-sm">AI Tutor (ප්‍රශ්න අසන්න)</h3>
              <p className="text-[10px] text-[#6B7280]">විෂය ගැටළු AI වෙතින් විසඳාගන්න</p>
            </div>
          </Link>

          <Link href="/edu/ai-quiz" className="group bg-white border border-[#E5E7EB] hover:border-[#E25704] p-6 rounded-2xl shadow-sm transition-all duration-300 flex items-center gap-4">
            <div className="h-12 w-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-sm">AI Quiz Game (MCQ)</h3>
              <p className="text-[10px] text-[#6B7280]">දැනුම මැන බලන බහුවරණ ප්‍රශ්න</p>
            </div>
          </Link>

          <Link href="/edu/guides" className="group bg-white border border-[#E5E7EB] hover:border-[#E25704] p-6 rounded-2xl shadow-sm transition-all duration-300 flex items-center gap-4">
            <div className="h-12 w-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-sm">University Guides</h3>
              <p className="text-[10px] text-[#6B7280]">විශ්වවිද්‍යාල ප්‍රවේශ විස්තර</p>
            </div>
          </Link>

          <Link href="/edu/guides" className="group bg-white border border-[#E5E7EB] hover:border-[#E25704] p-6 rounded-2xl shadow-sm transition-all duration-300 flex items-center gap-4">
            <div className="h-12 w-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Map size={24} />
            </div>
            <div>
              <h3 className="font-bold text-sm">Career Guidance</h3>
              <p className="text-[10px] text-[#6B7280]">අනාගත රැකියා ක්ෂේත්‍ර තේරීම</p>
            </div>
          </Link>
        </div>

        {/* Subjects Header / Tabs */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-xl font-bold">Subjects & Streams (විෂයන් සහ පාඨමාලා)</h2>
            
            {/* Search subject */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="විෂයන් සොයන්න (Search subjects...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-white border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#E25704]"
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
                <Search size={16} />
              </span>
            </div>
          </div>

          {/* Stream Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {streams.map((stream) => (
              <button
                key={stream}
                onClick={() => setSelectedStream(stream)}
                className={`h-9 px-4 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedStream === stream
                    ? 'bg-[#E25704] text-white'
                    : 'bg-white border border-[#E5E7EB] text-[#6B7280] hover:text-[#222222]'
                }`}
              >
                {stream}
              </button>
            ))}
          </div>

          {/* Subjects Grid */}
          {filteredSubjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {filteredSubjects.map((subj) => (
                <div key={subj.id} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center">
                      {getIcon(subj.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">{subj.name}</h3>
                      <p className="text-[10px] text-[#6B7280]">Grade {subj.grade} • {subj.stream}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-4">
                    <Link href={`/edu/subjects/${subj.slug}`}>
                      <Button variant="ghost" size="sm" className="text-xs text-[#E25704] hover:text-[#C94D03] p-0 flex items-center gap-1">
                        Go to Lessons
                        <ArrowRight size={14} />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[#6B7280] text-sm">
              No subjects found matching your query.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
