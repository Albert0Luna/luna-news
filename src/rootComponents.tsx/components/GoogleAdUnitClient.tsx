'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import React, { Fragment, useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

function GoogleAdUnitClient ({children, isProduction}: 
  {
    isProduction: boolean
    children: React.ReactNode
  }
) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isProduction) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } else {
      console.log('Current in development mode, skipping Google Ad Unit');
    }
  }, [pathname, searchParams, isProduction]);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

export default GoogleAdUnitClient;