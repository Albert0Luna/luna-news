import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

export default async function LocaleLayout ({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations('Header');

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
    <>
      <Header translations={homeTranslations} locale={locale} />
      {children}
      <Footer />
    </>
  );
}