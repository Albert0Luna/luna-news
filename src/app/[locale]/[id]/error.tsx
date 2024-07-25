'use client'; // Error components must be Client Components

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useEffect } from 'react';
 
export default function Error ({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const locale = useLocale();
  
  return (
    <div className='error'>
      <h1>
        {locale === 'en' 
          ? 'Sorry, something went wrong' 
          : 'Lo sentimos, algo salió mal'
        }
      </h1>
      <p>
        {
          locale === 'en' 
            ? 'If you continue to experience errors, please contact the development team. Thank you'
            : 'Si continúa experimentando errores, por favor contacte al equipo de desarrollo. Gracias'
        }
      </p>
      <Link href="/">
        {
          locale === 'en' 
            ? 'Go back'
            : 'Volver'
        }
      </Link>
    </div>
  );
}