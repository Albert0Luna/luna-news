'use client';

import '@/src/layout/styles/Header.css';
import LogoIcon from '@/src/icons/ui-icons/LogoIcon';
import HearthIcon from '@/src/icons/ui-icons/HearthIcon';
import CancelIcon from '@/src/icons/ui-icons/CancelIcon';
import LocalSwicher from '@/src/home/components/LocalSwicher';
import MenuIcon from '@/src/icons/ui-icons/MenuIcon';
import { Link } from '@/src/navigation';
import clsx from 'clsx';
import { oxygen } from '@/src/fonts/fonts';
import { useEffect, useState } from 'react';
import { HomeTranslations } from '@/types/interfaces';
import { usePathname } from 'next/navigation';
import { useAllRoutes } from '@/src/layout/hooks/useAllRoutes';

function NavBar (
  {translations}: {translations: HomeTranslations}, {hideNav}: {hideNav: (value: boolean) => void}
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
  const [background, setBackground] = useState(false);

  const {donate, changeLanguage, routes} = translations;
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hideNav = (value: boolean) => {
    setShowNav(value);
  };
  return (
    <header className={clsx({
      'header_background': background
    })}>
      <div>
      </div>
      <div className='brand_menu'>
        <div className='brand'>
          <Link href='/' className='brand_logo'>
            <LogoIcon width={40} alt='LUNA NEWS logo'/>
          </Link>
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
        <NavBar translations={routes} hideNav={hideNav}/>

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
  );
}
