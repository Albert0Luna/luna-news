'use client';

import '@/src/layout/styles/Header.css';
import LogoIcon from '@/src/icons/ui-icons/LogoIcon';
// import HearthIcon from '@/src/icons/ui-icons/HearthIcon';
import CancelIcon from '@/src/icons/ui-icons/CancelIcon';
import LocalSwicher from '@/src/home/components/LocalSwicher';
import MenuIcon from '@/src/icons/ui-icons/MenuIcon';
import { Link } from '@/src/navigation';
import clsx from 'clsx';
import { oxygen } from '@/src/fonts/fonts';
import {  useState } from 'react';
import { HomeTranslations } from '@/types/interfaces';
import { usePathname } from 'next/navigation';
import { useAllRoutes } from '@/src/layout/hooks/useAllRoutes';

function NavBar (
  {translations}: any, {hideNav}: {hideNav: (value: boolean) => void}
) {
  const {allRoutes} = useAllRoutes({translations});
  const pathName = usePathname();

  const handleHideNav = (value: boolean) => {
    hideNav(value);
  };

  return (
    <nav className='nav_bar'>
      <ul className='routes_container'>
        {
          allRoutes && allRoutes.map((route) => (
            <li key={route.name} className='link_container'>
              <Link 
                onClick={() => handleHideNav(false)}
                href={route.path === '/es' || route.path === '/en' ? '/' : route.path} 
                className={clsx(
                  'link_item',
                  { 'active': pathName.replace('/es', '') === route.path  || pathName.replace('/en', '') === route.path
                  }
                )}>
                {route.name}
              </Link>
            </li>

          ))
        }
      </ul>
    </nav>
  );
}

export default function Header (
  {translations}: {translations: HomeTranslations}
) {
  const [showNav, setShowNav] = useState(false);

  const {changeLanguage, routes} = translations;
  const pathName = usePathname();

  const hideNav = (value: boolean) => {
    setShowNav(value);
  };
  return (
    <header className='header_container'>
      <nav className={clsx(
        'header',
        { 'header_opened': showNav,
        }
      )}>
        <div className='brand_menu'>
          <div className='brand'>
            <Link href='/' className='brand_logo' aria-label="Go to home">
              <LogoIcon />
            </Link>
            <Link
              className={`${oxygen.className} brand_name`} 
              href='/' >
              <p><span>LUNA</span> NEWS</p>
            </Link>
          </div>

          <button 
            className='menu_button'
            aria-label="Show navigation menu"
            onClick={() => setShowNav(prev => !prev)}  
          >
            {
              showNav ? <CancelIcon /> : <MenuIcon />
            }
          </button>
        </div>
    
        <div className={clsx(
          'nav_container',
          { 'show-nav': showNav,
            'hide-nav': !showNav
          }
        )}>
          <NavBar translations={routes} hideNav={hideNav}/>

          <div className='other_options'>
            <div className='change_language_container'>
              <LocalSwicher changeLanguage={changeLanguage}/>
            </div>
            <div className='donate_container'>
              {/* 
            <button className='donate_btn'>
              <HearthIcon width={15} height={15} alt='Hearth'/>
              <p>{donate}</p>
            </button>
            */}
            </div>
          </div>
        </div>
      </nav>
      {
        pathName.includes('ES') ||  pathName.includes('EN') ?       <div className='timeline'></div> : null
      }
    </header>
  );
}
