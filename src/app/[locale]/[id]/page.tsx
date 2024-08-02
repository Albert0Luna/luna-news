import '@/src/news/styles/News.css';
import { useLocale, useTranslations } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Profile from '@/src/news/components/Profile';
import { redirect } from '@/src/navigation';
import { cookies } from 'next/headers';
import {fetchNewsEn, fetchNewsEs, fetchMetaDataNewsEs, fetchMetaDataNewsEn} from '@/src/app/lib/data';

export async function generateMetadata ({ params }: { params: { id: string } }) {

  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE');

  const parts = params.id.split('__');
  const newCode = parts[1];

  if (lang?.value === 'en') {
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
  } else if (lang?.value === 'es') {
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
    } else {
      return {
        title: 'Error - Luna News',
        generator: 'Luna News',
        applicationName: 'Luna News',
        referrer: 'origin-when-cross-origin',
        keywords: ['404', 'Not Found'],
        authors: { name: 'Alberto' },
        creator: 'Alberto Luna',
        publisher: 'Alberto Luna',
      };
    }
  }

  
}

export default async function Page ({params}: {params: {id: string}}) {
  
  //const t = await useTranslations('Date');

  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE');

  let selectedNew;


  if (lang?.value === 'en') {
    //?Get the prefix
    const prefix = params.id.split('_');
    const suffix = prefix[1];
    //? Get the new code
    const parts = params.id.split('__');
    const newCode = parts[1];
    const selectData = await fetchNewsEn(newCode);
    console.log(selectData);
    const selectedArticle =  selectData[0];
    if (!(lang?.value.toUpperCase() === suffix)) {
      redirect(`/${selectedArticle?.id}`);
      return; 
    }
    selectedNew = selectedArticle;
    console.log(selectedNew);
  } else if (lang?.value === 'es') {
    //?Get the prefix
    const prefix = params.id.split('_');
    const suffix = prefix[1];
    //?Get the newCode
    const parts = params.id.split('__');
    const newCode = parts[1];
    const selectData = await fetchNewsEs(newCode);
    console.log(selectData);

    const selectedArticle = selectData[0];
    if (!(lang?.value.toUpperCase() === suffix)) {
      redirect(`/${selectedArticle?.id}`);
      return;
    }
    selectedNew = selectedArticle;
    console.log(selectedNew);

  }

  
  const fechaDB = selectedNew?.date;

  const currentDate = new Date();
  const updateDate = new Date((fechaDB) as string);

  const dateSinceUpdateDays = (updateDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  const dateSinceUpdateMonth = dateSinceUpdateDays / 31;

  const dateSinceUpdateYear = dateSinceUpdateDays / 365;

  const rtf = new Intl.RelativeTimeFormat(lang?.value);

  //*? Last update

  const lastUpdate = selectedNew?.lastModified;

  const lastUpdateDate = new Date((lastUpdate as string));

  const lastUpdateDays = (lastUpdateDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  const lastUpdateMonth = lastUpdateDays / 31;

  const lastUpdateYear = lastUpdateDays / 365;



  return (
    <main>
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
                {/*
                  <div>
                    <small>Publicidad</small>
                    <img src="data:image/jpeg;base64,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" alt="trivago-ad" />
                  </div>
                */}
              </>
            ))
          }
          <MDXRemote source={(selectedNew?.final as string)} />
        </article>
        
      </section>
    </main>
  );
}


