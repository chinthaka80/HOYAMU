import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hoyamu.net';
  
  const staticRoutes = [
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
    '/edu',
    '/edu/ai-tutor',
    '/edu/ai-quiz',
    '/edu/guides',
    '/past-papers',
  ];

  const dynamicRoutes: string[] = [];

  // Generate Year based Past Papers routes for sitemap indexing
  const years = [2025, 2024, 2023, 2022, 2021, 2020];
  for (const year of years) {
    dynamicRoutes.push(`/past-papers/${year}`);
  }

  try {
    const response = await fetch('http://127.0.0.1:8000/api/edu/subjects');
    
    if (response.ok) {
      const resData = await response.json();
      if (resData.success && Array.isArray(resData.data)) {
        for (const subject of resData.data) {
          const stream = subject.stream;
          const subjectSlug = subject.slug;
          dynamicRoutes.push(`/${stream}/${subjectSlug}`);

          try {
            const lessonsResponse = await fetch(`http://127.0.0.1:8000/api/edu/subjects/${subjectSlug}/lessons`);
            if (lessonsResponse.ok) {
              const lessonsData = await lessonsResponse.json();
              if (lessonsData.success && Array.isArray(lessonsData.data.lessons)) {
                for (const lesson of lessonsData.data.lessons) {
                  dynamicRoutes.push(`/${stream}/${subjectSlug}/${lesson.slug}`);
                }
              }
            }
          } catch (err) {
            console.error(`Failed to fetch lessons for subject ${subjectSlug}:`, err);
          }
        }
      }
    }
  } catch (error) {
    console.warn('Backend offline during sitemap generation, using fallback static routes only.', error);
  }

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : route.startsWith('/edu') || route.startsWith('/past-papers') ? 0.9 : 0.8,
  }));
}
