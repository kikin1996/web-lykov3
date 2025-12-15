import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../shared/Button'

const ApartmentCard = ({ apartment }) => {
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-semantic-success'
      case 'reserved':
        return 'text-semantic-warning'
      case 'sold':
        return 'text-neutral-mediumGray'
      default:
        return 'text-neutral-mediumGray'
    }
  }

  return (
    <div className="border border-neutral-lightGray rounded-lg p-4 hover:shadow-medium transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-h4 mb-1">{apartment.apartmentNumber}</h3>
          <p className="text-body-small text-neutral-mediumGray">
            {apartment.type} • {apartment.size} m²
          </p>
        </div>
        <span className={`text-body-small font-semibold ${getStatusColor(apartment.status)}`}>
          {getStatusLabel(apartment.status)}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-body-regular font-semibold text-neutral-darkNavy">
          {apartment.status === 'sold' 
            ? 'Prodáno' 
            : `${apartment.price.toLocaleString('cs-CZ')} Kč`}
        </p>
        {apartment.status !== 'sold' && (
          <p className="text-body-small text-neutral-mediumGray">
            {apartment.pricePerSqm.toLocaleString('cs-CZ')} Kč/m²
          </p>
        )}
      </div>

      {apartment.status !== 'sold' && (
        <Link to={`/byt/${apartment.floorId}/${apartment.id}`}>
          <Button variant="secondary" className="w-full text-sm py-2">
            Zobrazit detail
          </Button>
        </Link>
      )}
    </div>
  )
}

ApartmentCard.propTypes = {
  apartment: PropTypes.object.isRequired,
}

export default ApartmentCard






