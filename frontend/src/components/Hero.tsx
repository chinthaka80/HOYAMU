'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] py-20 px-4 sm:px-6 lg:px-8 text-center text-[#222222]">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
          Sri Lanka's Premium <span className="text-[#E25704]">Marketplace</span>
        </h1>
        <p className="text-sm sm:text-base text-[#6B7280] max-w-xl mx-auto">
          හොයන හැමදේම එකම තැන - Buy and sell vehicles, properties, search jobs, and explore verified local businesses.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 pt-4">
          <Button className="h-11 px-6 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl transition-all">
            Browse Listings
          </Button>
          <Button variant="outline" className="h-11 px-6 border-[#E5E7EB] text-xs font-semibold rounded-xl">
            Explore Directory
          </Button>
        </div>
      </div>
    </div>
  );
}
