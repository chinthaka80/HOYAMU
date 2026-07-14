'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Settings, Lock, Bell, ArrowLeft, Save, Trash2, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/useToast';
import { useAuthStore } from '@/store/authStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authService } from '@/services/auth';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, { message: 'Current password is required.' }),
    newPassword: z.string()
      .min(8, { message: 'Password must be at least 8 characters.' })
      .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
      .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
      .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New passwords don't match.",
    path: ['confirmPassword'],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function SettingsPage() {
  const toast = useToast();
  const { setUser } = useAuthStore();
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmitPassword = async (data: PasswordFormValues) => {
    try {
      const response = await authService.updatePassword({
        current_password: data.currentPassword,
        new_password: data.newPassword,
        new_password_confirmation: data.confirmPassword,
      });
      if (response?.success) {
        toast.success('Success', 'Password updated successfully.');
        reset();
      }
    } catch (err: any) {
      toast.error('Update Failed', err?.response?.data?.message || 'Failed to update password.');
    }
  };

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      const response = await authService.deleteAccount();
      if (response?.success) {
        setUser(null);
        toast.success('Account Deleted', 'Your account has been permanently removed.');
        setIsDeleteModalOpen(false);
        router.push('/');
      }
    } catch (err) {
      toast.error('Deletion Failed', 'Failed to delete account.');
    } finally {
      setIsDeleting(false);
    }
  };

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
            <form onSubmit={handleSubmit(onSubmitPassword)} className="space-y-4 max-w-md">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#6B7280]">Current Password</label>
                <input
                  {...register('currentPassword')}
                  type="password"
                  placeholder="••••••••"
                  className={`w-full h-10 px-3 bg-white border rounded-xl text-sm ${
                    errors.currentPassword ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                  }`}
                />
                {errors.currentPassword && <p className="text-[#DC2626] text-xs">{errors.currentPassword.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#6B7280]">New Password</label>
                <input
                  {...register('newPassword')}
                  type="password"
                  placeholder="••••••••"
                  className={`w-full h-10 px-3 bg-white border rounded-xl text-sm ${
                    errors.newPassword ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                  }`}
                />
                {errors.newPassword && <p className="text-[#DC2626] text-xs">{errors.newPassword.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#6B7280]">Confirm New Password</label>
                <input
                  {...register('confirmPassword')}
                  type="password"
                  placeholder="••••••••"
                  className={`w-full h-10 px-3 bg-white border rounded-xl text-sm ${
                    errors.confirmPassword ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                  }`}
                />
                {errors.confirmPassword && <p className="text-[#DC2626] text-xs">{errors.confirmPassword.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-10 px-6 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5"
              >
                {isSubmitting ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Save size={14} />
                    Update Password
                  </>
                )}
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

          {/* Danger Zone Box */}
          <div className="bg-white border border-red-200 p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider pb-3 border-b border-red-100 flex items-center gap-2 text-red-600">
              <ShieldAlert size={16} />
              Danger Zone
            </h3>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-0.5">
                <label className="text-xs font-semibold text-[#222222]">Delete Account Permanently</label>
                <p className="text-[11px] text-[#6B7280]">Once you delete your account, there is no going back. Please be certain.</p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setIsDeleteModalOpen(true)}
                className="h-9 px-4 rounded-xl text-xs font-semibold flex items-center gap-1.5"
              >
                <Trash2 size={14} />
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Account Deletion"
      >
        <div className="space-y-4">
          <p className="text-xs text-[#6B7280] leading-relaxed">
            Are you absolutely sure you want to delete your account? This action is permanent and will delete all your listings, business profiles, and account logs forever.
          </p>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDeleteModalOpen(false)}
              className="h-9 rounded-xl text-xs font-semibold"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              size="sm"
              disabled={isDeleting}
              onClick={handleDeleteAccount}
              className="h-9 rounded-xl text-xs font-semibold flex items-center gap-1"
            >
              {isDeleting ? (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                'Confirm Delete'
              )}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
