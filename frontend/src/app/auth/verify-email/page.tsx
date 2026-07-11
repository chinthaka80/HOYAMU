'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VerifyEmailPage() {
  const [isResending, setIsResending] = useState(false);
  const [isResent, setIsResent] = useState(false);

  const handleResend = async () => {
    setIsResending(true);
    // Mock API trigger
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsResending(false);
    setIsResent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-12">
      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8 text-center">
        {/* Icon */}
        <div className="h-12 w-12 bg-[#2563EB]/10 text-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail size={24} />
        </div>

        {/* Header */}
        <h2 className="text-xl font-semibold text-[#222222]">verify Your email</h2>
        <p className="text-sm text-[#6B7280] mt-3">
          We have sent a verification link to your email address. Please check your inbox and click the link to activate your account.
        </p>

        {/* Action Button */}
        <div className="mt-8 space-y-4">
          <Button
            onClick={handleResend}
            disabled={isResending || isResent}
            className="w-full h-11 bg-white hover:bg-[#F9FAFB] text-[#222222] border border-[#E5E7EB] font-medium rounded-xl transition-all"
          >
            {isResending ? (
              <span className="h-5 w-5 border-2 border-[#222222] border-t-transparent rounded-full animate-spin"></span>
            ) : isResent ? (
              'Verification email Resent'
            ) : (
              'Resend Verification email'
            )}
          </Button>

          <div className="pt-4 border-t border-[#E5E7EB]">
            <Link href="/auth/login" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E25704] hover:underline">
              Go to Sign In
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
