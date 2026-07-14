'use client';

import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SearchBar() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-[#E5E7EB] p-3 rounded-2xl shadow-sm flex flex-col md:flex-row gap-3">
      <div className="relative flex-[2] flex items-center">
        <span className="absolute left-3 text-[#6B7280]">
          <Search size={16} />
        </span>
        <input
          type="text"
          placeholder="What are you looking for today? (e.g. Toyota Prius, Land for sale)..."
          className="w-full h-10 pl-10 pr-4 bg-transparent text-sm text-[#222222] focus:outline-none"
        />
      </div>

      <div className="relative flex-1 flex items-center border-t md:border-t-0 md:border-l border-[#E5E7EB] pt-3 md:pt-0 md:pl-3">
        <span className="absolute left-3 md:left-6 text-[#6B7280]">
          <MapPin size={16} />
        </span>
        <select className="w-full h-10 pl-10 pr-4 bg-transparent text-sm text-[#222222] focus:outline-none appearance-none">
          <option>All Districts</option>
          <option>Colombo</option>
          <option>Gampaha</option>
          <option>Kandy</option>
        </select>
      </div>

      <Button className="h-10 px-6 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl transition-all">
        Search
      </Button>
    </div>
  );
}
