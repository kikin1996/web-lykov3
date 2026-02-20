import ClientProviders from '../src/components/layout/ClientProviders'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://domypecerady.cz'),
  title: {
    default: 'Luční Háj - Rodinné domy u Prahy | Týnec nad Sázavou',
    template: '%s | Luční Háj - Rodinné domy'
  },
  description: 'Moderní rodinné domy Luční Háj v Týnci nad Sázavou, 30 minut od Prahy. Dvojdomy a bungalovy s energetickou třídou A/B, tepelným čerpadlem a prémiovým vybavením u řeky Sázavy.',
  keywords: [
    'rodinné domy Týnec nad Sázavou',
    'domy u Prahy',
    'novostavby Středočeský kraj',
    'Luční Háj',
    'dvojdomy na prodej',
    'bungalovy na prodej',
    'energeticky úsporné domy',
    'domy u řeky Sázavy',
    'nové domy Pecerady',
    'moderní rodinné domy',
    'domy s tepelným čerpadlem',
    'pasivní domy',
    'developerský projekt',
    'bydlení u Prahy'
  ],
  authors: [{ name: 'NIKASTAR s.r.o.' }],
  creator: 'Luční Háj',
  publisher: 'NIKASTAR s.r.o.',
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
    title: 'Luční Háj - Rodinné domy u Prahy | Týnec nad Sázavou',
    description: 'Moderní rodinné domy v Týnci nad Sázavou, 30 min od Prahy. Dvojdomy a bungalovy s energetickou třídou A/B a prémiovým vybavením.',
    images: [
      {
        url: '/images/hero_photo.png',
        width: 1200,
        height: 630,
        alt: 'Luční Háj - Moderní rodinné domy v Týnci nad Sázavou',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luční Háj - Rodinné domy u Prahy',
    description: 'Moderní rodinné domy v Týnci nad Sázavou, 30 min od Prahy. Dvojdomy a bungalovy s energetickou třídou A/B.',
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
    // Přidejte zde Google Search Console verification code
    // google: 'your-verification-code',
  },
  alternates: {
    canonical: 'https://domypecerady.cz',
  },
  other: {
    'geo.region': 'CZ-20',
    'geo.placename': 'Týnec nad Sázavou',
    'geo.position': '49.839666;14.611472',
    'ICBM': '49.839666, 14.611472',
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
        <script src="/config.js" defer></script>
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

