
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
        <Link href='https://x.com/NeonGeeksX' target='_blank'>
          <XIcon/>
        </Link>
        {/* <FacebookIcon /> */}
      </div>
    </footer>
  );
}