'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { use } from 'react';
import { Building, ShieldCheck, Star, MapPin, Phone, Mail, Globe, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default function BusinessDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { uuid } = resolvedParams;

  // Mock single details payload
  const business = {
    uuid: uuid,
    name: 'Nuwan Auto repair & Hybrid Center',
    description: 'Nuwan Auto Repair & Hybrid Center is Sri Lanka\'s leading specialized workshop for hybrid battery diagnostics, electrical tuning, general mechanical repairs, and complete automotive detailing.',
    rating: 4.8,
    reviewsCount: 34,
    category: 'Automotive Services',
    location: 'Colombo 3',
    address: '123 Galle Road, Colombo 3, Sri Lanka',
    phone: '0771234567',
    email: 'info@nuwanauto.lk',
    website: 'https://www.nuwanauto.lk',
    isVerified: true,
    hours: [
      { day: 'Monday - Friday', time: '08:00 - 17:00' },
      { day: 'Saturday', time: '08:00 - 13:00' },
      { day: 'Sunday', time: 'Closed' }
    ],
    reviews: [
      { id: 1, author: 'Chinthaka Nuwan', rating: 5, comment: 'Excellent hybrid battery service! Highly recommended workshop in Colombo.', date: '2026-07-01' },
      { id: 2, author: 'Sunil Perera', rating: 4, comment: 'Quick hybrid battery diagnostics. Staff is knowledgeable.', date: '2026-06-25' }
    ]
  };

  return (
    <div className="flex-1 w-full bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-6">
          <Link href="/business" className="inline-flex items-center gap-1 text-sm font-medium text-[#6B7280] hover:text-[#222222]">
            <ChevronLeft size={16} />
            Back to Directory
          </Link>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left panel: business details (Col span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl flex items-center justify-center text-[#E25704] flex-shrink-0">
                  <Building size={32} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-xl md:text-2xl font-bold text-[#222222]">{business.name}</h1>
                    {business.isVerified && (
                      <span className="text-[10px] font-semibold bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20 flex items-center gap-0.5">
                        <ShieldCheck size={10} />
                        Verified Member
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6B7280]">{business.category} &bull; {business.location}</p>
                  
                  {/* Reviews Star summary */}
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                    <span className="flex text-[#FFC107]">
                      <Star size={14} fill="currentColor" />
                    </span>
                    <span className="font-semibold text-[#222222]">{business.rating}</span>
                    <span>({business.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8 pt-8 border-t border-[#E5E7EB] space-y-3">
                <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider">About Business</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{business.description}</p>
              </div>
            </div>

            {/* Customer Reviews list */}
            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider pb-4 border-b border-[#E5E7EB]">
                Customer Reviews
              </h3>

              <div className="space-y-6">
                {business.reviews.map((rev) => (
                  <div key={rev.id} className="space-y-2 text-left">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-[#222222]">{rev.author}</h4>
                      <span className="text-xs text-[#9CA3AF]">{rev.date}</span>
                    </div>
                    <div className="flex text-[#FFC107]">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Contact info, hours, map (Col span 1) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact details */}
            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider pb-3 border-b border-[#E5E7EB]">
                Contact Info
              </h3>
              
              <ul className="space-y-3 text-xs text-[#6B7280]">
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#E25704]" />
                  {business.address}
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-[#E25704]" />
                  {business.phone}
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[#E25704]" />
                  {business.email}
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-[#E25704]" />
                  <a href={business.website} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#E25704]">
                    Visit Website
                  </a>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider pb-3 border-b border-[#E5E7EB] flex items-center gap-1.5">
                <Clock size={16} className="text-[#E25704]" />
                Business Hours
              </h3>

              <ul className="space-y-2 text-xs text-[#6B7280]">
                {business.hours.map((h, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span>{h.day}</span>
                    <span className="font-semibold text-[#222222]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
