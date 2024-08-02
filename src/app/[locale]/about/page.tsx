import '@/src/home/styles/main.css';
import '@/src/about/styles/about.css';
import { useTranslations } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { cookies } from 'next/headers';
import { Metadata } from 'next';
// import { fetchSectionEn } from '../../lib/data';

export function metadata () {

  const cookieStore = cookies();
  const data = cookieStore.get('NEXT_LOCALE')?.value;
  const lang = data?.toLowerCase();

  const dynamicMetadata: Metadata = {
    //? Basic metadata
    title: `${lang === 'es' ? 'Sobre Nosotros' : 'About us'}`,
    generator: 'Luna News',
    applicationName: 'Luna News',
    referrer: 'origin-when-cross-origin',
    keywords: `${lang === 'es' 
      ? 'Sobre Nosotros, Luna News' 
      : 'About us, Luna News'
    }`,
    authors: { name: 'Alberto' },
    creator: 'Alberto Luna',
    publisher: 'Alberto Luna',
    metadataBase: new URL('https://lunanews.tech'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'es-MX': '/es',
      },
    },
  };

  return dynamicMetadata;
};

/**  /todo import {fetchNews} from '@/src/app/lib/data';

async function RenderData () {
  const sections = await fetchSectionEn('Pc & Laptops');
  return (
    <>
      <ul>
        {sections?.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
*/

export default function Page () {
  const t = useTranslations('About');
  return (
    <main className={'about'}>
      <h1 className='title'>{t('title.p1')} <span>{t('title.p2')}</span></h1>
      <section className='about_content'>
        <h1><span>Luna</span> News</h1>
        <MDXRemote
          source={t('content')}
        />
      </section>
      {/* <FAQ /> */}
      {/* <RenderData />*/}
    </main>
  );
}
