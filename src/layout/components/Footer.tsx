
import YoutubeIcon from '@/src/icons/social-media/YoutubeIcon';
import TiktokIcon from '@/src/icons/social-media/TiktokIcon';
import XIcon from '@/src/icons/social-media/XIcon';
import FacebookIcon from '@/src/icons/social-media/FacebookIcon';

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='footer_privacity'>
        <p>Aviso de privacidad</p>
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