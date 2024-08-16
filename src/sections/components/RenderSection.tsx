import { Link } from '@/src/navigation';
import { cookies } from 'next/headers';
import Sections from './Sections';

export async function fetchAllNewsEn () {
  const response = await fetch('http://www.lunanews.tech/api/enNews');
  const data = await response.json();
  return data;
}

export async function fetchAllNewsEs () {
  const response = await fetch('http://www.lunanews.tech/api/esNews');
  const data = await response.json();
  return data;
}

export async function fetchSectionEs (section: string) {
  const response = await fetch('http://www.lunanews.tech/api/esNews');
  const data = await response.json();
  const filteredSection = data.filter(
    (item : any) => item.sections.some((s : any) => s.toLowerCase() === section.toLowerCase())
  );
  return filteredSection;
}

export async function fetchSectionEn (section: string) {
  const response = await fetch('http://www.lunanews.tech/api/enNews');
  const data = await response.json();
  const filteredSection = data.filter(
    (item : any) => item.sections.some((s : any) => s.toLowerCase() === section.toLowerCase())
  );
  return filteredSection;
}

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
      ? articles = await fetchSectionEn(section as string)
      : articles = await fetchSectionEs(section  as string);
  }

  return (
    <ul className='section_highlights_container'>
      {articles.map((article: any) => (
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
  );
}