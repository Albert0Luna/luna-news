import '@/src/news/styles/News.css';
import { useLocale } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {news} from '@/src/mock/new';


export default function Page () {

  const fechaDB = '2024-07-17';

  const locale = useLocale();

  const currentDate = new Date();
  const updateDate = new Date(fechaDB); //! Aqui se pone la fecha de la publicacion o ultima actualizacion

  const dateSinceUpdateDays = (updateDate - currentDate) / (1000 * 60 * 60 * 24);

  const dateSinceUpdateMonth = dateSinceUpdateDays / 31;

  const dateSinceUpdateYear = dateSinceUpdateDays / 365;

  const rtf = new Intl.RelativeTimeFormat(locale);

  return (
    <main>
      <section className='new'>
        <h1 className='new_title'>{news.title}</h1>

        <div className='new_info'>

          <div className='new_info_text'>
            <p>
              {
                Math.round(dateSinceUpdateYear) < 0
                  ? `${rtf.format(Math.round(dateSinceUpdateYear), 'year')}` 
                  : Math.round(dateSinceUpdateMonth) < 0
                    ? `${rtf.format(Math.round(dateSinceUpdateMonth), 'month')}`
                    : `${rtf.format(Math.round(dateSinceUpdateDays), 'day')}`
              }
            </p>
            <p>
                By ALberto Luna
            </p>
          </div>

          <picture className='new_info_image_container'>
            <img 
              className='new_info_image'
              src={news.mainImage} 
              alt={news.ImageAlt} 
            />
          </picture>
        </div>

        <article className='article'>
          <MDXRemote source={news.content} />
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
