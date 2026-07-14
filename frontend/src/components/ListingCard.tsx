'use client';

import React from 'react';
import { MapPin, Eye, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

interface ListingCardProps {
  title: string;
  price: string;
  location: string;
  category: string;
  link: string;
}

export default function ListingCard({ title, price, location, category, link }: ListingCardProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:border-[#E25704] transition-all overflow-hidden">
      <div className="h-44 bg-[#E25704]/5 flex items-center justify-center border-b border-[#E5E7EB] relative">
        <ShoppingBag size={48} className="text-[#E25704]/20" />
        <span className="absolute top-3 left-3 bg-[#E25704] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
          {category}
        </span>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-bold text-sm leading-tight line-clamp-1 hover:text-[#E25704] transition-colors">
            <Link href={link}>{title}</Link>
          </h3>
          <p className="text-xs text-[#6B7280] flex items-center gap-1">
            <MapPin size={12} />
            {location}
          </p>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-[#E5E7EB]">
          <span className="text-sm font-extrabold text-[#E25704]">{price}</span>
          <Link href={link} className="text-xs text-[#6B7280] hover:text-[#222222] flex items-center gap-1 font-semibold">
            <Eye size={12} />
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
