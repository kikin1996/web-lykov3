import { apartments } from '../../data/mockData'

const AvailabilityTable = () => {
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

  return null
}

export default AvailabilityTable

