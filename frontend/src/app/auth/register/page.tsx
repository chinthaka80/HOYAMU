'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { User as UserIcon, Mail, Phone, Lock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/useToast';
import { useRouter } from 'next/navigation';

// Zod Registration validation schema with strict password rules
const registerSchema = z
  .object({
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
    username: z.string().min(3, { message: 'Username must be at least 3 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phone: z.string().min(9, { message: 'Please enter a valid phone number.' }),
    password: z.string()
      .min(8, { message: 'Password must be at least 8 characters.' })
      .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
      .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
      .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character.' }),
    confirmPassword: z.string(),
    district: z.string().min(1, { message: 'Please select a district.' }),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms & conditions.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { register: registerUser } = useAuth();
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      district: '',
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const response = await registerUser({
        first_name: data.firstName,
        last_name: data.lastName,
        username: data.username,
        email: data.email,
        phone: data.phone,
        password: data.password,
        password_confirmation: data.confirmPassword,
        district: data.district,
      });
      if (response?.success) {
        toast.success('Registration Successful', response.message || 'You can now log in.');
        router.push('/auth/login');
      }
    } catch (err: any) {
      toast.error('Registration Failed', err?.response?.data?.message || 'Check registration details.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-12">
      <div className="w-full max-w-lg bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-[#E25704] tracking-tight">
            HOYAMU.NET
          </Link>
          <h2 className="text-xl font-semibold text-[#222222] mt-3">Create an Account</h2>
          <p className="text-sm text-[#6B7280] mt-1">ශ්‍රී ලංකාවේ විශාලතම ඩිජිටල් පරිසරය හා එක්වන්න</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
                First Name *
              </label>
              <input
                {...register('firstName')}
                type="text"
                placeholder="Kushan"
                className={`w-full h-11 px-4 bg-white border rounded-xl text-sm text-[#222222] placeholder-[#9CA3AF] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                  errors.firstName ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                }`}
              />
              {errors.firstName && (
                <p className="text-[#DC2626] text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
                Last Name *
              </label>
              <input
                {...register('lastName')}
                type="text"
                placeholder="Nuwan"
                className={`w-full h-11 px-4 bg-white border rounded-xl text-sm text-[#222222] placeholder-[#9CA3AF] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                  errors.lastName ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                }`}
              />
              {errors.lastName && (
                <p className="text-[#DC2626] text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Username Field */}
          <div>
            <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
              Username *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
                <UserIcon size={18} />
              </span>
              <input
                {...register('username')}
                type="text"
                placeholder="kushan_silva"
                className={`w-full h-11 pl-10 pr-4 bg-white border rounded-xl text-sm text-[#222222] placeholder-[#9CA3AF] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                  errors.username ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                }`}
              />
            </div>
            {errors.username && (
              <p className="text-[#DC2626] text-xs mt-1.5">{errors.username.message}</p>
            )}
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
                  <Mail size={18} />
                </span>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="kushan@hoyamu.net"
                  className={`w-full h-11 pl-10 pr-4 bg-white border rounded-xl text-sm text-[#222222] placeholder-[#9CA3AF] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                    errors.email ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[#DC2626] text-xs mt-1.5">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
                Mobile Number *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
                  <Phone size={18} />
                </span>
                <input
                  {...register('phone')}
                  type="text"
                  placeholder="e.g. 0771234567"
                  className={`w-full h-11 pl-10 pr-4 bg-white border rounded-xl text-sm text-[#222222] placeholder-[#9CA3AF] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                    errors.phone ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-[#DC2626] text-xs mt-1.5">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
              District *
            </label>
            <select
              {...register('district')}
              className={`w-full h-11 px-4 bg-white border rounded-xl text-sm text-[#222222] transition-colors focus:outline-none focus:border-[#E25704] focus:ring-2 focus:ring-[#E25704]/10 ${
                errors.district ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
              }`}
            >
              <option value="">Select your district...</option>
              <option value="Colombo">Colombo</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Kurunegala">Kurunegala</option>
              <option value="Kandy">Kandy</option>
              <option value="Galle">Galle</option>
            </select>
            {errors.district && (
              <p className="text-[#DC2626] text-xs mt-1.5">{errors.district.message}</p>
            )}
          </div>

          {/* Passwords Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#222222] uppercase tracking-wider mb-2">
                Password *
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
          </div>

          {/* Accept Terms */}
          <div>
            <div className="flex items-start">
              <input
                {...register('acceptTerms')}
                type="checkbox"
                id="acceptTerms"
                className="mt-1 h-4 w-4 rounded border-[#E5E7EB] text-[#E25704] focus:ring-[#E25704]"
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-[#6B7280] select-none">
                I agree to the{' '}
                <Link href="/terms" className="font-semibold text-[#E25704] hover:underline">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="font-semibold text-[#E25704] hover:underline">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-[#DC2626] text-xs mt-1.5">{errors.acceptTerms.message}</p>
            )}
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
                <CheckCircle size={18} />
                Create Account
              </>
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 pt-6 border-t border-[#E5E7EB]">
          <p className="text-sm text-[#6B7280]">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-semibold text-[#E25704] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
