'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-[#E25704] tracking-tight">Contact Us</h1>
          <p className="text-md text-[#6B7280]">We would love to hear from you. Get in touch with our support team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details Info Sidebar */}
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider pb-3 border-b border-[#E5E7EB]">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#E25704] mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#6B7280]">Email Support</h4>
                  <p className="text-sm font-bold">info@hoyamu.net</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#E25704] mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#6B7280]">Hotline Support</h4>
                  <p className="text-sm font-bold">077 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E25704] mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#6B7280]">Headquarters</h4>
                  <p className="text-sm font-bold leading-relaxed">Galle Road, Colombo 03, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="md:col-span-2 bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider pb-4 border-b border-[#E5E7EB] mb-6">
              Send Message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-[#6B7280]">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-[#6B7280]">Email Address</label>
                  <input type="email" placeholder="email@domain.com" className="w-full h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-[#6B7280]">Message Topic</label>
                <input type="text" placeholder="Inquiry about business listing verification..." className="w-full h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-[#6B7280]">Detailed Message</label>
                <textarea rows={5} placeholder="Write your message here..." className="w-full p-3 bg-white border border-[#E5E7EB] rounded-xl text-sm focus:outline-none" />
              </div>

              <Button type="button" className="h-10 px-6 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all">
                <Send size={14} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
