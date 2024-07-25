import { useLocale, useTranslations } from 'next-intl';
import '@/src/sections/styles/Sections.css';
import BookIcon from '@/src/icons/sections/BookIcon';
import MagnifyingIcon from '@/src/icons/sections/MagnifyingIcon';
import SmartphoneIcon from '@/src/icons/sections/SmartphoneIcon';
import JoystickIcon from '@/src/icons/sections/JoystickIcon';
import PcIcon from '@/src/icons/sections/PcIcon';
import ProgrammerIcon from '@/src/icons/sections/ProgrammerIcon';
import AIIcon from '@/src/icons/sections/AIIcon';
import HotIcon from '@/src/icons/sections/FireIcon';
import Link from 'next/link';

function Sections () {
  const t = useTranslations('Coverpage');
  const tSections = useTranslations('SectionsPage');

  const sections = [
    {
      title: t('sections.Latest'),
      link: '/latest',
      icon: () => <HotIcon />
    },
    {
      title: t('sections.Toturials'),
      link: '/toturials',
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
  ];

  const locale = useLocale();

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
                  <Link  href={`/${locale}/sections/${item.link}`} className='section_item' >
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