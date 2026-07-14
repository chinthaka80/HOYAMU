'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { LayoutDashboard, User, Settings } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#222222]">
      <Navbar />
      <div className="flex-grow max-w-6xl w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Menu */}
        <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm h-fit space-y-2">
          <Link href="/dashboard" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#E25704]/10 text-[#E25704]">
            <LayoutDashboard size={16} />
            Dashboard Home
          </Link>
          <Link href="/profile" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]">
            <User size={16} />
            My Profile
          </Link>
          <Link href="/settings" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]">
            <Settings size={16} />
            Account Settings
          </Link>
        </div>

        {/* Content area */}
        <main className="md:col-span-3">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
