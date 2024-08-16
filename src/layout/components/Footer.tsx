
import YoutubeIcon from '@/src/icons/social-media/YoutubeIcon';
import TiktokIcon from '@/src/icons/social-media/TiktokIcon';
import XIcon from '@/src/icons/social-media/XIcon';
import '@/src/layout/styles/Footer.css';
import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';
import FacebookIcon from '@/src/icons/social-media/FacebookIcon';

export default function Footer () {

  const t = useTranslations('Footer');
  return (
    <footer className='footer'>
      <div className='footer_privacity'>
        <Link href="/privacy" className='privacy_link'>
          {t('privacy')}
        </Link>
        <Link href="/terms-and-conditions" className='terms_link'>
          {t('terms')}
        </Link>
      </div>
      <div className='footer_social_container'>
        <Link href='https://www.youtube.com/channel/UCHXjQcft2ZdyxYQHq6dsU0Q' target='_blank'>
          <YoutubeIcon />
        </Link>
        <Link href='https://www.tiktok.com/@luna_digital_tech' target='_blank'>
          <TiktokIcon />
        </Link>
        <Link href='https://x.com/LunaNewsX' target='_blank'>
          <XIcon/>
        </Link>
        <Link href='https://www.facebook.com/people/Luna-News/61563954901464/' target='_blank'>
          <FacebookIcon />
        </Link>
      </div>
    </footer>
  );
}