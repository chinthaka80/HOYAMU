'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, Map, Link as LinkIcon, Compass, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GuidesPage() {
  const [activeTab, setActiveTab] = useState<'uni' | 'career'>('uni');

  const universities = [
    { name: 'University of Colombo (කොළඹ විශ්වවිද්‍යාලය)', website: 'https://cmb.ac.lk' },
    { name: 'University of Peradeniya (පේරාදෙණිය විශ්වවිද්‍යාලය)', website: 'https://www.pdn.ac.lk' },
    { name: 'University of Moratuwa (මොරටුව විශ්වවිද්‍යාලය)', website: 'https://uom.lk' },
    { name: 'University of Kelaniya (කැලණිය විශ්වවිද්‍යාලය)', website: 'https://kln.ac.lk' },
    { name: 'University of Sri Jayewardenepura (ශ්‍රී ජයවර්ධනපුර විශ්වවිද්‍යාලය)', website: 'https://www.sjp.ac.lk' },
    { name: 'University of Ruhuna (රුහුණ විශ්වවිද්‍යාලය)', website: 'https://www.ruh.ac.lk' },
  ];

  const careerPaths = [
    {
      stream: 'Physical Science (Combined Maths)',
      careers: [
        { title: 'Software Engineer / AI Specialist', description: 'Design complex algorithms and building AI systems.' },
        { title: 'Civil / Mechanical Engineer', description: 'Design structural works and infrastructural developments.' },
        { title: 'Data Scientist', description: 'Analyze business analytics metrics using statistical logic.' },
      ],
    },
    {
      stream: 'Biological Science',
      careers: [
        { title: 'Medical Doctor / Surgeon', description: 'Consulting and clinical practices in national hospitals.' },
        { title: 'Biomedical Researcher', description: 'Analyze molecular chemistry and genetic behaviors.' },
        { title: 'Pharmacist', description: 'Consulting and distributing clinical pharmaceutical items.' },
      ],
    },
    {
      stream: 'Commerce & Arts',
      careers: [
        { title: 'Chartered Accountant', description: 'Financial auditing and tax consulting roles.' },
        { title: 'Corporate Attorney', description: 'Legal advisor for business entities and properties operations.' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Link */}
        <div className="flex items-center gap-2">
          <Link href="/edu" className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#222222] font-semibold">
            <ArrowLeft size={14} />
            Back to Dashboard
          </Link>
        </div>

        {/* Header Title */}
        <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center">
              <GraduationCap size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">University & Career Guides</h1>
          </div>
          <p className="text-xs text-[#6B7280]">Navigate university entry requirements and map out career paths matching your A/L stream.</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#E5E7EB] gap-6">
          <button
            onClick={() => setActiveTab('uni')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'uni' ? 'border-[#E25704] text-[#E25704]' : 'border-transparent text-[#6B7280] hover:text-[#222222]'
            }`}
          >
            University Admissions (UGC)
          </button>
          <button
            onClick={() => setActiveTab('career')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'career' ? 'border-[#E25704] text-[#E25704]' : 'border-transparent text-[#6B7280] hover:text-[#222222]'
            }`}
          >
            Career Guidance & Job Mapping
          </button>
        </div>

        {/* Display Content */}
        <div className="space-y-6">
          {activeTab === 'uni' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* UGC Admissions Instructions */}
              <div className="md:col-span-2 bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider pb-3 border-b border-[#E5E7EB] flex items-center gap-1 text-[#E25704]">
                  <BookOpen size={16} />
                  How to Apply for UGC Admissions
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-[#4B5563]">
                  <li>
                    <strong>Check Minimum Requirements:</strong> Ensure you satisfy the minimum requirement of 3 'S' passes in one sitting at the G.C.E. A/L Examination.
                  </li>
                  <li>
                    <strong>Calculate Z-Score:</strong> Admissions are heavily based on the Z-score calculation determined by the UGC for each district.
                  </li>
                  <li>
                    <strong>Submit UGC Handbook:</strong> Review the official UGC handbook to find the specific course codes for your preferred streams.
                  </li>
                </ol>
              </div>

              {/* Sri Lankan University Directory */}
              <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider pb-3 border-b border-[#E5E7EB]">
                  University Directory
                </h3>
                <ul className="space-y-3">
                  {universities.map((uni, idx) => (
                    <li key={idx} className="text-xs">
                      <a
                        href={uni.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E25704] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <LinkIcon size={12} className="flex-shrink-0" />
                        {uni.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* Career Guidance Mapping */
            <div className="space-y-6">
              {careerPaths.map((path, idx) => (
                <div key={idx} className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-4">
                  <h3 className="text-sm font-bold pb-2 border-b border-[#E5E7EB] flex items-center gap-2 text-[#E25704]">
                    <Compass size={16} />
                    {path.stream}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {path.careers.map((career, cIdx) => (
                      <div key={cIdx} className="space-y-1">
                        <h4 className="font-bold text-xs sm:text-sm text-[#222222]">{career.title}</h4>
                        <p className="text-xs text-[#6B7280] leading-relaxed">{career.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
