/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portifolio',
  trailingSlash: true,
  // Configurações para evitar erros com static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
