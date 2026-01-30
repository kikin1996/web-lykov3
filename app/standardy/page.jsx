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
    "description": "Standardy stavby a nadstandardní vybavení projektu Luční Háj. Konstrukce, vytápění, okna, akustika, elektro a prémiové materiály.",
    "url": "https://domypecerady.cz/standardy",
    "about": {
      "@type": "Thing",
      "name": "Standardy stavby",
      "description": "Základní technické parametry a nadstandardní vybavení v projektu Luční Háj"
    }
  }

  return (
    <>
      <SEO
        title="Standardy stavby"
        description="Standardy stavby a nadstandardní vybavení projektu Luční Háj. Konstrukce, vytápění, okna, akustika, elektro a prémiové materiály."
        keywords="standardy stavby, konstrukce, vytápění, okna pasivní, akustika, nadstandard, Luční Háj, Týnec nad Sázavou"
        image="/images/standardy-hero.jpg"
        url="/standardy"
      />
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-[#F5F7FB] pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-[28px] border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="px-6 md:px-10 py-10">
              <div className="space-y-6 md:space-y-8">
                <StandardsHero />

                {/* Sekce Standardy stavby */}
                <div className="pt-8 pb-6 border-b-2 border-slate-200">
                  <h2 className="text-h1 text-slate-900 mb-2">Standardy stavby</h2>
                  <p className="text-slate-600 text-body-regular">Základní technické parametry zajišťující kvalitu a úsporu.</p>
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="1"
                    title="Konstrukce a zdivo"
                    description="Stavíme z precizního keramického broušeného zdiva (300 mm) v kombinaci s monolitickými stropy. Tato sestava zaručuje extrémní stabilitu, dlouhou životnost a skvělý útlum hluku mezi patry."
                    items={[]}
                    image="/standardy/zdivo.jpg"
                    imageAlt="Konstrukce a zdivo"
                    reverse={false}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="2"
                    title="Tepelné čerpadlo a vytápění"
                    description="Úsporné vytápění a ohřev vody zajišťuje moderní tepelné čerpadlo. V celém objektu je instalováno podlahové topení s individuální regulací pro maximální tepelný komfort."
                    items={[]}
                    image="/standardy/tepelko.jpg"
                    imageAlt="Tepelné čerpadlo a vytápění"
                    reverse={true}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="3"
                    title="Okna pro pasivní standard"
                    description="Okna vyšší třídy splňují přísné parametry pro pasivní stavby. Zajišťují vynikající izolaci, ticho v interiéru a podtrhují celkovou energetickou náročnost třídy A/B."
                    items={[]}
                    image="/images/standardy-okna.jpg"
                    imageAlt="Okna pro pasivní standard"
                    reverse={false}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="4"
                    title="Akustika a soukromí"
                    description="Domy jsou konstrukčně oddělené vlastními nosnými stěnami s vloženou akustickou vatou. To eliminuje přenos hluku mezi jednotkami a zajišťuje klid jako v samostatném domě."
                    items={[]}
                    image={"/standardy/" + encodeURIComponent("Akustická zeď mezi hudbou a spánkem.jpg")}
                    imageAlt="Akustika a soukromí"
                    reverse={true}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="5"
                    title="Elektroinstalace a data"
                    description="Počítáme s moderním životem – v domě je nadstandardní počet zásuvek a kompletní kabelové datové rozvody pro stabilní internet v každé místnosti."
                    items={[]}
                    image="/images/standardy-elektro.webp"
                    imageAlt="Elektroinstalace a data"
                    reverse={false}
                  />
                </div>

                {/* Sekce Nadstandardní vybavení */}
                <div className="pt-24 md:pt-28 pb-6 border-b-2 border-slate-200">
                  <h2 className="text-h1 text-slate-900 mb-2">Nadstandardní vybavení</h2>
                  <p className="text-slate-600 text-body-regular">Prémiové materiály a chytrá řešení, která zvyšují hodnotu bydlení.</p>
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="1"
                    title="Masivní dřevěná podlaha"
                    description="V celém domě najdete podlahy z přírodního dřeva o tloušťce 14 mm. Jsou vysoce stabilní, tlumí hluk a díky své síle umožňují i opakovanou renovaci po letech užívání."
                    items={[]}
                    image="/standardy/podlaha.jpg"
                    imageAlt="Masivní dřevěná podlaha"
                    reverse={false}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="2"
                    title="Velkoformátové interiérové dveře"
                    description="Vysoké dveře dodávají interiéru vzdušnost a moderní charakter. Opticky zvětšují prostor a jsou jasným znakem architektury vyšší třídy."
                    items={[]}
                    image="/standardy/dvere.jpg"
                    imageAlt="Velkoformátové interiérové dveře"
                    reverse={true}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="3"
                    title="Španělská keramika Halcón"
                    description="Koupelny zdobí luxusní španělské obklady a dlažby s designem kamene a mramoru. Moderní vzhled doplňuje stylová kompletace v černé barvě."
                    items={[]}
                    image="/standardy/koupelna_obklady.jpg"
                    imageAlt="Španělská keramika Halcón"
                    reverse={false}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="4"
                    title="Praktický shoz na prádlo"
                    description="U patrových domů instalujeme shoz, který vede prádlo z patra přímo do technické místnosti. Odpadá tak nošení košů po schodech – chytrý detail pro každodenní pohodlí."
                    items={[]}
                    image="/standardy/shoz.jpg"
                    imageAlt="Praktický shoz na prádlo"
                    reverse={true}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="5"
                    title="Příprava pro budoucí technologie"
                    description="Dům je nachystán na vše: krbová kamna, klimatizaci, předokenní žaluzie, fotovoltaiku i Wallbox pro elektromobil. Vše lze doplnit snadno a bez stavebních zásahů."
                    items={[]}
                    image="/standardy/klima.jpg"
                    imageAlt="Příprava pro budoucí technologie"
                    reverse={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
