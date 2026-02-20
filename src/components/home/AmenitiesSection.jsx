import Image from 'next/image'
import Card from '../shared/Card'

// Přehledová sekce „Standardy stavby“ na homepage – pořadí: 1) podlaha, 2) obklady, 3) čerpadlo, 4) okna, 5–8) další
export const amenities = [
  {
    title: 'Podlahy z masivního dřeva',
    description:
      'Dřevěné podlahy 14 mm z přírodního dřeva – vyšší stabilita, dlouhá životnost, možnost renovace a nadčasová elegance.',
    image: '/podlaha_1.jpg',
  },
  {
    title: 'Obklady a dlažby Halcón',
    description:
      'Luxusní španělská keramika s nadčasovým designem. Prémiové obklady a dlažby – vysoká odolnost, precizní zpracování a dlouhá životnost.',
    image: '/obklady_1.jpg',
  },
  {
    title: 'Tepelné čerpadlo Midea',
    description:
      'Vytápění a ohřev teplé vody. Vysoká účinnost, úsporný provoz a podlahové topení s individuální regulací.',
    image: '/standardy/tepelko.jpg',
  },
  {
    title: 'Okna pro pasivní standard',
    description:
      'Okna vyšší třídy splňují parametry pasivních staveb a podtrhují vysoký standard provedení domu.',
    image: '/standardy/standardy2/' + encodeURIComponent('Okna pro pasivní standard.jpg'),
  },
  {
    title: 'Precizní keramické zdivo',
    description:
      'Nosné konstrukce z keramického broušeného zdiva 300 mm – přesnost provedení, dlouhá životnost a celková stabilita domu.',
    image: '/stavba_1.jpg',
  },
  {
    title: 'Konstrukčně oddělené domy',
    description:
      'Vlastní nosná akustická stěna a akustická vata mezi domy. Nižší přenos hluku, více soukromí a klidu jako v samostatném domě.',
    image: '/standardy/standardy2/' + encodeURIComponent('Konstrukčně oddělené domy.jpg'),
  },
  {
    title: 'Tepelná izolace stavby',
    description:
      'Zateplení fasády 200 mm EPS a minerální vata 320 mm nad 2NP. Energetický standard A/B a stabilní teplota po celý rok.',
    image: '/standardy/standardy2/' + encodeURIComponent('Tepelná izolace stavby.jpg'),
  },
  {
    title: 'Energetická náročnost A/B',
    description:
      'Dvojdomy třída A, bungalovy třída B. Nižší náklady na energie, stabilní klima a vyšší hodnota nemovitosti.',
    image: '/standardy/fasada3.jpg',
  },
]

const AmenitiesSection = () => {
  return (
    <section className="py-12 md:py-20 bg-neutral-offWhite relative pb-40 md:pb-80">
      <div className="container mx-auto px-4 sm:px-5 lg:px-20">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-overline mb-3 md:mb-4">Standardy</p>
          <h2 className="mb-4 md:mb-6 leading-tight font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-neutral-darkNavy">
            Standardy stavby
          </h2>
          <p className="text-body-regular md:text-body-large max-w-2xl mx-auto px-2">
            Základní technické parametry a vybavení, které zajišťují kvalitu,
            úspornost a dlouhodobý komfort bydlení v projektu Luční Háj.
          </p>
        </div>

        {/* Mobilní verze - horizontální scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {amenities.slice(0, 4).map((amenity, index) => (
              <div key={index} className="w-[280px] flex-shrink-0">
                <Card hover className="overflow-hidden h-full">
                  <div className="rounded-2xl overflow-hidden border border-slate-200/70 h-[160px]">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-neutral-darkNavy mb-2">{amenity.title}</h3>
                    <p className="text-sm text-neutral-mediumGray line-clamp-3">
                      {amenity.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-mediumGray mt-3 text-center">
            Posuňte pro více →
          </p>
        </div>

        {/* Desktop verze */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Sekce LOKALITA */}
        <div className="mt-10 md:mt-16">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-overline tracking-[0.2em] mb-2 md:mb-3">LOKALITA</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-primary font-semibold text-neutral-darkNavy mb-3 md:mb-4">Lokalita, která má hodnotu</h3>
            <p className="text-body-small md:text-body-regular max-w-2xl mx-auto mt-2 text-neutral-mediumGray px-2">
              Pečlivě vybraná lokalita propojuje klid přírody s praktickou dostupností města a kompletní občanskou vybaveností.
            </p>
          </div>

          {/* Mobilní verze - vertikální seznam */}
          <div className="md:hidden space-y-4 px-1">
            <div className="bg-white rounded-xl border border-neutral-lightGray/70 p-4 flex gap-4">
              <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-lightGray">
                <Image
                  src="/images/nature-sazava-01.jpg"
                  alt="Řeka Sázava"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs text-neutral-mediumGray">01</span>
                <h4 className="text-sm font-semibold mb-1">Řeka Sázava a příroda</h4>
                <p className="text-xs text-neutral-mediumGray line-clamp-2">
                  Blízkost řeky Sázavy, lesů a přírodních tras.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-lightGray/70 p-4 flex gap-4">
              <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-lightGray">
                <Image
                  src="/images/trails-rekreace-02.jpg"
                  alt="Turistika"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs text-neutral-mediumGray">02</span>
                <h4 className="text-sm font-semibold mb-1">Turistika a rekreace</h4>
                <p className="text-xs text-neutral-mediumGray line-clamp-2">
                  Cyklostezky, pěší trasy a vodní rekreace.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-lightGray/70 p-4 flex gap-4">
              <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-lightGray">
                <Image
                  src="/images/town-amenities-tynec-04.jpg"
                  alt="Občanská vybavenost"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs text-neutral-mediumGray">03</span>
                <h4 className="text-sm font-semibold mb-1">Občanská vybavenost</h4>
                <p className="text-xs text-neutral-mediumGray line-clamp-2">
                  Školy, obchody, restaurace a sportovní zařízení.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop verze */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-start w-full">
            {/* Column 01 – Řeka Sázava a příroda */}
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

            {/* Column 02 – Turistika a rekreace */}
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
        </div>
      </div>
      
      {/* Wave divider: white -> dark */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-0">
        <svg
          className="section-wave"
          viewBox="-20 -20 1644 403"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_102_5)">
            <path
              d="M212 296.173C140.8 354.973 43.6667 241.34 4 177.173L20.5 0H123.5H871.5C991.5 12.1667 1298.4 -10.5 1600 17.5V198.673L1574 318.173C1552 387.878 1412.5 240.173 1412.5 240.173C1341 201.173 1369.32 275.937 1291 216.173C1220.5 162.378 1170 253.173 1154.5 296.173C1139 339.173 1040 266.173 970.5 253.173C901 240.173 981.5 318.173 1003 339.673C1024.5 361.173 938.294 363.468 920.5 318.173C902.706 272.878 793 257.173 715 240.173C637 223.173 686.032 281.126 624 318.173C588 339.673 502.5 268.173 457 198.673C411.5 129.173 413.5 274.673 402.5 318.173C393.7 352.973 390.5 318.759 364.5 296.173C315 253.173 283.2 237.373 212 296.173Z"
              fill="#1E2738"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_amenities"
              x="-20"
              y="-20"
              width="1644"
              height="402.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_102_5"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_102_5"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default AmenitiesSection

