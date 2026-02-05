'use client'

import StandardsHero from '../../src/components/standards/StandardsHero'
import StandardsSplitSection from '../../src/components/standards/StandardsSplitSection'
import SEO from '../../src/components/seo/SEO'
import StructuredData from '../../src/components/seo/StructuredData'

export default function StandardyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Standardy stavby - Luční Háj",
    "description": "Standardy stavby a nadstandardní vybavení projektu Luční Háj. Konstrukce, zdivo, tepelná izolace, okna, energetická náročnost A/B a prémiové materiály.",
    "url": "https://domypecerady.cz/standardy",
    "about": {
      "@type": "Thing",
      "name": "Standardy stavby",
      "description": "Základní technické parametry a nadstandardní vybavení v projektu Luční Háj"
    }
  }

  const rozsireniItems = [
    'Krbová kamna – příjemná atmosféra, sálavé teplo a vyšší pocit domova',
    'Klimatizace – kromě chlazení v letních měsících může v zimním období při kombinaci s tepelným čerpadlem sloužit jako doplňkový zdroj vytápění a přispět ke snížení energetické spotřeby až přibližně o 15 %, v závislosti na způsobu užívání a provozních podmínkách.',
    'Předokenní žaluzie – regulace světla, soukromí a tepelného komfortu',
    'Wallbox – pohodlné domácí nabíjení elektromobilu',
    'Fotovoltaická elektrárna – nižší energetické náklady a větší energetická nezávislost'
  ]

  return (
    <>
      <SEO
        title="Standardy stavby"
        description="Standardy stavby a nadstandardní vybavení projektu Luční Háj. Konstrukce, zdivo, tepelná izolace, okna, energetická náročnost A/B a prémiové materiály."
        keywords="standardy stavby, konstrukce, zdivo, okna pasivní, energetická třída, nadstandard, Luční Háj, Týnec nad Sázavou"
        image="/images/standardy-hero.jpg"
        url="/standardy"
      />
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-[#F5F7FB] pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-[28px] border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="px-6 md:px-10 py-10">
              <div className="space-y-12 md:space-y-16">
                <StandardsHero />

                {/* Sekce Standardy stavby – Konstrukce a zdivo */}
                <div className="pt-8 pb-6 border-b-2 border-slate-200">
                  <h2 className="mb-6 leading-tight font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900">
                    Standardy stavby
                  </h2>
                  <p className="text-slate-600 text-body-regular">Základní technické parametry zajišťující kvalitu a úsporu.</p>
                </div>

                <div className="pt-12 md:pt-16 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="1"
                    title="Precizní keramické zdivo"
                    description="Nosné konstrukce jsou z keramického broušeného zdiva o tloušťce 300 mm, které vyniká přesností provedení, dlouhou životností a celkovou stabilitou domu."
                    items={[]}
                    image="/standardy/stavba_3.jpg"
                    imageAlt="Precizní keramické zdivo"
                    reverse={false}
                  />
                </div>

                <div className="pt-12 md:pt-16 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="2"
                    title="Konstrukčně oddělené domy"
                    description="Každá jednotka má vlastní nosnou akustickou stěnu, mezi domy je navíc akustická vata. Díky tomu mají domy nižší přenos hluku mezi jednotkami. Více soukromí, klidu a pocit bydlení jako v samostatném domě, ne v běžném dvojdomu."
                    items={[]}
                    image={"/standardy/standardy2/" + encodeURIComponent("Konstrukčně oddělené domy.jpg")}
                    imageAlt="Konstrukčně oddělené domy"
                    reverse={true}
                  />
                </div>

                <div className="pt-12 md:pt-16 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="3"
                    title="Tepelná izolace stavby"
                    description="Použité zateplení fasády o tloušťce 200 mm EPS a minerální vata tloušťky 320 mm nad stropem 2NP (u 2RD2NP) zajišťuje energetický standard A/B, výrazně snižuje náklady na vytápění v zimě i chlazení v létě a přináší stabilní teplotu v interiéru po celý rok."
                    items={[]}
                    image={"/standardy/standardy2/" + encodeURIComponent("Tepelná izolace stavby.jpg")}
                    imageAlt="Tepelná izolace stavby"
                    reverse={false}
                  />
                </div>

                <div className="pt-12 md:pt-16 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="4"
                    title="Monolitické stropy"
                    description="Zajišťují vysokou statickou stabilitu, dlouhou životnost a výrazně lepší akustický komfort oproti lehkým konstrukcím."
                    items={[]}
                    image={"/standardy/standardy2/" + encodeURIComponent("Monolitické stropy_3.jpg")}
                    imageAlt="Monolitické stropy"
                    reverse={true}
                  />
                </div>

                <div className="pt-12 md:pt-16 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="5"
                    title="Okna pro pasivní standard"
                    description="Okna osazená v tomto domě patří do vyšší třídy, splňují parametry pasivních staveb a podtrhují celkově vysoký standard provedení domu."
                    items={[]}
                    image={"/standardy/standardy2/" + encodeURIComponent("Okna pro pasivní standard.jpg")}
                    imageAlt="Okna pro pasivní standard"
                    reverse={false}
                  />
                </div>

                <div className="pt-12 md:pt-16 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="6"
                    title="Energetická náročnost A/B"
                    description="Dvojdomy v projektu mají energetickou třídu A, bungalovy třídu B, což dnes v České republice představuje výrazný nadstandard. Znamená to nižší náklady na energie, stabilní vnitřní klima a vyšší komfort bydlení. Vysoká energetická třída zároveň zvyšuje hodnotu nemovitosti, usnadňuje financování hypotékou a chrání majitele před budoucím růstem cen energií i zpřísněním legislativy."
                    items={[]}
                    image="/standardy/fasada3.jpg"
                    imageAlt="Energetická náročnost A/B"
                    reverse={true}
                  />
                </div>

                <div className="pt-12 md:pt-16 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="7"
                    title="Tepelné čerpadlo Midea"
                    description="Vytápění a ohřev teplé vody zajišťuje tepelné čerpadlo značky Midea. Nabízí vysokou účinnost a úsporný provoz. V celém objektu je instalováno podlahové topení s individuální regulací pro maximální tepelný komfort."
                    items={[]}
                    image="/standardy/tepelko.jpg"
                    imageAlt="Tepelné čerpadlo Midea"
                    reverse={false}
                  />
                </div>

                {/* Sekce Nadstandardní vybavení domu – modré pozadí */}
                <div className="bg-blue-50 -mx-6 md:-mx-10 pt-16 md:pt-20 pb-[6.5rem] md:pb-[8.5rem] px-6 md:px-10 -mb-10">
                  <div className="pb-6 border-b-2 border-blue-200/70">
                    <h2 className="mb-6 leading-tight font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900">
                      Nadstandardní vybavení domu
                    </h2>
                    <p className="text-slate-600 text-body-regular">Prémiové materiály a chytrá řešení, která zvyšují hodnotu bydlení.</p>
                  </div>

                  <div className="pt-12 md:pt-16 border-t border-blue-200/60">
                    <StandardsSplitSection
                      pillLabel="1"
                      title="Praktický shoz na prádlo mezi patry (2RD)"
                    description="Chytré řešení, které usnadňuje každodenní život. Prádlo lze pohodlně shazovat přímo do technické místnosti, bez nošení po schodech. Detail, který šetří čas a zvyšuje komfort bydlení."
                    items={[]}
                    image={"/standardy/standardy2/" + encodeURIComponent("Praktický shoz na prádlo mezi patry (2RD)-2.jpg")}
                    imageAlt="Praktický shoz na prádlo"
                    reverse={false}
                  />
                  </div>

                  <div className="pt-12 md:pt-16 border-t border-blue-200/60">
                    <StandardsSplitSection
                      pillLabel="2"
                      title="Velkoformátové interiérové dveře"
                    description="Vysoké dveře dodávají interiéru vzdušnost, eleganci a luxusní charakter. Prostor působí větší a modernější, s důrazem na kvalitu a detail, který odlišuje dům vyšší třídy."
                    items={[]}
                    image="/standardy/dvere.jpg"
                    imageAlt="Velkoformátové interiérové dveře"
                    reverse={true}
                  />
                  </div>

                  <div className="pt-12 md:pt-16 border-t border-blue-200/60">
                    <StandardsSplitSection
                      pillLabel="3"
                      title="Obklady a dlažby Halcón"
                    description="Halcón Cerámicas představuje luxusní španělskou keramiku s nadčasovým designem inspirovaným kamenem, mramorem a moderní architekturou. Prémiové obklady a dlažby vynikají vysokou odolností, precizním zpracováním a dlouhou životností, díky čemuž dodávají interiéru elegantní vzhled a dlouhodobou hodnotu."
                    items={[]}
                    image={"/standardy/standardy2/" + encodeURIComponent("Obklady a dlažby Halcón.jpg")}
                    imageAlt="Obklady a dlažby Halcón"
                    reverse={false}
                  />
                  </div>

                  <div className="pt-12 md:pt-16 border-t border-blue-200/60">
                    <StandardsSplitSection
                      pillLabel="4"
                      title="Kompletace v černém designu"
                    description="Černé provedení dodává domu moderní a luxusní vzhled a představuje nadstandard oproti běžným projektům."
                    items={[]}
                    image={"/images/koupelny/dvojdum/2-06_levy_dum/" + encodeURIComponent("h (3).jpg")}
                    imageAlt="Kompletace v černém designu"
                    reverse={true}
                  />
                  </div>

                  <div className="pt-12 md:pt-16 border-t border-blue-200/60">
                    <StandardsSplitSection
                      pillLabel="5"
                      title="Podlahy z masivního dřeva – tloušťka 14 mm"
                    description="V celém domě jsou použity dřevěné podlahy o tloušťce 14 mm z přírodního dřeva. Tento nadstandard zajišťuje vyšší stabilitu, dlouhou životnost a možnost budoucí renovace. Dřevo je příjemné na dotek, tiší kročejový hluk a vytváří přirozené, zdravé prostředí. Podlaha dodává interiéru nadčasovou eleganci a výrazně zvyšuje hodnotu nemovitosti."
                    items={[]}
                    image={"/standardy/standardy2/" + encodeURIComponent("Podlahy z masivního dřeva – tloušťka 14 mm.jpg")}
                    imageAlt="Podlahy z masivního dřeva"
                    imageClassName="object-[85%_center]"
                    reverse={false}
                  />
                  </div>

                  <div className="pt-12 md:pt-16 border-t border-blue-200/60">
                    <StandardsSplitSection
                      pillLabel="6"
                      title="Komfortní elektroinstalace a datové rozvody"
                    description="Nadstandardní počet zásuvek a vypínačů v kombinaci s kabelovými datovými rozvody výrazně zvyšuje pohodlí každodenního užívání domu."
                    items={[]}
                    image="/images/standardy-elektro.webp"
                    imageAlt="Elektroinstalace a datové rozvody"
                    reverse={true}
                  />
                  </div>

                  <div className="pt-12 md:pt-16 border-t border-blue-200/60">
                    <StandardsSplitSection
                      pillLabel="7"
                      title="Možnosti individuálního rozšíření"
                    description="Díky promyšlené přípravě instalačních rozvodů lze dům jednoduše rozšířit o další technologie, a to bez zásahu do konstrukce a bez zbytečných kompromisů."
                    items={rozsireniItems}
                    image={"/standardy/standardy2/" + encodeURIComponent("Možnosti individuálního rozšíření.jpg")}
                    imageAlt="Možnosti individuálního rozšíření"
                    reverse={false}
                  />
                  </div>
                  {/* Pruh vyplňující bílý spodek (padding rodiče) */}
                  <div className="h-10 bg-blue-50 -mb-10 -mx-6 md:-mx-10" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
