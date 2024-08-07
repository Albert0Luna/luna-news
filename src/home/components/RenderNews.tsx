import { fetchLatestNewsEn, fetchLatestNewsEs } from '@/src/app/lib/data';
import { Link } from '@/src/navigation';
import { cookies } from 'next/headers';

export default async function RenderNews () {
  
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE');

  let articles;

  (lang?.value === 'en') 
    ? articles = await fetchLatestNewsEn() 
    : articles = await fetchLatestNewsEs();


  return (
    <ul className='highlights_container'>
      {articles.map((article: any) => (
        <li key={article.new_code} className='highlights_item'>
          <Link href={`/${article.id}`} className='highlights_item_link' scroll={true}>
            <h5 className='highlights_item_title'>
              {article.title}
            </h5>
            <div className='highlights_s1'>
              <div className='highlights_item_image_container'>
                <img 
                  src={article.thumbnail}
                  alt={article.image_alt}
                  className='highlights_item_image'
                />
              </div>
              <div className='highlights_item_content'>
                {/*  
                <p className='highlights_item_date'> 2021-09-09</p> 
                <p className='highlights_item_readtime'> readtime 5 min</p>
              */}
                <p 
                  className='highlights_item_body'
                >
                  {article.mini_desc}
                </p>
              
                <small className='highlights_item_more'>Read more</small>
              
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}