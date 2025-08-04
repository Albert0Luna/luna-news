'use client';
import notFoundLightImage from '@/src/assets/404-light.jpg';
import notFoundImage from '@/src/assets/404.jpg';
import '@/src/globals.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound () {
  const t = useTranslations('NotFound');
  console.log(process.env.NEXT_PUBLIC_DOMAIN);
  
  return (
    <main className=" w-full h-screen bg-cover bg-center flex ">
      <Image src={notFoundImage} alt="404 Not Found" className="absolute inset-0 w-full h-full object-cover block dark:block" />
      <Image src={notFoundLightImage} alt="404 Not Found" className="absolute inset-0 w-full h-full object-cover block dark:hidden" />
      <div className='text-slate-900 dark:text-white flex flex-col mt-12 md:mt-15 font-poppins-600 px-5 md:justify-start w-full max-w-[1200px] text-center md:text-start mx-10 md:gap-6 z-10'>
        <h1 className='text-3xl mb-2 md:text-4xl'>{t('title')}</h1>
        <h1 className='md:text-[126px] text-8xl mb-2 font-manrope font-semibold md:font-bold md:tracking-wide'>404</h1>
        <Link href="/" className='text-primary text-2xl md:text-3xl hover:opacity-85'>{t('goBack')}</Link>
      </div>
    </main>
  );
}