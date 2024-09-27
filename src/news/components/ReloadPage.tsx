'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function ReloadPage () {
  const locale = useLocale();
  const router = useRouter();
  const [reloadLanguage] = useState(locale);

  useEffect(() => {
    router.refresh();
  }, [reloadLanguage, router]);

  return (
    <>
    </>
  );
}
