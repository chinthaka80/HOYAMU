'use client';

import React from 'react';
import { Search, Home, MapPin, SlidersHorizontal, BedDouble, SquareDot } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PropertiesPage() {
  const dummyProperties = [
    { title: 'Modern 3 BR House in Kottawa', price: 'Rs. 28,500,000', location: 'Colombo', beds: '3 Beds', size: '1,800 sqft', type: 'House' },
    { title: 'Luxury Apartment in Colombo 03', price: 'Rs. 75,000,000', location: 'Colombo', beds: '2 Beds', size: '1,200 sqft', type: 'Apartment' },
    { title: '15 Perch Commercial Land', price: 'Rs. 1,800,000 / perch', location: 'Gampaha', beds: 'N/A', size: '15 Perch', type: 'Land' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Properties & Real Estate</h1>
            <p className="text-xs text-[#6B7280]">Browse houses, apartments, and lands for sale or rent</p>
          </div>
          <Button className="h-10 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all">
            <Home size={16} />
            Post Property Ad
          </Button>
        </div>

        {/* Filter bar */}
        <div className="bg-white border border-[#E5E7EB] p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input type="text" placeholder="Search location or title..." className="w-full h-10 pl-9 pr-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-sm" />
            <Search size={16} className="absolute left-3 top-3 text-[#6B7280]" />
          </div>
          <div className="flex gap-2">
            <select className="h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#222222]">
              <option>All Types</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Land</option>
            </select>
            <Button variant="outline" className="h-10 border-[#E5E7EB] text-sm text-[#6B7280] hover:text-[#222222] flex items-center gap-1.5 rounded-xl">
              <SlidersHorizontal size={14} />
              Filters
            </Button>
          </div>
        </div>

        {/* Properties Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dummyProperties.map((p, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:border-[#E25704] transition-all overflow-hidden">
              <div className="h-44 bg-[#E25704]/5 flex items-center justify-center border-b border-[#E5E7EB] relative">
                <Home size={48} className="text-[#E25704]/20" />
                <span className="absolute top-3 left-3 bg-[#E25704] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {p.type}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm leading-tight line-clamp-1">{p.title}</h3>
                  <p className="text-xs text-[#6B7280] flex items-center gap-1">
                    <MapPin size={12} />
                    {p.location}
                  </p>
                </div>
                <div className="flex justify-between items-center text-xs text-[#6B7280] pt-2 border-t border-[#E5E7EB]">
                  <span className="flex items-center gap-1">
                    <BedDouble size={12} />
                    {p.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <SquareDot size={12} />
                    {p.size}
                  </span>
                </div>
                <div className="text-base font-extrabold text-[#E25704]">{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
