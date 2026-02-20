'use client'

import HeroSection from '../src/components/home/HeroSection'
import ProjectIntroSection from '../src/components/home/ProjectIntroSection'
import InteractiveBuilding from '../src/components/home/InteractiveBuilding'
import ImageBannerSection from '../src/components/home/ImageBannerSection'
import AvailabilityTable from '../src/components/home/AvailabilityTable'
import StatsSection from '../src/components/home/StatsSection'
import AmenitiesSection from '../src/components/home/AmenitiesSection'
import LocationSection from '../src/components/home/LocationSection'
import SEO from '../src/components/seo/SEO'
import StructuredData from '../src/components/seo/StructuredData'
import OrganizationSchema from '../src/components/seo/OrganizationSchema'

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    "name": "Luční Háj",
    "description": "Moderní rezidenční projekt rodinných domů Luční Háj. Kvalitní bydlení s výjimečným designem a prvotřídním vybavením v klidném prostředí Týnce nad Sázavou, 30 minut od Prahy.",
    "url": "https://domypecerady.cz",
    "image": "https://domypecerady.cz/images/hero_photo.png",
    "numberOfUnits": 12,
    "petsAllowed": true,
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "Tepelné čerpadlo", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Podlahové topení", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Energetická třída A/B", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Parkování", "value": true}
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pecerady",
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
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420-725-734-095",
      "contactType": "sales",
      "email": "info@domypecerady.cz",
      "availableLanguage": ["Czech"]
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kde se nachází projekt Luční Háj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Projekt Luční Háj se nachází v obci Pecerady, která je součástí města Týnec nad Sázavou ve Středočeském kraji. Lokalita je vzdálená přibližně 30 minut jízdy od Prahy a nabízí klidné prostředí u řeky Sázavy."
        }
      },
      {
        "@type": "Question",
        "name": "Jakou energetickou třídu mají domy v projektu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dvojdomy v projektu mají energetickou třídu A, bungalovy třídu B. Všechny domy jsou vybaveny tepelným čerpadlem a podlahovým topením pro maximální úsporu energií."
        }
      },
      {
        "@type": "Question",
        "name": "Kolik domů je v projektu Luční Háj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Projekt Luční Háj zahrnuje celkem 12 rodinných domů - dvojdomy a bungalovy s různými dispozicemi a velikostmi pozemků."
        }
      },
      {
        "@type": "Question",
        "name": "Jaké jsou standardy vybavení domů?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Domy jsou vybaveny prémiovými materiály včetně dřevěných podlah o tloušťce 14 mm, oken pro pasivní standard, keramických obkladů Halcón, tepelného čerpadla Midea a nadstandardní elektroinstalace."
        }
      }
    ]
  }

  return (
    <>
      <SEO
        title="Rodinné domy u Prahy | Týnec nad Sázavou"
        description="Moderní rodinné domy Luční Háj v Týnci nad Sázavou, 30 min od Prahy. Dvojdomy a bungalovy s energetickou třídou A/B, tepelným čerpadlem a prémiovým vybavením. 12 domů u řeky Sázavy."
        keywords="rodinné domy Týnec nad Sázavou, domy u Prahy, novostavby Středočeský kraj, Luční Háj, dvojdomy, bungalovy, energeticky úsporné domy, domy u řeky Sázavy, nové domy na prodej"
        image="/images/hero_photo.png"
        url="/"
      />
      <OrganizationSchema />
      <StructuredData data={structuredData} />
      <StructuredData data={faqData} />
      <HeroSection />
      <ProjectIntroSection />
      <StatsSection />
      <InteractiveBuilding />
      <ImageBannerSection />
      <AvailabilityTable />
      <AmenitiesSection />
      <LocationSection />
    </>
  )
}

