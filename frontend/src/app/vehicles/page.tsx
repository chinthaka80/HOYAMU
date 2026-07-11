'use client';

import React from 'react';
import { Search, Car, Calendar, SlidersHorizontal, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VehiclesPage() {
  const dummyVehicles = [
    { title: 'Toyota Prius S-Grade 2018', price: 'Rs. 9,450,000', location: 'Colombo', mileage: '56,000 km', transmission: 'Automatic', type: 'Hybrid' },
    { title: 'Honda Vezel Z-Package 2016', price: 'Rs. 7,850,000', location: 'Gampaha', mileage: '82,000 km', transmission: 'Automatic', type: 'Hybrid' },
    { title: 'Suzuki Wagon R FZ 2018', price: 'Rs. 4,350,000', location: 'Kurunegala', mileage: '43,000 km', transmission: 'Automatic', type: 'Petrol' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Vehicles Marketplace</h1>
            <p className="text-xs text-[#6B7280]">Find cars, motorbikes, and vans in Sri Lanka</p>
          </div>
          <Button className="h-10 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all">
            <Car size={16} />
            Post Vehicle Ad
          </Button>
        </div>

        {/* Filter bar */}
        <div className="bg-white border border-[#E5E7EB] p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input type="text" placeholder="Search vehicles..." className="w-full h-10 pl-9 pr-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-sm" />
            <Search size={16} className="absolute left-3 top-3 text-[#6B7280]" />
          </div>
          <div className="flex gap-2">
            <select className="h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#222222]">
              <option>All Brands</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Suzuki</option>
            </select>
            <Button variant="outline" className="h-10 border-[#E5E7EB] text-sm text-[#6B7280] hover:text-[#222222] flex items-center gap-1.5 rounded-xl">
              <SlidersHorizontal size={14} />
              Filters
            </Button>
          </div>
        </div>

        {/* Vehicles Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dummyVehicles.map((v, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:border-[#E25704] transition-all overflow-hidden">
              <div className="h-44 bg-[#E25704]/5 flex items-center justify-center border-b border-[#E5E7EB] relative">
                <Car size={48} className="text-[#E25704]/20" />
                <span className="absolute top-3 left-3 bg-[#E25704] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {v.type}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm leading-tight line-clamp-1">{v.title}</h3>
                  <p className="text-xs text-[#6B7280] flex items-center gap-1">
                    <MapPin size={12} />
                    {v.location}
                  </p>
                </div>
                <div className="flex justify-between items-center text-xs text-[#6B7280] pt-2 border-t border-[#E5E7EB]">
                  <span>{v.mileage}</span>
                  <span>{v.transmission}</span>
                </div>
                <div className="text-base font-extrabold text-[#E25704]">{v.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
