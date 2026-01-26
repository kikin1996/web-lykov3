'use client'

import StandardsHero from '../../src/components/standards/StandardsHero'
import StandardsSplitSection from '../../src/components/standards/StandardsSplitSection'
import SEO from '../../src/components/seo/SEO'
import StructuredData from '../../src/components/seo/StructuredData'

export default function StandardyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Standardy bydlení - Luční Háj",
    "description": "Přečtěte si o standardech bydlení v projektu Luční Háj. Kvalitní konstrukce, moderní technologie, akustická izolace a prvotřídní vybavení.",
    "url": "https://domypecerady.cz/standardy",
    "about": {
      "@type": "Thing",
      "name": "Standardy bydlení",
      "description": "Kvalitní konstrukce, moderní technologie, akustická izolace a prvotřídní vybavení v projektu Luční Háj"
    }
  }

  return (
    <>
      <SEO
        title="Standardy bydlení"
        description="Přečtěte si o standardech bydlení v projektu Luční Háj. Kvalitní konstrukce, moderní technologie, akustická izolace a prvotřídní vybavení."
        keywords="standardy bydlení, kvalita, technologie, konstrukce, vybavení, Luční Háj, Týnec nad Sázavou"
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

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="Kvalita"
                    title="Konstrukce a zdivo"
                    description="Projekt Luční háj využívá osvědčené stavební technologie a kvalitní materiály, které zajišťují dlouhodobou životnost a vynikající tepelné vlastnosti."
                    items={[
                      'Keramické zdivo Porotherm s vysokou tepelnou izolací',
                      'Zateplení kontaktním systémem tloušťky 200 mm',
                      'Střešní konstrukce s tepelnou izolací 300 mm',
                      'Hydroizolace a parozábrana podle norem',
                      'Základy z betonu C25/30 s hydroizolací'
                    ]}
                    image="/images/standardy-konstrukce.jpg"
                    imageAlt="Konstrukce a zdivo"
                    reverse={false}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="Technologie"
                    title="Vytápění a energetika"
                    description="Moderní energeticky úsporné řešení zajišťuje komfortní bydlení s nízkými provozními náklady a šetrným přístupem k životnímu prostředí."
                    items={[
                      'Tepelné čerpadlo vzduch-voda pro vytápění a ohřev TUV',
                      'Podlahové topení v celém objektu s individuální regulací',
                      'Příprava na klimatizaci (chladící stropy)',
                      'Fotovoltaické panely na střeše (volitelné)',
                      'Rekuperační jednotka s účinností nad 85 %'
                    ]}
                    image="/images/standardy-vytapeni.webp"
                    imageAlt="Vytápění a technologie"
                    reverse={true}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="Komfort"
                    title="Akustika a izolace"
                    description="Důraz na akustickou izolaci mezi jednotkami a vnějšími vlivy zajišťuje klidné a soukromé bydlení pro všechny obyvatele."
                    items={[
                      'Akustická izolace mezi byty minimálně 55 dB',
                      'Zvukově izolační podlahy s plovoucí podlahovou konstrukcí',
                      'Trojskla v oknech s akustickými vlastnostmi',
                      'Izolace proti hluku z exteriéru',
                      'Tlumené dveře mezi místnostmi'
                    ]}
                    image="/images/standardy-akustika.jpg"
                    imageAlt="Akustika a izolace"
                    reverse={false}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="Dokončení"
                    title="Okna a stínění"
                    description="Kvalitní okenní systémy s moderním stíněním zajišťují optimální osvětlení, tepelnou izolaci a ochranu před sluncem."
                    items={[
                      'Plastová okna s trojskly (Uw ≤ 0,8 W/m²K)',
                      'Venkovní žaluzie s elektrickým ovládáním',
                      'Vnitřní rolety v ložnicích',
                      'Bezpečnostní kování a zámky',
                      'Okna s možností mikroventilace'
                    ]}
                    image="/images/standardy-okna.jpg"
                    imageAlt="Okna a stínění"
                    reverse={true}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="Interiér"
                    title="Koupelny a podlahy"
                    description="Kvalitní obklady a podlahové krytiny v moderním designu vytvářejí příjemné a praktické prostředí pro každodenní život."
                    items={[
                      'Obklady v koupelnách formátu 60x120 cm',
                      'Dřevěné podlahy v obytných místnostech (parkety nebo laminát)',
                      'Vinylové podlahy v kuchyni a koupelnách',
                      'Kvalitní sanitární keramika a baterie',
                      'Podlahové topení pod všemi podlahovými krytinami'
                    ]}
                    image="/images/obklady.jpeg"
                    imageAlt="Koupelny a podlahy"
                    reverse={false}
                  />
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <StandardsSplitSection
                    pillLabel="Elektro"
                    title="Elektroinstalace a připojení"
                    description="Moderní elektroinstalace s přípravami na chytré technologie a vysokorychlostní internet zajišťuje připravenost na budoucnost."
                    items={[
                      'Datové zásuvky v každém pokoji (CAT 6)',
                      'Příprava na chytré ovládání osvětlení a žaluzií',
                      'Zásuvky USB-C v obývacím pokoji a ložnici',
                      'Elektrické přípojky pro pračku, sušičku a myčku',
                      'Příprava na nabíjecí stanici pro elektromobil (volitelné)'
                    ]}
                    image="/images/standardy-elektro.webp"
                    imageAlt="Elektroinstalace"
                    reverse={true}
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






