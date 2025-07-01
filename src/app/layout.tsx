import '@/src/globals.css';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      template: '%s - Luna News',
      default: 'Luna News',
      absolute: 'Luna News',
    },
    generator: 'Luna News',
    applicationName: 'Luna News',
    referrer: 'origin-when-cross-origin',
    keywords: t('keywords'),
    authors: { name: t('author') },
    creator: 'Alberto Luna',
    description: t('description'),
    publisher: 'Alberto Luna',
    metadataBase: new URL('https://lunanews.tech'),
    alternates: {
      canonical: `https://lunanews.tech/${locale ?? 'en'}`,
      languages: {
        'en-US': 'https://lunanews.tech/es',
        'es-MX': 'https://lunanews.tech/en',
        'x-default': 'https://lunanews.tech/en',
      },
    },
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
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
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      siteId: '1467726470533754880',
      creator: '@LunaNewsX',
      creatorId: '1467726470533754880',
      images: ['https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011361/Dise%C3%B1o_sin_t%C3%ADtulo_pbzi1s.png', 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722011063/reviews_NOTICIAS_Y_CURIOSIDADEs_DEl_MUNDO_TECH_oxrcd2.png']
    },
  };
}

export default async function Layout ({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className='flex flex-col justify-center bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 w-full font-poppins'>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          try {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'dark') {
              document.documentElement.classList.add('dark');
            } else if (storedTheme === 'light') {
              document.documentElement.classList.remove('dark');
            } else {
              const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.classList.toggle('dark', systemPrefersDark);
              localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light');
            }
          } catch (e) {}
        })();
      `
          }}
        />
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>

        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}