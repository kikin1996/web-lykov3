/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['domypecerady.cz'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false, // Povolit optimalizaci obrázků
  },
  // Pro statické exporty (SSG) - zakomentováno pro dev server
  // output: 'export',
  trailingSlash: true,
  // Zajistí, že všechny cesty fungují
  skipTrailingSlashRedirect: true,
  // Ignorovat src/pages složku (používáme app/)
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  // Vypnout ESLint během buildu
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

