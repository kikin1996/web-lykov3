const HouseDetailCard = ({ house }) => {
  if (!house) {
    return (
      <div className="p-6">
        <p className="text-slate-500 text-sm">Vyberte dům pro zobrazení detailů</p>
      </div>
    )
  }

  return (
    <div className="border border-slate-200/70 rounded-2xl overflow-hidden bg-slate-50">
      {/* Fotka domu */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {house.imageUrl ? (
          <img
            src={house.imageUrl}
            alt={house.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextElementSibling.style.display = 'block'
            }}
          />
        ) : null}
        {/* Fallback gradient placeholder */}
        <div
          className={`w-full h-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 ${
            house.imageUrl ? 'hidden' : ''
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-slate-400 text-sm">{house.name}</p>
          </div>
        </div>
      </div>

      {/* Obsah karty */}
      <div className="p-6">
        {/* Název domu */}
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          {house.name}
        </h2>

        {/* Krátký popis */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {house.description || 'Moderní dvojdům s velkou zahradou a kvalitním vybavením.'}
        </p>

        {/* Specifikace - 2 sloupce metrik */}
        <div className="grid grid-cols-2 gap-4">
          {/* Užitná plocha */}
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-xs text-slate-500 mb-1">Užitná plocha</p>
            <p className="text-lg font-semibold text-slate-900">
              {house.usableArea ? Number(house.usableArea).toFixed(1) : ''} m²
            </p>
          </div>

          {/* Plocha pozemku */}
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-xs text-slate-500 mb-1">Plocha pozemku</p>
            <p className="text-lg font-semibold text-slate-900">
              {house.plotArea} m²
            </p>
          </div>

          {/* Počet pokojů */}
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-xs text-slate-500 mb-1">Pokoje</p>
            <p className="text-lg font-semibold text-slate-900">
              {house.rooms}
            </p>
          </div>

          {/* Počet koupelen */}
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-xs text-slate-500 mb-1">Koupelny</p>
            <p className="text-lg font-semibold text-slate-900">
              {house.bathrooms}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseDetailCard

