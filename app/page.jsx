'use client'

import HeroSection from '../src/components/home/HeroSection'
import ProjectIntroSection from '../src/components/home/ProjectIntroSection'
import InteractiveBuilding from '../src/components/home/InteractiveBuilding'
import ImageBannerSection from '../src/components/home/ImageBannerSection'
import AvailabilityTable from '../src/components/home/AvailabilityTable'
import AboutSection from '../src/components/home/AboutSection'
import StatsSection from '../src/components/home/StatsSection'
import AmenitiesSection from '../src/components/home/AmenitiesSection'
import LocationSection from '../src/components/home/LocationSection'
import SEO from '../src/components/seo/SEO'
import StructuredData from '../src/components/seo/StructuredData'

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    "name": "Luční Háj",
    "description": "Moderní rezidenční bytový komplex Luční Háj. Kvalitní bydlení s výjimečným designem a prvotřídním vybavením v klidném prostředí Týnce nad Sázavou.",
    "url": "https://domypecerady.cz",
    "image": "https://domypecerady.cz/images/hero_photo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Týnec nad Sázavou",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.839666",
      "longitude": "14.611472"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420-123-456-789",
      "contactType": "customer service",
      "email": "hello@luchnihaj.cz"
    }
  }

  return (
    <>
      <SEO
        title="Rezidenční bytový komplex"
        description="Moderní rezidenční bytový komplex Luční Háj. Kvalitní bydlení s výjimečným designem a prvotřídním vybavením v klidném prostředí Týnce nad Sázavou."
        keywords="bytový komplex, byty, realitní projekt, Luční Háj, rezidenční bydlení, nové byty, Týnec nad Sázavou"
        image="/images/hero_photo.png"
        url="/"
      />
      <StructuredData data={structuredData} />
      <HeroSection />
      <ProjectIntroSection />
      <StatsSection />
      <InteractiveBuilding />
      <ImageBannerSection />
      <AvailabilityTable />
      <AboutSection />
      <AmenitiesSection />
      <LocationSection />
    </>
  )
}

