import { outfit } from '@/src/fonts/fonts';
import { useTranslations } from 'next-intl';
import Header from '@/src/layout/components/Header';
import Footer from '@/src/layout/components/Footer';
import '@/src/home/styles/main.css';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Scroll from '@/src/home/components/Scroll';
import Adsense from '@/src/rootComponents.tsx/components/Adsense';

export function metadata () {

  const cookieStore = cookies();
  const data = cookieStore.get('NEXT_LOCALE')?.value;
  const lang = data?.toLowerCase();

  const dynamicMetadata: Metadata =  {

    //? Basic metadata
    title: {
      template: '%s | Luna News',
      default: 'Luna News',
      absolute: 'Luna News',
    },
    generator: 'Luna News',
    applicationName: 'Luna News',
    referrer: 'origin-when-cross-origin',
    keywords: `${lang === 'es' 
      ? 'Secciones, Luna News, Luna, Noticias, Tecnología, Teléfonos inteligentes, Gadgets, IA, Tutorial, Programación, Juegos, Reseñas, Análisis, Pc y Laptops, Móviles, Tabletas, Wearables, VR, AR, IoT, Aplicaciones, Software, Hardware, Opinión, Análisis, Editorial, Entrevista, Reporte, Reseña, Tutorial, Guía, Consejos, Trucos, Cómo hacer, Mejor, Top, Popular, Tendencias, Últimas, Últimas noticias, Exclusivo, Especial, Comparación, Versus, Versus' 
      : 'Sections, Luna News, Luna, News, Technology, Smarthphones, Gadgets, AI, Tutorial, Programming, Gaming, Reviews, Analysis, Pc & Laptops, Mobile, Tablets, Wearables, VR, AR, IoT, Apps, Software, Hardware, Opinion, Analysis, Editorial, Interview, Report, Review, Tutorial, Guide, Tips, Tricks, How to, Best, Top, Popular, Trending, Latest, Breaking, Exclusive, Special, Comparison, Versus, Versus'}`,
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
          alt: 'Luna News',
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
      creator: '@NeonGeeksX',
      creatorId: '1467726470533754880',
      images: ['https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011361/Dise%C3%B1o_sin_t%C3%ADtulo_pbzi1s.png', 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011063/reviews_NOTICIAS_Y_CURIOSIDADEs_DEl_MUNDO_TECH_oxrcd2.png']
    },
  };

  return dynamicMetadata;
}


interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: 'en' | 'es'
  }
}

export default function RootLayout ({
  children, 
  params: { locale }
}: Readonly<RootLayoutProps>) {
  const t = useTranslations('Header');

  const homeTranslations = {
    routes: {
      home: t('routes.home'),
      about: t('routes.about'),
      sections: t('routes.sections'),
    },
    donate: t('donate'),
    changeLanguage: t('changeLanguage'),
  };

  return (
    <html lang={locale} className={outfit.className}>
      <Adsense />
      <Scroll />
      <body>
        <section className='header_and_content'>
          <Header translations={homeTranslations}/>
          <main>
            {children}
            <SpeedInsights />
            <Analytics />
          </main>
        </section>
        <Footer />
      </body>
    </html>
  );
}