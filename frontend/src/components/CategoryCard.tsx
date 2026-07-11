'use client';

import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  count: string;
  link: string;
  colorClass?: string;
}

export default function CategoryCard({ title, icon, count, link, colorClass = 'bg-[#E25704]/10 text-[#E25704]' }: CategoryCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:border-[#E25704] transition-all flex flex-col items-center text-center gap-4">
        <div className={`h-12 w-12 rounded-xl flex items-center justify-center border border-transparent ${colorClass} group-hover:scale-105 transition-transform`}>
          {icon}
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-sm group-hover:text-[#E25704] transition-colors">{title}</h3>
          <p className="text-xs text-[#6B7280]">{count}</p>
        </div>
      </div>
    </Link>
  );
}
