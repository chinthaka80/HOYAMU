'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  BarChart3,
  PlusCircle,
  Settings,
  User as UserIcon,
  MessageSquare,
  Bell,
  Star,
  LogOut,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/hooks/useUser';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/useToast';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import Loading from '@/components/Loading';

export default function DashboardPage() {
  const { data: userResponse, isLoading: isUserLoading } = useUser();
  const { logout } = useAuth();
  const toast = useToast();
  const router = useRouter();
  const { setUser } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'home' | 'listings' | 'favorites' | 'messages' | 'notifications'>('home');

  const user = userResponse?.data;

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      toast.success('Logged Out', 'You have logged out successfully.');
      router.push('/auth/login');
    } catch (err) {
      toast.error('Logout Failed', 'An error occurred.');
    }
  };

  if (isUserLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <Loading />
      </div>
    );
  }

  if (!user) {
    if (typeof window !== 'undefined') {
      router.push('/auth/login');
    }
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="h-16 w-16 bg-[#E25704]/10 text-[#E25704] rounded-2xl flex items-center justify-center border border-[#E25704]/20 flex-shrink-0">
              <UserIcon size={32} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                <h1 className="text-xl font-bold tracking-tight">Welcome back, {user.first_name}!</h1>
                <span className="text-[10px] font-semibold bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20 flex items-center gap-0.5">
                  <ShieldCheck size={10} />
                  Verified Member
                </span>
              </div>
              <p className="text-xs text-[#6B7280]">
                Last Login: {user.last_login_at ? new Date(user.last_login_at).toLocaleString() : 'Just Now'}
              </p>
            </div>
          </div>
          <Link href="/search">
            <Button className="h-10 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all">
              <PlusCircle size={16} />
              Post New Ad
            </Button>
          </Link>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Menu */}
          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm h-fit space-y-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'home' ? 'bg-[#E25704]/10 text-[#E25704]' : 'text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]'
              }`}
            >
              <LayoutDashboard size={16} />
              Dashboard Home
            </button>
            <button
              onClick={() => setActiveTab('listings')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'listings' ? 'bg-[#E25704]/10 text-[#E25704]' : 'text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]'
              }`}
            >
              <ShoppingBag size={16} />
              My Listings
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'favorites' ? 'bg-[#E25704]/10 text-[#E25704]' : 'text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]'
              }`}
            >
              <Heart size={16} />
              Saved Listings
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'messages' ? 'bg-[#E25704]/10 text-[#E25704]' : 'text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]'
              }`}
            >
              <MessageSquare size={16} />
              Messages
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'notifications' ? 'bg-[#E25704]/10 text-[#E25704]' : 'text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]'
              }`}
            >
              <Bell size={16} />
              Notifications
            </button>
            <Link href="/profile" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]">
              <UserIcon size={16} />
              My Profile
            </Link>
            <Link href="/settings" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#6B7280] hover:bg-[#FAFAFA] hover:text-[#222222]">
              <Settings size={16} />
              Account Settings
            </Link>
            <div className="border-t border-[#E5E7EB] my-2 pt-2">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut size={16} />
                Log Out
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3 space-y-6">
            {activeTab === 'home' && (
              <>
                {/* Statistics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  <div className="bg-white border border-[#E5E7EB] p-4 rounded-xl shadow-sm space-y-2">
                    <div className="h-8 w-8 bg-[#E25704]/10 text-[#E25704] rounded-lg flex items-center justify-center">
                      <ShoppingBag size={16} />
                    </div>
                    <h3 className="text-xl font-bold">0</h3>
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wider">Listings</p>
                  </div>

                  <div className="bg-white border border-[#E5E7EB] p-4 rounded-xl shadow-sm space-y-2">
                    <div className="h-8 w-8 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center">
                      <BarChart3 size={16} />
                    </div>
                    <h3 className="text-xl font-bold">0</h3>
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wider">Views</p>
                  </div>

                  <div className="bg-white border border-[#E5E7EB] p-4 rounded-xl shadow-sm space-y-2">
                    <div className="h-8 w-8 bg-pink-500/10 text-pink-500 rounded-lg flex items-center justify-center">
                      <Heart size={16} />
                    </div>
                    <h3 className="text-xl font-bold">0</h3>
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wider">Favorites</p>
                  </div>

                  <div className="bg-white border border-[#E5E7EB] p-4 rounded-xl shadow-sm space-y-2">
                    <div className="h-8 w-8 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center">
                      <Star size={16} />
                    </div>
                    <h3 className="text-xl font-bold">0</h3>
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wider">Reviews</p>
                  </div>

                  <div className="bg-white border border-[#E5E7EB] p-4 rounded-xl shadow-sm space-y-2 col-span-2 sm:col-span-1">
                    <div className="h-8 w-8 bg-purple-500/10 text-purple-500 rounded-lg flex items-center justify-center">
                      <MessageSquare size={16} />
                    </div>
                    <h3 className="text-xl font-bold">0</h3>
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wider">Messages</p>
                  </div>
                </div>

                {/* Empty views guide */}
                <div className="bg-white border border-[#E5E7EB] p-12 rounded-2xl shadow-sm text-center space-y-4">
                  <p className="text-sm text-[#6B7280]">You have not posted any classified listings yet.</p>
                  <Link href="/search" className="inline-block">
                    <Button variant="outline" className="h-9 px-4 border-[#E5E7EB] text-xs font-semibold rounded-xl">
                      Browse Marketplace
                    </Button>
                  </Link>
                </div>
              </>
            )}

            {activeTab === 'listings' && (
              <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">My Listings</h3>
                <p className="text-xs text-[#6B7280]">No active advertisements found.</p>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">Saved Listings</h3>
                <p className="text-xs text-[#6B7280]">No favorited advertisements found.</p>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">Messages</h3>
                <p className="text-xs text-[#6B7280]">No messages or inquiries received yet.</p>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">Notifications</h3>
                <p className="text-xs text-[#6B7280]">No notifications available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
