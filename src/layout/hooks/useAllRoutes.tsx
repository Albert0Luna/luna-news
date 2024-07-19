import { useLocale } from 'next-intl';

export const useAllRoutes = ({translations}: any) => {
  const locale = useLocale();
  const allRoutes = [
    { name: translations.home, path: `/${locale}` },
    { name: translations.about, path: '/about' },
    { name: translations.sections, path: '/sections' },
  ];

  return {allRoutes};
};