import { useTranslations } from 'next-intl';
import LogoIcon from '@/src/icons/ui-icons/LogoIcon';
import Link from 'next/link';
import {oxygen} from '@/src/fonts/fonts';
import BookIcon from '@/src/icons/sections/BookIcon';
import MagnifyingIcon from '@/src/icons/sections/MagnifyingIcon';
import SmartphoneIcon from '@/src/icons/sections/SmartphoneIcon';
import JoystickIcon from '@/src/icons/sections/JoystickIcon';
import PcIcon from '@/src/icons/sections/PcIcon';
import ProgrammerIcon from '@/src/icons/sections/ProgrammerIcon';
import AIIcon from '@/src/icons/sections/AIIcon';
import HotIcon from '@/src/icons/sections/FireIcon';
import '@/src/home/styles/Coverpage.css';

export default function CoverPage () {
  const t = useTranslations('Coverpage');


  const sections = [
    {
      title: t('sections.Latest'),
      link: '/latest',
      icon: () => <HotIcon />
    },
    {
      title: t('sections.Toturials'),
      link: t('/toturials'),
      icon: () => <BookIcon />
    },
    {
      title: t('sections.Pc\'s-&-Laptops'),
      link: t('/pcs-and-laptops'),
      icon: () => <PcIcon />
    },
    {
      title: t('sections.Mobiles-&-Tablets'),
      link: t('/mobiles-and-tablets'),
      icon: () => <SmartphoneIcon />
    },
    {
      title: t('sections.Gaming'),
      link: t('/gaming'),
      icon: () => <JoystickIcon />
    },
    {
      title: t('sections.Reviews'),
      link: t('/programming'),
      icon: () => <MagnifyingIcon />
    },
    {
      title: t('sections.Programming'),
      link: t('/reviews'),
      icon: () => <ProgrammerIcon />
    },
    {
      title: t('sections.AI'),
      link: t('/reviews'),
      icon: () => <AIIcon />
    },
  ];

  return (
    <section className="coverpage">
      <div className='coverpage_content'>
        <div className='coverpage_content_brand'>

          <h1 className='coverpage_content_title'>
            {t('title.p1')} <span className={oxygen.className}>{t('title.p2')}</span> {t('title.p3')}
          </h1>
          <h2 className='coverpage_content_subtitle'>
            {t('subtitle.p1')} <span>{t('subtitle.p2')}</span> {t('subtitle.p3')}
          </h2>

        </div>

        <div className='coverpage_container_logo'>
          <LogoIcon alt='brand logo'/>
        </div>

      </div>

      <div className='section'>
        <ul className='section_container'>
          {
            sections && 
                sections.map((section) => (
                  <li key={section.title} className='section_item'>
                    <Link href={section.link}>
                      <div className='section_icon'>
                        {section.icon()}
                      </div>
                      <p>{section.title}</p>
                    </Link>
                  </li>
                ))
          }
        </ul>
      </div>
    </section>
  );
}
