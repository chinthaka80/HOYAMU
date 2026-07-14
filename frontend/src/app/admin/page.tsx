'use client';

import React from 'react';
import { ShieldAlert, Users, Database, Server, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#E5E7EB]">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <ShieldAlert size={26} className="text-[#E25704]" />
              Control Panel
            </h1>
            <p className="text-xs text-[#6B7280]">Platform Administration, database status checks, and configurations tools.</p>
          </div>
          <Button variant="outline" className="h-10 border-[#E5E7EB] text-xs font-semibold rounded-xl flex items-center gap-1.5 hover:text-[#222222]">
            <RefreshCw size={14} />
            Refresh Statistics
          </Button>
        </div>

        {/* Administration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Active Users</span>
              <Users size={18} className="text-[#E25704]" />
            </div>
            <div className="text-3xl font-black">1</div>
            <div className="text-[10px] text-green-500 font-bold">Local dev user</div>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Database Status</span>
              <Database size={18} className="text-[#E25704]" />
            </div>
            <div className="text-xl font-bold text-green-500 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-ping"></span>
              Connected
            </div>
            <div className="text-[10px] text-[#6B7280]">PostgreSQL 16 on local port 5432</div>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">System Portals</span>
              <Server size={18} className="text-[#E25704]" />
            </div>
            <div className="text-xl font-bold text-blue-500">API Active</div>
            <div className="text-[10px] text-[#6B7280]">NextJS 16 Client & Laravel 12 Server</div>
          </div>
        </div>
      </div>
    </div>
  );
}
