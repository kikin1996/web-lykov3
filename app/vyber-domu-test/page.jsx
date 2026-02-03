'use client'

import HousePickerLayout from '../../src/components/house/HousePickerLayout'
import EmbeddedSitePreviewTest from '../../src/components/house/EmbeddedSitePreviewTest'
import SEO from '../../src/components/seo/SEO'
import StructuredData from '../../src/components/seo/StructuredData'

export default function VyberDomuTestPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Výběr domů – testovací polygony",
    "description": "Testovací stránka pro ladění polygonů nad fotkou projektu Luční Háj.",
    "url": "https://domypecerady.cz/vyber-domu-test"
  }

  return (
    <>
      <SEO
        title="Výběr domu – test"
        description="Testovací verze stránky Výběr domu s novými polygony nad fotkou projektu Luční Háj."
        keywords="výběr domu, test, polygony, Luční Háj"
        image="/images/bungalov_hero.jpg"
        url="/vyber-domu-test"
      />
      <StructuredData data={structuredData} />
      <HousePickerLayout EmbeddedPreviewComponent={EmbeddedSitePreviewTest} />
    </>
  )
}

