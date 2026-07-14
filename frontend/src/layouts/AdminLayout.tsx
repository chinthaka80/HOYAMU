'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldAlert, Settings, Database, Users } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#222222]">
      <Navbar />
      <div className="flex-grow max-w-6xl w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar admin list */}
        <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm h-fit space-y-2">
          <div className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider px-3 pb-2 border-b border-[#E5E7EB] mb-2">
            System Operations
          </div>
          <Link href="/admin" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#E25704]/10 text-[#E25704]">
            <ShieldAlert size={16} />
            System Control
          </Link>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#9CA3AF]">
            <Users size={16} />
            User Manager
          </div>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#9CA3AF]">
            <Database size={16} />
            DB Settings
          </div>
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
