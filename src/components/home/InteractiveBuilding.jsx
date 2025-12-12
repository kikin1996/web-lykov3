import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllFloors } from '../../services/floorService'
import { useEffect } from 'react'

const InteractiveBuilding = () => {
  const [floors, setFloors] = useState([])
  const [hoveredFloor, setHoveredFloor] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getAllFloors().then(setFloors)
  }, [])

  const handleFloorClick = (floorId) => {
    navigate(`/patro/${floorId}`)
  }

  return (
    <section id="building" className="py-20 bg-neutral-offWhite -mt-12 border-0 relative z-10" style={{ border: 'none', borderTop: 'none', borderBottom: 'none' }}>
      <div className="container mx-auto px-5 lg:px-20" style={{ border: 'none' }}>
        <div className="text-center mb-12">
          <p className="text-overline mb-4">Výběr patra</p>
          <h2 className="text-h1 mb-4">Vyberte si patro</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            Interaktivní vizualizace budovy s 4 patry. Najděte si ideální byt pro váš životní styl.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            {floors.map((floor) => (
              <div
                key={floor.id}
                className={`relative bg-white rounded-xl shadow-medium p-6 cursor-pointer transition-all duration-300 ${
                  hoveredFloor === floor.id
                    ? 'shadow-large -translate-y-1 border-2 border-primary-teal'
                    : 'border-2 border-transparent hover:shadow-large hover:-translate-y-1'
                }`}
                onMouseEnter={() => setHoveredFloor(floor.id)}
                onMouseLeave={() => setHoveredFloor(null)}
                onClick={() => handleFloorClick(floor.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-h3 mb-2">{floor.name}</h3>
                    <p className="text-body-regular text-neutral-mediumGray">
                      {floor.availableApartments} volných bytů z {floor.totalApartments}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary-teal mb-1">
                      {floor.level}
                    </div>
                    <div className="text-body-small text-neutral-mediumGray uppercase">
                      Patro
                    </div>
                  </div>
                </div>
                {hoveredFloor === floor.id && (
                  <div className="mt-4 pt-4 border-t border-neutral-lightGray">
                    <p className="text-body-small text-primary-teal font-semibold">
                      Klikněte pro zobrazení detailu →
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveBuilding

