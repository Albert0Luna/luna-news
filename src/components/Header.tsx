/* eslint-disable @next/next/no-img-element */
'use client';
import Magnifying from '@/public/Magnifying';
import { Link, usePathname, useRouter } from '@/src/i18n/navigation';
import fetchSearchResults from '@/src/libs/fetchSearchResults';
import { HomeTranslations, SearchResult } from '@/src/types/interfaces';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export default function Header (
  { translations, locale }: { translations: HomeTranslations, locale: string }
) {
  const [showNav, setShowNav] = useState(false);
  const [showLanguageList, setShowLanguageList] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>();
  const [searchedResults, setSearchedResults] = useState<SearchResult[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const routes = [
    {
      name: translations.routes.home,
      path: '/',
    },
    {
      name: translations.routes.about,
      path: '/about',
    },
    {
      name: translations.routes.sections,
      path: '/sections',
    }
  ];
  
  useEffect(() => {
    const currentTheme = window.localStorage.theme;
    console.log(currentTheme);
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const pathName = usePathname();

  const handleTheme = () => {
    const currentTheme = window.localStorage.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('theme', newTheme);
    // Use explicit add/remove instead of toggle
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setTheme(newTheme);
    setShowNav(false);
  };

  const changeLanguage = (lang: string) => {
    if (lang === locale) {
      setShowLanguageList(prev => !prev);
      return;
    }
    const pathnameWithoutLocale = pathName.replace(/^\/(en|es)/, '') || '/';
    router.push(pathnameWithoutLocale, { locale: lang });
  };

  const handleNav = () => {
    setShowNav(prev => !prev);
    setShowLanguageList(false);
  };

  const getNews = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchValue = form.get('search') as string;
    const result  = await fetchSearchResults({ searchValue });
    if (result.error) {
      setErrorMessage(`No results found for "${searchValue}"`);
      return;
    }
    setSearchedResults(result);
    setErrorMessage('');
    if (recentSearches.find(item => item === searchValue) === undefined) {
      setRecentSearches(prev => [searchValue, ...prev]);
    }
  };

  const closeModal = () => {
    setSearchActive(false);
    setSearchedResults([]);
    setErrorMessage('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  const getNewsFromRecent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const searchValue = e.currentTarget.innerText;
    const result  = await fetchSearchResults({ searchValue });
    setSearchedResults(result);
    if (recentSearches.find(item => item === searchValue) === undefined) {
      setRecentSearches(prev => [searchValue, ...prev]);
    }
    if (searchInputRef.current) {
      searchInputRef.current.value = searchValue;
    }
  };
  return (
    <header className='bg-white border-gray-200 dark:bg-gray-900 fixed top-0 right-0 left-0 shadow'>
      {/* SEARCH MODAL */}
      <div className={clsx(
        'fixed inset-0 z-40 bg-gray-900/70 transition-opacity ',
        searchActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )} ></div>
      <div className={clsx(
        'fixed inset-0 z-40 bg-gray-900/50 transition-opacity',
        searchActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )} ></div>
      <div className={clsx(
        'overflow-y-auto overflow-x-hidden fixed inset-x-0 z-50 justify-center items-center w-full max-h-full inset-y-0',
        searchActive ? 'flex' : 'hidden'
      )} onClick={closeModal}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-900 " onClick={e => e.stopPropagation()}>
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <form className="flex items-center mx-auto w-full" onSubmit={getNews}>
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full ">
                  <input type="text" id="voice-search" name="search" ref={searchInputRef} className="bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-orange-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-400/70 text-sm md:text-lg ps-4 dark:focus:outline-none" placeholder="Search Astro, Rust, AI..." required />
                </div>
                <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm md:text-lg font-medium text-white bg-primary rounded-lg border hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:hover:bg-primary cursor-pointer dark:border-none">
                  <svg className="w-5 h-5 md:w-4.5 md:h-4.5 md:me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg> <span className='hidden md:flex'>Search</span>
                </button>
              </form>
            </div>
            {/* <!-- Modal body --> */}
            <ul className="space-y-3 md:space-y-5 p-4">
              {
                errorMessage 
                  ? <li className='h-40 w-full grid place-content-center md:text-lg dark:text-gray-500 text-gray-900 brod'>{errorMessage}</li>
                  :
                  searchedResults.length === 0 ? 
                    recentSearches.length === 0
                      ? <li className='h-40 w-full grid place-content-center md:text-lg dark:text-gray-500 text-gray-900 brod'>No recent searches</li>
                      : recentSearches.slice(0, 5).map((result, index) => (
                        <li key={index} className='flex justify-between items-center p-2 md:text-lg dark:text-gray-400 text-gray-900 rounded-md border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'>
                          <button className='cursor-pointer w-full flex justify-between items-center px-2' onClick={getNewsFromRecent}>
                            <p>{result}</p>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
                          </button>
                        </li>
                      ))
                    :
                    searchedResults.map((result, index) => (
                      <li key={index} className="w-full">
                        <Link href={`/${result.slug}`} className="w-full" onClick={closeModal}>
                          <input type="radio" id="job-1" name="job" value="job-1" className="hidden peer" required />
                          <label htmlFor="job-1" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-orange-500 peer-checked:border-orange-400 dark:peer-checked:border-blue-400 peer-checked:text-orange-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-500">
                            <div className="flex gap-4 w-full">
                              <img className='w-24 h-14 rounded' src={result.mainImage} alt="" />
                              <div className='flex flex-col justify-center w-full'>
                                <div className="w-full font-normal font-manrope text-gray-900 dark:text-gray-100">
                                  <p className="w-8/12 md:w-10/12 md:text-lg font-semibold truncate text-ellipsis">
                                    {result.translations[locale].title}
                                  </p>
                                </div>
                                <div className="w-full text-gray-500 dark:text-gray-400">{result.categories[0]}</div>
                              </div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
                          </label>
                        </Link>
                      </li>
                    ))
              }
            </ul>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center w-full justify-end md:p-4 px-4 py-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button type="button" className="text-red-700 border border-red-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 cursor-pointer" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:justify-normal">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse md:flex-1">
            {
              theme === 'dark' 
                ? <img src="/logo-dark.svg" className="h-7" alt="Luna News Logo" /> 
                : <img src="/logo-light.svg" className="h-7" alt="Luna News Logo" />
            }
            <span className="self-center text-xl font-manrope font-semibold tracking-widest whitespace-nowrap dark:text-slate-200"><span className='text-primary'>LUNA </span>NEWS</span>
          </Link>
          
          <div className="flex items-center justify-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse relative">
            <button className='cursor-pointer flex md:hidden' onClick={() => {
              setSearchActive(prev => !prev);
              setShowNav(false);
            }}>
              <div className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <Magnifying color={theme === 'dark' ? '#98a1af' : '#364153'} />
              </div>
            </button>

            <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false" onClick={handleNav}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          
          <div className={clsx(
            'items-center justify-between w-full md:flex md:w-auto md:order-1 py-2 md:gap-5 xl:gap-10',
            showNav ? 'block' : 'hidden'
          )} id="navbar-language">
            <ul className="flex flex-col font-manrope tracking-wide gap-3 md:p-0 mt-2 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {
                routes.map((route, index) => (
                  <li key={index} className=''>
                    <Link
                      onClick={() => setShowNav(false)}
                      href={route.path}
                      className={clsx(
                        'block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 dark:text-white',
                        pathName === route.path 
                          ? 'bg-primary text-white md:text-primary md:dark:text-primary' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
                      )}
                      aria-current="page"
                    >
                      {route.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className='w-0.5 h-6 rounded-2xl bg-gray-400 hidden md:flex'></div>
            <div className='flex mt-2 md:mt-0 items-center space-x-2 rtl:space-x-reverse  md:gap-2.5 xl:gap-5 md:justify-center'>
              <button className='cursor-pointer' onClick={() => setSearchActive(prev => !prev)}>
                <div className='hidden md:flex border gap-2 border-[#ccc] dark:border-gray-600 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                  <div className='flex items-center justify-center w-4 h-4 m-auto'>
                    <Magnifying color={theme === 'dark' ? '#98a1af' : '#364153'} />
                  </div>
                  <span className='text-gray-600 dark:text-gray-400 font-light pr-6'>Search</span>
                  {/* <span className='bg-[#eee] dark:bg-gray-700 text-sm m-auto px-1.5 text-center py-0.5 rounded-lg text-gray-500 dark:text-gray-400 tracking-widest'>⌘K</span> */}
                </div>
              </button>
              <div className='bg-[#eee] dark:bg-gray-700 flex items-center justify-center w-9 h-9 rounded-full shadow-lg mr-10 md:mr-0'>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" onClick={handleTheme} />
                  <img src="/moon.svg" alt="Toggle dark mode" className="hidden dark:block w-6" />
                  <img src="/sun.svg" alt="Toggle light mode" className='dark:hidden w-6' />
                </label>
              </div>
              <div className='relative'>
                <button type="button" data-dropdown-toggle="language-dropdown-menu" className="flex items-center font-medium justify-center px-4 py-2 w-auto h-9 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer bg-[#eee] dark:bg-gray-700 dark:hover:text-white shadow-lg" onClick={() => setShowLanguageList(prev => !prev)}>
                  <p className='tracking-wide font-poppins-500'>{locale === 'en' ? 'English' : 'Español'}</p>
                </button>
                <div className={clsx(
                  'z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow-sm dark:bg-gray-700 top-6 w-auto inset-x-0',
                  showLanguageList ? 'absolute' : 'hidden',
                )} id="language-dropdown-menu">
                  <ul className="font-medium flex flex-col" role="none">
                    <li className="flex items-center w-auto h-10 justify-center text-sm text-gray-500 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer" onClick={() => changeLanguage('en')}>
                      <p className='tracking-wide font-poppins-500' role="menuitem">
                        English
                      </p>
                    </li>
                    <li className="flex items-center w-auto h-10 justify-center text-sm text-gray-500 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer" onClick={() => changeLanguage('es')}>
                      <p className='tracking-wide font-poppins-500' role="menuitem">
                        Español
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
