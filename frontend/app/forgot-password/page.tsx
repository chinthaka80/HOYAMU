'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type ForgotFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: ForgotFormValues) => {
    console.log('Request password reset email:', data.email);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-12">
      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/login" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] hover:text-[#222222]">
            <ArrowLeft size={16} />
            Back to Sign In
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-[#222222]">Reset Password</h2>
          <p className="text-sm text-[#6B7280] mt-2">
            Enter your registered email address and we will send you a link to reset your password.
          </p>
        </div>

        {isSent ? (
          <div className="text-center py-4">
            <div className="h-12 w-12 bg-[#16A34A]/10 text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={24} />
            </div>
            <h3 className="text-lg font-medium text-[#222222]">check Your email</h3>
            <p className="text-sm text-[#6B7280] mt-2">
              We have sent a password reset link to your email address. Please follow the instructions to reset your password.
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
                email Address *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
                  <Mail size={18} />
                </span>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="chinthaka@hoyamu.net"
                  className={`w-full h-11 pl-10 pr-4 bg-white border rounded-xl text-sm text-[#222222] placeholder-[#9CA3AF] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                    errors.email ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[#DC2626] text-xs mt-1.5">{errors.email.message}</p>
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
                'Send Reset Link'
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
