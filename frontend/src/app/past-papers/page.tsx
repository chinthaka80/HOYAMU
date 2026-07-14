'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PastPapersDirectoryPage() {
  const years = [2025, 2024, 2023, 2022, 2021, 2020];

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

        {/* Header Title */}
        <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center">
              <FileText size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Past Papers Directory (ප්‍රශ්න පත්‍ර)</h1>
          </div>
          <p className="text-xs text-[#6B7280]">Download G.C.E. Advanced Level and Ordinary Level past papers grouped by examination release year.</p>
        </div>

        {/* Years Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Select Exam Year</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {years.map((year) => (
              <Link key={year} href={`/past-papers/${year}`} className="group bg-white border border-[#E5E7EB] hover:border-[#E25704] p-6 rounded-2xl shadow-sm transition-all text-center flex flex-col items-center justify-center space-y-2">
                <div className="h-10 w-10 bg-[#E25704]/10 text-[#E25704] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar size={18} />
                </div>
                <span className="font-extrabold text-sm text-[#222222] group-hover:text-[#E25704]">{year} Exam Papers</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
