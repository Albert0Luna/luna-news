import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';
import '@/src/app/[locale]/about/about.css';
import { getLocale, getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata (): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'About.Metadata' });
  return {
    title: t('title'),
    description: t('description'),
    referrer: 'origin-when-cross-origin',
    keywords: t('keywords'),
    alternates: {
      canonical: 'https://lunanews.tech/en/about',
      languages: {
        'en-US': 'https://www.lunanews.tech/en/about',
        'es-MX': 'https://www.lunanews.tech/es/about',
        'x-default': 'https://www.lunanews.tech/en/about',
      },
    },
  };
};

export default function Page () {
  const t = useTranslations('About');
  return (
    <main className='about'>
      <section className='about_content'>
        <h1 className='title'><span>LUNA</span> NEWS</h1>
        <MDXRemote
          source={t('content')}
        />
      </section>
    </main>
  );
}
