import Link from 'next/link'

// Data domů - stejná jako v HousePickerLayout.jsx
const houses = [
  {
    id: '1',
    name: 'Dům 01',
    usableArea: 119.4,
    plotArea: 411,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: '/photos/F1 resize.jpg',
    houseCardPdf: '/documents/dum-01-karta.pdf'
  },
  {
    id: '2',
    name: 'Dům 02',
    usableArea: 119.4,
    plotArea: 410,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: '/photos/web_f2.jpg',
    houseCardPdf: '/documents/dum-02-karta.pdf'
  },
  {
    id: '3',
    name: 'Dům 03',
    usableArea: 119.4,
    plotArea: 403,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  },
  {
    id: '4',
    name: 'Dům 04',
    usableArea: 119.4,
    plotArea: 402,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  },
  {
    id: '5',
    name: 'Dům 05',
    usableArea: 119.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  },
  {
    id: '6',
    name: 'Dům 06',
    usableArea: 119.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  },
  {
    id: '7',
    name: 'Dům 07',
    usableArea: 119.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  },
  {
    id: '8',
    name: 'Dům 08',
    usableArea: 119.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  },
  {
    id: '9',
    name: 'Dům 09',
    usableArea: 177.7,
    plotArea: 401,
    rooms: 7,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  },
  {
    id: '10',
    name: 'Dům 10',
    usableArea: 177.7,
    plotArea: 401,
    rooms: 7,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  },
  {
    id: '11',
    name: 'Dům 11',
    usableArea: 147.7,
    plotArea: 1304,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  },
  {
    id: '12',
    name: 'Dům 12',
    usableArea: 147.7,
    plotArea: 978,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 'Na dotaz',
    floorplanImage: null,
    houseCardPdf: null
  }
]

const AvailabilityTableOnly = () => {
  // Zobrazit všechny domy
  const availableHouses = houses

  const formatPrice = (price) => {
    if (!price) return ''
    if (typeof price === 'string' && price === 'Na dotaz') return 'Na dotaz'
    return new Intl.NumberFormat('cs-CZ', {
      maximumFractionDigits: 0
    }).format(price)
  }

  const formatSize = (size) => {
    // Zobrazit s jednou desetinnou číslicí
    return Number(size).toFixed(1)
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-overline mb-2 text-primary-teal">Další nabídky</p>
          <h2 className="text-h1 mb-6">Výběr dostupnosti</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-lightGray">
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  Dům
                </th>
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  Plocha pozemku
                </th>
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  Užitná plocha
                </th>
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  Prodejní cena
                </th>
                <th className="text-left py-4 px-6 text-body-small uppercase tracking-wider" style={{ color: '#000000', fontWeight: 'bold' }}>
                  Karta k domu
                </th>
              </tr>
            </thead>
            <tbody>
              {availableHouses.map((house, index) => (
                <tr 
                  key={house.id} 
                  className="border-b border-neutral-lightGray hover:bg-neutral-offWhite transition-colors"
                >
                  <td className="py-4 px-6 text-body-regular text-neutral-darkNavy font-semibold">
                    {house.name}
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    {formatSize(house.plotArea)} m²
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    {formatSize(house.usableArea)} m²
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    {formatPrice(house.price) ? (house.price === 'Na dotaz' ? 'Na dotaz' : `${formatPrice(house.price)} Kč`) : ''}
                  </td>
                  <td className="py-4 px-6">
                    {house.floorplanImage || house.houseCardPdf ? (
                      <Link
                        href={house.houseCardPdf || house.floorplanImage}
                        target={house.houseCardPdf ? '_blank' : undefined}
                        rel={house.houseCardPdf ? 'noopener noreferrer' : undefined}
                        className={`inline-block px-6 py-2 rounded text-body-small font-semibold transition-colors ${
                          index === 1 
                            ? 'bg-primary-teal text-white hover:bg-primary-tealDark' 
                            : 'bg-neutral-lightGray text-neutral-darkNavy hover:bg-neutral-mediumGray hover:text-white'
                        }`}
                      >
                        Zobrazit
                      </Link>
                    ) : (
                      <span className="text-neutral-mediumGray text-body-small">-</span>
                    )}
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
