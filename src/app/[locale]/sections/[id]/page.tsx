import RenderSection from '@/src/sections/components/RenderSection';
import '@/src/sections/styles/Section.css';
import { useTranslations } from 'next-intl';
import React from 'react';
import '@/src/sections/styles/Section.css';
import { cookies } from 'next/headers';
import { Metadata } from 'next';

export function generateMetadata ({params}: {params: {id: string}}) {

  const cookieStore = cookies();
  const data = cookieStore.get('NEXT_LOCALE')?.value;
  const lang = data?.toLowerCase();

  const sections = [
    {
      path: 'latest', 
      title: ['Lo último', 'Latest'], 
      desc: ['Las últimas noticias de tecnología', 'The latest technology news'],
    },
    {
      path: 'tutorials', 
      title: ['Tutoriales', 'Tutorials'],
      desc: ['Aprende a hacer cosas nuevas con nuestros tutoriales', 'Learn to do new things with our tutorials']
    },
    {
      path: 'pcs-and-laptops', 
      title: ['Pc\'s y Laptops', 'Pc\'s & Laptops'],
      desc: ['Lo último en computadoras y laptops.', 'The latest in computers and laptops.']    
    },
    {
      path: 'mobiles-and-tablets', 
      title: ['Móviles y Tabletas', 'Mobiles & Tablets'],
      desc: ['Las últimas noticias de smartphones y tablets', 'The latest news on smartphones and tablets']
    },
    {
      path: 'gaming', 
      title: ['Gaming', 'Gaming'],
      desc: ['Las últimas noticias de videojuegos', 'The latest video game news']
    },
    {
      path: 'reviews', 
      title: ['Reseñas', 'Reviews'],
      desc: ['Las últimas reseñas de tecnología', 'The latest technology reviews']
    },
    {
      path: 'programming', 
      title: ['Programación', 'Programming'],
      desc: ['Aprende y enterate de las últimas noticias de programación', 'Learn and find out the latest programming news']
    },
    {
      path: 'ai', 
      title: ['IA', 'AI'],
      desc: ['Las últimas noticias de inteligencia artificial', 'The latest news on artificial intelligence'],
    },
  ];

  const sectionTitle = sections.find(section => section.path === params.id);

  const dynamicMetadata: Metadata = {
    //? Basic metadata
    title: `${lang === 'es' ? sectionTitle?.title[0] : sectionTitle?.title[1]}`,
    generator: 'Luna News',
    applicationName: 'Luna News',
    referrer: 'origin-when-cross-origin',
    keywords: [`${lang === 'es' ? sectionTitle?.title[0] : sectionTitle?.title[1]}`, 'Luna News'],
    authors: { name: 'Alberto' },
    creator: 'Alberto Luna',
    publisher: 'Alberto Luna',
    metadataBase: new URL('https://lunanews.tech'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'es-MX': '/es',
      },
    },
    //? Open Graph metadata
    openGraph: {
      title: `${lang === 'es' ? sectionTitle?.title[0] : sectionTitle?.title[1]}`,
      description: `${lang === 'es' ? sectionTitle?.desc[0] : sectionTitle?.desc[1]}`,
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
      title: `${lang === 'es' ? sectionTitle?.title[0] : sectionTitle?.title[1]}`,
      description: `${lang === 'es' ? sectionTitle?.desc[0] : sectionTitle?.desc[1]}`,
      siteId: '1467726470533754880',
      creator: '@NeonGeeksX',
      creatorId: '1467726470533754880',
      images: ['https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011361/Dise%C3%B1o_sin_t%C3%ADtulo_pbzi1s.png', 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011063/reviews_NOTICIAS_Y_CURIOSIDADEs_DEl_MUNDO_TECH_oxrcd2.png']
    },
  };

  return dynamicMetadata;
};

function Page ({params}: {params: {id: string}}) {

  const t = useTranslations('Coverpage');

  const sections = [
    {path: 'latest', title: t('sections.Latest')},
    {path: 'tutorials', title: t('sections.Tutorials')},
    {path: 'pcs-and-laptops', title: t('sections.Pc\'s-&-Laptops')},
    {path: 'mobiles-and-tablets', title: t('sections.Mobiles-&-Tablets')},
    {path: 'gaming', title: t('sections.Gaming')},
    {path: 'reviews', title: t('sections.Reviews')},
    {path: 'programming', title: t('sections.Programming')},
    {path: 'ai', title: t('sections.AI')},
  ];

  const section = sections.find((section) => section.path === params.id);

  return (
    <main>
      <h1 className='title_section'>
        {section?.title}
      </h1>
      <hr className='section_divisor'/>
      <RenderSection section={section?.title}/>
    </main>
  );
}

export default Page;