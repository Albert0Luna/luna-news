/* eslint-disable curly */
/* eslint-disable @next/next/no-img-element */
import { Link } from '@/src/i18n/navigation';
import { sections } from '@/src/utils/const';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateMetadata ({params}: {params: Promise<{ section: string }>}): Promise<Metadata> {
  const {section} = await params;
  const sectionFound = sections.find(sec => sec.link === section);
  return {title: `${sectionFound?.title}`};
}

export default async function Page ({ params }: { params: Promise<{ section: string }> }) {
  const locale = await getLocale();
  const {section} = await params;
  const sectionFound = sections.find(sec => sec.link === section);
  let sectionContent = null;

  if (!(sections.some(sec => sec.link === section) && locale)) return notFound();

  try {
    const query = await fetch(`https://www.lunanews.tech/api/section?lang=${locale}&section=${section}`);
    const data = await query.json();
    sectionContent = data;
  } catch (error) {
    console.log(error);
  }

  return (
    <main className='mt-24 w-full md:mt-30'>
      <h1 className="text-3xl font-poppins-500 tracking-[-0.2px] text-center mb-8 dark:text-gray-100 text-gray-900 md:text-[55px] md:mb-12 md:tracking-[-0.4px]">
        {locale === 'en' ? sectionFound?.title : sectionFound?.titleEs}
      </h1>

      {
        sectionContent && sectionContent.length > 0 ? (
          <ul className='flex flex-col gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 max-w-[1200px] '>
            {
              sectionContent.map((article: any, index: number) => (
                <li key={index} className='flex gap-4 w-full border-b border-gray-200 dark:border-gray-700 items-center pb-4 md:pb-6 md:gap-6'>
                  <div className='w-[258px] h-24 md:w-70 md:h-30 overflow-hidden rounded-lg'>
                    <img src={article.mainImage} alt={article.translations[locale].title} className='w-full h-full object-cover ' />
                  </div>
                  <div className='flex flex-col w-full font-slate-800 dark:text-gray-200 gap-2'>
                    <Link href={`/${article.slug}`}>
                      <h2 className='text text-balance font-manrope font-semibold md:text-xl'>
                        {article.translations[locale].title}
                      </h2>
                    </Link>
                    <div className='flex text-sm font-manrope gap-2 md:text-base opacity-70 -z-10'>
                      <p>{article.readTime} <span>min read</span></p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        ) : (
          <p>No content available for this section.</p>
        )
      }
    </main>
  );
}
