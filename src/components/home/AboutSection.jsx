import Card from '../shared/Card'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white border-0" style={{ border: 'none', borderTop: 'none', borderBottom: 'none' }}>
      <div className="container mx-auto px-5 lg:px-20" style={{ border: 'none' }}>
        <div className="max-w-4xl mx-auto">
          
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start w-full mx-auto">
                {/* Column 01 – base level */}
                <Card hover className="overflow-hidden border border-neutral-lightGray/70 rounded-xl lg:mt-[0px]">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-xs tracking-[0.25em] text-neutral-mediumGray mb-4">01</div>
                    <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">
                      Řeka Sázava a příroda
                    </h4>
                    <div className="w-full h-[320px] mb-4 overflow-hidden rounded-lg bg-neutral-lightGray">
                      <div className="w-full h-full bg-gradient-to-br from-neutral-lightGray to-neutral-offWhite flex items-center justify-center">
                        <span className="text-neutral-mediumGray text-xs">Landscape / Nature placeholder</span>
                      </div>
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
                      <div className="w-full h-full bg-gradient-to-br from-neutral-lightGray to-neutral-offWhite flex items-center justify-center">
                        <span className="text-neutral-mediumGray text-xs">Aerial / Trails placeholder</span>
                      </div>
                    </div>
                    <p className="text-body-small text-neutral-mediumGray">
                      Oblíbená turistická oblast s cyklostezkami, pěšími trasami a možností vodní rekreace včetně
                      půjčoven kajaků.
                    </p>
                  </div>
                </Card>

                {/* Column 03 – medium height */}
                <Card hover className="overflow-hidden border border-neutral-lightGray/70 rounded-xl lg:mt-[20px]">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-xs tracking-[0.25em] text-neutral-mediumGray mb-4">03</div>
                    <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">
                      Dostupnost do Prahy
                    </h4>
                    <div className="w-full h-[280px] mb-4 overflow-hidden rounded-lg bg-neutral-lightGray">
                      <div className="w-full h-full bg-gradient-to-br from-neutral-lightGray to-neutral-offWhite flex items-center justify-center">
                        <span className="text-neutral-mediumGray text-xs">City / Commute placeholder</span>
                      </div>
                    </div>
                    <p className="text-body-small text-neutral-mediumGray">
                      Výborná dopravní dostupnost do Prahy umožňuje komfortní dojíždění při zachování klidného
                      bydlení v přírodě.
                    </p>
                  </div>
                </Card>

                {/* Column 04 – lower than column 03 */}
                <Card hover className="overflow-hidden border border-neutral-lightGray/70 rounded-xl lg:mt-[80px]">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-xs tracking-[0.25em] text-neutral-mediumGray mb-4">04</div>
                    <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">
                      Občanská vybavenost
                    </h4>
                    <div className="w-full h-[380px] mb-4 overflow-hidden rounded-lg bg-neutral-lightGray">
                      <div className="w-full h-full bg-gradient-to-br from-neutral-lightGray to-neutral-offWhite flex items-center justify-center">
                        <span className="text-neutral-mediumGray text-xs">Town / Amenities placeholder</span>
                      </div>
                    </div>
                    <p className="text-body-small text-neutral-mediumGray">
                      Kompletní občanská vybavenost v Týnci nad Sázavou – školy, obchody, restaurace i sportovní
                      zařízení.
                    </p>
                  </div>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

