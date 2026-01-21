import Timeline from '../components/timeline/Timeline'

// Mock data - aktuality stavby
const aktualityData = [
  {
    id: 1,
    date: 'Březen 2024',
    sortDate: '2024-03-01',
    title: 'Zahájení výstavby',
    description: 'Proběhlo předání staveniště a zahájení zemních prací. Staveniště bylo připraveno a zahájeny první výkopové práce.',
    status: 'hotovo',
    image: null
  },
  {
    id: 2,
    date: 'Červen 2024',
    sortDate: '2024-06-15',
    title: 'Dokončení základové desky',
    description: 'Základová deska byla úspěšně dokončena. Proběhly všechny potřebné betonážní práce a kontrola kvality.',
    status: 'hotovo',
    image: null
  },
  {
    id: 3,
    date: 'Září 2024',
    sortDate: '2024-09-10',
    title: 'Hrubá stavba hotová',
    description: 'Hrubá stavba je kompletně dokončena. Všechny nosné konstrukce jsou hotové a připravené pro další fáze výstavby.',
    status: 'hotovo',
    image: null
  },
  {
    id: 4,
    date: 'Leden 2025',
    sortDate: '2025-01-20',
    title: 'Dokončení střechy a oken',
    description: 'Střecha je kompletně dokončena a všechny okenní otvory byly osazeny kvalitními okny s izolačními dvojskly.',
    status: 'hotovo',
    image: null
  },
  {
    id: 5,
    date: 'Únor 2025',
    sortDate: '2025-02-15',
    title: 'Probíhají vnitřní instalace',
    description: 'Aktuálně probíhají vnitřní instalace - elektroinstalace, vodoinstalace, topení a vzduchotechnika. Práce postupují podle harmonogramu.',
    status: 'probíhá',
    image: null
  },
  {
    id: 6,
    date: 'Duben 2025',
    sortDate: '2025-04-01',
    title: 'Dokončení vnitřních omítek',
    description: 'Plánované dokončení vnitřních omítek a příprava prostor pro finální úpravy.',
    status: 'plánováno',
    image: null
  },
  {
    id: 7,
    date: 'Červen 2025',
    sortDate: '2025-06-01',
    title: 'Dokončení projektu',
    description: 'Plánované dokončení celého projektu včetně finálních úprav, kolaudace a předání bytů novým majitelům.',
    status: 'plánováno',
    image: null
  }
]

const AktualityPage = () => {
  // Najít nejnovější datum pro "Aktualizováno"
  const getLatestDate = () => {
    const sorted = [...aktualityData].sort((a, b) => {
      const dateA = new Date(a.sortDate || a.date)
      const dateB = new Date(b.sortDate || b.date)
      return dateB - dateA
    })
    return sorted[0]?.date || 'Únor 2025'
  }

  const latestDate = getLatestDate()

  return (
    <div className="min-h-screen bg-[#F5F7FB] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Jeden hlavní white card wrapper – hero + timeline */}
        <div className="bg-white rounded-[28px] border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
          {/* Hero sekce - 2 sloupce ve stylu Kontaktu */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Levý sloupec - foto */}
            <div className="relative h-full w-full min-h-[380px] lg:min-h-[420px] overflow-hidden">
              {/* Foto stavby vedle nadpisu Průběh výstavby */}
              <img
                src="/images/stavba.jpg"
                alt="Průběh výstavby – aktuální stav domu"
                className="w-full h-full min-h-[380px] lg:min-h-[420px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>

            {/* Pravý sloupec - texty */}
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E6FFFA] text-[#00B89A] px-3 py-1 text-xs font-medium mb-6 w-fit">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Aktuality stavby
              </div>

              {/* H1 */}
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6 font-serif">
                Průběh výstavby
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-base lg:text-lg leading-7 mb-4">
                Sledujte aktuální postup výstavby od zahájení až po dokončení.
              </p>

              {/* Aktualizováno */}
              <p className="text-sm text-slate-500">
                Aktualizováno: {latestDate}
              </p>
            </div>
          </div>

          {/* Jemný přechod mezi hero a timeline */}
          <div className="border-t border-slate-100" />

          {/* Timeline část uvnitř stejného wrapperu – větší vertikální mezera od hero */}
          <div className="p-8 md:p-10 lg:p-12 pt-10 md:pt-12 lg:pt-14">
            <Timeline items={aktualityData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AktualityPage


