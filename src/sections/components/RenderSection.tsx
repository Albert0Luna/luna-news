/* eslint-disable @next/next/no-img-element */
import { Link, redirect } from '@/src/navigation';
import { cookies } from 'next/headers';
import { Pagination } from './Pagination';
import clsx from 'clsx';
import ReadTimeIcon from '@/src/icons/sections/ReadTimeIcon';

async function fetchSectionEs (section: string, page: string) {
  const response = await fetch(`https://www.lunanews.tech/api/esNews/${section}/${page ?? 0}`);
  const {fechedNews, allNews} = await response.json();
  return {fechedNews, allNews};
}

async function fetchSectionEn (section: string, page: string) {
  const response = await fetch(`https://www.lunanews.tech/api/enNews/${section}/${page ?? 0}`);
  const {fechedNews, allNews} = await response.json();
  return {fechedNews, allNews};
}

export default async function RenderNews ({section, sectionPath, page}: {
  section: string | undefined, 
  sectionPath: string | undefined,
  page: string
}) {
  
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value ?? 'en';

  let articles;
  
  lang === 'en'
    ? articles = await fetchSectionEn(section as string, page as string)
    : articles = await fetchSectionEs(section as string, page as string);

  const {fechedNews, allNews} = articles;
  const totalPages = Math.floor(allNews / 5) + 1;

  if (parseInt(page) < 1) {
    redirect(`/sections/${sectionPath}/1`);
    return;
  } else if (parseInt(page) > totalPages) {
    redirect(`/sections/${sectionPath}/${totalPages}`);
  }

  return (
    <>  
      {
        !allNews 
          ? <h1>We are working on articles for this section</h1>
          : <>
            <ul className='highlights_container'>
              {fechedNews.map((article: any) => (
                <li key={article.new_code} className='highlights_item'>

                  <div className='highlights_item_image_container'>
                    <img 
                      src={article.main_image}
                      alt={article.image_alt}
                      className='highlights_item_image'
                    />
                  </div>

                  <div className='highlights_item_content'>

                    <div className='highlights_item_info'>

                      <div className='highlights_section_container'>
                        {article.sections.map((section: string) => (
                          <Link key={section} href={clsx({
                            '/sections/tutorials/1': section === 'Tutorials' || section === 'Tutoriales',
                            '/sections/pcs-and-laptops/1': section === 'PCs & Laptops',
                            '/sections/mobiles-and-tablets/1': section === 'Smartphones & Tablets' || section === 'Móviles y Tablets',
                            '/sections/gaming/1': section === 'Gaming',
                            '/sections/reviews/1': section === 'Reviews' || section === 'Reseñas',
                            '/sections/programming/1': section === 'Programming' || section === 'Programación',
                            '/sections/ai/1': section === 'AI' || section === 'IA',
                            '/sections/cybersecurity/1': section === 'Cybersecurity' || section === 'Ciberseguridad'
                          }
                          )}  className={clsx(
                            'highlights_section', {
                              'highlights_section_tutorials': section === 'Tutorials' || section === 'Tutoriales',
                              'highlights_section_pcs': section === 'PCs & Laptops',
                              'highlights_section_mobiles': section === 'Smartphones & Tablets' || section === 'Móviles y Tablets',
                              'highlights_section_gaming': section === 'Gaming',
                              'highlights_section_reviews': section === 'Reviews' || section === 'Reseñas',
                              'highlights_section_programming': section === 'Programming' || section === 'Programación',
                              'highlights_section_ai': section === 'AI' || section === 'IA',
                              'highlights_section_cybersecurity': section === 'Cybersecurity' || section === 'Ciberseguridad'
                            }
                          )}>
                    
                            <p>{section.split(' ')[0]}</p>
                          </Link>
                        ))}
                      </div>
              
                      <div className='highlights_item_readtime'>
                        <ReadTimeIcon />
                        <p>{article.read_time}</p>
                      </div>

                    </div>

                    <h5 className='highlights_item_title'>
                      {article.title}
                    </h5>
                    <p className='highlights_item_summary'>
                      {article.summary}
                    </p>
                    <Link href={`/${article._id}`} className='highlights_item_link' scroll={true}>
                      {lang === 'es' ? 'Leer más' : 'Read more'}
                    </Link>
              
                  </div>
                </li>
              ))}
            </ul>
            <Pagination
              section={sectionPath}
              page={page}
              allNews={allNews}
            />
          </>
      }
    </>
  );
}