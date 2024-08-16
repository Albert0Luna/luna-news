import '@/src/home/styles/main.css';
import '@/src/about/styles/about.css';
import { useTranslations } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { cookies } from 'next/headers';
import { Metadata } from 'next';
// import newsEs from '@/src/mock/newsEs.json';
// import newsEn from '@/src/mock/newsEn.json';
// import Link from 'next/link';

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
    publisher: 'Luna News',
    metadataBase: new URL('https://lunanews.tech'),
    alternates: {
      canonical: 'https://lunanews.tech/en/about',
      languages: {
        'en-US': 'https://www.lunanews.tech/en/about',
        'es-MX': 'https://www.lunanews.tech/es/about',
      },
    },
  };

  return dynamicMetadata;
};

/*
function RenderData () {

  const selectedNew = newsEn.find((item) => item.new_code === '8');
  return (
    <section className='about_data' style={{maxWidth: '500px'}}>
      <h1>{selectedNew?.title}</h1>
      <picture>
        <img src={selectedNew?.main_image} alt={selectedNew?.image_alt} width={100}/>
        <small>Fuente:
          <Link href={selectedNew?.main_image_source?.url as string}>
            {selectedNew?.main_image_source?.source_name}
          </Link>
        </small>
      </picture>
      <div>
        {selectedNew?.content.map((item, index: number) => {
          return (
            <MDXRemote source={item} key={index}/>
          );
        })}
      </div>
      <MDXRemote source={selectedNew?.conclusion as string}/>
      <ul>
        {selectedNew?.keywords.map(item => {
          return (
            <li key={item}>{item}</li>
          );
        })}
      </ul>
    </section>
  );
}
*/

export default function Page () {
  const t = useTranslations('About');
  return (
    <main className={'about'}>
      {/*<RenderData />*/}

      <h1 className='title'>{t('title.p1')} <span>{t('title.p2')}</span></h1>
      <section className='about_content'>
        <h1><span>Luna</span> News</h1>
        <MDXRemote
          source={t('content')}
        />
      </section>
      {/* <FAQ /> */}
    </main>
  );
}
