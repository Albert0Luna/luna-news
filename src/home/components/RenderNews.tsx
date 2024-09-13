import ReadTimeIcon from '@/src/icons/sections/ReadTimeIcon';
import { Link } from '@/src/navigation';
import clsx from 'clsx';

async function fetchLatestNewsEn () {
  const response = await fetch('https://www.lunanews.tech/api/enNews/Latest/1');
  const {fechedNews, allNews} = await response.json();
  return {fechedNews, allNews};
}


async function fetchLatestNewsEs () {
  const response = await fetch('https://www.lunanews.tech/api/esNews/Lo último/1');
  const {fechedNews, allNews} = await response.json();
  return {fechedNews, allNews};
}

export default async function RenderNews ({locale}: {locale: string}) {

  let articles;

  (locale === 'es') 
    ? articles = await fetchLatestNewsEs()
    : articles = await fetchLatestNewsEn();

  const {fechedNews} = articles;

  return (
    <ul className='highlights_container'>
      {fechedNews.map((article: any) => (
        <li key={article.new_code} className='highlights_item'>

          <div className='highlights_item_image_container'>
            <img 
              src={article.thumbnail_image}
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
                    '/sections/pcs-and-laptops/1': section === 'Pc & Laptops',
                    '/sections/mobiles-and-tablets/1': section === 'Smathphones & Tablets' || section === 'Móviles y Tablets',
                    '/sections/gaming/1': section === 'Gaming',
                    '/sections/reviews/1': section === 'Reviews' || section === 'Reseñas',
                    '/sections/programming/1': section === 'Programming' || section === 'Programación',
                    '/sections/ai/1': section === 'AI' || section === 'IA',
                    '/sections/cybersecurity/1': section === 'Cybersecurity' || section === 'Ciberseguridad'
                  }
                  )}  className={clsx(
                    'highlights_section', {
                      'highlights_section_tutorials': section === 'Tutorials' || section === 'Tutoriales',
                      'highlights_section_pcs': section === 'Pc & Laptops',
                      'highlights_section_mobiles': section === 'Smathphones & Tablets' || section === 'Móviles y Tablets',
                      'highlights_section_gaming': section === 'Gaming',
                      'highlights_section_reviews': section === 'Reviews' || section === 'Reseñas',
                      'highlights_section_programming': section === 'Programming' || section === 'Programación',
                      'highlights_section_ai': section === 'AI' || section === 'IA',
                      'highlights_section_cybersecurity': section === 'Cybersecurity' || section === 'Ciberseguridad'
                    }
                  )}>
                    <p>{section === 'Smathphones & Tablets' ? 'Smartphones' : section.split(' ')[0]}</p>
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
              {locale === 'es' ? 'Leer más' : 'Read more'}
            </Link>
              
          </div>
        </li>
      ))}
    </ul>
  );
}