import '@/src/news/styles/News.css';
import { useLocale } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {news} from '@/src/mock/new';
import Profile from '@/src/news/components/Profile';


export default function Page ({params}: {params: {id: string}}) {
  const locale = useLocale();

  const selectedNew = news.find((item) => item.id === parseInt(params.id));

  const fechaDB = selectedNew?.date;

  const currentDate = new Date();
  const updateDate = new Date(fechaDB);

  const dateSinceUpdateDays = (updateDate - currentDate) / (1000 * 60 * 60 * 24);

  const dateSinceUpdateMonth = dateSinceUpdateDays / 31;

  const dateSinceUpdateYear = dateSinceUpdateDays / 365;

  const rtf = new Intl.RelativeTimeFormat(locale);

  return (
    <main>
      <section className='new'>
        <h1 className='new_title'>{selectedNew?.title}</h1>
        <p className='new_read_time'>{selectedNew?.readTime}</p>
        <div className='new_info'>

          <div className='new_info_text'>
            <Profile authorId={selectedNew?.authorId}/>
            <p>
              {
                Number.isFinite(Math.round(dateSinceUpdateYear)) && Math.round(dateSinceUpdateYear) < 0
                  ? `${rtf.format(Math.round(dateSinceUpdateYear), 'year')}`
                  : Number.isFinite(Math.round(dateSinceUpdateMonth)) && Math.round(dateSinceUpdateMonth) < 0
                    ? `${rtf.format(Math.round(dateSinceUpdateMonth), 'month')}`
                    : Number.isFinite(Math.round(dateSinceUpdateDays))
                      ? `${rtf.format(Math.round(dateSinceUpdateDays), 'day')}`
                      : 'Invalid date'
              }
            </p>
          </div>

          <picture className='new_info_image_container'>
            <img 
              className='new_info_image'
              src={selectedNew?.mainImage} 
              alt={selectedNew?.ImageAlt} 
            />
          </picture>
        </div>

        <article className='article'>
          <MDXRemote source={selectedNew?.content} />
          <MDXRemote source={`
  \`\`\`js
  console.log('Hola, mundo');
  \`\`\`
`} />

        </article>
      </section>
    </main>
  );
}
