'use client';

import React from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const dummyArticles = [
    { title: 'Market Trends: Sri Lankan Property Demand Spikes in 2026', date: 'July 10, 2026', category: 'Real Estate', summary: 'A comprehensive study of property rates in major urban areas showing a 12% rise in demand.' },
    { title: 'Tech Startups: Colombo Hub Sees Rapid Growth in Seed Fundings', date: 'July 05, 2026', category: 'Business', summary: 'Local incubators report higher success rates as domestic digital directories connect traders.' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#E25704]">
            <Newspaper size={24} />
            <span className="text-xs font-bold uppercase tracking-widest">HOYAMU Newsroom</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Local Business Updates</h1>
          <p className="text-sm text-[#6B7280]">Stay updated with real-time market trends, announcements, and local reviews.</p>
        </div>

        {/* Articles Feed */}
        <div className="space-y-6">
          {dummyArticles.map((art, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm hover:border-[#E25704] transition-all space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold bg-[#E25704]/10 text-[#E25704] px-2.5 py-0.5 rounded-md border border-[#E25704]/20">
                  {art.category}
                </span>
                <span className="text-xs text-[#9CA3AF] flex items-center gap-1">
                  <Calendar size={12} />
                  {art.date}
                </span>
              </div>
              <h2 className="text-lg font-bold hover:text-[#E25704] transition-colors cursor-pointer">
                {art.title}
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">{art.summary}</p>
              <Link href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[#E25704] hover:underline">
                Read Full Article
                <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
