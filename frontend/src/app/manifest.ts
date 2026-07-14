import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HOYAMU.NET - Sri Lanka Classifieds Marketplace',
    short_name: 'HOYAMU.NET',
    description: 'හොයන හැමදේම එකම තැන - Find everything in one place in Sri Lanka.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#E25704',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
