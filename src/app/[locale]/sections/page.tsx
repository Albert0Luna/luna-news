import Sections from '@/src/sections/components/Sections';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import React from 'react';

export function metadata () {

  const cookieStore = cookies();
  const data = cookieStore.get('NEXT_LOCALE')?.value;
  const lang = data?.toLowerCase();

  const dynamicMetadata: Metadata = {
    //? Basic metadata
    title: `${lang === 'es' ? 'Secciones' : 'Sections'}`,
    generator: 'Luna News',
    applicationName: 'Luna News',
    referrer: 'origin-when-cross-origin',
    keywords: `${lang === 'es' 
      ? 'Secciones, Luna News, Luna, Noticias, Tecnología, Lo último, Tutoriales, Pc y Laptops, Móviles y Tabletas, Gaming, Reseñas, Programación, IA' 
      : 'Sections, Luna News, Luna, News, Technology, Latest, Tutorials, PCs & Laptops, Mobiles & Tablets, Gaming, Reviews, Programming, AI'
    }`,
    authors: { name: 'Alberto' },
    creator: 'Alberto Luna',
    publisher: 'Alberto Luna',
    metadataBase: new URL('https://www.lunanews.tech'),
    alternates: {
      canonical: 'https://www.lunanews.tech/en/sections',
      languages: {
        'en-US': 'https://www.lunanews.tech/en/sections',
        'es-MX': 'https://www.lunanews.tech/es/sections',
      },
    },

    //? Open Graph metadata
    openGraph: {
      title: 'Luna News',
      description: `${lang === 'es' 
        ? 'Un blog de tecnología que cubre las últimas noticias, reseñas, análisis, tutoriales y guías sobre teléfonos inteligentes, gadgets, IA, programación, juegos y más.'
        : 'A technology blog that covers the latest news, reviews, analysis, tutorials, and guides on smartphones, gadgets, AI, programming, gaming, and more.'
      }`,
      url: 'https://lunanews.tech',
      siteName: 'Luna News',
      images: [
        {
          url: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011063/reviews_NOTICIAS_Y_CURIOSIDADEs_DEl_MUNDO_TECH_oxrcd2.png', 
          width: 800,
          height: 600,
        },
        {
          url: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011361/Dise%C3%B1o_sin_t%C3%ADtulo_pbzi1s.png', 
          width: 1800,
          height: 1600,
          alt: `${lang === 'es' ? 'Luna News' : 'Luna News'}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    //? Twitter metadata
    twitter: {
      card: 'summary_large_image',
      title: 'Luna News',
      description: `${lang === 'es' 
        ? 'Un blog de tecnología que cubre las últimas noticias, reseñas, análisis, tutoriales y guías sobre teléfonos inteligentes, gadgets, IA, programación, juegos y más.'
        : 'A technology blog that covers the latest news, reviews, analysis, tutorials, and guides on smartphones, gadgets, AI, programming, gaming, and more.'
      }`,
      siteId: '1467726470533754880',
      creator: '@LunaNewsX',
      creatorId: '1467726470533754880',
      images: ['https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011361/Dise%C3%B1o_sin_t%C3%ADtulo_pbzi1s.png', 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011063/reviews_NOTICIAS_Y_CURIOSIDADEs_DEl_MUNDO_TECH_oxrcd2.png']
    },
  };

  return dynamicMetadata;
};

function Page () {
  return (
    <main>
      <Sections />
    </main>
  );
}

export default Page;