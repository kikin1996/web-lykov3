'use client'

import Image from 'next/image'
import Timeline from '../../src/components/timeline/Timeline'
import SEO from '../../src/components/seo/SEO'

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

export default function AktualityPage() {
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
    <>
      <SEO
        title="Aktuality a průběh výstavby"
        description="Sledujte aktuální průběh výstavby projektu Luční Háj. Aktuality o stavbě, milníky projektu a plánované termíny dokončení."
        keywords="aktuality, výstavba, průběh stavby, milníky, Luční Háj"
        image="/images/stavba.jpg"
        url="/aktuality"
      />
      <div className="min-h-screen bg-[#F5F7FB] pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-[28px] border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-full w-full min-h-[380px] lg:min-h-[420px] overflow-hidden">
                <Image
                  src="/images/stavba.jpg"
                  alt="Průběh výstavby – aktuální stav domu"
                  width={1200}
                  height={420}
                  className="w-full h-full min-h-[380px] lg:min-h-[420px] object-cover"
                  priority
                />
              </div>

              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E6FFFA] text-[#00B89A] px-3 py-1 text-xs font-medium mb-6 w-fit">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Aktuality stavby
                </div>

                <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6 font-serif">
                  Průběh výstavby
                </h1>

                <p className="text-slate-600 text-base lg:text-lg leading-7 mb-4">
                  Sledujte aktuální postup výstavby od zahájení až po dokončení.
                </p>

                <p className="text-sm text-slate-500">
                  Aktualizováno: {latestDate}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100" />

            <div className="p-8 md:p-10 lg:p-12 pt-10 md:pt-12 lg:pt-14">
              <Timeline items={aktualityData} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


