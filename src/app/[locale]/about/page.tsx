import '@/src/home/styles/main.css';
import '@/src/about/styles/about.css';
import { useTranslations } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Page () {
  const t = useTranslations('About');
  return (
    <main className='about'>
      <h1 className='title'>{t('title.p1')} <span>{t('title.p2')}</span></h1>
      <section className='about_content'>
        <MDXRemote
          source={t('content')}
        />
      </section>
      {/* <FAQ /> */}
    </main>
  );
}
