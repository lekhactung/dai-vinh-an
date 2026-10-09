import { MetadataRoute } from 'next';
import { company } from '@/data/company';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = company.website || 'https://dai-vinh-an.vercel.app/';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
