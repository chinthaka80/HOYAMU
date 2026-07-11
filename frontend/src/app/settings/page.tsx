'use client';

import React from 'react';
import Link from 'next/link';
import { Settings, Lock, Bell, Eye, ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8 text-[#222222]">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Back Link */}
        <div className="flex items-center gap-2">
          <Link href="/profile" className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#222222] font-semibold">
            <ArrowLeft size={14} />
            Back to Profile
          </Link>
        </div>

        {/* Header Title */}
        <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center">
              <Settings size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Account Settings</h1>
          </div>
          <p className="text-xs text-[#6B7280]">Configure your notifications preferences, security credentials, and profile visibility settings.</p>
        </div>

        {/* Settings Divisions Grid */}
        <div className="space-y-6">
          {/* Security Box */}
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider pb-3 border-b border-[#E5E7EB] flex items-center gap-2">
              <Lock size={16} className="text-[#E25704]" />
              Password & Security
            </h3>
            <form className="space-y-4 max-w-md">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#6B7280]">Current Password</label>
                <input type="password" placeholder="••••••••" className="w-full h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm" />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#6B7280]">New Password</label>
                <input type="password" placeholder="••••••••" className="w-full h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm" />
              </div>
              <Button type="button" size="sm" className="h-9 px-4 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5">
                <Save size={14} />
                Update Password
              </Button>
            </form>
          </div>

          {/* Notifications Box */}
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider pb-3 border-b border-[#E5E7EB] flex items-center gap-2">
              <Bell size={16} className="text-[#E25704]" />
              Notification Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-0.5">
                  <label className="text-xs font-semibold text-[#222222]">Email Alerts</label>
                  <p className="text-[11px] text-[#6B7280]">Receive email alerts when customers message your listings.</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-[#E5E7EB] text-[#E25704] focus:ring-[#E25704]" />
              </div>
              <div className="flex items-start justify-between border-t border-[#E5E7EB] pt-4">
                <div className="space-y-0.5">
                  <label className="text-xs font-semibold text-[#222222]">System Updates</label>
                  <p className="text-[11px] text-[#6B7280]">Get notified of upcoming feature launches and technical Blueprints releases.</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-[#E5E7EB] text-[#E25704] focus:ring-[#E25704]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
