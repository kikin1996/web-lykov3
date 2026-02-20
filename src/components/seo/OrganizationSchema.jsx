'use client'

import { Helmet } from 'react-helmet-async'

const OrganizationSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Luční Háj - NIKASTAR s.r.o.",
    "alternateName": "Luční Háj",
    "url": "https://domypecerady.cz",
    "logo": "https://domypecerady.cz/images/favicon_lykov.png",
    "image": "https://domypecerady.cz/images/hero_photo.png",
    "description": "Moderní rezidenční projekt Luční Háj v Týnci nad Sázavou. Kvalitní rodinné domy s výjimečným designem a prvotřídním vybavením v klidném prostředí u řeky Sázavy.",
    "telephone": "+420-725-734-095",
    "email": "info@domypecerady.cz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pecerady 31",
      "addressLocality": "Týnec nad Sázavou",
      "postalCode": "257 41",
      "addressRegion": "Středočeský kraj",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.839666",
      "longitude": "14.611472"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Týnec nad Sázavou"
      },
      {
        "@type": "State",
        "name": "Středočeský kraj"
      },
      {
        "@type": "City",
        "name": "Praha"
      }
    ],
    "priceRange": "$$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [],
    "parentOrganization": {
      "@type": "Organization",
      "name": "NIKASTAR s.r.o.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kmochova 858/11, Smíchov",
        "addressLocality": "Praha",
        "postalCode": "150 00",
        "addressCountry": "CZ"
      }
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
    </Helmet>
  )
}

export default OrganizationSchema
