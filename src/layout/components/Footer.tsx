
import YoutubeIcon from '@/src/icons/social-media/YoutubeIcon';
import TiktokIcon from '@/src/icons/social-media/TiktokIcon';
import XIcon from '@/src/icons/social-media/XIcon';
import FacebookIcon from '@/src/icons/social-media/FacebookIcon';
import '@/src/layout/styles/Footer.css';
import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';

export default function Footer () {

  const t = useTranslations('Footer');
  return (
    <footer className='footer'>
      <div className='footer_privacity'>
        <Link href="/privacy" className='privacy'>
          {t('privacy')}
        </Link>
        <Link href="/terms-and-conditions" className='terms'>
          {t('terms')}
        </Link>
      </div>
      <div className='footer_social_container'>
        <YoutubeIcon />
        <TiktokIcon />
        <XIcon/>
        <FacebookIcon />
      </div>
    </footer>
  );
}