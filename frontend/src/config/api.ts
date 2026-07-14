export const apiEndpoints = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  auth: {
    login: '/login',
    register: '/register',
    logout: '/logout',
    user: '/user',
    profile: '/profile',
  },
  listings: {
    base: '/listings',
    search: '/search',
    categories: '/categories',
    businesses: '/businesses',
  },
};
