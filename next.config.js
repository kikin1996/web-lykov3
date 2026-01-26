/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Environment proměnné pro client-side (NEXT_PUBLIC_ prefix)
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY || '',
    NEXT_PUBLIC_RESEND_TEST_EMAIL: process.env.NEXT_PUBLIC_RESEND_TEST_EMAIL || 'info@domypecerady.cz',
  },
  images: {
    domains: ['domypecerady.cz'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Pro statický export musí být true - obrázky se optimalizují během buildu
  },
  // Pro statické exporty (SSG) - pouze při buildu, ne v dev režimu
  ...(process.env.NODE_ENV === 'production' && { 
    output: 'export',
    // Zakázat generování RSC souborů při statickém exportu
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
    // Potlačit RSC požadavky při statickém exportu
    distDir: '.next',
  }),
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

