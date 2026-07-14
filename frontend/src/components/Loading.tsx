'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center p-12 bg-transparent">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 border-4 border-[#E25704] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xs text-[#6B7280] font-semibold animate-pulse">Loading data...</p>
      </div>
    </div>
  );
}
