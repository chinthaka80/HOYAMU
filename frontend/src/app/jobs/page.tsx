'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Briefcase, DollarSign, Calendar, ChevronRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JobsBoardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');

  const jobs = [
    {
      uuid: 'job-1',
      title: 'Senior Software Engineer (React / Next.js)',
      company: 'Hoyamu Software Systems',
      location: 'Colombo 7',
      salary: 'LKR 250,000 - 350,000 /mo',
      type: 'Full-time',
      experience: '5+ Years',
      posted: '2 days ago',
      education: 'BSc in Computer Science or equivalent',
    },
    {
      uuid: 'job-2',
      title: 'Marketing & Sales Executive',
      company: 'Nuwan Auto repair & Hybrid Center',
      location: 'Colombo 3',
      salary: 'LKR 80,000 + Commissions /mo',
      type: 'Full-time',
      experience: '1-3 Years',
      posted: '3 days ago',
      education: 'A/L or Professional Diploma',
    },
    {
      uuid: 'job-3',
      title: 'Real Estate Sales Agent',
      company: 'Hoyamu Properties Pvt Ltd',
      location: 'Galle Face, Colombo',
      salary: 'Commission-based',
      type: 'Part-time',
      experience: 'No Experience Required',
      posted: '1 week ago',
      education: 'O/L minimum qualifications',
    },
    {
      uuid: 'job-4',
      title: 'Mechanical Auto Technician',
      company: 'Nuwan Auto repair Center',
      location: 'Kurunegala Town',
      salary: 'LKR 100,000 /mo',
      type: 'Full-time',
      experience: '2+ Years',
      posted: 'Just now',
      education: 'NVQ Level 4 certificate',
    },
  ];

  return (
    <div className="flex-1 w-full bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-xs text-[#6B7280] mb-4">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-2">&gt;</span>
          <span className="text-[#222222] font-medium">Jobs Portal</span>
        </nav>

        {/* Header Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#222222]">Employment Vacancies in Sri Lanka</h1>
          <p className="text-xs text-[#6B7280] mt-1">Search full-time, part-time, and remote jobs at leading local companies</p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white border border-[#E5E7EB] p-4 rounded-2xl mb-8 flex flex-col md:flex-row gap-3 shadow-sm">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search jobs by job title, company name or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#E25704] focus:bg-white"
            />
          </div>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="h-11 px-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-xs text-[#222222] focus:outline-none"
          >
            <option value="">Job Type (All)</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote / Freelance</option>
          </select>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="h-11 px-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-xs text-[#222222] focus:outline-none"
          >
            <option value="">Experience (All)</option>
            <option value="No Experience Required">Entry Level</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="5+ Years">Senior (5+ Years)</option>
          </select>
        </div>

        {/* Jobs Grid list */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.uuid}
              className="bg-white border border-[#E5E7EB] p-6 rounded-2xl hover:shadow-sm hover:border-[#E25704]/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="space-y-3 flex-1 text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-bold text-[#222222]">{job.title}</h3>
                  <span className="text-[10px] font-semibold bg-[#E25704]/10 text-[#E25704] px-2 py-0.5 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                {/* Meta details */}
                <p className="text-xs text-[#6B7280] font-semibold">{job.company}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#6B7280]">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={14} />
                    {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <GraduationCap size={14} />
                    {job.experience}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-[#FAFAFA]">
                <span className="text-[10px] text-[#9CA3AF] flex items-center gap-1">
                  <Calendar size={12} />
                  {job.posted}
                </span>
                <Link href={`/jobs/${job.uuid}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl text-xs border-[#E5E7EB] text-[#222222] font-semibold flex items-center gap-1 hover:bg-[#FAFAFA]">
                    View Job
                    <ChevronRight size={14} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
