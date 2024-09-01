import { useTranslations } from 'next-intl';
import '@/src/sections/styles/Sections.css';
import BookIcon from '@/src/icons/sections/BookIcon';
import MagnifyingIcon from '@/src/icons/sections/MagnifyingIcon';
import SmartphoneIcon from '@/src/icons/sections/SmartphoneIcon';
import JoystickIcon from '@/src/icons/sections/JoystickIcon';
import PcIcon from '@/src/icons/sections/PcIcon';
import ProgrammerIcon from '@/src/icons/sections/ProgrammerIcon';
import AIIcon from '@/src/icons/sections/AIIcon';
import HotIcon from '@/src/icons/sections/FireIcon';
import { Link } from '@/src/navigation';
import { cookies } from 'next/headers';
import { Metadata } from 'next';
import Cybersecurity from '@/src/icons/sections/Cybersecurity';
import { Section } from '@/types/interfaces';

export function metadata () {

  const cookieStore = cookies();
  const data = cookieStore.get('NEXT_LOCALE')?.value;
  const lang = data?.toLowerCase();

  const dynamicMetadata: Metadata = {
    //? Basic metadata
    title: `${lang === 'es' ? 'Secciones' : 'Sections'}`,
    generator: 'Luna News',
    applicationName: 'Luna News',
    referrer: 'origin-when-cross-origin',
    keywords: `${lang === 'es' 
      ? 'Secciones' 
      : 'Sections'
    }`,
    authors: { name: 'Alberto' },
    creator: 'Alberto Luna',
    publisher: 'Alberto Luna',
    metadataBase: new URL('https://www.lunanews.tech/en/sections'),
    alternates: {
      languages: {
        'en-US': 'https://www.lunanews.tech/en/sections',
        'es-MX': 'https://www.lunanews.tech/es/sections',
      },
    },
  };

  return dynamicMetadata;
};

function Sections () {
  const t = useTranslations('Coverpage');
  const tSections = useTranslations('SectionsPage');

  const sections:Array<Section> = [
    {
      title: t('sections.Latest'),
      link: '/latest',
      icon: () => <HotIcon />
    },
    {
      title: t('sections.Tutorials'),
      link: '/tutorials',
      icon: () => <BookIcon />
    },
    {
      title: t('sections.Pc\'s-&-Laptops'),
      link: '/pcs-and-laptops',
      icon: () => <PcIcon />
    },
    {
      title: t('sections.Mobiles-&-Tablets'),
      link: '/mobiles-and-tablets',
      icon: () => <SmartphoneIcon />
    },
    {
      title: t('sections.Gaming'),
      link: '/gaming',
      icon: () => <JoystickIcon />
    },
    {
      title: t('sections.Reviews'),
      link: '/reviews',
      icon: () => <MagnifyingIcon />
    },
    {
      title: t('sections.Programming'),
      link: '/programming',
      icon: () => <ProgrammerIcon />
    },
    {
      title: t('sections.AI'),
      link: '/ai',
      icon: () => <AIIcon />
    },
    {
      title: t('sections.Cybersecurity'),
      link: '/cybersecurity',
      icon: () => <Cybersecurity />
    }
  ];

  return (
    <div className='sections'>
      <h1 className='sections_title'>{tSections('sections')}</h1>
      <hr className='sections_divisor'/>
      <section className='section'>
        <ul className='sections_container'>
          {
            sections && sections.map(item => {
              return (
                <li key={item.title} className='section_item_container'>
                  <Link  href={`/sections/${item.link}/1`} className='section_item' >
                    <picture className='section_item_svg_container'>
                      {item.icon()}
                    </picture>
                    <h2 className='section_item_title'>{item.title}</h2>
                    <small className='section_item_more'>{tSections('readMore')}</small>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default Sections;