import { useQuery, useMutation } from '@tanstack/react-query';
import { listingService } from '@/services/listing';

export function useListings(params?: any) {
  const query = useQuery({
    queryKey: ['listings', params],
    queryFn: () => listingService.getListings(params),
  });

  const createMutation = useMutation({
    mutationFn: listingService.createListing,
  });

  return { ...query, createListing: createMutation.mutateAsync };
}
