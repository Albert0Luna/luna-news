import React from 'react';
import '@/src/privacy-&-terms/styles/Privacy.css';
import { useTranslations } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { cookies } from 'next/headers';
import { Metadata } from 'next';

export function metadata () {

  const cookieStore = cookies();
  const data = cookieStore.get('NEXT_LOCALE')?.value;
  const lang = data?.toLowerCase();

  const dynamicMetadata: Metadata = {
    //? Basic metadata
    title: `${lang === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}`,
    generator: 'Luna News',
    applicationName: 'Luna News',
    referrer: 'origin-when-cross-origin',
    keywords: `${lang === 'es' 
      ? 'Términos y Condiciones, Luna News' 
      : 'Terms and Conditions, Luna News'
    }`,
    authors: { name: 'Alberto' },
    creator: 'Alberto Luna',
    publisher: 'Alberto Luna',
    metadataBase: new URL('https://lunanews.tech'),
    alternates: {
      canonical: 'https://lunanews.tech/en/terms-and-conditions',
      languages: {
        'en-US': 'https://lunanews.tech/en/terms-and-conditions',
        'es-MX': 'https://lunanews.tech/es/terms-and-conditions',
      },
    },
  };

  return dynamicMetadata;
};

function Page () {

  const t = useTranslations('TermsAndConditions');
  return (
    <main>
      <h1 className='privacy_title'>
        {t('title')}
      </h1>
      <hr className='privacy_divisor'/>
      <section className='privacy'>
        <MDXRemote source={t('content')}/>
      </section>
    </main>
  );
}

export default Page;

