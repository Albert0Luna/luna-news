import '@/src/app/ui/styles/Home/Header.css'
import React from 'react'
import { outfit } from '../ui/fonts'
import Header from '../ui/components/Header'
import { useTranslations } from "next-intl"
import Footer from '../ui/components/Footer'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: 'en' | 'es'
  }
}

export default function RootLayout({
  children, 
  params: { locale }
}: Readonly<RootLayoutProps>) {
  const t = useTranslations('Header');

  const homeTranslations = {
    routes: {
      home: t('routes.home'),
      about: t('routes.about'),
      contact: t('routes.contact'),
    },
    donate: t('donate'),
    changeLanguage: t('changeLanguage'),
  }
  return (
    <html lang={locale} className={outfit.className}>
      <body className='main'>
        <Header translations={homeTranslations}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}