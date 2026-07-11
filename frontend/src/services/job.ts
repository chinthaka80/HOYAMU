import api from './api';

export const jobService = {
  getJobs: async (params?: any) => {
    const response = await api.get('/jobs', { params });
    return response.data;
  },
};
