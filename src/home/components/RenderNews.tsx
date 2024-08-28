import { Link } from '@/src/navigation';
import { cookies } from 'next/headers';

async function fetchLatestNewsEn () {
  const response = await fetch('http://127.0.0.1:3000/api/enNews/Latest/1');
  const {fechedNews, allNews} = await response.json();
  return {fechedNews, allNews};
}


async function fetchLatestNewsEs () {
  const response = await fetch('http://127.0.0.1:3000/api/esNews/Lo último/1');
  const {fechedNews, allNews} = await response.json();
  return {fechedNews, allNews};
}

export default async function RenderNews () {
  
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE');

  let articles;

  (lang?.value === 'en') 
    ? articles = await fetchLatestNewsEn() 
    : articles = await fetchLatestNewsEs();

  const {fechedNews} = articles;


  return (
    <ul className='highlights_container'>
      {fechedNews.map((article: any) => (
        <li key={article.new_code} className='highlights_item'>
          <Link href={`/${article._id}`} className='highlights_item_link' scroll={true}>
            <h5 className='highlights_item_title'>
              {article.title}
            </h5>
            <div className='highlights_s1'>
              <div className='highlights_item_image_container'>
                <img 
                  src={article.thumbnail_image}
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
                  {article.summary}
                </p>
              
                <small className='highlights_item_more'>{lang?.value === 'es' ? 'Leer más' : 'Read more'}</small>
              
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}