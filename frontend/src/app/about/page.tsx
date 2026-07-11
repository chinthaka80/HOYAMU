'use client';

import React from 'react';
import { Target, Users, ShieldCheck, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-[#E25704] tracking-tight">About HOYAMU.NET</h1>
          <p className="text-md text-[#6B7280] max-w-xl mx-auto">
            හොයන හැමදේම එකම තැන - The ultimate Sri Lankan classifieds and service directory platform.
          </p>
        </div>

        {/* Brand Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-4">
            <div className="h-12 w-12 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center">
              <Target size={24} />
            </div>
            <h3 className="text-lg font-bold">Our Mission</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              To empower Sri Lankan businesses and individuals by providing a seamless, fast, and secure marketplace to search, list, and trade everything from real estate to vehicles and jobs.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-4">
            <div className="h-12 w-12 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold">Who We Are</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We are a team of passionate developers and entrepreneurs building a modern, localized digital ecosystem that connects buyers and sellers across all 9 provinces and 25 districts.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4">
              <div className="h-10 w-10 bg-[#10B981]/10 text-[#10B981] rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">Trust & Security</h4>
                <p className="text-xs text-[#6B7280] mt-1">Verified business listings and advanced fraud prevention protocols.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 bg-[#3B82F6]/10 text-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">Community First</h4>
                <p className="text-xs text-[#6B7280] mt-1">Supporting local communities and small home-based businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
