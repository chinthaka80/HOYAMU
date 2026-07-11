'use client';

import React from 'react';
import Link from 'next/link';
import { Car, Home, Briefcase, FolderSearch, Newspaper, Store } from 'lucide-react';

export default function CategoriesPage() {
  const categoriesList = [
    { title: 'Vehicles', icon: <Car size={24} />, count: '1,240 Ads', link: '/vehicles', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
    { title: 'Properties', icon: <Home size={24} />, count: '890 Ads', link: '/properties', color: 'bg-green-500/10 text-green-500 border-green-500/20' },
    { title: 'Jobs Board', icon: <Briefcase size={24} />, count: '450 Openings', link: '/jobs', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
    { title: 'Marketplace', icon: <FolderSearch size={24} />, count: '3,120 Ads', link: '/search', color: 'bg-orange-500/10 text-orange-500 border-orange-500/20' },
    { title: 'Business Directory', icon: <Store size={24} />, count: '780 Directory Cards', link: '/business', color: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' },
    { title: 'Local News', icon: <Newspaper size={24} />, count: '120 Articles', link: '/news', color: 'bg-red-500/10 text-red-500 border-red-500/20' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight">Marketplace Categories</h1>
          <p className="text-md text-[#6B7280]">Browse listings by selecting a category channel</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoriesList.map((cat, idx) => (
            <Link key={idx} href={cat.link} className="block group">
              <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:border-[#E25704] transition-all flex flex-col items-center text-center gap-4">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${cat.color} group-hover:scale-105 transition-transform`}>
                  {cat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm group-hover:text-[#E25704] transition-colors">{cat.title}</h3>
                  <p className="text-xs text-[#6B7280]">{cat.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
