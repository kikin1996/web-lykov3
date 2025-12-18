import TimelineItem from './TimelineItem'

const Timeline = ({ items }) => {
  // Seřadit od nejstaršího k nejnovějšímu (pro zobrazení odspodu nahoru)
  const sortedItems = [...items].sort((a, b) => {
    const dateA = new Date(a.sortDate || a.date)
    const dateB = new Date(b.sortDate || b.date)
    return dateA - dateB
  })

  return (
    <div className="relative mt-16">
      {/* Vertikální osa - Desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

      {/* Timeline items - zobrazit od nejnovějšího (nahoře) k nejstaršímu (dole) */}
      <div className="relative flex flex-col-reverse">
        {sortedItems.map((item, index) => (
          <TimelineItem
            key={item.id || index}
            item={item}
            index={sortedItems.length - 1 - index}
            isLast={index === sortedItems.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline

