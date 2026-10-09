import { MetadataRoute } from 'next';
import { company } from '@/data/company';
import { products } from '@/data/products';
import { projects } from '@/data/projects';
import { posts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.website || 'https://dai-vinh-an.vercel.app/';

  const staticRoutes = [
    '',
    '/gioi-thieu',
    '/san-pham',
    '/du-an',
    '/tin-tuc',
    '/lien-he',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/san-pham/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/du-an/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/tin-tuc/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...projectRoutes, ...postRoutes];
}
