import '@/src/news/styles/News.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Profile from '@/src/news/components/Profile';
import { redirect } from '@/src/navigation';
import { cookies } from 'next/headers';
import { fetchMetaDataNewsEs, fetchMetaDataNewsEn} from '@/src/app/lib/data';
import Adsense from '@/src/rootComponents.tsx/components/Adsense';
import GoogleAdUnit from '@/src/rootComponents.tsx/components/GoogleAdUnit';

export async function fetchNewsEs (new_code: string) {
  const response = await fetch('http://www.lunanews.tech/api/esNews');
  const data = await response.json();
  const filteredSection = data.find((item : any) => item.new_code === new_code);
  return filteredSection;
}

export async function fetchNewsEn (new_code: string) {
  const response = await fetch('http://www.lunanews.tech/api/enNews');
  const data = await response.json();
  const filteredSection = data.find((item : any) => item.new_code === new_code);
  return filteredSection;
}


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
    const newData = await fetchNewsEn(newCode);
    
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
    const newData = await fetchNewsEs(newCode);

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

export default async function Page ({params}: {params: {id: string}}) {
  
  //const t = await useTranslations('Date');

  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE');

  let selectedNew;

  const prefix =  params.id.split('_');
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
    const selectData = await fetchNewsEn(newCode);

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
    const selectData = await fetchNewsEs(newCode);

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
      {/**<Adsense /> */}
      <section className='new'>
        <h1 className='new_title'>{selectedNew?.title}</h1>
        <p className='new_read_time'>{selectedNew?.read_time}</p>
        <div className='new_info'>
      
          <div className='new_info_text'>
            {<Profile authorId={selectedNew?.author_id}/>}

            <p className='new_info_date'>
              {
                lastUpdate !== fechaDB
                  ? Number.isFinite(Math.round(lastUpdateYear)) && Math.round(lastUpdateYear) < 0
                    ? `${lang?.value === 'en' ? 'Last update' : 'Última actualización'} ${rtf.format(Math.round(lastUpdateYear), 'year')}`
                    : Number.isFinite(Math.round(lastUpdateMonth)) && Math.round(lastUpdateMonth) < 0
                      ? `${lang?.value === 'en' ? 'Last update' : 'Última actualización'} ${rtf.format(Math.round(lastUpdateMonth), 'month')}`
                      : Number.isFinite(Math.round(lastUpdateDays)) && Math.round(lastUpdateDays) === -1
                        ? `${lang?.value === 'en' ? 'Last update today' : 'Última actualización hoy'}`
                        : `${lang?.value === 'en' ? 'Last update' : 'Última actualización'} ${rtf.format(Math.round(lastUpdateDays) + 1, 'day')}`
                  : Number.isFinite(Math.round(dateSinceUpdateYear)) && Math.round(dateSinceUpdateYear) < 0
                    ? `${lang?.value === 'en' ? 'Written' : 'Escrito'} ${rtf.format(Math.round(dateSinceUpdateYear), 'year')}`
                    : Number.isFinite(Math.round(dateSinceUpdateMonth)) && Math.round(dateSinceUpdateMonth) < 0
                      ? `${lang?.value === 'en' ? 'Written' : 'Escrito'} ${rtf.format(Math.round(dateSinceUpdateMonth), 'month')}`
                      : Number.isFinite(Math.round(dateSinceUpdateDays)) && Math.round(dateSinceUpdateDays) === -1
                        ? `${lang?.value === 'en' ? 'Written today' : 'Escrito hoy'}`
                        : `${lang?.value === 'en' ? 'Written' : 'Escrito'} ${rtf.format(Math.round(dateSinceUpdateDays) + 1, 'day')}`
              }
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


                {/*<GoogleAdUnit>
                  <ins className="adsbygoogle"
                    style={{display: 'block', textAlign: 'center'}}
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    data-ad-client="ca-pub-5368714617786898"
                    data-ad-slot="8032217154"></ins>
                </GoogleAdUnit>
                */}
                
              </>
            ))
          }
          <MDXRemote source={(selectedNew?.conclusion as string)} />

        </article>
      </section>
    </main>
  );
}


