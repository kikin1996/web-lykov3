const StandardsHero = () => {
  return (
    <div>
      {/* Pill Label */}
      <div className="mb-6">
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200/70">
          Standardy
        </span>
      </div>

      {/* H1 Headline - dlouhý na 3 řádky, poslední část šedá */}
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8 max-w-4xl">
        <span className="text-slate-900">Standardy provedení pro dlouhodobou kvalitu a moderní bydlení.</span>{' '}
        <span className="text-slate-300">Promyšlené detaily, které vydrží roky.</span>
      </h1>

      {/* Hero Image - součást stejné karty, jen rounded blok */}
      <div className="rounded-[28px] overflow-hidden border border-slate-200/70 h-[260px] md:h-[420px] mt-8">
        <img
          src="/images/standardy-hero.jpg"
          alt="Standardy provedení"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            if (e.target.nextElementSibling) {
              e.target.nextElementSibling.style.display = 'flex'
            }
          }}
        />
        {/* Gradient Placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 hidden items-center justify-center">
          <p className="text-slate-400 text-sm">Obrázek standardů</p>
        </div>
      </div>
    </div>
  )
}

export default StandardsHero

