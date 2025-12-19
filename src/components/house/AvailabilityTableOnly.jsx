import { Link } from 'react-router-dom'
import { apartments } from '../../data/mockData'

const AvailabilityTableOnly = () => {
  // Get available apartments (limit to 5 for display)
  const availableApartments = apartments
    .filter(apt => apt.status === 'available')
    .slice(0, 5)

  const formatPrice = (price) => {
    if (!price) return ''
    // Format as simple number with spaces for thousands
    return new Intl.NumberFormat('cs-CZ', {
      maximumFractionDigits: 0
    }).format(price)
  }

  const formatSize = (size) => {
    return Math.round(size)
  }

  const getBedBath = (apartment) => {
    return `${apartment.bedrooms}/${apartment.bathrooms}`
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-overline mb-2 text-primary-teal">OTHER OFFERS</p>
          <h2 className="text-h1 mb-6">SELECT AVAILABILITY</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-lightGray">
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  RESIDENCE
                </th>
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  BED/BATH
                </th>
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  M²
                </th>
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  SALE PRICE
                </th>
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  RENT PRICE
                </th>
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  FLOOR PLAN
                </th>
              </tr>
            </thead>
            <tbody>
              {availableApartments.map((apartment, index) => (
                <tr 
                  key={apartment.id} 
                  className="border-b border-neutral-lightGray hover:bg-neutral-offWhite transition-colors"
                >
                  <td className="py-4 px-6 text-body-regular text-neutral-darkNavy font-semibold">
                    RESIDENCE {apartment.apartmentNumber}
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    {getBedBath(apartment)}
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    {formatSize(apartment.size)}
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    {formatPrice(apartment.price) ? `${formatPrice(apartment.price)} Kč` : ''}
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      to={`/byt/${apartment.floorId}/${apartment.id}`}
                      className={`inline-block px-6 py-2 rounded text-body-small font-semibold transition-colors ${
                        index === 1 
                          ? 'bg-primary-teal text-white hover:bg-primary-tealDark' 
                          : 'bg-neutral-lightGray text-neutral-darkNavy hover:bg-neutral-mediumGray hover:text-white'
                      }`}
                    >
                      VIEW NOW
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AvailabilityTableOnly

