import { MetadataRoute } from 'next';
import enSitemap from '@/src/mock/sitemap/enSitemap.json';
import esSitemap from '@/src/mock/sitemap/esSitemap.json';

export default function sitemap (): MetadataRoute.Sitemap {


  const mappedNewsEs = esSitemap.map((article) => ({
    url: `https://www.lunanews.tech/es/${article._id}`,
    lastModified: new Date(article.updatedAt.$date),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.9,
  }));
  
  const mappedNewsEn = enSitemap.map((article) => ({
    url: `https://www.lunanews.tech/en/${article._id}`,
    lastModified: new Date(article.updatedAt.$date),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.9,
  }));
  

  return [
    {
      url: 'https://www.lunanews.tech/en',
      lastModified: new Date('2024-08-04'), // Fecha fija para la URL principal
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.lunanews.tech/en/about',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "about" en español
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/sections',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "about" en inglés
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/sections/latest',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "sections" en español
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/sections/tutorials',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "about" en inglés
      changeFrequency: 'monthly',
      priority: 0
    },
    {
      url: 'https://www.lunanews.tech/en/sections/pcs-and-laptops',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "about" en inglés
      changeFrequency: 'monthly',
    },
    {
      url: 'https://www.lunanews.tech/en/sections/mobiles-and-tablets',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "about" en inglés
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/sections/gaming',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "about" en inglés
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/sections/reviews',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "about" en inglés
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/sections/programming',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "about" en inglés
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/sections/ai',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "sections" en inglés
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/privacy',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "sections" en inglés
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.lunanews.tech/en/terms-and-conditions',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "sections" en inglés
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...mappedNewsEn,
    {
      url: 'https://www.lunanews.tech/es',
      lastModified: new Date('2024-08-04'), // Fecha fija para la sección "sections" en inglés
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...mappedNewsEs,
  ];
}
