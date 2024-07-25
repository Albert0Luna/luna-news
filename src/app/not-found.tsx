import { useTranslations } from 'next-intl';
import Link from 'next/link';
import '@/src/globals.css';
import '@/src/home/styles/main.css';
import { outfit } from '../fonts/fonts';
 
export default function NotFound () {
  const t = useTranslations('notFound');

  return (
    <html>
      <body>
        <main className={`${outfit.className} antialiased`}>
          <section className='notFound'>
            <small>Error:</small>
            <h1>404</h1>
            <h2>{t('notFoundPage')}</h2>
            <p>{t('errorFound')}</p>
            <Link href="/">
              {t('backHome')}
            </Link>
          </section>
        </main>
      </body>
    </html>
  );
}