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
    status: 'hotovo',
    image: null,
  },
  {
    id: 12,
    date: '22. dubna 2026',
    sortDate: '2026-04-22',
    title: 'Hotový vzorový dům č. 11',
    description: 'Vzorový bungalov č. 11 je kompletně dokončen, včetně podlah a koupelen.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-04-22-vzorovy-bungalov-11/vzorovy-bungalov-11-1.jpg',
      '/images/aktuality/2026-04-22-vzorovy-bungalov-11/vzorovy-bungalov-11-2.jpg',
      '/images/aktuality/2026-04-22-vzorovy-bungalov-11/vzorovy-bungalov-11-3.jpg',
      '/images/aktuality/2026-04-22-vzorovy-bungalov-11/vzorovy-bungalov-11-4.jpg',
    ],
  },
  {
    id: 19,
    date: '22. dubna 2026',
    sortDate: '2026-04-22',
    title: 'Krov na bungalovu č. 12',
    description: 'Bungalov č. 12 je pod střechou, hotový je krov a okna.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-04-22-bungalov-12-krov/bungalov-12-krov-1.jpg',
      '/images/aktuality/2026-04-22-bungalov-12-krov/bungalov-12-krov-2.jpg',
      '/images/aktuality/2026-04-22-bungalov-12-krov/bungalov-12-krov-3.jpg',
    ],
  },
  {
    id: 18,
    date: '22. dubna 2026',
    sortDate: '2026-04-22',
    title: 'Zateplení fasád dvojdomů',
    description: 'Na dvojdomech probíhá zateplení a příprava fasád.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-04-22-fasady-zahajeni/fasady-zahajeni-1.jpg',
      '/images/aktuality/2026-04-22-fasady-zahajeni/fasady-zahajeni-2.jpg',
      '/images/aktuality/2026-04-22-fasady-zahajeni/fasady-zahajeni-3.jpg',
    ],
  },
  {
    id: 17,
    date: '22. dubna 2026',
    sortDate: '2026-04-22',
    title: 'Sádrokartony a omítky v domech 1 až 8',
    description: 'V dvojdomech 1 až 8 jsou hotové sádrokartony a omítky, připravují se koupelny.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-04-22-interiery-domy-1-8/interiery-domy-1-8-1.jpg',
      '/images/aktuality/2026-04-22-interiery-domy-1-8/interiery-domy-1-8-2.jpg',
      '/images/aktuality/2026-04-22-interiery-domy-1-8/interiery-domy-1-8-3.jpg',
      '/images/aktuality/2026-04-22-interiery-domy-1-8/interiery-domy-1-8-4.jpg',
    ],
  },
  {
    id: 16,
    date: '22. července 2026',
    sortDate: '2026-07-22',
    title: 'Nový chodník podél lokality',
    description: 'Podél příjezdové silnice je hotový nový chodník.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-07-22-chodnik/chodnik-1.jpg',
      '/images/aktuality/2026-07-22-chodnik/chodnik-2.jpg',
    ],
  },
  {
    id: 15,
    date: '22. července 2026',
    sortDate: '2026-07-22',
    title: 'Fasáda a sádrokartony v bungalovu č. 12',
    description: 'Bungalov č. 12 dostává fasádu, uvnitř se dokončují sádrokartony.',
    status: 'probíhá',
    images: [
      '/images/aktuality/2026-07-22-bungalov-12-fasada/bungalov-12-fasada-1.jpg',
      '/images/aktuality/2026-07-22-bungalov-12-fasada/bungalov-12-fasada-2.jpg',
      '/images/aktuality/2026-07-22-bungalov-12-fasada/bungalov-12-fasada-3.jpg',
    ],
  },
  {
    id: 14,
    date: '22. července 2026',
    sortDate: '2026-07-22',
    title: 'Domy 9 a 10: omítky',
    description: 'V domech 9 a 10 probíhají omítky.',
    status: 'probíhá',
    images: [
      '/images/aktuality/2026-07-22-domy-9-10/domy-9-10-1.jpg',
      '/images/aktuality/2026-07-22-domy-9-10/domy-9-10-2.jpg',
      '/images/aktuality/2026-07-22-domy-9-10/domy-9-10-3.jpg',
    ],
  },
  {
    id: 13,
    date: '22. července 2026',
    sortDate: '2026-07-22',
    title: 'Pokládka masivních podlah',
    description: 'V domech 3 a 4 začala pokládka dubových podlah 14 mm.',
    status: 'probíhá',
    images: [
      '/images/aktuality/2026-07-22-masivni-podlahy/masivni-podlahy-1.jpg',
      '/images/aktuality/2026-07-22-masivni-podlahy/masivni-podlahy-2.jpg',
      '/images/aktuality/2026-07-22-masivni-podlahy/masivni-podlahy-3.jpg',
    ],
  },
  {
    id: 20,
    date: '22. července 2026',
    sortDate: '2026-07-22',
    title: 'Hotové fasády dvojdomů 1 až 8',
    description: 'Dvojdomy 1 až 8 mají dokončené fasády.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-07-22-fasady-domy-1-8/fasady-domy-1-8-1.jpg',
      '/images/aktuality/2026-07-22-fasady-domy-1-8/fasady-domy-1-8-2.jpg',
      '/images/aktuality/2026-07-22-fasady-domy-1-8/fasady-domy-1-8-3.jpg',
      '/images/aktuality/2026-07-22-fasady-domy-1-8/fasady-domy-1-8-4.jpg',
    ],
  },
  {
    id: 21,
    date: '22. července 2026',
    sortDate: '2026-07-22',
    title: 'Hotové vzorové domy č. 1 a 2',
    description: 'Vzorový dvojdům je dokončený a zařízený nábytkem. Je připravený k prohlídkám.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-07-22-vzorovy-dum-1/vzorovy-dum-1-1.jpg',
      '/images/aktuality/2026-07-22-vzorovy-dum-1/vzorovy-dum-1-2.jpg',
      '/images/aktuality/2026-07-22-vzorovy-dum-1/vzorovy-dum-1-3.jpg',
    ],
  },
  {
    id: 22,
    date: '25. srpna 2026',
    sortDate: '2026-08-25',
    title: 'Interiéry domů 9 a 10',
    description: 'V domech 9 a 10 jsou hotové omítky.',
    status: 'probíhá',
    images: [
      '/images/aktuality/2026-08-25-domy-9-10/domy-9-10-1.jpg',
      '/images/aktuality/2026-08-25-domy-9-10/domy-9-10-2.jpg',
      '/images/aktuality/2026-08-25-domy-9-10/domy-9-10-3.jpg',
    ],
  },
  {
    id: 23,
    date: '25. srpna 2026',
    sortDate: '2026-08-25',
    title: 'Příprava komunikace a zpevněných ploch',
    description: 'Probíhá příprava podkladu pro asfalt a dláždění vjezdů k domům.',
    status: 'probíhá',
    images: [
      '/images/aktuality/2026-08-25-zpevnene-plochy/zpevnene-plochy-1.jpg',
      '/images/aktuality/2026-08-25-zpevnene-plochy/zpevnene-plochy-2.jpg',
      '/images/aktuality/2026-08-25-zpevnene-plochy/zpevnene-plochy-3.jpg',
      '/images/aktuality/2026-08-25-zpevnene-plochy/zpevnene-plochy-4.jpg',
    ],
  },
  {
    id: 24,
    date: '25. srpna 2026',
    sortDate: '2026-08-25',
    title: 'Podlahy a koupelny v bungalovu č. 12',
    description: 'Bungalov č. 12 má hotovou fasádu, pokládají se podlahy a obklady v koupelnách.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-08-25-bungalov-12-podlahy/bungalov-12-podlahy-1.jpg',
      '/images/aktuality/2026-08-25-bungalov-12-podlahy/bungalov-12-podlahy-2.jpg',
      '/images/aktuality/2026-08-25-bungalov-12-podlahy/bungalov-12-podlahy-3.jpg',
      '/images/aktuality/2026-08-25-bungalov-12-podlahy/bungalov-12-podlahy-4.jpg',
    ],
  },
  {
    id: 25,
    date: '25. srpna 2026',
    sortDate: '2026-08-25',
    title: 'Masivní podlahy v domech 3 až 8',
    description: 'V domech 3 až 8 jsou položené dubové podlahy a dokončují se koupelny.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-08-25-podlahy-domy-3-8/podlahy-domy-3-8-1.jpg',
      '/images/aktuality/2026-08-25-podlahy-domy-3-8/podlahy-domy-3-8-2.jpg',
      '/images/aktuality/2026-08-25-podlahy-domy-3-8/podlahy-domy-3-8-3.jpg',
      '/images/aktuality/2026-08-25-podlahy-domy-3-8/podlahy-domy-3-8-4.jpg',
    ],
  },
  {
    id: 26,
    date: '16. září 2026',
    sortDate: '2026-09-16',
    title: 'Pokládka asfaltu',
    description: 'Na komunikaci v lokalitě byl položen finální asfaltový povrch.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-09-16-pokladka-asfaltu/pokladka-asfaltu-1.jpg',
      '/images/aktuality/2026-09-16-pokladka-asfaltu/pokladka-asfaltu-2.jpg',
      '/images/aktuality/2026-09-16-pokladka-asfaltu/pokladka-asfaltu-3.jpg',
      '/images/aktuality/2026-09-16-pokladka-asfaltu/pokladka-asfaltu-4.jpg',
    ],
  },
  {
    id: 27,
    date: '23. září 2026',
    sortDate: '2026-09-23',
    title: 'Hotová asfaltová komunikace',
    description: 'Lokalita má finální asfaltový povrch, chodníky a zpevněné plochy u domů.',
    status: 'hotovo',
    images: [
      '/images/aktuality/2026-09-23-asfalt/asfalt-1.jpg',
      '/images/aktuality/2026-09-23-asfalt/asfalt-2.jpg',
      '/images/aktuality/2026-09-23-asfalt/asfalt-3.jpg',
      '/images/aktuality/2026-09-23-asfalt/asfalt-4.jpg',
    ],
  },
  {
    id: 28,
    date: 'Říjen 2026',
    sortDate: '2026-10-05',
    title: 'Předběžná přejímka domů',
    description: 'Všechny domy v projektu prošly předběžnou přejímkou.',
    status: 'hotovo',
    image: null,
  },
  {
    id: 29,
    date: 'Říjen 2026',
    sortDate: '2026-10-15',
    title: 'Kolaudace komunikace',
    description: 'Asfaltová komunikace je hotová, probíhá její převzetí obcí.',
    status: 'probíhá',
    image: null,
  },
  {
    id: 30,
    date: 'Konec listopadu 2026',
    sortDate: '2026-11-30',
    title: 'Kolaudace domů',
    description: 'Plánovaná kolaudace domů v projektu Luční Háj. Navazuje na převzetí komunikace obcí.',
    status: 'plánováno',
    image: null,
  },
]

export default function AktualityPage() {
  const latestDate = 'Říjen 2026'

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
        title="Průběh Výstavby a Aktuality"
        description="Sledujte aktuální průběh výstavby rodinných domů Luční Háj. Fotodokumentace stavby, milníky projektu a plánované termíny dokončení v roce 2026."
        keywords="průběh výstavby, stavba rodinných domů, aktuality Luční Háj, fotodokumentace stavby, termín dokončení, kolaudace domů 2026"
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


