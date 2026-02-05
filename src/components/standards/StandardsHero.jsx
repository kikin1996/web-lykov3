import Image from 'next/image'

const StandardsHero = () => {
  return (
    <div>
      {/* Pill Label */}
      <div className="mb-6">
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200/70">
          Standardy
        </span>
      </div>

      {/* H1 Headline - dvouřádkový, poslední část šedá */}
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8 max-w-4xl">
        <span className="text-slate-900">Standardy pro moderní bydlení.</span>{' '}
        <span className="text-slate-300">Promyšlené detaily, které vydrží roky.</span>
      </h1>

      {/* Hero Image - součást stejné karty, jen rounded blok */}
      <div className="rounded-[28px] overflow-hidden border border-slate-200/70 h-[260px] md:h-[420px] mt-8">
        <Image
          src="/images/standardy-hero.jpg"
          alt="Standardy provedení"
          width={1200}
          height={420}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default StandardsHero

