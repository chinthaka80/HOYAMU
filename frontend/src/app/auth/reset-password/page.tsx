'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resetPasswordSchema = z
  .object({
    password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  });

type ResetFormValues = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ResetFormValues) => {
    console.log('Posting password reset confirmation...');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-12">
      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-[#222222]">Set New Password</h2>
          <p className="text-sm text-[#6B7280] mt-2">
            Please enter your new password below.
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-4">
            <div className="h-12 w-12 bg-[#16A34A]/10 text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-lg font-medium text-[#222222]">Password Changed</h3>
            <p className="text-sm text-[#6B7280] mt-2">
              Your password has been reset successfully. You can now login with your new password.
            </p>
            <div className="mt-6">
              <Link href="/auth/login" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E25704] hover:underline">
                Go to Sign In
                <ArrowLeft className="rotate-180" size={16} />
              </Link>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* New Password */}
            <div>
              <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
                New Password *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
                  <Lock size={18} />
                </span>
                <input
                  {...register('password')}
                  type="password"
                  placeholder="••••••••"
                  className={`w-full h-11 pl-10 pr-4 bg-white border rounded-xl text-sm text-[#222222] placeholder-[#9CA3AF] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                    errors.password ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                  }`}
                />
              </div>
              {errors.password && (
                <p className="text-[#DC2626] text-xs mt-1.5">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
                  <Lock size={18} />
                </span>
                <input
                  {...register('confirmPassword')}
                  type="password"
                  placeholder="••••••••"
                  className={`w-full h-11 pl-10 pr-4 bg-white border rounded-xl text-sm text-[#222222] placeholder-[#9CA3AF] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                    errors.confirmPassword ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                  }`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-[#DC2626] text-xs mt-1.5">{errors.confirmPassword.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-[#E25704] hover:bg-[#C94D03] text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                'Reset Password'
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
