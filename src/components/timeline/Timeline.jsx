import TimelineItem from './TimelineItem'

const Timeline = ({ items }) => {
  // Seřadit od nejnovějšího k nejstaršímu (DESC) – nejnovější nahoře
  const sortedItems = [...items].sort((a, b) => {
    const dateA = new Date(a.sortDate || a.date)
    const dateB = new Date(b.sortDate || b.date)
    return dateB - dateA
  })

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
          {sortedItems.map((item, index) => (
            <TimelineItem
              key={item.id || index}
              item={item}
              index={index} // střídání vlevo/vpravo podle indexu již seřazeného pole
              isLast={index === sortedItems.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline

