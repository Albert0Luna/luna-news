import BookIcon from '@/src/icons/sections/BookIcon';
import MagnifyingIcon from '@/src/icons/sections/MagnifyingIcon';
import SmartphoneIcon from '@/src/icons/sections/SmartphoneIcon';
import JoystickIcon from '@/src/icons/sections/JoystickIcon';
import PcIcon from '@/src/icons/sections/PcIcon';
import ProgrammerIcon from '@/src/icons/sections/ProgrammerIcon';
import AIIcon from '@/src/icons/sections/AIIcon';
import HotIcon from '@/src/icons/sections/FireIcon';
import Cybersecurity from '@/src/icons/sections/Cybersecurity';
import { Link } from '@/src/navigation';
import { Section } from '@/types/interfaces';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

export default function SectionCarousel () {

  const t = useTranslations('Coverpage');

  const sections: Array<Section> = [
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
    <div className='section_container'>
      {
        sections && 
                sections.map((section) => (
                  <Link 
                    href={`/sections/${section.link}/1`} 
                    className={clsx(
                      'section_item_link', {
                        'section_item_link_tutorials': section.link === '/tutorials',
                        'section_item_link_pcs': section.link === '/pcs-and-laptops',
                        'section_item_link_mobiles': section.link === '/mobiles-and-tablets',
                        'section_item_link_gaming': section.link === '/gaming',
                        'section_item_link_reviews': section.link === '/reviews',
                        'section_item_link_programming': section.link === '/programming',
                        'section_item_link_ai': section.link === '/ai',
                        'section_item_link_cybersecurity': section.link === '/cybersecurity'
                      }
                    )}
                    key={section.title}
                  > 
                    <div className='section_icon'>
                      {section.icon()}
                    </div>
                    <p>{section.title}</p>
                  </Link>
                ))
      }
    </div>
  );
}
