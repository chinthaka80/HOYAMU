'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User as UserIcon, Mail, Phone, MapPin, Calendar, Edit2, Shield, Settings, ListPlus, LogOut, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/hooks/useUser';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/useToast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Loading from '@/components/Loading';
import { authService } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

const profileSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(9, { message: 'Please enter a valid phone number.' }),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const { data: userResponse, isLoading: isUserLoading, refetch } = useUser();
  const { logout } = useAuth();
  const toast = useToast();
  const router = useRouter();
  const { setUser: setGlobalUser } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);

  const user = userResponse?.data;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.first_name || '',
        lastName: user.last_name || '',
        email: user.email || '',
        phone: user.phone || '',
      });
    }
  }, [user, reset]);

  const handleLogout = async () => {
    try {
      await logout();
      setGlobalUser(null);
      toast.success('Logged Out', 'You have logged out successfully.');
      router.push('/auth/login');
    } catch (err) {
      toast.error('Logout Failed', 'An error occurred.');
    }
  };

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      const response = await authService.updateProfile({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
      });
      if (response?.success) {
        toast.success('Success', 'Profile updated successfully.');
        setIsEditing(false);
        refetch();
      }
    } catch (err: any) {
      toast.error('Update Failed', err?.response?.data?.message || 'Check inputs.');
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
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] text-center space-y-4 px-4">
        <p className="text-sm text-[#6B7280]">Please log in to view your profile.</p>
        <Link href="/auth/login">
          <Button className="h-10 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl">
            Go to Login
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8 text-[#222222]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Card Header */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="h-24 w-24 bg-[#E25704]/10 text-[#E25704] rounded-2xl flex items-center justify-center border border-[#E25704]/20 flex-shrink-0">
              <UserIcon size={48} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                <h1 className="text-2xl font-bold tracking-tight">
                  {user.first_name} {user.last_name}
                </h1>
                <span className="text-[10px] font-semibold bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20 flex items-center gap-0.5">
                  <Shield size={10} />
                  Verified Member
                </span>
              </div>
              <p className="text-xs text-[#6B7280]">Manage your personal profile and account credentials</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="h-9 px-4 border-[#E5E7EB] text-sm text-[#6B7280] hover:text-[#222222] flex items-center gap-1.5 rounded-xl"
            >
              <LogOut size={14} />
              Logout
            </Button>
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
              <div className="flex justify-between items-center pb-4 border-b border-[#E5E7EB]">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Personal Information
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-[#E25704] hover:text-[#C94D03] flex items-center gap-1"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit2 size={12} />
                  {isEditing ? 'Cancel' : 'Edit'}
                </Button>
              </div>

              {isEditing ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">First Name</label>
                      <input
                        {...register('firstName')}
                        type="text"
                        className="w-full h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm"
                      />
                      {errors.firstName && <p className="text-[#DC2626] text-xs">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Last Name</label>
                      <input
                        {...register('lastName')}
                        type="text"
                        className="w-full h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm"
                      />
                      {errors.lastName && <p className="text-[#DC2626] text-xs">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Email Address</label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm"
                      />
                      {errors.email && <p className="text-[#DC2626] text-xs">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Mobile Number</label>
                      <input
                        {...register('phone')}
                        type="text"
                        className="w-full h-10 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm"
                      />
                      {errors.phone && <p className="text-[#DC2626] text-xs">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 px-6 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1"
                  >
                    {isSubmitting ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Check size={14} />
                        Save Changes
                      </>
                    )}
                  </Button>
                </form>
              ) : (
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
                      {user.district || 'Colombo'}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-medium text-[#6B7280] uppercase tracking-wider">Member Since</label>
                    <p className="text-sm font-semibold flex items-center gap-2">
                      <Calendar size={14} className="text-[#9CA3AF]" />
                      {new Date(user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                    </p>
                  </div>
                </div>
              )}
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
