'use client'

import Image from 'next/image'
import Timeline from '../../src/components/timeline/Timeline'
import SEO from '../../src/components/seo/SEO'
import StructuredData from '../../src/components/seo/StructuredData'

const aktualityData = [
  {
    id: 1,
    date: '1. března 2025',
    sortDate: '2025-03-01',
    title: 'Zahájení stavby',
    description: 'Oficiální zahájení stavby celého projektu Luční háj.',
    status: 'hotovo',
    images: [
      '/images/aktuality/Zahájení stavby/Zahájení stavby (1).jpeg',
      '/images/aktuality/Zahájení stavby/Zahájení stavby (2).jpeg',
      '/images/aktuality/Zahájení stavby/Zahájení stavby (3).jpeg',
    ],
  },
  {
    id: 2,
    date: '1. června 2025',
    sortDate: '2025-06-01',
    title: 'Dokončení vodovodu a kanalizace pro lokalitu',
    description: 'Dokončeny inženýrské sítě – vodovod a kanalizace pro celou lokalitu.',
    status: 'hotovo',
    images: [
      '/images/aktuality/Dokončení vodovodu a kanalizace/Dokončení vodovodu a kanalizace (1).jpeg',
      '/images/aktuality/Dokončení vodovodu a kanalizace/Dokončení vodovodu a kanalizace (2).jpeg',
      '/images/aktuality/Dokončení vodovodu a kanalizace/Dokončení vodovodu a kanalizace (3).jpeg',
    ],
  },
  {
    id: 3,
    date: '18. srpna 2025',
    sortDate: '2025-08-18',
    title: 'Dokončena základová deska na vzorovém 2RD (1 a 2)',
    description: 'Zhotovení základové desky na vzorových domech 1 a 2 (2RD).',
    status: 'hotovo',
    images: [
      '/images/aktuality/Základová deska/Základová deska  (1).jpeg',
      '/images/aktuality/Základová deska/Základová deska  (2).jpeg',
      '/images/aktuality/Základová deska/Základová deska  (3).jpeg',
    ],
  },
  {
    id: 4,
    date: '6. října 2025',
    sortDate: '2025-10-06',
    title: 'Dokončen krov na vzorovém domě 1RD č. 11',
    description: 'Na vzorovém rodinném domě č. 11 je dokončen krov.',
    status: 'hotovo',
    images: ['/images/aktuality/Krov/krov.jpeg'],
  },
  {
    id: 5,
    date: '17. října 2025',
    sortDate: '2025-10-17',
    title: 'Realizace sádrových omítek na domě 11',
    description: 'Na domě č. 11 jsou hotové sádrové omítky.',
    status: 'hotovo',
    images: ['/images/aktuality/Realizace omítek/Realizace omítek.jpeg'],
  },
  {
    id: 6,
    date: '11. listopadu 2025',
    sortDate: '2025-11-11',
    title: 'Hotové podlahové topení na domě 11',
    description: 'Na vzorovém domě č. 11 je dokončeno podlahové topení.',
    status: 'hotovo',
    images: [
      '/images/aktuality/11.11.2025 - podlahové topení na 11/podlahové topení (1).jpeg',
      '/images/aktuality/11.11.2025 - podlahové topení na 11/podlahové topení (2).jpeg',
    ],
  },
  {
    id: 7,
    date: '28. listopadu 2025',
    sortDate: '2025-11-28',
    title: 'Hotové podlahové topení na domech 1 a 2',
    description: 'Podlahové topení je dokončeno také na domech 1 a 2.',
    status: 'hotovo',
    image: null,
  },
  {
    id: 8,
    date: '4. prosince 2025',
    sortDate: '2025-12-04',
    title: 'Hotové betonové podlahy na domech 1 a 2',
    description: 'Na domech 1 a 2 jsou dokončeny betonové podlahy.',
    status: 'hotovo',
    images: ['/images/aktuality/2.12.2025 hotové betonové podlahy na 1 a 2/betonové podlahy.jpeg'],
  },
  {
    id: 9,
    date: '9. ledna 2026',
    sortDate: '2026-01-09',
    title: 'Sádrokartony a obklady na domě 11',
    description: 'Na domě č. 11 jsou hotové sádrokartonové podhledy a obklady s dlažbami.',
    status: 'hotovo',
    images: [
      '/images/aktuality/Sádrokartony/Sádrokartony (1).jpeg',
      '/images/aktuality/Sádrokartony/Sádrokartony (2).jpeg',
      '/images/aktuality/Obklady a dlažby/Obklady a dlažby (1).jpeg',
    ],
  },
  {
    id: 10,
    date: '1. února 2026',
    sortDate: '2026-02-01',
    title: 'Malování na domě 11',
    description: 'Na domě č. 11 proběhlo finální malování interiéru.',
    status: 'hotovo',
    image: null,
  },
  {
    id: 11,
    date: '15. března 2026',
    sortDate: '2026-03-15',
    title: 'Zahájení fasádních prací',
    description: 'Spuštění prací na fasádách domů v celém projektu.',
    status: 'probíhá',
    image: null,
  },
  {
    id: 12,
    date: '15. dubna 2026',
    sortDate: '2026-04-15',
    title: 'Hotový vzorový dům č. 11',
    description: 'Vzorový rodinný dům č. 11 je kompletně dokončen.',
    status: 'plánováno',
    image: null,
  },
  {
    id: 13,
    date: '15. května 2026',
    sortDate: '2026-05-15',
    title: 'Hotové vzorové domy č. 1 a 2',
    description: 'Dokončení vzorových domů 1 a 2.',
    status: 'plánováno',
    image: null,
  },
  {
    id: 14,
    date: 'Srpen 2026',
    sortDate: '2026-08-01',
    title: 'Kolaudace komunikace',
    description: 'Předpokládaná kolaudace komunikace a infrastruktury v lokalitě.',
    status: 'plánováno',
    image: null,
  },
  {
    id: 15,
    date: 'Srpen 2026',
    sortDate: '2026-08-15',
    title: 'Kolaudace domů',
    description: 'Plánovaná kolaudace domů v projektu Luční háj.',
    status: 'plánováno',
    image: null,
  },
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Aktuality a průběh výstavby - Luční Háj",
    "description": "Sledujte aktuální průběh výstavby projektu Luční Háj. Aktuality o stavbě, milníky projektu a plánované termíny dokončení.",
    "url": "https://domypecerady.cz/aktuality",
    "blogPost": aktualityData.map(item => ({
      "@type": "BlogPosting",
      "headline": item.title,
      "datePublished": item.sortDate,
      "description": item.description
    }))
  }

  return (
    <>
      <SEO
        title="Aktuality a průběh výstavby"
        description="Sledujte aktuální průběh výstavby projektu Luční Háj. Aktuality o stavbě, milníky projektu a plánované termíny dokončení."
        keywords="aktuality, výstavba, průběh stavby, milníky, Luční Háj, Týnec nad Sázavou"
        image="/images/stavba.jpg"
        url="/aktuality"
      />
      <StructuredData data={structuredData} />
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


