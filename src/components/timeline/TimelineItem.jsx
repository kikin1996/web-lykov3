const TimelineItem = ({ item, index, isLast }) => {
  // Střídání: první vlevo (index 0), druhá vpravo (index 1), třetí vlevo (index 2)...
  const isLeft = index % 2 === 0

  // Parsování data pro zobrazení měsíce a roku
  const parseDate = (dateString) => {
    if (!dateString) return { month: '', year: '' }
    
    // Pokud je formát "Měsíc Rok" (např. "Březen 2024")
    const parts = dateString.trim().split(' ')
    if (parts.length >= 2) {
      return {
        month: parts[0],
        year: parts[1]
      }
    }
    
    // Fallback
    return {
      month: dateString,
      year: ''
    }
  }

  const { month, year } = parseDate(item.date)

  const getStatusBadge = (status) => {
    const statusConfig = {
      'hotovo': {
        bg: 'bg-green-50',
        text: 'text-green-700',
        label: 'Hotovo'
      },
      'probíhá': {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        label: 'Probíhá'
      },
      'plánováno': {
        bg: 'bg-slate-50',
        text: 'text-slate-700',
        label: 'Plánováno'
      }
    }

    const config = statusConfig[status?.toLowerCase()] || statusConfig['plánováno']
    
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    )
  }

  // Získání obrázků - podporuje jak image (single), tak images (array)
  const getImages = () => {
    if (item.images && Array.isArray(item.images) && item.images.length > 0) {
      return item.images.slice(0, 3) // Max 3 obrázky
    }
    if (item.image) {
      return [item.image]
    }
    return []
  }

  const images = getImages()

  // Komponenta pro fotky
  const PhotoStrip = () => {
    if (images.length === 0) {
      return (
        <div className="grid grid-cols-2 gap-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/60 shadow-[0_14px_40px_rgba(15,23,42,0.10)] aspect-[4/3] bg-gradient-to-br from-[#B2F5EA] via-[#E6FFFA] to-[#B2F5EA]"
            />
          ))}
        </div>
      )
    }

    return (
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/60 shadow-[0_14px_40px_rgba(15,23,42,0.10)] overflow-hidden aspect-[4/3]"
          >
            <img
              src={img}
              alt={`${item.title} - ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    )
  }

  // Komponenta pro content kartu
  const ContentCard = () => (
    <div className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-sm">
      {item.status && (
        <div className={`mb-4 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          {getStatusBadge(item.status)}
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        {item.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  )

  // Komponenta pro osu s datem (bez vlastní linky – linka je na rodiči)
  const TimelineAxis = () => (
    <div className="relative flex flex-col items-center">
      {/* Bod s glow efektem */}
      <div className="relative z-10 mt-2 h-4 w-4 rounded-full bg-[#00D9B5] shadow-[0_0_0_6px_rgba(0,217,181,0.12)]" />
      
      {/* Datum label - zarovnání podle pozice karty */}
      <div
        className={`absolute top-0 translate-y-[-10px] text-xs font-semibold text-slate-700 rounded-full px-3 py-1 border border-slate-200/70 bg-white shadow-sm whitespace-nowrap z-20 ${
          isLeft ? 'left-6' : 'right-6'
        }`}
      >
        {month} {year}
      </div>
    </div>
  )

  // Desktop verze - 3-sloupcový grid
  return (
    <div className={`${isLast ? '' : 'mb-16'}`}>
      {/* Desktop: 3-sloupcový grid */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-10 items-start">
        {isLeft ? (
          <>
            {/* Levá strana: Content */}
            <div className="flex justify-end">
              <ContentCard />
            </div>
            {/* Střed: Osa */}
            <TimelineAxis />
            {/* Pravá strana: Fotky */}
            <div className="flex justify-start">
              <PhotoStrip />
            </div>
          </>
        ) : (
          <>
            {/* Levá strana: Fotky */}
            <div className="flex justify-end">
              <PhotoStrip />
            </div>
            {/* Střed: Osa */}
            <TimelineAxis />
            {/* Pravá strana: Content */}
            <div className="flex justify-start">
              <ContentCard />
            </div>
          </>
        )}
      </div>

      {/* Mobile: 1 sloupec, osa vlevo (sdílená linka je v rodiči Timeline) */}
      <div className="md:hidden relative pl-8">
        {/* Bod na sdílené ose vlevo */}
        <div className="absolute left-4 top-2 h-4 w-4 rounded-full bg-[#00D9B5] shadow-[0_0_0_6px_rgba(0,217,181,0.12)] -translate-x-1/2" />
        
        {/* Datum label nad kartou */}
        <div className="mb-3 text-xs font-semibold text-slate-700 rounded-full px-3 py-1 border border-slate-200/70 bg-white shadow-sm inline-block">
          {month} {year}
        </div>

        {/* Karta */}
        <div className="mb-6">
          <ContentCard />
        </div>

        {/* Fotky pod kartou */}
        {images.length > 0 && (
          <div className="mb-6">
            <PhotoStrip />
          </div>
        )}
      </div>
    </div>
  )
}

export default TimelineItem

