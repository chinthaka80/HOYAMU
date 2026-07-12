import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hoyamu.net';
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/categories',
    '/search',
    '/business',
    '/jobs',
    '/vehicles',
    '/properties',
    '/news',
    '/auth/login',
    '/auth/register',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
