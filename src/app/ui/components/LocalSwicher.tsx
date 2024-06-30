'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useTransition } from 'react'
import SpanishIcon from '../icons/ui-icons/SpanishIcon'
import EnglishIcon from '../icons/ui-icons/EnglishIcon'

export default function LocalSwicher({changeLanguage}: {changeLanguage: string}) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
  }
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
          <option value="en">English</option>
          <option value="es">Español</option>
      </select>
    </label>
  )
}
