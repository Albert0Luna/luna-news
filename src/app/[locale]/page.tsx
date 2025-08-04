/* eslint-disable @next/next/no-img-element */
import { Link } from '@/src/i18n/navigation';
import { HomeArticles } from '@/src/types/interfaces';
import { sections } from '@/src/utils/const';
import { Clock } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

const HighlightSkeleton = () => {
  return (
    <div className="loader"></div>
  );
};

export default async function Page () {
  const locale = await getLocale();
  const t = await getTranslations('Index');

  let news: HomeArticles[];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/news?lang=${locale}`);
    const result = await response.json();
    news = result;
  } catch (error) {
    console.error('Error fetching news:', error);
    notFound();
  }

  return (
    <main className="mt-26 px-4 w-full md:mt-[140px] max-w-[1300px] mx-auto">
      <h1 className="text-4xl font-manrope tracking-[-0.2px] text-center mb-7 md:mb-16 dark:text-gray-100 text-gray-900 md:text-[55px] md:tracking-[-0.4px] font-extrabold">
        {t('title')}
      </h1>
      <Suspense fallback={<HighlightSkeleton />}>
        <ul className="hero-grid">
          {news &&
            news.map((article: HomeArticles, index: number) => (
              <li key={index} className='hero-grid__item border-gray-200 '>
                <img src={article.mainImage} alt={article.translations[locale].title} />
                <div className='hero-grid__content'>
                  <Link href={`/${article.slug}`}>
                    <h2>{article.translations[locale].title}</h2>
                  </Link>
                  <div className='hero-grid__content__description'>
                    <Link href={`/sections/${sections.find(sec => sec.title === article.categories[0])?.link}`}>
                      {
                        (() => {
                          const category = sections.find(sec => sec.title === article.categories[0]);
                          if (locale === 'en') {
                            return category?.title;
                          } else {
                            return category?.titleEs;
                          }
                        })()
                      }
                    </Link>
                    <span className='hidden sm:flex'>|</span>
                    <div className='flex items-center gap-1 align-middle text-sm font-manrope opacity-70 -z-10'>
                      <Clock size={14}/>
                      <p>  {article.readTime}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </Suspense>
    </main>
  );
}


