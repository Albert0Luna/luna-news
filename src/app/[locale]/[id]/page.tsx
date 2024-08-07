import '@/src/news/styles/News.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Profile from '@/src/news/components/Profile';
import { redirect } from '@/src/navigation';
import { cookies } from 'next/headers';
import {fetchNewsEn, fetchNewsEs, fetchMetaDataNewsEs, fetchMetaDataNewsEn} from '@/src/app/lib/data';
import Adsense from '@/src/rootComponents.tsx/components/Adsense';
import GoogleAdUnit from '@/src/rootComponents.tsx/components/GoogleAdUnit';

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
    const newMetaData = await fetchMetaDataNewsEn(newCode);
    const newData = newMetaData[0];
    
    if (!newData) {
      return redirect('https://www.lunanews.tech');
    }
    if (newData) {
      return {
      //? Basic metadata
        title: `${newData?.title}`,
        generator: 'Luna News',
        applicationName: 'Luna News',
        referrer: 'origin-when-cross-origin',
        keywords: [`${newData?.keywords}`],
        authors: { name: newData?.author_id === 'alberto-luna' ? 'Alberto' : 'Unknown' },
        creator: 'Alberto Luna',
        publisher: 'Alberto Luna',
        formatDetection: { email: 'neongeeksofficial@gmail.com'},
        metadataBase: new URL('https://lunanews.tech'),
        alternates: {
          canonical: '/',
          languages: {
            'en-US': '/en',
            'es-MX': '/es',
          },
        },
  
        //? Open Graph metadata
        openGraph: {
          title: `${newData?.title} - Luna News`,
          description: `${newData?.mini_desc}`,
          url: `https://lunanews.tech/${newData?.lang}/${newData?.id}`,
          siteName: 'Luna News',
          images: [
            {
              url: `${newData?.thumbnail}`, 
              width: 800,
              height: 600,
            }
          ],
          locale: ['en_US', 'es_MX'],
          type: 'article',
          publishedTime: `${new Date(newData?.date)}`,
          modifiedTime: `${new Date(newData?.lastModified)}`,
          author: `${newData?.author_id === 'alberto-luna' ? 'Alberto' : 'Unknown'}`,
          section: `${newData?.sections}`,
          tags: [`${newData?.keywords}`]
        },
  
        //? Twitter metadata
        twitter: {
          card: 'summary_large_image',
          title: `${newData?.title} - Luna News`,
          description: `${newData?.mini_desc}`,
          siteId: '1467726470533754880',
          creator: '@NeonGeeksX',
          creatorId: '1467726470533754880',
          images: [`${newData?.thumbnail}`]
        },
      };
    }
  } else if (defaultLang === 'es') {
    const newMetaData = await fetchMetaDataNewsEs(newCode);
    const newData = newMetaData[0];

    if (!newData) {
      return redirect('https://www.lunanews.tech');
    }
    if (newData) {
      return {
      //? Basic metadata
        title: `${newData?.title} - Luna News`,
        generator: 'Luna News',
        applicationName: 'Luna News',
        referrer: 'origin-when-cross-origin',
        keywords: [`${newData?.keywords}`],
        authors: { name: newData?.author_id === 'alberto-luna' ? 'Alberto' : 'Unknown' },
        creator: 'Alberto Luna',
        publisher: 'Alberto Luna',
        formatDetection: { email: 'neongeeksofficial@gmail.com'},
        metadataBase: new URL('https://lunanews.tech'),
        alternates: {
          canonical: '/',
          languages: {
            'en-US': '/en',
            'es-MX': '/es',
          },
        },
  
        //? Open Graph metadata
        openGraph: {
          title: `${newData?.title} - Luna News`,
          description: `${newData?.mini_desc}`,
          url: `https://lunanews.tech/${newData?.lang}/${newData?.id}`,
          siteName: 'Luna News',
          images: [
            {
              url: `${newData?.thumbnail}`, 
              width: 800,
              height: 600,
            }
          ],
          locale: ['en_US', 'es_MX'],
          type: 'article',
          publishedTime: `${new Date(newData?.date)}`,
          modifiedTime: `${new Date(newData?.lastModified)}`,
          author: `${newData?.author_id === 'alberto-luna' ? 'Alberto' : 'Unknown'}`,
          section: `${newData?.sections}`,
          tags: [`${newData?.keywords}`]
        },
  
        //? Twitter metadata
        twitter: {
          card: 'summary_large_image',
          title: `${newData?.title} - Luna News`,
          description: `${newData?.mini_desc}`,
          siteId: '1467726470533754880',
          creator: '@NeonGeeksX',
          creatorId: '1467726470533754880',
          images: [`${newData?.thumbnail}`]
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

    const selectedArticle =  selectData[0];
    if (!(lang?.value === suffix)) {
      redirect(`/${selectedArticle?.id}`);
      return; 
    }
    selectedNew = selectedArticle;
  } else if (selectedLang === 'es') {
    //?Get the prefix
    const prefix = params.id.split('_');
    const suffix = prefix[1].toLowerCase();
    //?Get the newCode
    const parts = params.id.split('__');
    const newCode = parts[1];
    const selectData = await fetchNewsEs(newCode);

    const selectedArticle = selectData[0];
    if (!(lang?.value === suffix)) {
      redirect(`/${selectedArticle?.id}`);
      return;
    }
    selectedNew = selectedArticle;
  }

  
  const fechaDB = selectedNew?.date;

  const currentDate = new Date();
  const updateDate = new Date((fechaDB) as string);

  const dateSinceUpdateDays = (updateDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  const dateSinceUpdateMonth = dateSinceUpdateDays / 31;

  const dateSinceUpdateYear = dateSinceUpdateDays / 365;

  const rtf = new Intl.RelativeTimeFormat(lang?.value || suffixLower);

  //*? Last update

  const lastUpdate = selectedNew?.lastModified;

  const lastUpdateDate = new Date((lastUpdate as string));

  const lastUpdateDays = (lastUpdateDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  const lastUpdateMonth = lastUpdateDays / 31;

  const lastUpdateYear = lastUpdateDays / 365;



  return (
    <main>
      <Adsense />
      <section className='new'>
        <h1 className='new_title'>{selectedNew?.title}</h1>
        <p className='new_read_time'>{selectedNew?.read_time}</p>
        <div className='new_info'>
          <div className='new_info_text'>
            <Profile authorId={selectedNew?.author_id}/>

            <p className='new_info_date'>
              {
                lastUpdate 
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
          </picture>
        </div>

        <article className='article'>
          {
            selectedNew?.content.map((item : string, index: number) => (
              <>
                <MDXRemote key={index} source={item} />
                <GoogleAdUnit>
                  <ins className="adsbygoogle"
                    style={{display: 'block', textAlign: 'center'}}
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    data-ad-client="ca-pub-5368714617786898"
                    data-ad-slot="8032217154"></ins>
                </GoogleAdUnit>
              </>
            ))
          }
          <MDXRemote source={(selectedNew?.final as string)} />

        </article>
        
      </section>
    </main>
  );
}


