import api from './api';

export const vehicleService = {
  getVehicles: async (params?: any) => {
    const response = await api.get('/vehicles', { params });
    return response.data;
  },
};
