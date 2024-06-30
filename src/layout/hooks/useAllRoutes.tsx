export const useAllRoutes = ({translations}: any) => {

  const allRoutes = [
    { name: translations.routes.home, path: '/' },
    { name: translations.routes.about, path: '/about' },
    { name: translations.routes.contact, path: '/contact' }
  ];

  return {allRoutes};
};