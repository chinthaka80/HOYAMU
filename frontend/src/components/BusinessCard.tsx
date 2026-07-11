'use client';

import React from 'react';
import { Store, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

interface BusinessCardProps {
  name: string;
  category: string;
  rating: number;
  location: string;
  isVerified: boolean;
  link: string;
}

export default function BusinessCard({ name, category, rating, location, isVerified, link }: BusinessCardProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:border-[#E25704] transition-all flex justify-between items-start gap-4">
      <div className="flex gap-4">
        <div className="h-12 w-12 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center border border-[#E25704]/20 flex-shrink-0">
          <Store size={22} />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-bold text-sm leading-tight hover:text-[#E25704] transition-colors">
              <Link href={link}>{name}</Link>
            </h3>
            {isVerified && (
              <span className="text-[9px] font-bold bg-[#10B981]/10 text-[#10B981] px-1.5 py-0.5 rounded-md border border-[#10B981]/20 flex items-center gap-0.5">
                <ShieldCheck size={10} />
                Verified
              </span>
            )}
          </div>
          <p className="text-xs text-[#6B7280]">{category} • {location}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
        <Star size={14} className="fill-yellow-500 text-yellow-500" />
        {rating.toFixed(1)}
      </div>
    </div>
  );
}
