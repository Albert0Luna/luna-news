// import YoutubeIcon from '@/src/icons/social-media/YoutubeIcon';
// import TiktokIcon from '@/src/icons/social-media/TiktokIcon';
// import XIcon from '@/src/icons/social-media/XIcon';
// import FacebookIcon from '@/src/icons/social-media/FacebookIcon';
// import { Link } from '@/src/i18n/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer () {
  const t = useTranslations('Footer');
  return (
    <footer className='mt-10 max-h-20 p-8 text-center text-sm text-gray-600 dark:text-gray-300 border-t border-gray-300 dark:border-gray-600'>
      <p>{t('description')} <Link href="https://github.com/Albert0Luna" target='_blank' referrerPolicy='no-referrer' className='text-primary hover:underline'>Alberto Luna</Link></p>
    </footer>
  );
}