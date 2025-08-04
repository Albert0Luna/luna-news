import '@/src/app/[locale]/about/about.css';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote/rsc';

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
        'en-US': `${process.env.NEXT_PUBLIC_DOMAIN}/en/about`,
        'es-MX': `${process.env.NEXT_PUBLIC_DOMAIN}/es/about`,
        'x-default': `${process.env.NEXT_PUBLIC_DOMAIN}/en/about`,
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
