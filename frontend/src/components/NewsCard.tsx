'use client';

import React from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface NewsCardProps {
  title: string;
  date: string;
  category: string;
  summary: string;
  link: string;
}

export default function NewsCard({ title, date, category, summary, link }: NewsCardProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:border-[#E25704] transition-all space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold bg-[#E25704]/10 text-[#E25704] px-2.5 py-0.5 rounded-md border border-[#E25704]/20">
          {category}
        </span>
        <span className="text-xs text-[#9CA3AF] flex items-center gap-1">
          <Calendar size={12} />
          {date}
        </span>
      </div>
      <h2 className="text-sm font-bold hover:text-[#E25704] transition-colors leading-snug">
        <Link href={link}>{title}</Link>
      </h2>
      <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2">{summary}</p>
      <Link href={link} className="inline-flex items-center gap-1 text-[10px] font-bold text-[#E25704] hover:underline">
        Read Article
        <ArrowRight size={10} />
      </Link>
    </div>
  );
}
