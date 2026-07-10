'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Star, Building, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BusinessDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const businesses = [
    {
      uuid: 'business-1',
      name: 'Nuwan Auto repair & Hybrid Center',
      rating: 4.8,
      reviewsCount: 34,
      category: 'Automotive Services',
      location: 'Colombo 3',
      address: '123 Galle Road, Colombo 3',
      isVerified: true,
    },
    {
      uuid: 'business-2',
      name: 'Hoyamu Software Systems',
      rating: 4.9,
      reviewsCount: 18,
      category: 'Software & IT',
      location: 'Colombo 7',
      address: '45 Ward Place, Colombo 7',
      isVerified: true,
    },
    {
      uuid: 'business-3',
      name: 'Southern Hotels & Villa Resort',
      rating: 4.6,
      reviewsCount: 45,
      category: 'Hotels & Tourism',
      location: 'Galle Fort',
      address: '12 Church Street, Galle Fort',
      isVerified: true,
    },
    {
      uuid: 'business-4',
      name: 'Lanka Agri Seeds & tools store',
      rating: 4.2,
      reviewsCount: 12,
      category: 'Agriculture',
      location: 'Kurunegala Town',
      address: '78 Dambulla Road, Kurunegala',
      isVerified: false,
    },
  ];

  return (
    <div className="flex-1 w-full bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-xs text-[#6B7280] mb-4">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-2">&gt;</span>
          <span className="text-[#222222] font-medium">Business Directory</span>
        </nav>

        {/* Header Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#222222]">Verified Business Directory</h1>
          <p className="text-xs text-[#6B7280] mt-1">Discover top-rated services, companies, and stores in Sri Lanka</p>
        </div>

        {/* Directory Search & Filters Bar */}
        <div className="bg-white border border-[#E5E7EB] p-4 rounded-2xl mb-8 flex flex-col md:flex-row gap-3 shadow-sm">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search businesses by name, keyword or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#E25704] focus:bg-white"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="h-11 px-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-xs text-[#222222] focus:outline-none"
          >
            <option value="">All Categories</option>
            <option value="Automotive Services">Automotive Services</option>
            <option value="Software & IT">Software & IT</option>
            <option value="Hotels & Tourism">Hotels & Tourism</option>
            <option value="Agriculture">Agriculture</option>
          </select>
        </div>

        {/* Business Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businesses.map((biz) => (
            <div
              key={biz.uuid}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-sm hover:border-[#E25704]/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="flex items-start gap-4">
                {/* 1:1 business logo thumbnail */}
                <div className="h-12 w-12 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl flex items-center justify-center text-[#E25704] flex-shrink-0">
                  <Building size={22} />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-base font-bold text-[#222222]">{biz.name}</h3>
                    {biz.isVerified && (
                      <span className="text-[10px] font-semibold bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded-full border border-[#D4AF37]/20 flex items-center gap-0.5">
                        <ShieldCheck size={10} />
                        Verified
                      </span>
                    )}
                  </div>
                  
                  {/* Category & Location */}
                  <p className="text-xs text-[#6B7280]">{biz.category} &bull; {biz.location}</p>
                  
                  {/* Stars Rating */}
                  <div className="flex items-center gap-1 text-xs text-[#6B7280]">
                    <span className="flex text-[#FFC107]">
                      <Star size={12} fill="currentColor" />
                    </span>
                    <span className="font-semibold text-[#222222]">{biz.rating}</span>
                    <span>({biz.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              <Link href={`/business/${biz.uuid}`} className="w-full md:w-auto">
                <Button variant="outline" size="sm" className="w-full md:w-auto h-9 px-4 rounded-xl text-xs border-[#E5E7EB] text-[#222222] font-semibold flex items-center gap-1 hover:bg-[#FAFAFA]">
                  Visit Profile
                  <ChevronRight size={14} />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
