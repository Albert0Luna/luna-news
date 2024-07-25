import React from 'react';
import '@/src/privacy-&-terms/styles/Privacy.css';
import { useTranslations } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote/rsc';

function Page () {

  const t = useTranslations('Privacy');
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

