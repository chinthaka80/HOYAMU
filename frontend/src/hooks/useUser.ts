import { useQuery } from '@tanstack/react-query';
import { authService } from '@/services/auth';

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: authService.getUser,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}
