import { outfit } from '@/src/fonts/fonts';
import { useTranslations } from 'next-intl';
import Header from '@/src/layout/components/Header';
import Footer from '@/src/layout/components/Footer';
import '@/src/layout/styles/Header.css';

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
      contact: t('routes.contact'),
    },
    donate: t('donate'),
    changeLanguage: t('changeLanguage'),
  };
  return (
    <html lang={locale} className={outfit.className}>
      <body className='main'>
        <Header translations={homeTranslations}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}