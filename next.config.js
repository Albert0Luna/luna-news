// Importar los plugins
const withMDX = require('@next/mdx')();
const createNextIntlPlugin = require('next-intl/plugin');

// Crear instancias de los plugins
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configura `pageExtensions` para incluir archivos MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Opcionalmente, agrega cualquier otra configuración de Next.js aquí
};

// Aplica ambos plugins a la configuración base
module.exports = withMDX(withNextIntl(nextConfig));
