import TimelineItem from './TimelineItem'

const Timeline = ({ items }) => {
  // Seřadit od nejnovějšího k nejstaršímu (DESC) – nejnovější nahoře
  const sortedItems = [...items].sort((a, b) => {
    const dateA = new Date(a.sortDate || a.date)
    const dateB = new Date(b.sortDate || b.date)
    return dateB - dateA
  })

  const getYear = (dateString) => {
    if (!dateString) return ''
    const parts = String(dateString).trim().split(' ')
    return parts[parts.length - 1]
  }

  // Marker pro konkrétní rok na ose (Rok 2026)
  const YearMarker2026 = () => (
    <div className="mb-10 mt-4 relative">
      {/* Desktop – uprostřed */}
      <div className="hidden md:flex flex-col items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-[#00D9B5] shadow-[0_0_0_8px_rgba(0,217,181,0.18)]" />
        <span className="px-4 py-1.5 rounded-full bg-white text-slate-900 text-sm font-semibold shadow-md tracking-wide uppercase">
          Rok 2026
        </span>
      </div>
      {/* Mobile – vlevo */}
      <div className="md:hidden flex flex-col items-start gap-2 pl-4">
        <div className="h-5 w-5 rounded-full bg-[#00D9B5] shadow-[0_0_0_6px_rgba(0,217,181,0.18)]" />
        <span className="px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-semibold shadow-md tracking-wide uppercase">
          Rok 2026
        </span>
      </div>
    </div>
  )

  return (
    <div className="relative">
      {/* Wrapper pro timeline list se sdílenou vertikální linkou */}
      <div className="relative">
        {/* Vertikální linka přes všechny body – desktop uprostřed, mobile vlevo */}
        <div className="pointer-events-none">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-slate-200" />
        </div>

        {/* Timeline items - zobrazit od nejnovějšího (nahoře) k nejstaršímu (dole) */}
        <div>
          {(() => {
            const targetYear = '2026'
            let markerRendered = false

            return sortedItems.map((item, index) => {
              const year = getYear(item.date)
              const nextYear =
                index + 1 < sortedItems.length
                  ? getYear(sortedItems[index + 1].date)
                  : null

              // Chceme bod "ROK 2026" přesně mezi 9. lednem 2026 (rok 2026)
              // a 4. prosincem 2025 (rok 2025) – tedy ZA poslední položkou z roku 2026,
              // po které hned následuje položka s rokem 2025.
              const shouldRenderYearMarker =
                !markerRendered && year === targetYear && nextYear === '2025'

              if (shouldRenderYearMarker) {
                markerRendered = true
              }

              return (
                <div key={item.id || index}>
                  <TimelineItem
                    item={item}
                    index={index} // střídání vlevo/vpravo podle indexu již seřazeného pole
                    isLast={index === sortedItems.length - 1}
                  />
                  {shouldRenderYearMarker && <YearMarker2026 />}
                </div>
              )
            })
          })()}
        </div>
      </div>
    </div>
  )
}

export default Timeline

