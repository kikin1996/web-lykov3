import { useState } from 'react'
import EmbeddedSitePreview from './EmbeddedSitePreview'
import AvailabilityTableOnly from './AvailabilityTableOnly'

// Mock data - 12 domů s fotkami a půdorysy
const houses = [
  {
    id: '1',
    name: 'Dům 01',
    usableArea: 120,
    plotArea: 450,
    rooms: 4,
    bathrooms: 2,
    heroImage: '/photos/web_f2.jpg',
    floorplanImage: '/photos/F1 resize.jpg',
    description: 'Moderní dvojdům s velkou zahradou a kvalitním vybavením. Ideální pro rodinu, která hledá komfort a klidné prostředí.',
    status: 'Volný',
    houseCardPdf: '/documents/dum-01-karta.pdf' // URL k PDF dokumentu
  },
  {
    id: '2',
    name: 'Dům 02',
    usableArea: 135,
    plotArea: 500,
    rooms: 5,
    bathrooms: 2,
    heroImage: '/photos/F1 resize.jpg',
    floorplanImage: '/photos/web_f2.jpg',
    description: 'Prostorný rodinný dům s garáží a velkorysou terasou orientovanou do zahrady.',
    status: 'Rezervováno',
    houseCardPdf: '/documents/dum-02-karta.pdf'
  },
  {
    id: '3',
    name: 'Dům 03',
    usableArea: 110,
    plotArea: 400,
    rooms: 3,
    bathrooms: 1,
    heroImage: null,
    floorplanImage: null,
    description: 'Kompaktní dům ideální pro menší rodiny nebo pár, který ocení nízké provozní náklady.',
    status: 'Volný',
    houseCardPdf: null
  },
  {
    id: '4',
    name: 'Dům 04',
    usableArea: 145,
    plotArea: 550,
    rooms: 5,
    bathrooms: 3,
    heroImage: null,
    floorplanImage: null,
    description: 'Luxusní dům s velkým pozemkem, bazénem a prémiovými materiály v interiéru.',
    status: 'Volný',
    houseCardPdf: null
  },
  {
    id: '5',
    name: 'Dům 05',
    usableArea: 100,
    plotArea: 380,
    rooms: 3,
    bathrooms: 1,
    heroImage: null,
    floorplanImage: null,
    description: 'Úsporný dům s moderním designem a důrazem na přirozené osvětlení.',
    status: 'Prodáno',
    houseCardPdf: null
  },
  {
    id: '6',
    name: 'Dům 06',
    usableArea: 130,
    plotArea: 480,
    rooms: 4,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    houseCardPdf: null
  },
  {
    id: '7',
    name: 'Dům 07',
    usableArea: 125,
    plotArea: 460,
    rooms: 4,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Dům s otevřeným prostorem a prostornou zahradou pro rodinné aktivity.',
    status: 'Rezervováno',
    houseCardPdf: null
  },
  {
    id: '8',
    name: 'Dům 08',
    usableArea: 140,
    plotArea: 520,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Prostorný dům s garáží, sklepem a flexibilním dispozičním řešením.',
    status: 'Volný',
    houseCardPdf: null
  },
  {
    id: '9',
    name: 'Dům 09',
    usableArea: 115,
    plotArea: 420,
    rooms: 4,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Moderní dům s energeticky úsporným řešením a chytrými technologiemi.',
    status: 'Volný',
    houseCardPdf: null
  },
  {
    id: '10',
    name: 'Dům 10',
    usableArea: 150,
    plotArea: 600,
    rooms: 6,
    bathrooms: 3,
    heroImage: null,
    floorplanImage: null,
    description: 'Velkorysý dům pro vícegenerační bydlení nebo početnou rodinu.',
    status: 'Volný',
    houseCardPdf: null
  },
  {
    id: '11',
    name: 'Dům 11',
    usableArea: 105,
    plotArea: 390,
    rooms: 3,
    bathrooms: 1,
    heroImage: null,
    floorplanImage: null,
    description: 'Kompaktní dům s malou zahradou, ideální jako startovací bydlení.',
    status: 'Prodáno',
    houseCardPdf: null
  },
  {
    id: '12',
    name: 'Dům 12',
    usableArea: 160,
    plotArea: 650,
    rooms: 6,
    bathrooms: 4,
    heroImage: null,
    floorplanImage: null,
    description: 'Luxusní dům s velkým pozemkem, dostatkem soukromí a krásným výhledem.',
    status: 'Volný',
    houseCardPdf: null
  }
]

