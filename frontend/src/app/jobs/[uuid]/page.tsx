'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { use } from 'react';
import { Briefcase, MapPin, DollarSign, Calendar, GraduationCap, Clock, ChevronLeft, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default function JobDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { uuid } = resolvedParams;

  const [applied, setApplied] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);

  // Mock vacancy details payload
  const job = {
    uuid: uuid,
    title: 'Senior Software Engineer (React / Next.js)',
    company: 'Hoyamu Software Systems',
    companyDesc: 'Hoyamu Software Systems is Sri Lanka\'s leading engineering house designing enterprise-grade SaaS models and super platforms for digital classified directory markets.',
    location: 'Colombo 7, Sri Lanka',
    salary: 'LKR 250,000 - 350,000 /mo',
    type: 'Full-time',
    experience: '5+ Years',
    education: 'BSc in Computer Science, Software Engineering or equivalent degree.',
    deadline: '2026-08-15',
    posted: '2 days ago',
    description: 'We are looking for a Senior Software Engineer to lead the design and scaling of our client-side Next.js applications. You will collaborate closely with product managers, backend engineers (Laravel), and UX designers to build premium web portal components.',
    requirements: [
      'Strong proficiency in React.js, Next.js, and TypeScript.',
      'Experience with CSS frameworks like Tailwind CSS.',
      'Familiarity with state management libraries and query tools (React Query/Axios).',
      'Knowledge of REST API integrations and secure Sanctum token systems.',
      '5+ years of production experience in web application development.'
    ]
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="flex-1 w-full bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-6">
          <Link href="/jobs" className="inline-flex items-center gap-1 text-sm font-medium text-[#6B7280] hover:text-[#222222]">
            <ChevronLeft size={16} />
            Back to Jobs
          </Link>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left panel: job description (Col span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl md:text-2xl font-bold text-[#222222]">{job.title}</h1>
                  <span className="text-[10px] font-semibold bg-[#E25704]/10 text-[#E25704] px-2.5 py-0.5 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">{job.company}</h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#6B7280] pt-4 border-t border-[#FAFAFA]">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-[#E25704]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign size={16} className="text-[#E25704]" />
                    {job.salary}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap size={16} className="text-[#E25704]" />
                    {job.experience}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8 pt-8 border-t border-[#E5E7EB] space-y-3">
                <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider">Job Description</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements list */}
              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider">Key Requirements</h3>
                <ul className="list-disc pl-5 text-sm text-[#6B7280] space-y-2">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company profile summary */}
            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-3 text-left">
              <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider">About Company</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{job.companyDesc}</p>
            </div>
          </div>

          {/* Right panel: Application form, metadata (Col span 1) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Apply Form */}
            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm text-left">
              <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider pb-3 border-b border-[#E5E7EB] flex items-center gap-1.5">
                <Briefcase size={16} className="text-[#E25704]" />
                Easy Application
              </h3>

              {applied ? (
                <div className="bg-[#16A34A]/10 border border-[#16A34A]/20 p-4 rounded-xl text-center space-y-2 mt-4">
                  <CheckCircle2 size={32} className="text-[#16A34A] mx-auto" />
                  <h4 className="text-xs font-bold text-[#16A34A]">Application Submitted!</h4>
                  <p className="text-[11px] text-[#6B7280]">Our HR recruiters will contact you regarding review updates.</p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 mt-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-[#222222] uppercase tracking-wider">Upload Resume (PDF)</label>
                    <div className="border border-dashed border-[#E5E7EB] hover:border-[#E25704]/30 rounded-xl p-4 text-center cursor-pointer bg-[#FAFAFA] transition-all">
                      <input
                        type="file"
                        required
                        accept=".pdf"
                        onChange={(e) => setCvFile(e.target.files ? e.target.files[0] : null)}
                        className="hidden"
                        id="resume-file"
                      />
                      <label htmlFor="resume-file" className="cursor-pointer space-y-1 block">
                        <span className="block text-xs font-semibold text-[#E25704]">Choose File</span>
                        <span className="block text-[10px] text-[#9CA3AF]">
                          {cvFile ? cvFile.name : 'Upload PDF (Max 5MB)'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-10 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all">
                    <Send size={14} />
                    Apply for Vacancy
                  </Button>
                </form>
              )}
            </div>

            {/* Application deadlines metadata */}
            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-4 text-left">
              <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider pb-3 border-b border-[#E5E7EB] flex items-center gap-1.5">
                <Clock size={16} className="text-[#E25704]" />
                Job Metadata
              </h3>

              <ul className="space-y-3 text-xs text-[#6B7280]">
                <li className="flex justify-between items-center">
                  <span>Posted Date</span>
                  <span className="font-semibold text-[#222222]">{job.posted}</span>
                </li>
                <li className="flex justify-between items-center text-[#DC2626]">
                  <span className="flex items-center gap-1">
                    <ShieldAlert size={12} />
                    Deadline
                  </span>
                  <span className="font-semibold">{job.deadline}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
