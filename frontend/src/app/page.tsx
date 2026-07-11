'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Briefcase, Car, Home, ShieldCheck, Compass, Star, Mail, Github, Send, Terminal, Settings, Globe, MessageSquare, Newspaper, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PreLaunchLandingPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Mock subscription request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');
  };

  const features = [
    { title: 'Smart AI Search', icon: <Search size={22} />, desc: 'Fuzzy search understanding natural prompt queries in Sinhala, Tamil, and English.' },
    { title: 'Business Directory', icon: <Compass size={22} />, desc: 'Local directory profiles verified by admin logs with maps routing.' },
    { title: 'Jobs Board', icon: <Briefcase size={22} />, desc: 'Sri Lankan recruitment portal with online CV application managers.' },
    { title: 'Properties Hub', icon: <Home size={22} />, desc: 'Lands, houses, and apartment listings with perch-to-sqft calculators.' },
    { title: 'Vehicles Marketplace', icon: <Car size={22} />, desc: 'Car listings with automated make/model specification grids.' },
    { title: 'Classified Marketplace', icon: <ShoppingBag size={22} />, desc: 'General catalog trading with negotiated offers and direct chats.' },
    { title: 'AI Assistant', icon: <MessageSquare size={22} />, desc: 'Personalized recommendations agent guiding listing descriptions.' },
    { title: 'News Portal', icon: <Newspaper size={22} />, desc: 'Market intelligence guides, vehicle tips, and local business insights.' },
  ];

  const roadmap = [
    { ver: 'Version 0.1 (Foundations)', status: 'Completed', date: 'Q1 2026', desc: 'Project specs, ERD blueprints, Next.js client, and Laravel models routing.' },
    { ver: 'Version 0.5 (Core MVP)', status: 'Active Development', date: 'Q2 2026', desc: 'PostgreSQL database seeders, user login auth validation, and search portals.' },
    { ver: 'Version 1.0 (Public Beta)', status: 'Upcoming', date: 'Q3 2026', desc: 'Real-time chat channels, PayHere gateway payments, and moderation settings.' },
    { ver: 'Version 2.0 (AI Supercharge)', status: 'Planned', date: 'Q4 2026', desc: 'Fuzzy query natural processing translation and recommendation engines.' },
    { ver: 'Version 3.0 (Expansion)', status: 'Planned', date: '2027', desc: 'Cross-platform Flutter mobile applications and multi-country features.' },
  ];

  const technologies = [
    { name: 'Laravel 12', desc: 'API Engine' },
    { name: 'Next.js 16', desc: 'Client SSR' },
    { name: 'PostgreSQL', desc: 'Data Vault' },
    { name: 'Redis', desc: 'Cache & Queue' },
    { name: 'Docker', desc: 'Containers' },
    { name: 'Cloudflare', desc: 'CDN & WAF' },
  ];

  return (
    <div className="flex-1 w-full bg-[#FAFAFA] flex flex-col text-[#222222]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#222222] to-[#111111] text-white py-24 px-4 text-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E25704]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#E25704] font-semibold bg-[#E25704]/10 px-3.5 py-1.5 rounded-full border border-[#E25704]/20">
            <span className="w-1.5 h-1.5 bg-[#E25704] rounded-full animate-ping"></span>
            Join the Pre-Launch Early Access
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            HOYAMU.NET
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-[#E25704]">
            ශ්‍රී ලංකාවේ හොයන හැමදේම එකම තැන
          </h2>
          <p className="text-xs md:text-sm text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
            Properties &bull; Vehicles &bull; Jobs &bull; Businesses &bull; News &bull; Marketplace &bull; AI Search
          </p>

          {/* Quick Demo search box */}
          <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-1.5 rounded-xl border border-white/10 flex flex-col sm:flex-row gap-2 mt-8 shadow-2xl">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#9CA3AF]">
                <Search size={16} />
              </span>
              <input
                type="text"
                disabled
                placeholder="Fuzzy Search Demo: Prius below 8 million Colombo..."
                className="w-full h-10 pl-9 pr-4 bg-white/5 border border-white/10 rounded-lg text-xs text-white/50 cursor-not-allowed"
              />
            </div>
            <a href="#newsletter">
              <Button size="sm" className="w-full sm:w-auto h-10 px-6 bg-[#E25704] hover:bg-[#C94D03] text-white font-semibold rounded-lg text-xs transition-all">
                Get Early Access
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold">What is HOYAMU.NET?</h2>
        <p className="text-sm text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
          HOYAMU.NET is Sri Lanka's upcoming digital super platform combining classified ads, job boards, property portals, vehicle marketplaces, and verified local business directories with a natural language AI-assisted search companion.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="bg-white border-y border-[#E5E7EB] py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl font-bold">Ecosystem Features</h2>
            <p className="text-xs text-[#6B7280]">Unified tools powering the super platform directories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] border border-[#E5E7EB] p-6 rounded-2xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#222222]">{feat.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mockups Screenshots Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl font-bold">First Look: High-Fidelity UI Screens</h2>
          <p className="text-xs text-[#6B7280]">Interactive templates built for desktop and mobile viewports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E5E7EB] p-4 rounded-2xl space-y-3">
            <div className="h-40 bg-[#FAFAFA] rounded-xl flex flex-col items-center justify-center border border-dashed border-[#E5E7EB] text-[#6B7280]">
              <Eye size={24} className="mb-2" />
              <span className="text-xs font-semibold">Homepage Preview</span>
            </div>
            <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wide">1. Central Portal</h4>
            <p className="text-[11px] text-[#6B7280]">Tagline search banners, featured ads sliders and statistics.</p>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-4 rounded-2xl space-y-3">
            <div className="h-40 bg-[#FAFAFA] rounded-xl flex flex-col items-center justify-center border border-dashed border-[#E5E7EB] text-[#6B7280]">
              <Eye size={24} className="mb-2" />
              <span className="text-xs font-semibold">Search Filter Preview</span>
            </div>
            <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wide">2. Filters Sidebar</h4>
            <p className="text-[11px] text-[#6B7280]">Dynamic criteria selection, view-mode toggles, and list pages.</p>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-4 rounded-2xl space-y-3">
            <div className="h-40 bg-[#FAFAFA] rounded-xl flex flex-col items-center justify-center border border-dashed border-[#E5E7EB] text-[#6B7280]">
              <Eye size={24} className="mb-2" />
              <span className="text-xs font-semibold">Business Profile Preview</span>
            </div>
            <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wide">3. Business details</h4>
            <p className="text-[11px] text-[#6B7280]">Verified badges, details description tabs and reviews threads.</p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="bg-white border-y border-[#E5E7EB] py-16 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl font-bold">Platform Roadmap</h2>
            <p className="text-xs text-[#6B7280]">Our milestones timeline from setup to launch and expansion</p>
          </div>

          <div className="relative border-l-2 border-[#E5E7EB] pl-6 ml-4 space-y-8">
            {roadmap.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Dot */}
                <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-[#E25704] shadow-sm"></span>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm font-bold text-[#222222]">{step.ver}</h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      step.status === 'Completed' ? 'bg-[#16A34A]/10 text-[#16A34A]' :
                      step.status === 'Active Development' ? 'bg-[#2563EB]/10 text-[#2563EB]' : 'bg-[#6B7280]/10 text-[#6B7280]'
                    }`}>
                      {step.status}
                    </span>
                    <span className="text-xs text-[#9CA3AF] ml-auto">{step.date}</span>
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-center">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl font-bold">Ecosystem Technology Stack</h2>
          <p className="text-xs text-[#6B7280]">Built on secure, highly scalable enterprise-grade utilities</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {technologies.map((tech, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] p-4 rounded-xl flex flex-col justify-center">
              <span className="text-sm font-bold text-[#E25704]">{tech.name}</span>
              <span className="text-[10px] text-[#6B7280] mt-1">{tech.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup Form */}
      <section id="newsletter" className="bg-[#222222] text-white py-20 px-4 text-center w-full">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="h-12 w-12 bg-[#E25704]/10 text-[#E25704] rounded-full flex items-center justify-center mx-auto border border-[#E25704]/20">
            <Mail size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Join 10,000 Early Access Users</h2>
          <p className="text-xs text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
            Subscribe to our newsletter list and get early beta notifications, launch guides, and verified member discounts.
          </p>

          {isSubscribed ? (
            <div className="max-w-md mx-auto bg-white/5 border border-[#16A34A]/30 p-4 rounded-xl text-center space-y-1">
              <h4 className="text-sm font-bold text-[#16A34A]">Registration Successful!</h4>
              <p className="text-xs text-[#9CA3AF]">You are now registered for the early access queue. Thank you!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 h-11 px-4 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E25704] focus:ring-1 focus:ring-[#E25704]"
              />
              <Button type="submit" disabled={isSubmitting} className="h-11 px-6 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all">
                {isSubmitting ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send size={14} />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
