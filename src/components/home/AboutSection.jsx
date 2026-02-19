import Image from 'next/image'
import Card from '../shared/Card'
import { amenities } from './AmenitiesSection'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white border-0 hidden md:block" style={{ border: 'none', borderTop: 'none', borderBottom: 'none' }}>
      <div className="container mx-auto px-5 lg:px-20" style={{ border: 'none' }}>
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Nová sekce: Lokalita (LOCATION) */}
            <section className="mt-20">
              <div className="text-center mb-12">
                <p className="text-overline tracking-[0.2em] mb-3">LOKALITA</p>
                <h3 className="text-h1 mb-4">Lokalita, která má hodnotu</h3>
                <p className="text-body-regular max-w-2xl mx-auto mt-2 text-neutral-mediumGray">
                  Pečlivě vybraná lokalita propojuje klid přírody s praktickou dostupností města a kompletní občanskou vybaveností.
                </p>
              </div>

              {/* Grid se třemi kartami v jednom řádku na velkých displejích */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start w-full hidden md:grid">
                {/* Column 01 – base level */}
                <Card hover className="overflow-hidden border border-neutral-lightGray/70 rounded-xl lg:mt-[0px]">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-xs tracking-[0.25em] text-neutral-mediumGray mb-4">01</div>
                    <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">
                      Řeka Sázava a příroda
                    </h4>
                    <div className="w-full h-[320px] mb-4 overflow-hidden rounded-lg bg-neutral-lightGray">
                      <Image
                        src="/images/nature-sazava-01.jpg"
                        alt="Řeka Sázava a okolní příroda"
                        width={800}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-body-small text-neutral-mediumGray">
                      Blízkost řeky Sázavy, lesů a přírodních tras nabízí ideální prostředí pro relaxaci, sport
                      a každodenní únik z města.
                    </p>
                  </div>
                </Card>

                {/* Column 02 – highest column */}
                <Card hover className="overflow-hidden border border-neutral-lightGray/70 rounded-xl lg:mt-[60px]">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-xs tracking-[0.25em] text-neutral-mediumGray mb-4">02</div>
                    <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">
                      Turistika a rekreace
                    </h4>
                    <div className="w-full h-[420px] mb-4 overflow-hidden rounded-lg bg-neutral-lightGray">
                      <Image
                        src="/images/trails-rekreace-02.jpg"
                        alt="Turistické a cyklistické stezky u Sázavy"
                        width={800}
                        height={420}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-body-small text-neutral-mediumGray">
                      Oblíbená turistická oblast s cyklostezkami, pěšími trasami a možností vodní rekreace včetně
                      půjčoven kajaků.
                    </p>
                  </div>
                </Card>

                {/* Column 03 – Občanská vybavenost */}
                <Card hover className="overflow-hidden border border-neutral-lightGray/70 rounded-xl lg:mt-[0px]">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-xs tracking-[0.25em] text-neutral-mediumGray mb-4">03</div>
                    <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">
                      Občanská vybavenost
                    </h4>
                    <div className="w-full h-[380px] mb-4 overflow-hidden rounded-lg bg-neutral-lightGray">
                      <Image
                        src="/images/town-amenities-tynec-04.jpg"
                        alt="Občanská vybavenost v Týnci nad Sázavou"
                        width={800}
                        height={380}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-body-small text-neutral-mediumGray">
                      Kompletní občanská vybavenost v Týnci nad Sázavou – školy, obchody, restaurace i sportovní
                      zařízení.
                    </p>
                  </div>
                </Card>
              </div>
            </section>

            {/* Test sekce pod lokalitou – se stejným obsahem jako Standardy (bez vlny a změny pozadí) */}
            <section className="mt-16">
              <div className="text-center mb-12">
                <p className="text-overline mb-4">Standardy</p>
                <h2 className="mb-6 leading-tight font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-darkNavy">
                  Standardy stavby
                </h2>
                <p className="text-body-large max-w-2xl mx-auto">
                  Základní technické parametry a vybavení, které zajišťují kvalitu,
                  úspornost a dlouhodobý komfort bydlení v projektu Luční Háj.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 hidden md:grid">
                {amenities.map((amenity, index) => (
                  <Card key={index} hover className="overflow-hidden">
                    <div className="rounded-2xl overflow-hidden border border-slate-200/70 h-[220px]">
                      <img
                        src={amenity.image}
                        alt={amenity.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          if (e.target.nextElementSibling) {
                            e.target.nextElementSibling.style.display = 'flex'
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 hidden items-center justify-center">
                        <span className="text-neutral-mediumGray text-sm">{amenity.title}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-h3 mb-3">{amenity.title}</h3>
                      <p className="text-body-regular text-neutral-mediumGray">
                        {amenity.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

