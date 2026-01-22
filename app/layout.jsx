import ClientProviders from '../src/components/layout/ClientProviders'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://domypecerady.cz'),
  title: {
    default: 'Luční Háj - Rezidenční bytový komplex',
    template: '%s | Luční Háj'
  },
  description: 'Moderní rezidenční bytový komplex Luční Háj. Kvalitní bydlení s výjimečným designem a prvotřídním vybavením v klidném prostředí Týnce nad Sázavou.',
  keywords: ['bytový komplex', 'byty', 'realitní projekt', 'Luční Háj', 'rezidenční bydlení', 'nové byty', 'Týnec nad Sázavou', 'bydlení Praha'],
  authors: [{ name: 'Luční Háj' }],
  creator: 'Luční Háj',
  publisher: 'Luční Háj',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://domypecerady.cz',
    siteName: 'Luční Háj',
    title: 'Luční Háj - Rezidenční bytový komplex',
    description: 'Moderní rezidenční bytový komplex Luční Háj. Kvalitní bydlení s výjimečným designem a prvotřídním vybavením v klidném prostředí Týnce nad Sázavou.',
    images: [
      {
        url: '/images/hero_photo.png',
        width: 1200,
        height: 630,
        alt: 'Luční Háj - Rezidenční bytový komplex',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luční Háj - Rezidenční bytový komplex',
    description: 'Moderní rezidenční bytový komplex Luční Háj. Kvalitní bydlení s výjimečným designem a prvotřídním vybavením.',
    images: ['/images/hero_photo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Přidejte zde Google Search Console verification code, pokud ho máte
    // google: 'your-verification-code',
  },
  alternates: {
    canonical: 'https://domypecerady.cz',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" type="image/png" href="/images/favicon_lykov.png" />
        <link rel="apple-touch-icon" href="/images/favicon_lykov.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Allura&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
        <script
          dangerouslySetInnerHTML={{
            __html: 'window.initMap = function() {};',
          }}
        />
      </body>
    </html>
  )
}

