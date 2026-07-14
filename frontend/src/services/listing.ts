import api from './api';

export const listingService = {
  getListings: async (params?: any) => {
    const response = await api.get('/listings', { params });
    return response.data;
  },
  getListing: async (uuid: string) => {
    const response = await api.get(`/listings/${uuid}`);
    return response.data;
  },
  createListing: async (data: any) => {
    const response = await api.post('/listings', data);
    return response.data;
  },
};
