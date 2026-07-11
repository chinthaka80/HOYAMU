'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Shield, Settings, ListPlus, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  // Mock user profile details
  const [user, setUser] = useState({
    name: 'Kushan Silva',
    email: 'kushan@hoyamu.net',
    phone: '0771234567',
    district: 'Colombo',
    joinedDate: 'July 2026',
    role: 'Verified Member',
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8 text-[#222222]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Card Header */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="h-24 w-24 bg-[#E25704]/10 text-[#E25704] rounded-2xl flex items-center justify-center border border-[#E25704]/20 flex-shrink-0">
              <User size={48} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                <h1 className="text-2xl font-bold tracking-tight">{user.name}</h1>
                <span className="text-[10px] font-semibold bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20 flex items-center gap-0.5">
                  <Shield size={10} />
                  {user.role}
                </span>
              </div>
              <p className="text-xs text-[#6B7280]">Manage your personal profile and account credentials</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="h-9 px-4 border-[#E5E7EB] text-sm text-[#6B7280] hover:text-[#222222] flex items-center gap-1.5 rounded-xl">
                <LogOut size={14} />
                Logout
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="outline" size="sm" className="h-9 px-4 border-[#E5E7EB] text-sm text-[#6B7280] hover:text-[#222222] flex items-center gap-1.5 rounded-xl">
                <Settings size={14} />
                Settings
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Info Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider pb-4 border-b border-[#E5E7EB] flex justify-between items-center">
                <span>Personal Information</span>
                <Button variant="ghost" size="sm" className="h-8 text-xs text-[#E25704] hover:text-[#C94D03] flex items-center gap-1" onClick={() => setIsEditing(!isEditing)}>
                  <Edit2 size={12} />
                  {isEditing ? 'Cancel' : 'Edit'}
                </Button>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-medium text-[#6B7280] uppercase tracking-wider">Email Address</label>
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <Mail size={14} className="text-[#9CA3AF]" />
                    {user.email}
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-medium text-[#6B7280] uppercase tracking-wider">Mobile Number</label>
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <Phone size={14} className="text-[#9CA3AF]" />
                    {user.phone}
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-medium text-[#6B7280] uppercase tracking-wider">Location / District</label>
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <MapPin size={14} className="text-[#9CA3AF]" />
                    {user.district}
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-medium text-[#6B7280] uppercase tracking-wider">Member Since</label>
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <Calendar size={14} className="text-[#9CA3AF]" />
                    {user.joinedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats / Actions Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider pb-3 border-b border-[#E5E7EB]">
                Marketplace Stats
              </h3>
              <ul className="space-y-3 text-xs text-[#6B7280]">
                <li className="flex justify-between">
                  <span>Active Listings</span>
                  <span className="font-bold text-[#222222]">0</span>
                </li>
                <li className="flex justify-between">
                  <span>Saved Listings</span>
                  <span className="font-bold text-[#222222]">0</span>
                </li>
                <li className="flex justify-between">
                  <span>Reviews Posted</span>
                  <span className="font-bold text-[#222222]">0</span>
                </li>
              </ul>
              <Link href="/search" className="block w-full">
                <Button className="w-full h-10 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5">
                  <ListPlus size={16} />
                  Post First Ad
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
