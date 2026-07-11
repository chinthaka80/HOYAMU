'use client';

import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ShoppingBag, Heart, BarChart3, PlusCircle, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Member Dashboard</h1>
            <p className="text-xs text-[#6B7280]">Manage your active advertisements and listing views statistics.</p>
          </div>
          <Link href="/search">
            <Button className="h-10 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all">
              <PlusCircle size={16} />
              Post New Ad
            </Button>
          </Link>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Menu */}
          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm h-fit space-y-2">
            <Link href="/dashboard" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#E25704]/10 text-[#E25704]">
              <LayoutDashboard size={16} />
              Dashboard Home
            </Link>
            <Link href="/profile" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]">
              <User size={16} />
              My Profile
            </Link>
            <Link href="/settings" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]">
              <Settings size={16} />
              Account Settings
            </Link>
          </div>

          {/* Main Stats Block */}
          <div className="md:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-2">
                <div className="h-10 w-10 bg-[#E25704]/10 text-[#E25704] rounded-lg flex items-center justify-center">
                  <ShoppingBag size={20} />
                </div>
                <h3 className="text-2xl font-black">0</h3>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider">Active Listings</p>
              </div>

              <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-2">
                <div className="h-10 w-10 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center">
                  <Heart size={20} />
                </div>
                <h3 className="text-2xl font-black">0</h3>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider">Favorites Saved</p>
              </div>

              <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-2">
                <div className="h-10 w-10 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center">
                  <BarChart3 size={20} />
                </div>
                <h3 className="text-2xl font-black">0</h3>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider">Total Ad Views</p>
              </div>
            </div>

            {/* Empty view guide */}
            <div className="bg-white border border-[#E5E7EB] p-12 rounded-2xl shadow-sm text-center space-y-4">
              <p className="text-sm text-[#6B7280]">You have not posted any classified listings yet.</p>
              <Link href="/search" className="inline-block">
                <Button variant="outline" className="h-9 px-4 border-[#E5E7EB] text-xs font-semibold rounded-xl">
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
