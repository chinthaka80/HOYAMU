'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/store/authStore';
import { ThemeStoreProvider } from '@/store/themeStore';
import { SearchStoreProvider } from '@/store/searchStore';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeStoreProvider>
          <SearchStoreProvider>
            {children}
            <Toaster position="top-right" richColors />
          </SearchStoreProvider>
        </ThemeStoreProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
