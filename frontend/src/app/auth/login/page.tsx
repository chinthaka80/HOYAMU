'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { LogIn, Key, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Zod Login validation schema
const loginSchema = z.object({
  identity: z.string().min(3, { message: 'Email, Username or Phone must be at least 3 characters.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  rememberMe: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identity: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    // API connection logic hook placeholder
    console.log('Login credentials payload:', data);
    return new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-12">
      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-[#E25704] tracking-tight">
            HOYAMU.NET
          </Link>
          <h2 className="text-xl font-semibold text-[#222222] mt-3">Welcome Back</h2>
          <p className="text-sm text-[#6B7280] mt-1">හොයන හැමදේම එකම තැන</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Identity Field */}
          <div>
            <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
              Email, Username or Phone *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
                <Mail size={18} />
              </span>
              <input
                {...register('identity')}
                type="text"
                placeholder="e.g. chinthaka@hoyamu.net"
                className={`w-full h-11 pl-10 pr-4 bg-white border rounded-xl text-sm text-[#222222] placeholder-[#9CA3AF] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                  errors.identity ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                }`}
              />
            </div>
            {errors.identity && (
              <p className="text-[#DC2626] text-xs mt-1.5">{errors.identity.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider">
                Password *
              </label>
              <Link href="/auth/forgot-password" className="text-xs font-medium text-[#E25704] hover:underline">
                Forgot Password?
              </Link>
            </div>
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

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              {...register('rememberMe')}
              type="checkbox"
              id="rememberMe"
              className="h-4 w-4 rounded border-[#E5E7EB] text-[#E25704] focus:ring-[#E25704]"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-[#6B7280] select-none">
              Remember me
            </label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-11 bg-[#E25704] hover:bg-[#C94D03] text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <LogIn size={18} />
                Sign In
              </>
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 pt-6 border-t border-[#E5E7EB]">
          <p className="text-sm text-[#6B7280]">
            Don't have an account?{' '}
            <Link href="/auth/register" className="font-semibold text-[#E25704] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
