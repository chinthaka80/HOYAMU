import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchService } from '@/services/search';

export function useSearch() {
  const [queryText, setQueryText] = useState('');

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['search', queryText],
    queryFn: () => searchService.searchings(queryText),
    enabled: queryText.length > 2,
  });

  return { queryText, setQueryText, results: data, isLoading, triggerSearch: refetch };
}
