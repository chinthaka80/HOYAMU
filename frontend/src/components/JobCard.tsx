'use client';

import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  link: string;
}

export default function JobCard({ title, company, location, salary, type, link }: JobCardProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:border-[#E25704] transition-all flex flex-col justify-between gap-4">
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-2">
          <div className="space-y-1">
            <h3 className="font-bold text-sm leading-tight hover:text-[#E25704] transition-colors">
              <Link href={link}>{title}</Link>
            </h3>
            <p className="text-xs font-semibold text-[#6B7280]">{company}</p>
          </div>
          <span className="text-[10px] font-bold bg-[#E25704]/10 text-[#E25704] px-2 py-0.5 rounded-full border border-[#E25704]/20 flex-shrink-0">
            {type}
          </span>
        </div>
        <p className="text-xs text-[#9CA3AF] flex items-center gap-1">
          <MapPin size={12} />
          {location}
        </p>
      </div>
      <div className="flex justify-between items-center pt-2 border-t border-[#E5E7EB]">
        <span className="text-xs text-[#6B7280] font-medium">Monthly Salary</span>
        <span className="text-sm font-extrabold text-[#E25704]">{salary}</span>
      </div>
    </div>
  );
}
