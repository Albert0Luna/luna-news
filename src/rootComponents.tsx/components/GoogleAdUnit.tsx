import React, { Suspense } from 'react';
import GoogleAdUnitClient from '@/src/rootComponents.tsx/components/GoogleAdUnitClient';

export default function GoogleAdUnit ({
  children
}: {children: React.ReactNode}) {
  return (
    <Suspense>
      <GoogleAdUnitClient isProduction={process.env.NODE_ENV == 'production'} >
        {children}
      </GoogleAdUnitClient>
    </Suspense>
  );
}
