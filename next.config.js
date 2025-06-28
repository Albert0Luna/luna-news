// Importar los plugins
const createNextIntlPlugin = require('next-intl/plugin');

// Crear instancias de los plugins
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configura `pageExtensions` para incluir archivos MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Opcionalmente, agrega cualquier otra configuración de Next.js aquí
};

module.exports = withNextIntl(nextConfig);

// Aplica ambos plugins a la configuración base
// module.exports = withMDX(withNextIntl(nextConfig));



