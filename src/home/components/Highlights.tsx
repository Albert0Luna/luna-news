import '@/src/home/styles/Highlights.css';
import RenderNews from '@/src/home/components/RenderNews';
import { Suspense } from 'react';
import { Link } from '@/src/navigation';


const HighlightSkeleton = () => {
  return (
    <div className="loader"></div>
  );
};

export default function Highlights ({lang: locale}: {lang: string}) {
  return (
    <article className='highlight'>
      {/* 
      <h4 className='highlight_name'>{t('highlight.p1')} <span>{t('highlight.p2')}</span> {t('highlight.p3')}</h4>
      */}
      <Suspense fallback={<HighlightSkeleton />}>
        <RenderNews locale={locale}/>
      </Suspense>
      <Link href='/sections/latest/2' className='more_news_link'>
        {locale === 'es' ? 'Ver más noticias' : 'See more news'}
      </Link>
    </article>
  );
}
