import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getFloorById, getAllFloors } from '../services/floorService'
import { getApartmentsByFloor } from '../services/apartmentService'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import FloorPlan from '../components/floor/FloorPlan'
import ApartmentCard from '../components/floor/ApartmentCard'

const FloorDetailPage = () => {
  const { floorId } = useParams()
  const [floor, setFloor] = useState(null)
  const [apartments, setApartments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const [floorData, apartmentsData] = await Promise.all([
        getFloorById(floorId),
        getApartmentsByFloor(floorId),
      ])
      setFloor(floorData)
      setApartments(apartmentsData)
      setLoading(false)
    }
    loadData()
  }, [floorId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-body-large">Načítání...</p>
      </div>
    )
  }

  if (!floor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-body-large">Patro nenalezeno</p>
      </div>
    )
  }

  const breadcrumbs = [
    { label: 'Domů', path: '/' },
    { label: floor.name },
  ]

  return (
    <div className="pt-24 pb-20 bg-neutral-offWhite min-h-screen">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-h1 mb-4">{floor.name}</h1>
          <p className="text-body-large text-neutral-mediumGray">
            {floor.availableApartments} volných bytů z {floor.totalApartments}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Floor Plan */}
          <div className="lg:col-span-2">
            <FloorPlan floor={floor} apartments={apartments} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-medium p-6 sticky top-24">
              <h2 className="text-h3 mb-6">Bytů na patře</h2>
              <div className="space-y-4">
                {apartments.map((apartment) => (
                  <ApartmentCard key={apartment.id} apartment={apartment} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloorDetailPage

