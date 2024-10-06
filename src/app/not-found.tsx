'use client';

import '@/src/globals.css';
import '@/src/app/not-found.css';
import { outfit } from '@/src/fonts/fonts';
import Link from 'next/link';
 
export default function NotFound () {
  // const t = useTranslations('notFound');

  return (
    <html>
      <body>
        <main className={`${outfit.className} antialiased`}>
          <section className='notFound'>
            <small>Error:</small>
            <h1>404</h1>
            <Link href="/">
              Go back
            </Link>
            {/**
            <h2>{t('notFoundPage')}</h2>
            <p>{t('errorFound')}</p>
            <Link href="/">
              {t('backHome')}
            </Link>
             */}
          </section>
        </main>
      </body>
    </html>
  );
}