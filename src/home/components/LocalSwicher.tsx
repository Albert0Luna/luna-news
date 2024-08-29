'use client';

import SpanishIcon from '@/src/icons/ui-icons/SpanishIcon';
import EnglishIcon from '@/src/icons/ui-icons/EnglishIcon';
import React, { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LocalSwicher ({changeLanguage}: {changeLanguage: string}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathName = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.push(`/${nextLocale + pathName.slice(3)}`, {scroll: true});
    });
  };
  return (
    <label className='change_language'>
      {
        localActive === 'en' 
          ? <EnglishIcon width={30} height={30} alt='English'/>
          : <SpanishIcon width={30} height={30} alt='Español'/>
      }
      <select
        defaultValue={localActive} 
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">
          English
        </option>
        <option value="es">
          Español
        </option>
      </select>
    </label>
  );
}
