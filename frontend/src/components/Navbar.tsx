'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Globe, User, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Category Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-[#E25704] tracking-tight">
              HOYAMU.NET
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link href="/search" className="text-sm font-medium text-[#222222] hover:text-[#E25704] transition-colors">
                Marketplace
              </Link>
              <Link href="/jobs" className="text-sm font-medium text-[#222222] hover:text-[#E25704] transition-colors">
                Jobs
              </Link>
              <Link href="/vehicles" className="text-sm font-medium text-[#222222] hover:text-[#E25704] transition-colors">
                Vehicles
              </Link>
              <Link href="/properties" className="text-sm font-medium text-[#222222] hover:text-[#E25704] transition-colors">
                Properties
              </Link>
              <Link href="/business" className="text-sm font-medium text-[#222222] hover:text-[#E25704] transition-colors">
                Directory
              </Link>
            </div>
          </div>

          {/* Quick Search & Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Quick Fuzzy Search bar */}
            <div className="relative w-64">
              <input
                type="text"
                placeholder="හොයන හැමදේම..."
                className="w-full h-9 pl-9 pr-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-xs text-[#222222] placeholder-[#9CA3AF] transition-all focus:outline-none focus:border-[#E25704] focus:bg-white"
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
                <Search size={14} />
              </span>
            </div>

            {/* Language Selection */}
            <Button variant="ghost" size="sm" className="text-xs text-[#6B7280] hover:text-[#222222] flex items-center gap-1">
              <Globe size={14} />
              සිංහල / EN
            </Button>

            {/* Authentication & Post ad */}
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className="text-xs font-semibold text-[#222222] hover:text-[#E25704]">
                Sign In
              </Button>
            </Link>

            <Link href="/auth/login">
              <Button size="sm" className="h-9 px-4 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all">
                <PlusCircle size={14} />
                Post Ad
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#222222] hover:text-[#E25704] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-4 pt-4 pb-6 space-y-4 shadow-inner">
          <div className="space-y-1">
            <Link
              href="/search"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-[#222222] hover:bg-[#FAFAFA] hover:text-[#E25704]"
            >
              Marketplace
            </Link>
            <Link
              href="/jobs"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-[#222222] hover:bg-[#FAFAFA] hover:text-[#E25704]"
            >
              Jobs
            </Link>
            <Link
              href="/vehicles"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-[#222222] hover:bg-[#FAFAFA] hover:text-[#E25704]"
            >
              Vehicles
            </Link>
            <Link
              href="/properties"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-[#222222] hover:bg-[#FAFAFA] hover:text-[#E25704]"
            >
              Properties
            </Link>
            <Link
              href="/business"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-[#222222] hover:bg-[#FAFAFA] hover:text-[#E25704]"
            >
              Directory
            </Link>
          </div>

          {/* Quick actions for mobile */}
          <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
            <Link href="/auth/login" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="outline" className="w-full h-10 border-[#E5E7EB] text-[#222222] text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5">
                <User size={16} />
                Sign In
              </Button>
            </Link>
            <Link href="/auth/login" onClick={() => setIsOpen(false)} className="w-full block">
              <Button className="w-full h-10 bg-[#E25704] hover:bg-[#C94D03] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5">
                <PlusCircle size={16} />
                Post Ad
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
