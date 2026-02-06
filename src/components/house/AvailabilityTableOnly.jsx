import Link from 'next/link'

// Data domů - stejná jako v HousePickerLayout.jsx
const houses = [
  {
    id: '1',
    name: 'Dům 1 – Šalvěj',
    usableArea: 149.4,
    plotArea: 411,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 11490000,
    floorplanImage: '/photos/F1 resize.jpg',
    herbIcon: '/images/byliny/salvej.png',
    houseCardPdf: '/karty domu/Dum 1.pdf'
  },
  {
    id: '2',
    name: 'Dům 2 – Chrpa',
    usableArea: 149.4,
    plotArea: 410,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 11590000,
    floorplanImage: '/photos/web_f2.jpg',
    herbIcon: '/images/byliny/chrpa.png',
    houseCardPdf: '/karty domu/Dum 2.pdf'
  },
  {
    id: '3',
    name: 'Dům 3 – Pampeliška',
    usableArea: 149.4,
    plotArea: 403,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 10890000,
    floorplanImage: null,
    herbIcon: '/images/byliny/pampeliska.png',
    houseCardPdf: '/karty domu/Dum 3.pdf'
  },
  {
    id: '4',
    name: 'Dům 4 – Heřmánek',
    usableArea: 149.4,
    plotArea: 402,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 10890000,
    floorplanImage: null,
    herbIcon: '/images/byliny/hermanek.png',
    houseCardPdf: '/karty domu/Dum 4.pdf'
  },
  {
    id: '5',
    name: 'Dům 5 – Mateřídouška',
    usableArea: 149.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 11190000,
    floorplanImage: null,
    herbIcon: '/images/byliny/materidouška.png',
    houseCardPdf: '/karty domu/Dum 5.pdf'
  },
  {
    id: '6',
    name: 'Dům 6 – Zvonek',
    usableArea: 149.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 11490000,
    floorplanImage: null,
    herbIcon: '/images/byliny/zvonek.png',
    houseCardPdf: '/karty domu/Dum 6.pdf'
  },
  {
    id: '7',
    name: 'Dům 7 – Prvosenka',
    usableArea: 149.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 11490000,
    floorplanImage: null,
    herbIcon: '/images/byliny/prvosenka.png',
    houseCardPdf: '/karty domu/Dum 7.pdf'
  },
  {
    id: '8',
    name: 'Dům 8 – Violka',
    usableArea: 149.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 11590000,
    floorplanImage: null,
    herbIcon: '/images/byliny/violka.png',
    houseCardPdf: '/karty domu/Dum 8.pdf'
  },
  {
    id: '9',
    name: 'Dům 9 – Pomněnka',
    usableArea: 207.7,
    plotArea: 401,
    rooms: 7,
    bathrooms: 2,
    status: 'Volný',
    price: 14990000,
    floorplanImage: null,
    herbIcon: '/images/byliny/pomenka.png',
    houseCardPdf: '/karty domu/dum 9.pdf'
  },
  {
    id: '10',
    name: 'Dům 10 – Jetel',
    usableArea: 207.7,
    plotArea: 401,
    rooms: 7,
    bathrooms: 2,
    status: 'Volný',
    price: 15290000,
    floorplanImage: null,
    herbIcon: '/images/byliny/jetel.png',
    houseCardPdf: '/karty domu/dum 10.pdf'
  },
  {
    id: '11',
    name: 'Dům 11 – Sedmikráska',
    usableArea: 197.7,
    plotArea: 1304,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 15590000,
    floorplanImage: null,
    herbIcon: '/images/byliny/sedmikraska.png',
    houseCardPdf: '/karty domu/Dum 11.pdf'
  },
  {
    id: '12',
    name: 'Dům 12 – Kopretina',
    usableArea: 197.7,
    plotArea: 978,
    rooms: 5,
    bathrooms: 2,
    status: 'Volný',
    price: 14900000,
    floorplanImage: null,
    herbIcon: '/images/byliny/kopretina.png',
    houseCardPdf: '/karty domu/Dum 12.pdf'
  }
]

const AvailabilityTableOnly = () => {
  // Zobrazit všechny domy
  const availableHouses = houses

  const getStatusColor = (status) => {
    switch (status) {
      case 'Volný':
        return 'bg-emerald-500'
      case 'Rezervovaný':
        return 'bg-amber-400'
      case 'Prodaný':
        return 'bg-neutral-mediumGray'
      default:
        return 'bg-neutral-mediumGray'
    }
  }

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
                  Stav
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
                    <div className="flex items-center gap-2">
                      {house.herbIcon && (
                        <img
                          src={house.herbIcon}
                          alt=""
                          className="w-12 h-12"
                          aria-hidden="true"
                        />
                      )}
                      <span>{house.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    {formatSize(house.plotArea)} m²
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    {formatSize(house.usableArea)} m²
                  </td>
                  <td className="py-4 px-6 text-body-regular text-neutral-mediumGray">
                    <span className="block">{formatPrice(house.price) ? (house.price === 'Na dotaz' ? 'Na dotaz' : `${formatPrice(house.price)} Kč`) : ''}</span>
                    {['3', '4', '5'].includes(house.id) && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200 mt-1.5">
                        Zvýhodněná cena
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-2">
                      <span
                        className={`inline-block w-2.5 h-2.5 rounded-full ${getStatusColor(house.status)}`}
                      />
                      <span className="text-body-regular text-neutral-darkNavy">
                        {house.status}
                      </span>
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      href={house.houseCardPdf || `/documents/dum-${house.id.padStart(2, '0')}-karta.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 rounded text-body-small font-semibold transition-colors bg-primary-teal !text-white hover:bg-primary-tealDark"
                    >
                      Zobrazit
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
