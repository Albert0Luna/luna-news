'use client';
import Link from 'next/link';
import errorImage from '@/src/assets/error.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
 
export default function Error () {
  const t = useTranslations('Error');
  return (
    <div className='w-full mt-25 flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center text-center gap-4 p-2 max-w-[800px] mx-auto font-manrope md:mt-10'>
        <h1 className='text-2xl font-semibold'>{t('title')}</h1>
        <p>{t('description')}</p>
        <small>{t('report')} <a href="mailto:support@example.com" className='text-primary hover:underline'>support@example.com</a>.</small>
        <small>{t('apology')}</small>
        <Link href="/" className="text-primary hover:underline font-semibold">{t('goBack')}</Link>
      </div>
      <Image src={errorImage} alt="" className="w-full h-full object-cover max-w-[600px]" />
    </div>
  );
}
