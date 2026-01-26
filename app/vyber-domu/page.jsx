'use client'

import HousePickerLayout from '../../src/components/house/HousePickerLayout'
import SEO from '../../src/components/seo/SEO'
import StructuredData from '../../src/components/seo/StructuredData'

export default function VyberDomuPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Výběr domů v projektu Luční Háj",
    "description": "Interaktivní výběr rodinných domů v projektu Luční Háj. Prohlédněte si dostupné domy s detailními informacemi, půdorysy a fotkami.",
    "url": "https://domypecerady.cz/vyber-domu",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Rodinné domy 1-12",
        "description": "12 rodinných domů s různými dispozicemi a velikostmi pozemků"
      }
    ]
  }

  return (
    <>
      <SEO
        title="Výběr domu"
        description="Vyberte si dům v projektu Luční Háj. Interaktivní mapa a detailní informace o každém domě včetně půdorysů, velikosti a dostupnosti."
        keywords="výběr domu, domy, půdorysy, dostupnost, Luční Háj, interaktivní mapa, rodinné domy, Týnec nad Sázavou"
        image="/images/bungalov_hero.jpg"
        url="/vyber-domu"
      />
      <StructuredData data={structuredData} />
      <HousePickerLayout />
    </>
  )
}






