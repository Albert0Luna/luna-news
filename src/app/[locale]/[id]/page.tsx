/* eslint-disable @next/next/no-img-element */
import '@/src/news/styles/News.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { redirect } from '@/src/navigation';
import { cookies } from 'next/headers';
import ReloadPage from '@/src/news/components/ReloadPage';
import ReadTimeIcon from '@/src/icons/sections/ReadTimeIcon';
import NewInfoDate from '@/src/rootComponents.tsx/components/NewInfoDate';
import { fetchNewsDataEn } from '@/src/libs/queryEnNews-services';
import { fetchNewsDataEs } from '@/src/libs/queryEsNews-services';

export async function generateMetadata ({ params }: { params: { id: string } }) {

  //* Get the language from the cookies when it exists
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE');

  //* If the language is not set in the cookies, get the language from the URL
  const prefix = params.id.split('_');
  const suffixLower = prefix[1].toLowerCase();
  
  const selectedLang = !lang?.value ? suffixLower : lang?.value;
  
  //* Get the new code from the URL to fetch the data based in the new code
  const parts = params.id.split('__');
  const newCode = parts[1];

  //* Fetch the Metadata based on the language
  let newData;

  if (selectedLang === 'en') {
    const data = await fetchNewsDataEn(newCode);
    newData = await data.metadataNewsEn;
  } else if (selectedLang === 'es') {
    const data = await fetchNewsDataEs(newCode);
    newData = await data.metadataNewsEs;
  }

  if (!newData) {
    return redirect('https://www.lunanews.tech');
  }

  return {
    //? Basic metadata
    title: `${newData?.title}`,
    generator: 'Next.js',
    applicationName: 'Luna News',
    referrer: 'origin-when-cross-origin',
    keywords: [`${newData?.keywords}`],
    authors: { name: newData?.author_id === 'alberto-luna' ? 'Alberto' : 'Unknown' },
    creator: 'Alberto Luna',
    publisher: 'Luna News',
    formatDetection: { email: 'neongeeksofficial@gmail.com'},
    metadataBase: new URL('https://www.lunanews.tech'),
    alternates: {
      canonical: `https://www.lunanews.tech/en/${newData._id}`,
      languages: {
        'en-US': `${newData.url_en}`,
        'es-MX': `${newData.url_es}`,
        'x-default': `${newData.url_en}`,
      },
    },

    //? Open Graph metadata
    openGraph: {
      title: `${newData?.title} - Luna News`,
      description: `${newData?.summary}`,
      url: `${newData.url_en}`,
      siteName: 'Luna News',
      images: [
        {
          url: `${newData?.thumbnail_image}`, 
          width: 800,
          height: 600,
        }
      ],
      locale: ['en_US', 'es_MX'],
      type: 'article',
      publishedTime: `${new Date(newData?.createdAt)}`,
      modifiedTime: `${new Date(newData?.updatedAt)}`,
      author: `${newData?.author_id === 'alberto-luna' ? 'Alberto Luna' : 'Unknown'}`,
      section: `${newData?.sections}`,
      tags: [`${newData?.keywords}`]
    },

    //? Twitter metadata
    twitter: {
      card: 'summary_large_image',
      title: `${newData?.title} - Luna News`,
      description: `${newData?.summary}`,
      siteId: '@LunaNewsX',
      creator: '@LunaNewsX',
      creatorId: '@LunaNewsX',
      images: [`${newData?.thumbnail_image}`]
    },
  };
}

export default async function Page ({params}: {params: {id: string}}) {

  //* Get the language from the cookies whe it exists
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE');

  //* If the language is not set, get the language from the URL
  const prefix = params.id.split('_');
  const suffixLower = prefix[1].toLowerCase();

  const selectedLang = !lang?.value ? suffixLower : lang?.value;

  //* Get the new code
  const parts = params.id.split('__');
  const newCode = parts[1];

  let selectedNew;

  if (selectedLang === 'en') {
    const data = await fetchNewsDataEn(newCode);
    selectedNew = data.newsEn;
  } else if (selectedLang === 'es') {
    const data = await fetchNewsDataEs(newCode);
    selectedNew = data.newsEs;
  }

  return (
    <>
      {/*<ReloadPage />*/}
      <section className='new'>
        <h1 className='new_title'>{selectedNew?.title}</h1>

        <div className='new_info_text_container'>
          <div className='new_info_name_and_date'>
            <div>
              <p className='new_info_author_name'>Alberto Luna</p>
              <NewInfoDate 
                selectedNewCreated={selectedNew?.createdAt} 
                selectedNewUpdated={selectedNew?.updatedAt} 
                selectedLang={selectedLang}
                suffixLower={suffixLower}
              />
            </div>
            <div className='new_read_time_container'>
              <ReadTimeIcon />
              <p className='new_read_time'>
                {selectedNew?.read_time}
              </p> 
            </div> 
          </div>
        </div>

        <article className='article'>
          <figure className='article_main_image_container'>
            <img 
              className='article_info_image'
              src={selectedNew?.main_image} 
              alt={selectedNew?.image_alt} 
            />
            <figcaption className='article_main_image_source_container'>
              <a href={selectedNew?.main_image_source.url} className='article_main_image_source' >{selectedNew?.main_image_source.source_name}</a>
            </figcaption>
          </figure>
          {
            selectedNew?.content.map((item : string, index: number) => (
              <>
                <MDXRemote key={index} source={item} />       
              </>
            ))
          }
          <MDXRemote source={(selectedNew?.conclusion as string)} />

        </article>
        <div className='new_info'>     
        </div>
      </section>
    </>
  );
}



