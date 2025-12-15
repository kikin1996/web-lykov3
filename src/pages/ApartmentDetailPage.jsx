import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getApartmentById } from '../services/apartmentService'
import { getFloorById } from '../services/floorService'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import ApartmentGallery from '../components/apartment/ApartmentGallery'
import ApartmentSpecs from '../components/apartment/ApartmentSpecs'
import Button from '../components/shared/Button'
import { useApp } from '../context/AppContext'

const ApartmentDetailPage = () => {
  const { floorId, apartmentId } = useParams()
  const [apartment, setApartment] = useState(null)
  const [floor, setFloor] = useState(null)
  const [loading, setLoading] = useState(true)
  const { showModal } = useApp()

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const [apartmentData, floorData] = await Promise.all([
        getApartmentById(apartmentId),
        getFloorById(floorId),
      ])
      setApartment(apartmentData)
      setFloor(floorData)
      setLoading(false)
    }
    loadData()
  }, [floorId, apartmentId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-body-large">Načítání...</p>
      </div>
    )
  }

  if (!apartment || !floor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-body-large">Byt nenalezen</p>
      </div>
    )
  }

  const breadcrumbs = [
    { label: 'Domů', path: '/' },
    { label: floor.name, path: `/patro/${floorId}` },
    { label: `Byt ${apartment.apartmentNumber}` },
  ]

  const getStatusLabel = (status) => {
    switch (status) {
      case 'available':
        return 'Volný'
      case 'reserved':
        return 'Rezervovaný'
      case 'sold':
        return 'Prodáno'
      default:
        return status
    }
  }

  return (
    <div className="pt-24 pb-20 bg-neutral-offWhite min-h-screen">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="container mx-auto px-5 lg:px-20">
        <div className="mb-8">
          <h1 className="text-h1 mb-2">Byt {apartment.apartmentNumber}</h1>
          <p className="text-body-large text-neutral-mediumGray">
            {floor.name} • {apartment.type} • {apartment.size} m²
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ApartmentGallery apartment={apartment} />
            
            <div className="bg-white rounded-xl shadow-medium p-6">
              <h2 className="text-h3 mb-4">Půdorys bytu</h2>
              <div className="bg-neutral-offWhite rounded-lg aspect-video flex items-center justify-center">
                <p className="text-body-regular text-neutral-mediumGray">Půdorys bytu {apartment.apartmentNumber}</p>
              </div>
              <div className="mt-4">
                <Button variant="secondary" className="text-sm py-2">
                  Stáhnout půdorys (PDF)
                </Button>
              </div>
            </div>

            {apartment.description && (
              <div className="bg-white rounded-xl shadow-medium p-6">
                <h2 className="text-h3 mb-4">Popis</h2>
                <p className="text-body-regular">{apartment.description}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-medium p-6 sticky top-24">
              <ApartmentSpecs apartment={apartment} />
              
              <div className="mt-6 pt-6 border-t border-neutral-lightGray">
                <div className="mb-4">
                  <p className="text-body-small text-neutral-mediumGray mb-1">Status</p>
                  <p className="text-h4 text-primary-teal">{getStatusLabel(apartment.status)}</p>
                </div>
                {apartment.status !== 'sold' && (
                  <div className="mb-6">
                    <p className="text-body-small text-neutral-mediumGray mb-1">Cena</p>
                    <p className="text-3xl font-bold text-neutral-darkNavy">
                      {apartment.price.toLocaleString('cs-CZ')} Kč
                    </p>
                    <p className="text-body-small text-neutral-mediumGray mt-1">
                      {apartment.pricePerSqm.toLocaleString('cs-CZ')} Kč/m²
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {apartment.status !== 'sold' && (
                  <>
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={() => showModal('interest', { apartment })}
                    >
                      Mám zájem
                    </Button>
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => showModal('tour', { apartment })}
                    >
                      Naplánovat prohlídku
                    </Button>
                  </>
                )}
                <Button variant="ghost" className="w-full">
                  Kontaktovat makléře
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartmentDetailPage






