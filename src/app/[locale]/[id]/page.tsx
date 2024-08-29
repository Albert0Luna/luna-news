import '@/src/news/styles/News.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
// import Profile from '@/src/news/components/Profile';
import { redirect } from '@/src/navigation';
import { cookies } from 'next/headers';
// import Adsense from '@/src/rootComponents.tsx/components/Adsense';
// import GoogleAdUnit from '@/src/rootComponents.tsx/components/GoogleAdUnit';

function Profile ({ authorId } : { authorId?: string }) {
  return (
    <div className='new_info_author'>
      <picture className='new_info_author_picture_container'>
        <img src='/alberto-luna.jpg' alt={authorId} aria-label='profile photo'/>
      </picture>
      <p className='antialiased'>Alberto Luna</p>
    </div>
  );
}

async function fetchNewsDataEn (new_code: string) {
  try {
    const [newsEnData, metadataNewsEnData] = await Promise.all([
      fetchNewsEn(new_code), 
      fetchMetadataNewsEn(new_code)
    ]);

    return { newsEn: newsEnData, metadataNewsEn: metadataNewsEnData };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately (e.g., return an error object)
    throw error; // Re-throw to propagate the error if needed
  }
}

async function fetchNewsDataEs (new_code: string) {
  try {
    const [newsEnData, metadataNewsEnData] = await Promise.all([
      fetchNewsEs(new_code), 
      fetchMetadataNewsEs(new_code)
    ]);

    return { newsEs: newsEnData, metadataNewsEs: metadataNewsEnData };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately (e.g., return an error object)
    throw error; // Re-throw to propagate the error if needed
  }
}

async function fetchNewsEn (new_code: string) {
  const response = await fetch(`https://www.lunanews.tech/api/newEnSearched/${new_code}`);
  const filteredSection = await response.json();
  return filteredSection;
}

async function fetchMetadataNewsEn (new_code: string) {
  const response = await fetch(`https://www.lunanews.tech/api/newEnMetadataSearched/${new_code}`);
  const filteredSection = await response.json();
  return filteredSection;
}

async function fetchNewsEs (new_code: string) {
  const response = await fetch(`https://www.lunanews.tech/api/newEsSearched/${new_code}`);
  const filteredSection = await response.json();
  return filteredSection;
}

async function fetchMetadataNewsEs (new_code: string) {
  const response = await fetch(`https://www.lunanews.tech/api/newEsMetadataSearched/${new_code}`);
  const filteredSection = await response.json();
  return filteredSection;
}

/*
export async function generateMetadata ({ params }: { params: { id: string } }) {

  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE');

  const parts = params.id.split('__');
  const newCode = parts[1];

  const prefix =  params.id.split('_');
  const suffixLower = prefix[1].toLowerCase();
  
  let defaultLang;

  if (!lang?.value) {
    defaultLang = suffixLower;
  } else {
    defaultLang = lang?.value;
  }

  if (defaultLang === 'en') {
    const data = await fetchNewsDataEn(newCode);
    const newData = await data.metadataNewsEn;
    
    if (!newData) {
      return redirect('https://www.lunanews.tech');
    }
    if (newData) {
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
  } else if (defaultLang === 'es') {
    const data = await fetchNewsDataEs(newCode);
    const newData = await data.metadataNewsEs;

    if (!newData) {
      return redirect('https://www.lunanews.tech');
    }
    if (newData) {
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
          canonical: `https://www.lunanews.tech/es/${newData._id}`,
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
  }
}
  */


export default async function Page ({params}: {params: {id: string}}) {

  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE');

  let selectedNew;

  const prefix = params.id.split('_');
  const suffixLower = prefix[1].toLowerCase();
  let selectedLang;

  if (!lang?.value) {
    selectedLang = suffixLower;
  } else {
    selectedLang = lang?.value;
  }

  if (selectedLang === 'en') {
    //?Get the prefix
    const prefix = params.id.split('_');
    const suffix = prefix[1].toLowerCase();
    //? Get the new code
    const parts = params.id.split('__');
    const newCode = parts[1];
    const data = await fetchNewsDataEn(newCode);
    const selectData = data.newsEn;

    if (!(selectedLang === suffix)) {
      redirect(`/${selectData?._id}`);
      return; 
    }
    selectedNew = selectData;
  } else if (selectedLang === 'es') {
    //?Get the prefix
    const prefix = params.id.split('_');
    const suffix = prefix[1].toLowerCase();
    //?Get the newCode
    const parts = params.id.split('__');
    const newCode = parts[1];
    const data = await fetchNewsDataEs(newCode);
    const selectData = data.newsEs;

    if (!(selectedLang === suffix)) {
      redirect(`/${selectData?._id}`);
      return;
    }
    selectedNew = selectData;
  }

  
  const fechaDB = selectedNew?.createdAt;

  const currentDate = new Date();
  const updateDate = new Date((fechaDB) as string);

  const dateSinceUpdateDays = (updateDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  const dateSinceUpdateMonth = dateSinceUpdateDays / 31;

  const dateSinceUpdateYear = dateSinceUpdateDays / 365;

  const rtf = new Intl.RelativeTimeFormat(lang?.value || suffixLower);

  //*? Last update

  const lastUpdate = selectedNew?.updatedAt;

  const lastUpdateDate = new Date((lastUpdate as string));

  const lastUpdateDays = (lastUpdateDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  const lastUpdateMonth = lastUpdateDays / 31;

  const lastUpdateYear = lastUpdateDays / 365;

  return (
    <main>
      <section className='new'>
        <h1 className='new_title'>{selectedNew?.title}</h1>
        <p className='new_info_date'>
          {
            lastUpdate !== fechaDB
              ? Number.isFinite(Math.round(lastUpdateYear)) && Math.round(lastUpdateYear) < 0
                ? `${selectedLang === 'en' ? 'Last update' : 'Última actualización'} ${rtf.format(Math.round(lastUpdateYear), 'year')}`
                : Number.isFinite(Math.round(lastUpdateMonth)) && Math.round(lastUpdateMonth) < 0
                  ? `${selectedLang === 'en' ? 'Last update' : 'Última actualización'} ${rtf.format(Math.round(lastUpdateMonth), 'month')}`
                  : Number.isFinite(Math.round(lastUpdateDays)) && Math.round(lastUpdateDays) === -1
                    ? `${selectedLang === 'en' ? 'Last update today' : 'Última actualización hoy'}`
                    : `${selectedLang === 'en' ? 'Last update' : 'Última actualización'} ${rtf.format(Math.round(lastUpdateDays) + 1, 'day')}`
              : Number.isFinite(Math.round(dateSinceUpdateYear)) && Math.round(dateSinceUpdateYear) < 0
                ? `${selectedLang === 'en' ? 'Written' : 'Escrito'} ${rtf.format(Math.round(dateSinceUpdateYear), 'year')}`
                : Number.isFinite(Math.round(dateSinceUpdateMonth)) && Math.round(dateSinceUpdateMonth) < 0
                  ? `${selectedLang === 'en' ? 'Written' : 'Escrito'} ${rtf.format(Math.round(dateSinceUpdateMonth), 'month')}`
                  : Number.isFinite(Math.round(dateSinceUpdateDays)) && Math.round(dateSinceUpdateDays) === -1
                    ? `${selectedLang === 'en' ? 'Written today' : 'Escrito hoy'}`
                    : `${selectedLang === 'en' ? 'Written' : 'Escrito'} ${rtf.format(Math.round(dateSinceUpdateDays) + 1, 'day')}`
          }
        </p>
        
        <div className='new_info'>
      
          <div className='new_info_text'>
            <Profile authorId={selectedNew?.author_id}/>
            
            <p className='new_read_time'>
              {selectedNew?.read_time}
            </p>   
          </div>

          <picture className='new_info_image_container'>
            <img 
              className='new_info_image'
              src={selectedNew?.main_image} 
              alt={selectedNew?.image_alt} 
            />
            <small>
              {`${selectedNew === 'en' ? 'Fuente:' : 'Source:'}`} <a href={selectedNew?.main_image_source.url} className='new_info_source' >{selectedNew?.main_image_source.source_name}</a>
            </small>
          </picture>
        </div>

        <article className='article'>
          {
            selectedNew?.content.map((item : string, index: number) => (
              <>
                <MDXRemote key={index} source={item} />       
              </>
            ))
          }
          <MDXRemote source={(selectedNew?.conclusion as string)} />

        </article>
      </section>
    </main>
  );
}



