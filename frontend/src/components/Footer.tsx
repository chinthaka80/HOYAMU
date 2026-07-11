'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-[#F2F2F2] border-t border-white/5 pt-12 pb-8 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-[#E25704] tracking-tight">
              HOYAMU.NET
            </Link>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              HOYAMU.NET is Sri Lanka's largest digital super platform, designed to connect searchers, buyers, sellers, businesses, employers, and job-seekers in one centralized ecosystem.
            </p>
            <p className="text-xs text-[#E25704] font-medium">හොයන හැමදේම එකම තැන</p>
          </div>

          {/* Column 2: Categories Marketplace */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Marketplace</h4>
            <ul className="space-y-2 text-xs text-[#9CA3AF]">
              <li>
                <Link href="/search" className="hover:text-white transition-colors">Classified Ads</Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">Jobs Board</Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-white transition-colors">Vehicles Marketplace</Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white transition-colors">Properties Hub</Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-white transition-colors">Business Directory</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs text-[#9CA3AF]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">News & Guides</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">Help & Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacts & Address */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-2 text-xs text-[#9CA3AF] list-none p-0">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#E25704]" />
                info@hoyamu.net
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#E25704]" />
                +94 112 345 678
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[#E25704]" />
                Colombo, Sri Lanka
              </li>
            </ul>
            {/* Social icons */}
            <div className="flex gap-4 pt-3 text-[#9CA3AF]">
              <a href="#" className="hover:text-white"><Facebook size={16} /></a>
              <a href="#" className="hover:text-white"><Twitter size={16} /></a>
              <a href="#" className="hover:text-white"><Instagram size={16} /></a>
              <a href="#" className="hover:text-white"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>

        {/* Lower Banner */}
        <div className="border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} HOYAMU.NET. All Rights Reserved. Prepared by Chinthaka Nuwan.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#6B7280]">
            <span>LankaPay Partnered</span>
            <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full"></span>
            <span>Secured Session</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
