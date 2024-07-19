
import YoutubeIcon from '@/src/icons/social-media/YoutubeIcon';
import TiktokIcon from '@/src/icons/social-media/TiktokIcon';
import XIcon from '@/src/icons/social-media/XIcon';
import FacebookIcon from '@/src/icons/social-media/FacebookIcon';
import '@/src/layout/styles/Footer.css';
import { Link } from '@/src/navigation';

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='footer_privacity'>
        <Link href="/privacy">Aviso de privacidad</Link>
        <Link href="/terms-and-conditions">Ternimos y condiciones</Link>
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