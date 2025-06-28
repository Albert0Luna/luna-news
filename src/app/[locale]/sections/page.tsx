import { Link } from '@/src/i18n/navigation';
import React from 'react';
import Image from 'next/image';
import { sections } from '@/src/utils/const';
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { useLocale, useTranslations } from 'next-intl';

export async function generateMetadata (): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: 'Sections.Metadata'});
  return {
    title: t('title'),
    description: t('description'),
    referrer: 'origin-when-cross-origin',
    keywords: t('keywords'),
    alternates: {
      canonical: 'https://lunanews.tech/en/sections',
      languages: {
        'en-US': 'https://www.lunanews.tech/en/sections',
        'es-MX': 'https://www.lunanews.tech/es/sections',
        'x-default': 'https://www.lunanews.tech/en/sections',
      },
    },
  };
}

export default function Page () {
  const locale = useLocale();
  const t = useTranslations('Sections');
  return (
    <main className='mt-25 md:mt-30 w-full flex flex-col items-center justify-center px-5 max-w-[1400px] self-center'>
      <h1 className="text-3xl font-poppins-500 tracking-[-0.2px] text-center mb-4 dark:text-gray-100 text-gray-900 md:text-[55px] md:mb-6 md:tracking-[-0.4px]">
        {t('title')}
      </h1>
      <p className='text-center text-lg text-slate-800 dark:text-slate-300'>{t('description')}</p>

      <ul className='w-full justify-center items-center flex flex-wrap gap-15 mt-10'>
        {
          sections.map((section, index) => (
            <li key={index} className='my-5 w-auto max-w-[365px] flex flex-col gap-4'>
              <Image src={section.image} alt="" className='w-full' />
              <h2 className='text-2xl font-semibold font-manrope text-center'>{locale === 'en' ? section.title : section.titleEs}</h2>
              <p className='text-lg text-slate-800 dark:text-slate-300 text-center'>{locale === 'en' ? section.description : section.descriptionEs}</p>
              <Link href={`/sections/${section.link}`} className='text-primary text-center'>{t('articles')}</Link>
            </li>
          ))
        }
      </ul>
    </main>
  );
}