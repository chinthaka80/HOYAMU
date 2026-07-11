import api from './api';

export const searchService = {
  searchings: async (query: string, params?: any) => {
    const response = await api.get('/search', { params: { q: query, ...params } });
    return response.data;
  },
};
