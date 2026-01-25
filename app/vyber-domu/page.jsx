'use client'

import HousePickerLayout from '../../src/components/house/HousePickerLayout'
import SEO from '../../src/components/seo/SEO'

export default function VyberDomuPage() {
  return (
    <>
      <SEO
        title="Výběr domu"
        description="Vyberte si dům v projektu Luční Háj. Interaktivní mapa a detailní informace o každém domě včetně půdorysů, velikosti a dostupnosti."
        keywords="výběr domu, domy, půdorysy, dostupnost, Luční Háj, interaktivní mapa"
        image="/images/bungalov_hero.jpg"
        url="/vyber-domu"
      />
      <HousePickerLayout />
    </>
  )
}