// Přibližné pozice hotspotů nad mapou (v procentech)
const hotspotPositions = {
  '1': { top: '32%', left: '10%' },
  '2': { top: '33%', left: '22%' },
  '3': { top: '33%', left: '34%' },
  '4': { top: '33%', left: '46%' },
  '5': { top: '33%', left: '58%' },
  '6': { top: '33%', left: '70%' },
  '7': { top: '33%', left: '82%' },
  '8': { top: '45%', left: '20%' },
  '9': { top: '45%', left: '40%' },
  '10': { top: '45%', left: '60%' },
  '11': { top: '62%', left: '30%' },
  '12': { top: '62%', left: '70%' }
}

const HousePickerLayout = () => {
  // Defaultně vybrán Dům 01
  const [selectedHouseId, setSelectedHouseId] = useState('1')
  const selectedHouse = houses.find((house) => house.id === selectedHouseId)

  // TODO: napojit na message from iframe / polygon click
  // Příklad: window.addEventListener('message', (event) => {
  //   if (event.data.type === 'house-selected') {
  //     setSelectedHouseId(event.data.houseId)
  //   }
  // })

  return (
    <div className="bg-[#F5F7FB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Jeden hlavní white card wrapper */}
        <div className="bg-white rounded-[28px] border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.12)] overflow-hidden p-8 md:p-10 lg:p-12">
          {/* Horní část: nadpis + mapa */}
          <div className="space-y-6">
            {/* Nadpis */}
            <div>
              <h1 className="text-h1 mb-2">
                Vyberte dům
              </h1>
              <p className="text-slate-600 mt-2">
                Klikněte na dům v mapě nebo zvolte ze seznamu.
              </p>
            </div>

            {/* Mapa s polygony (klik na polygon vybírá dům) */}
            <div className="relative">
              <EmbeddedSitePreview
                selectedHouseId={selectedHouseId}
                onSelectHouse={setSelectedHouseId}
              />
            </div>
          </div>

          {/* Spodní část: 3 sloupce s detailem vybraného domu */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Sloupec 1: Foto domu zblízka */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Pohled na dům
              </h3>
              <div className="border border-slate-200/70 rounded-2xl overflow-hidden bg-slate-50">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  {selectedHouse?.heroImage ? (
                    <img
                      src={selectedHouse.heroImage}
                      alt={selectedHouse.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 flex items-center justify-center">
                      <p className="text-slate-400 text-sm">{selectedHouse?.name}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sloupec 2: Půdorysy */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Půdorysy
              </h3>
              <div className="border border-slate-200/70 rounded-2xl overflow-hidden bg-slate-50">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  {selectedHouse?.floorplanImage ? (
                    <img
                      src={selectedHouse.floorplanImage}
                      alt={`${selectedHouse.name} – půdorys`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 flex items-center justify-center">
                      <p className="text-slate-400 text-sm">Půdorys bude doplněn</p>
                    </div>
                  )}
                </div>
                {/* TODO: lightbox pro detailní zobrazení půdorysu */}
              </div>
            </div>

            {/* Sloupec 3: Informace o domu */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Informace o domě
              </h3>
              <div className="border border-slate-200/70 rounded-2xl bg-slate-50 p-6">
                {/* Status badge */}
                {selectedHouse?.status && (
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedHouse.status === 'Volný'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : selectedHouse.status === 'Rezervováno'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {selectedHouse.status}
                    </span>
                  </div>
                )}

                {/* Název domu */}
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                  {selectedHouse?.name}
                </h2>

                {/* Popis */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {selectedHouse?.description}
                </p>

                {/* Tlačítko Karta domu */}
                {selectedHouse?.houseCardPdf && (
                  <div className="mb-6">
                    <a
                      href={selectedHouse.houseCardPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-200 shadow-[0_4px_12px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_16px_rgba(99,102,241,0.4)]"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Karta domu (PDF)
                    </a>
                  </div>
                )}

                {/* Metriky */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-slate-200/70">
                    <p className="text-xs text-slate-500 mb-1">Užitná plocha</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.usableArea} m²
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200/70">
                    <p className="text-xs text-slate-500 mb-1">Plocha pozemku</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.plotArea} m²
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200/70">
                    <p className="text-xs text-slate-500 mb-1">Pokoje</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.rooms}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200/70">
                    <p className="text-xs text-slate-500 mb-1">Koupelny</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.bathrooms}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider před tabulkou */}
          <div className="mt-12 border-t border-slate-100" />

          {/* Tabulka dostupnosti (bez mapy) */}
          <div className="mt-12">
            <AvailabilityTableOnly />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HousePickerLayout

