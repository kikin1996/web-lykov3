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
  return (
    <div className="min-h-screen bg-[#F5F7FB] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Hlavička stránky */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-6">
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
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Průběh výstavby
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Sledujte aktuální postup výstavby od zahájení až po dokončení.
          </p>
        </div>

        {/* Timeline */}
        <Timeline items={aktualityData} />
      </div>
    </div>
  )
}

export default AktualityPage


