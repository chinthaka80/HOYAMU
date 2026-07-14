'use client';

import React from 'react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-12 text-[#222222]">
      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8 space-y-6">
        {/* Header Logo */}
        <div className="text-center">
          <Link href="/" className="text-2xl font-bold text-[#E25704] tracking-tight">
            HOYAMU.NET
          </Link>
          <p className="text-xs text-[#6B7280] mt-1.5">හොයන හැමදේම එකම තැන</p>
        </div>

        {/* Content Box */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
