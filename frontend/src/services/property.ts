import api from './api';

export const propertyService = {
  getProperties: async (params?: any) => {
    const response = await api.get('/properties', { params });
    return response.data;
  },
};
