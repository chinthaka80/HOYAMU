import api from './api';

export const businessService = {
  getBusinesses: async (params?: any) => {
    const response = await api.get('/businesses', { params });
    return response.data;
  },
  getBusiness: async (uuid: string) => {
    const response = await api.get(`/businesses/${uuid}`);
    return response.data;
  },
};
