import { useTranslations } from 'next-intl';
import LogoIcon from '@/src/icons/ui-icons/LogoIcon';
import '@/src/home/styles/Coverpage.css';
import SectionCarousel from './SectionCarousel';

export default function CoverPage () {
  const t = useTranslations('Coverpage');

  return (
    <section className="coverpage">
      <article className='coverpage_content'>

        <div className='coverpage_content_brand'>
          
          <h1 className='coverpage_content_title'>
            {t('title.p1')} <span>{t('title.p2')}</span> {t('title.p3')}
          </h1>
          <h2 className='coverpage_content_subtitle'>
            {t('subtitle.p1')} <span>{t('subtitle.p2')}</span> {t('subtitle.p3')}
          </h2>

        </div>

        <div className='coverpage_container_logo'>
          <LogoIcon/>
        </div>

      </article>

      <div className='section'>
        <SectionCarousel />
      </div>
    </section>
  );
}
