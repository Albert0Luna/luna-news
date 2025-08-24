/* eslint-disable @next/next/no-img-element */
import {Link} from '@/src/i18n/navigation';
import {sections} from '@/src/utils/const';
import {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {cache} from 'react';
import Article from './Article';

const getArticle = cache(async (locale: string, slug: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/article?lang=${locale}&slug=${slug}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    return notFound();
  }
});

export async function generateMetadata ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const locale = await getLocale();
  const slug = (await params).id;
  const article = await getArticle(locale, slug);

  if (!article) {
    return notFound();
  }

  return {
    title: article.translations[locale].title,
    description: article.translations[locale].summary,
    keywords: article.keywords.join(', ') ?? '',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/${locale}/${slug}`,
      languages: {
        'en-US': `${process.env.NEXT_PUBLIC_DOMAIN}/en/${slug}`,
        'es-MX': `${process.env.NEXT_PUBLIC_DOMAIN}/es/${slug}`,
        'x-default': `${process.env.NEXT_PUBLIC_DOMAIN}/en/${slug}`,
      },
    },
    openGraph: {
      title: article.translations[locale].title,
      description: article.translations[locale].summary,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${locale}/${slug}`,
      siteName: 'Luna News',
      images: [
        {
          url: article.mainImage,
          width: 800,
          height: 600,
        },
        {
          url: article.mainImage,
          width: 1800,
          height: 1600,
          alt: article.altImage,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.translations[locale].title,
      description: article.translations[locale].summary,
      siteId: '1467726470533754880',
      creator: '@LunaNewsX',
      creatorId: '1467726470533754880',
      images: [article.mainImage, article.altImage]
    },
  };
}

export default async function Page (props: { params: Promise<{ id: string }> }) {

  const locale = await getLocale();
  const slug = (await props.params).id;
  const article = await getArticle(locale, slug);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <main className="max-w-4xl w-[100%] mx-auto px-6 pt-12 mt-24 md:mt-32 font-poppins">
      <article className="w-full prose prose-lg dark:prose-invert overflow-hidden">

        <div className='flex items-center justify-between text-sm gap-4 mb-4 text-gray-600 dark:text-gray-300 w-full tracking-[-0.06px] md:justify-center md:gap-6 md:text-base md:mb-8'>
          <Link href={`/sections/${sections.find(sec => sec.title === article.categories[0])?.link }`} className='p-0.5 px-2 border border-orange-300 rounded-2xl bg-[#FDEEDE] text-[#F1922C] 
          dark:text-orange-300 dark:bg-gray-800'>
            {(() => {
              const category = sections.find(sec => sec.title === article.categories[0]);
              if (locale === 'en') {
                return category?.title;
              } else {
                return category?.titleEs;
              }
            })()}
          </Link>
          <p className='text-gray-600 dark:text-gray-400'>{new Date(article.createdAt).toLocaleDateString('en-US', options)}</p>
        </div>

        <h1 className="text-3xl font-poppins-600 mb-4 text-gray-900 dark:text-gray-100 md:text-[55px] md:mb-8 md:text-center md:text-balance">
          {article.translations[locale].title}
        </h1>

        {/* {
          article.translations[locale].introduction && <p className='hidden text-slate-600 text-center mb-10 md:block dark:text-[#abb1ba]'>{article.translations[locale].introduction}</p>
        } */}

        <div className='w-auto mb-4 md:mb-8'>
          <img src={article.mainImage} alt={article.translations[locale].title} className='w-auto rounded-lg shadow-lg'/>
        </div>

        <Article article={article} locale={locale} />

      </article>
    </main>
  );
}



