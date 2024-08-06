import { fetchSectionEn, fetchSectionEs, fetchAllNewsEs, fetchAllNewsEn } from '@/src/app/lib/data';
import { Link } from '@/src/navigation';
import { cookies } from 'next/headers';

export default async function RenderNews ({section}: {section: string | undefined}) {
  
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value;

  const latest = section === 'Latest' || section === 'Lo último';

  let articles;
  
  if (latest) {
    (lang === 'en') 
      ? articles = await fetchAllNewsEn()
      : articles = await fetchAllNewsEs();

  } else {
    (lang === 'en') 
      ? articles = await fetchSectionEn(section)
      : articles = await fetchSectionEs(section);
  }

  return (
    <ul className='section_highlights_container'>
      {articles.map((article: any) => (
        <li key={article.new_code} className='section_highlights_item'>
          <Link href={`/${article.id}`} className='section_highlights_item_link' scroll={true}>
            <h5 className='section_highlights_item_title'>
              {article.title}
            </h5>
            <div className='section_highlights_s1'>
              <div className='section_highlights_item_image_container'>
                <img 
                  src={article.thumbnail}
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
                  {article.mini_desc}
                </p>
              
                <small className='section_highlights_item_more'>Read more</small>
              
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}