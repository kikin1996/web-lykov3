import PropTypes from 'prop-types'

const ApartmentSpecs = ({ apartment }) => {
  const specs = [
    { label: 'Číslo bytu', value: apartment.apartmentNumber },
    { label: 'Patro', value: apartment.floorId },
    { label: 'Velikost', value: `${apartment.size} m²` },
    { label: 'Počet pokojů', value: apartment.type },
    { label: 'Ložnice', value: `${apartment.bedrooms} ks` },
    { label: 'Koupelny', value: `${apartment.bathrooms} ks` },
    { label: 'Orientace', value: apartment.orientation },
    { label: 'Balkon/Terasa', value: apartment.balcony ? `Ano (${apartment.balconySize} m²)` : 'Ne' },
    { label: 'Parkování', value: apartment.parking ? 'Ano' : 'Ne' },
  ]

  return (
    <div>
      <h2 className="text-h3 mb-6">Specifikace</h2>
      <dl className="space-y-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex justify-between items-start border-b border-neutral-lightGray pb-3">
            <dt className="text-body-small text-neutral-mediumGray">{spec.label}</dt>
            <dd className="text-body-regular font-semibold text-neutral-darkNavy text-right">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      {apartment.features && apartment.features.length > 0 && (
        <div className="mt-6 pt-6 border-t border-neutral-lightGray">
          <h3 className="text-h4 mb-4">Vybavení</h3>
          <ul className="space-y-2">
            {apartment.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-teal mr-2">✓</span>
                <span className="text-body-small">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

ApartmentSpecs.propTypes = {
  apartment: PropTypes.object.isRequired,
}

export default ApartmentSpecs






