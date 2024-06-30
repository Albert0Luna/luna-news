'use client'

import '@/src/app/ui/styles/Home/Header.css'
import LogoIcon from '../icons/ui-icons/LogoIcon'
import HearthIcon from '../icons/sections/HearthIcon'
import { oxygen } from '../fonts'
import Link from 'next/link'
import MenuIcon from '../icons/ui-icons/MenuIcon'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { HomeTranslations } from '@/types/interfaces'
import CancelIcon from '../icons/ui-icons/CancelIcon'
import LocalSwicher from './LocalSwicher'
import { usePathname } from 'next/navigation'

export default function Header(
  {translations}: {translations: HomeTranslations}
) {

  const [showNav, setShowNav] = useState(false)
  const [background, setBackground] = useState(false)

  const {routes, donate, changeLanguage} = translations

  const pathName = usePathname()

  const AllRoutes = [
    { name: `${routes.home}`, path: '/' },
    { name: `${routes.about}`, path: '/about' },
    { name: `${routes.contact}`, path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBackground(true)
      } else {
        setBackground(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={clsx({
      'header_background': background
    })}>
      <div className='brand_menu'>
       <div className='brand'>
        <div className='brand_logo'>
          <LogoIcon width={40} alt='LUNA NEWS logo'/>
        </div>
        <Link 
          className={`${oxygen.className} brand_name`} 
          href='/' >
            LUNA <span>NEWS</span>
          </Link>
       </div>

        <button 
          className='menu_button'
          onClick={() => setShowNav(prev => !prev)}  
        >
          <MenuIcon width={50} height={50} alt='Menu' />
        </button>
      </div>
    
      <div className={clsx(
          'nav_container',
          { 'show-nav': showNav,
            'hide-nav': !showNav
          }
        )}>
        <button onClick={() => setShowNav(false)} className='close_menu'>
            <CancelIcon width={40} height={40} alt='Cancel' />
        </button>
        <nav className='nav_bar'>
          <ul className='routes_container'>
            {
              AllRoutes && AllRoutes.map((route) => (
                <li key={route.name} className='link_container'>
                  <Link href={route.path} className={clsx(
                    'link_item',
                    { 'active': pathName === `${route.path}es` || pathName === `${route.path}en` }
                  )}>
                    {route.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>

        <div className='other_options'>
          <div className='change_language_container'>
            <LocalSwicher changeLanguage={changeLanguage}/>
          </div>
          <div className='donate_container'>
            <button className='donate_btn'>
              <HearthIcon width={15} height={15} alt='Hearth'/>
              <p>{donate}</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
