import { Link, redirect } from '@/src/navigation';
import { cookies } from 'next/headers';
import { Pagination } from './Pagination';

async function fetchSectionEs (section: string, page: string) {
  const response = await fetch(`http://127.0.0.1:3000/api/esNews/${section}/${page ?? 0}`);
  const {fechedNews, allNews} = await response.json();
  return {fechedNews, allNews};
}

async function fetchSectionEn (section: string, page: string) {
  const response = await fetch(`http://127.0.0.1:3000/api/enNews/${section}/${page ?? 0}`);
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
    <section className='news_pages'>  
      <ul className='section_highlights_container'>
        {
          fechedNews.map((article: any) => (
            <li key={article.new_code} className='section_highlights_item'>
              <Link href={`/${article._id}`} className='section_highlights_item_link' scroll={true}>
                <h5 className='section_highlights_item_title'>
                  {article.title}
                </h5>
                <div className='section_highlights_s1'>
                  <div className='section_highlights_item_image_container'>
                    <img 
                      src={article.thumbnail_image}
                      alt={article.image_alt}
                      className='section_highlights_item_image'
                    />
                  </div>
                  <div className='section_highlights_item_content'>
                    {/*  
                <p className='section_highlights_item_date'> 2021-09-09</p> 
                <p className='section_highlights_item_readtime'> readtime 5 min</p>
              */}
                    <p 
                      className='section_highlights_item_body'
                    >
                      {article.summary}
                    </p>
              
                    <small className='section_highlights_item_more'>{lang === 'es' ? 'Leer más' : 'Read more'}</small>
              
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      <Pagination
        section={sectionPath}
        page={page}
        allNews={allNews}
      />
    </section>
  );
}