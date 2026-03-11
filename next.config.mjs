/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portifolio',
  trailingSlash: true,
  // Configurações para evitar erros com static export
  images: {
    unoptimized: true,
  },
  // Garantir que variáveis de ambiente sejam tratadas corretamente
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Portifolio',
  },
};

export default nextConfig;
