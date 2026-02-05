import { useState } from 'react'
import EmbeddedSitePreview from './EmbeddedSitePreview'
import AvailabilityTableOnly from './AvailabilityTableOnly'
import Lightbox from '../gallery/Lightbox'

// Mock data - 12 domů s fotkami a půdorysy
const houses = [
  {
    id: '1',
    name: 'Dům 1 – Šalvěj',
    usableArea: 149.4,
    plotArea: 411,
    rooms: 5,
    bathrooms: 2,
    heroImage: '/photos/web_f2.jpg',
    floorplanImage: '/photos/F1 resize.jpg',
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 11490000,
    houseCardPdf: '/karty domu/Dum 1.pdf' // URL k PDF dokumentu
  },
  {
    id: '2',
    name: 'Dům 2 – Chrpa',
    usableArea: 149.4,
    plotArea: 410,
    rooms: 5,
    bathrooms: 2,
    heroImage: '/photos/F1 resize.jpg',
    floorplanImage: '/photos/web_f2.jpg',
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 11590000,
    houseCardPdf: '/karty domu/Dum 2.pdf'
  },
  {
    id: '3',
    name: 'Dům 3 – Pampeliška',
    usableArea: 149.4,
    plotArea: 403,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 10890000,
    houseCardPdf: '/karty domu/Dum 3.pdf'
  },
  {
    id: '4',
    name: 'Dům 4 – Heřmánek',
    usableArea: 149.4,
    plotArea: 402,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 10890000,
    houseCardPdf: '/karty domu/Dum 4.pdf'
  },
  {
    id: '5',
    name: 'Dům 5 – Mateřídouška',
    usableArea: 149.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 11190000,
    houseCardPdf: '/karty domu/Dum 5.pdf'
  },
  {
    id: '6',
    name: 'Dům 6 – Zvonek',
    usableArea: 149.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 11490000,
    houseCardPdf: '/karty domu/Dum 6.pdf'
  },
  {
    id: '7',
    name: 'Dům 7 – Prvosenka',
    usableArea: 149.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 11490000,
    houseCardPdf: '/karty domu/Dum 7.pdf'
  },
  {
    id: '8',
    name: 'Dům 8 – Violka',
    usableArea: 149.4,
    plotArea: 401,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 11590000,
    houseCardPdf: '/karty domu/Dum 8.pdf'
  },
  {
    id: '9',
    name: 'Dům 9 – Pomněnka',
    usableArea: 207.7,
    plotArea: 401,
    rooms: 7,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 14990000,
    houseCardPdf: '/karty domu/dum 9.pdf'
  },
  {
    id: '10',
    name: 'Dům 10 – Jetel',
    usableArea: 207.7,
    plotArea: 401,
    rooms: 7,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 15290000,
    houseCardPdf: '/karty domu/dum 10.pdf'
  },
  {
    id: '11',
    name: 'Dům 11 – Sedmikráska',
    usableArea: 197.7,
    plotArea: 1304,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 15590000,
    houseCardPdf: '/karty domu/Dum 11.pdf'
  },
  {
    id: '12',
    name: 'Dům 12 – Kopretina',
    usableArea: 197.7,
    plotArea: 978,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description: 'Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.',
    status: 'Volný',
    price: 14900000,
    houseCardPdf: '/karty domu/Dum 12.pdf'
  }
]

// Přibližné pozice hotspotů nad mapou (v procentech)
const hotspotPositions = {
  '1': { top: '32%', left: '10%' },
  '2': { top: '33%', left: '22%' },
  '3': { top: '33%', left: '34%' },
  '4': { top: '33%', left: '46%' },
  '5': { top: '33%', left: '58%' },
  '6': { top: '33%', left: '70%' },
  '7': { top: '33%', left: '82%' },
  '8': { top: '45%', left: '20%' },
  '9': { top: '45%', left: '40%' },
  '10': { top: '45%', left: '60%' },
  '11': { top: '62%', left: '30%' },
  '12': { top: '62%', left: '70%' }
}

// Funkce pro získání půdorysů podle ID domu
const getFloorplansForHouse = (houseId) => {
  const id = parseInt(houseId)
  
  // Domy 1,3,5,7: A1_P, A2_P
  if ([1, 3, 5, 7].includes(id)) {
    return ['/images/pudorysy/A1_P.jpg', '/images/pudorysy/A2_P.jpg']
  }
  
  // Domy 2,4,6,8: A1_L, A2_L
  if ([2, 4, 6, 8].includes(id)) {
    return ['/images/pudorysy/A1_L.jpg', '/images/pudorysy/A2_L.jpg']
  }
  
  // Dům 9: B0_P, B1_P, B2_P
  if (id === 9) {
    return ['/images/pudorysy/B0_P.jpg', '/images/pudorysy/B1_P.jpg', '/images/pudorysy/B2_P.jpg']
  }
  
  // Dům 10: B0_L, B1_L, B2_L
  if (id === 10) {
    return ['/images/pudorysy/B0_L.jpg', '/images/pudorysy/B1_L.jpg', '/images/pudorysy/B2_L.jpg']
  }
  
  // Dům 11: C1_L
  if (id === 11) {
    return ['/images/pudorysy/C1_L.jpg']
  }
  
  // Dům 12: C1_P
  if (id === 12) {
    return ['/images/pudorysy/C1_P.jpg']
  }
  
  return []
}

// Funkce pro získání pohledu na dům podle ID domu
const getHouseViewImage = (houseId) => {
  const id = parseInt(houseId)
  
  // Domy 1,3,5,7,9: PA_P
  if ([1, 3, 5, 7, 9].includes(id)) {
    return '/images/pohled na dum/PA_P.jpg'
  }
  
  // Domy 2,4,6,8,10: PA_L
  if ([2, 4, 6, 8, 10].includes(id)) {
    return '/images/pohled na dum/PA_L.jpg'
  }
  
  // Dům 11: PC_L
  if (id === 11) {
    return '/images/pohled na dum/PC_L.jpg'
  }
  
  // Dům 12: PC_P
  if (id === 12) {
    return '/images/pohled na dum/PC_P.jpg'
  }
  
  return null
}

// Vizualizace interiéru: složky podle typu domu (domy-1-3-5-7, domy-2-4-6-8, dum-9, dum-10, dum-11, dum-12)
const INTERIOR_FILES = {
  'domy-1-3-5-7': [
    'a (1)_domy1357.jpg', 'a (2)_domy1357.jpg', 'a (3)_domy1357.jpg', 'a (4)_domy1357.jpg', 'a (5)_domy1357.jpg', 'a (6)_domy1357.jpg', 'a (7)_domy1357.jpg',
    'b (1)_domy1357.jpg', 'b (2)_domy1357.jpg', 'b (3)_domy1357.jpg', 'b (4)_domy1357.jpg', 'b (5)_domy1357.jpg',
    'c (1)_domy1357.jpg', 'c (2)_domy1357.jpg', 'c (3)_domy1357.jpg', 'c (4)_domy1357.jpg', 'c (5)_domy1357.jpg'
  ],
  'domy-2-4-6-8': [
    'a (1)_domy2468.jpg', 'a (2)_domy2468.jpg', 'a (3)_domy2468.jpg', 'a (4)_domy2468.jpg', 'a (5)_domy2468.jpg', 'a (6)_domy2468.jpg', 'a (7)_domy2468.jpg',
    'b (1)_domy2468.jpg', 'b (2)_domy2468.jpg', 'b (3)_domy2468.jpg', 'b (4)_domy2468.jpg', 'b (5)_domy2468.jpg',
    'c (1)_domy2468.jpg', 'c (2)_domy2468.jpg', 'c (3)_domy2468.jpg', 'c (4)_domy2468.jpg', 'c (5)_domy2468.jpg'
  ],
  'dum-9': [
    'a (1)_dum9.jpg', 'a (2)_dum9.jpg', 'a (3)_dum9.jpg', 'a (4)_dum9.jpg', 'a (5)_dum9.jpg', 'a (6)_dum9.jpg', 'a (7)_dum9.jpg',
    'b (1)_dum9.jpg', 'b (2)_dum9.jpg', 'b (3)_dum9.jpg', 'b (4)_dum9.jpg', 'b (5)_dum9.jpg',
    'c (1)_dum9.jpg', 'c (2)_dum9.jpg', 'c (3)_dum9.jpg', 'c (4)_dum9.jpg', 'c (5)_dum9.jpg',
    'd (1)_dum9.jpg', 'd (2)_dum9.jpg', 'd (3)_dum9.jpg', 'd (4)_dum9.jpg', 'd (5)_dum9.jpg', 'd (6)_dum9.jpg',
    'e (1)_dum9.jpg', 'e (2)_dum9.jpg', 'e (3)_dum9.jpg', 'e (4)_dum9.jpg', 'e (5)_dum9.jpg'
  ],
  'dum-10': [
    'a (1)_dum10.jpg', 'a (2)_dum10.jpg', 'a (3)_dum10.jpg', 'a (4)_dum10.jpg', 'a (5)_dum10.jpg', 'a (6)_dum10.jpg', 'a (7)_dum10.jpg',
    'b (1)_dum10.jpg', 'b (2)_dum10.jpg', 'b (3)_dum10.jpg', 'b (4)_dum10.jpg', 'b (5)_dum10.jpg',
    'c (1)_dum10.jpg', 'c (2)_dum10.jpg', 'c (3)_dum10.jpg', 'c (4)_dum10.jpg', 'c (5)_dum10.jpg',
    'd (1)_dum10.jpg', 'd (2)_dum10.jpg', 'd (3)_dum10.jpg', 'd (4)_dum10.jpg', 'd (5)_dum10.jpg', 'd (6)_dum10.jpg',
    'e (1)_dum10.jpg', 'e (2)_dum10.jpg', 'e (3)_dum10.jpg', 'e (4)_dum10.jpg', 'e (5)_dum10.jpg'
  ],
  'dum-11': [
    'f (1)_dum11.jpg', 'f (2)_dum11.jpg', 'f (3)_dum11.jpg', 'f (4)_dum11.jpg',
    'g_ (1)_dum11.jpg', 'g_ (2)2_dum11.jpg', 'g_ (3)3_dum11.jpg', 'g_ (4)_dum11.jpg', 'g_ (5)_dum11.jpg', 'g_ (6)_dum11.jpg', 'g_ (7)2_dum11.jpg',
    'h (1)_dum11.jpg', 'h (2)_dum11.jpg', 'h (3)_dum11.jpg', 'h (4)_dum11.jpg', 'h (5)_dum11.jpg'
  ],
  'dum-12': [
    'f (1)_dum12.jpg', 'f (2)_dum12.jpg', 'f (3)_dum12.jpg', 'f (4)_dum12.jpg',
    'g_ (1)_dum12.jpg', 'g_ (2)2_dum12.jpg', 'g_ (3)3_dum12.jpg', 'g_ (4)_dum12.jpg', 'g_ (5)_dum12.jpg', 'g_ (6)_dum12.jpg', 'g_ (7)2_dum12.jpg',
    'h (1)_dum12.jpg', 'h (2)_dum12.jpg', 'h (3)_dum12.jpg', 'h (4)_dum12.jpg', 'h (5)_dum12.jpg'
  ]
}

const getInteriorFolderForHouse = (houseId) => {
  const id = parseInt(houseId)
  if ([1, 3, 5, 7].includes(id)) return 'domy-1-3-5-7'
  if ([2, 4, 6, 8].includes(id)) return 'domy-2-4-6-8'
  if (id === 9) return 'dum-9'
  if (id === 10) return 'dum-10'
  if (id === 11) return 'dum-11'
  if (id === 12) return 'dum-12'
  return null
}

const getInteriorImagesForHouse = (houseId, houseName) => {
  const folder = getInteriorFolderForHouse(houseId)
  if (!folder || !INTERIOR_FILES[folder]) return []
  const base = `/images/gallery/${folder}/`
  const files = INTERIOR_FILES[folder]
  const getCaptionForFile = (fileName, index) => {
    if (fileName.startsWith('a ')) return 'Obývací pokoj s kuchyní'
    if (fileName.startsWith('b ')) return 'Dětský pokoj'
    if (fileName.startsWith('c ')) return 'Ložnice'
    if (fileName.startsWith('d ')) return 'Obývací pokoj s kuchyní (Podzemní byt)'
    if (fileName.startsWith('e ')) return 'Ložnice (Podzemní byt)'
    if (fileName.startsWith('f ')) return 'Ložnice'
    if (fileName.startsWith('g_')) return 'Obývací pokoj s kuchyní'
    if (fileName.startsWith('h ')) return 'Dětský pokoj'
    return `${houseName} – vizualizace interiéru ${index + 1}`
  }

  const baseImages = files.map((file, i) => {
    if (typeof file === 'string') {
      return {
        url: base + encodeURIComponent(file),
        caption: getCaptionForFile(file, i)
      }
    }
    return {
      url: file.url,
      caption: file.caption || `${houseName} – vizualizace interiéru ${i + 1}`
    }
  })

  const id = parseInt(houseId)
  if ([1, 3, 5, 7, 9].includes(id)) {
    const leftBathrooms = [
      ...baseImages,
      {
        url: '/images/koupelny/dvojdum/1-03_levy_dum/g1.jpg',
        caption: 'Spodní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/1-03_levy_dum/g2_2.jpg',
        caption: 'Spodní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/1-03_levy_dum/g3.jpg',
        caption: 'Spodní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_levy_dum/' + encodeURIComponent('h (1).jpg'),
        caption: 'Vrchní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_levy_dum/' + encodeURIComponent('h (1)-2.jpg'),
        caption: 'Vrchní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_levy_dum/' + encodeURIComponent('h (2).jpg'),
        caption: 'Vrchní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_levy_dum/' + encodeURIComponent('h (3).jpg'),
        caption: 'Vrchní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_levy_dum/' + encodeURIComponent('h (4).jpg'),
        caption: 'Vrchní koupelna'
      }
    ]
    if (id === 9) {
      return [
        ...leftBathrooms,
        {
          url: '/images/koupelny/prizemni-byt/levy_dum/' + encodeURIComponent('j (1).jpg'),
          caption: 'Koupelna - přízemní byt'
        },
        {
          url: '/images/koupelny/prizemni-byt/levy_dum/' + encodeURIComponent('j (2).jpg'),
          caption: 'Koupelna - přízemní byt'
        },
        {
          url: '/images/koupelny/prizemni-byt/levy_dum/' + encodeURIComponent('j (3).jpg'),
          caption: 'Koupelna - přízemní byt'
        },
        {
          url: '/images/koupelny/prizemni-byt/levy_dum/' + encodeURIComponent('j (4).jpg'),
          caption: 'Koupelna - přízemní byt'
        }
      ]
    }
    return leftBathrooms
  }

  if ([2, 4, 6, 8, 10].includes(id)) {
    const rightBathrooms = [
      ...baseImages,
      {
        url: '/images/koupelny/dvojdum/1-03_pravy_dum/g1.jpg',
        caption: 'Spodní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/1-03_pravy_dum/g2_2.jpg',
        caption: 'Spodní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/1-03_pravy_dum/g3.jpg',
        caption: 'Spodní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_pravy_dum/' + encodeURIComponent('h (1).jpg'),
        caption: 'Vrchní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_pravy_dum/' + encodeURIComponent('h (1)-2.jpg'),
        caption: 'Vrchní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_pravy_dum/' + encodeURIComponent('h (2).jpg'),
        caption: 'Vrchní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_pravy_dum/' + encodeURIComponent('h (3).jpg'),
        caption: 'Vrchní koupelna'
      },
      {
        url: '/images/koupelny/dvojdum/2-06_pravy_dum/' + encodeURIComponent('h (4).jpg'),
        caption: 'Vrchní koupelna'
      }
    ]
    if (id === 10) {
      return [
        ...rightBathrooms,
        {
          url: '/images/koupelny/prizemni-byt/pravy_dum/' + encodeURIComponent('j (1).jpg'),
          caption: 'Koupelna - přízemní byt'
        },
        {
          url: '/images/koupelny/prizemni-byt/pravy_dum/' + encodeURIComponent('j (2).jpg'),
          caption: 'Koupelna - přízemní byt'
        },
        {
          url: '/images/koupelny/prizemni-byt/pravy_dum/' + encodeURIComponent('j (3).jpg'),
          caption: 'Koupelna - přízemní byt'
        },
        {
          url: '/images/koupelny/prizemni-byt/pravy_dum/' + encodeURIComponent('j (4).jpg'),
          caption: 'Koupelna - přízemní byt'
        }
      ]
    }
    return rightBathrooms
  }

  if (id === 11) {
    return [
      ...baseImages,
      {
        url: '/images/koupelny/bungalov/1-07_levy_dum/e1.jpg',
        caption: 'Menší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-07_levy_dum/e2.jpg',
        caption: 'Menší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-07_levy_dum/e3.jpg',
        caption: 'Menší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-11_levy_dum/' + encodeURIComponent('f (1).jpg'),
        caption: 'Větší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-11_levy_dum/' + encodeURIComponent('f (1)-2.jpg'),
        caption: 'Větší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-11_levy_dum/' + encodeURIComponent('f (2).jpg'),
        caption: 'Větší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-11_levy_dum/' + encodeURIComponent('f (2)-2.jpg'),
        caption: 'Větší koupelna'
      }
    ]
  }

  if (id === 12) {
    return [
      ...baseImages,
      {
        url: '/images/koupelny/bungalov/1-07_pravy_dum/e1.jpg',
        caption: 'Menší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-07_pravy_dum/e2.jpg',
        caption: 'Menší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-07_pravy_dum/e3.jpg',
        caption: 'Menší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-11_pravy_dum/' + encodeURIComponent('f (1).jpg'),
        caption: 'Větší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-11_pravy_dum/' + encodeURIComponent('f (1)-2.jpg'),
        caption: 'Větší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-11_pravy_dum/' + encodeURIComponent('f (2).jpg'),
        caption: 'Větší koupelna'
      },
      {
        url: '/images/koupelny/bungalov/1-11_pravy_dum/' + encodeURIComponent('f (2)-2.jpg'),
        caption: 'Větší koupelna'
      }
    ]
  }

  return baseImages
}

// EmbeddedPreviewComponent je volitelný – umožňuje na testovací stránce
// použít jinou mapu/polygony bez zásahu do hlavní stránky.
const HousePickerLayout = ({ EmbeddedPreviewComponent = EmbeddedSitePreview }) => {
  // Defaultně vybrán Dům 01
  const [selectedHouseId, setSelectedHouseId] = useState('1')
  const selectedHouse = houses.find((house) => house.id === selectedHouseId)
  const floorplans = getFloorplansForHouse(selectedHouseId)
  const houseViewImage = getHouseViewImage(selectedHouseId)
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  // Rozkliknutí vizualizací interiéru
  const [interiorExpanded, setInteriorExpanded] = useState(false)
  const [interiorLightboxOpen, setInteriorLightboxOpen] = useState(false)
  const [interiorLightboxIndex, setInteriorLightboxIndex] = useState(0)

  const interiorImages = getInteriorImagesForHouse(selectedHouseId, selectedHouse?.name || '')
  
  // Příprava obrázků pro lightbox (pohled + půdorysy)
  const getLightboxImages = () => {
    const images = []
    
    // Přidat pohled na dům jako první
    if (houseViewImage) {
      images.push({
        url: houseViewImage,
        caption: `${selectedHouse?.name} - Pohled na dům`
      })
    }
    
    // Přidat půdorysy
    floorplans.forEach((floorplan, index) => {
      images.push({
        url: floorplan,
        caption: `${selectedHouse?.name} - Půdorys ${index + 1}`
      })
    })
    
    return images
  }
  
  const lightboxImages = getLightboxImages()
  
  // Funkce pro otevření lightboxu při kliknutí na obrázek
  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const openInteriorLightbox = (index) => {
    setInteriorLightboxIndex(index)
    setInteriorLightboxOpen(true)
  }

  // TODO: napojit na message from iframe / polygon click
  // Příklad: window.addEventListener('message', (event) => {
  //   if (event.data.type === 'house-selected') {
  //     setSelectedHouseId(event.data.houseId)
  //   }
  // })

  return (
    <div className="bg-[#F5F7FB] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-12">
        {/* Jeden hlavní white card wrapper */}
        <div className="bg-white rounded-[28px] border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.12)] overflow-hidden p-3 md:p-10 lg:p-12">
          {/* Horní část: nadpis + mapa */}
          <div className="space-y-2 md:space-y-6">
            {/* Nadpis */}
            <div>
              <h1 className="text-h1 mb-2">
                Vyberte dům
              </h1>
              <p className="text-slate-600 mt-2">
                Klikněte na dům v mapě nebo zvolte ze seznamu.
              </p>
            </div>

            {/* Mapa s polygony (klik na polygon vybírá dům) */}
            <div className="relative">
              <EmbeddedPreviewComponent
                selectedHouseId={selectedHouseId}
                onSelectHouse={setSelectedHouseId}
              />
            </div>
          </div>

          {/* Spodní část: 3 sloupce s detailem vybraného domu */}
          <div className="mt-0 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-6 items-start">
            {/* Sloupec 1: Foto domu zblízka */}
            <div className="order-2 lg:order-1">
              <h3 className="text-sm font-semibold text-slate-900 mb-1 md:mb-3">
                Pohled na dům
              </h3>
              <div className="border border-slate-200/70 rounded-2xl overflow-hidden bg-slate-50">
                <div 
                  className={`relative w-full aspect-[4/3] overflow-hidden ${houseViewImage ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
                  onClick={() => houseViewImage && openLightbox(0)}
                >
                  {houseViewImage ? (
                    <img
                      src={houseViewImage}
                      alt={`Pohled na dům ${selectedHouse?.name} v projektu Luční Háj`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 flex items-center justify-center">
                      <p className="text-slate-400 text-sm">{selectedHouse?.name}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sloupec 2: Půdorysy */}
            <div className="order-3 lg:order-2">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Půdorysy
              </h3>
              <div className="border border-slate-200/70 rounded-2xl overflow-hidden bg-slate-50 p-4">
                {floorplans.length > 0 ? (
                  <div className="space-y-4">
                    {floorplans.map((floorplan, index) => (
                      <div 
                        key={index} 
                        className="relative w-full aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(houseViewImage ? index + 1 : index)}
                      >
                        <img
                          src={floorplan}
                          alt={`Půdorys ${index + 1} domu ${selectedHouse?.name} v projektu Luční Háj`}
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 flex items-center justify-center rounded-lg">
                    <p className="text-slate-400 text-sm">Půdorys bude doplněn</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sloupec 3: Informace o domu */}
            <div className="order-1 lg:order-3">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Informace o domě
              </h3>
              <div className="border border-slate-200/70 rounded-2xl bg-slate-50 p-6">
                {/* Status badge */}
                {selectedHouse?.status && (
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedHouse.status === 'Volný'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : selectedHouse.status === 'Rezervováno'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {selectedHouse.status}
                    </span>
                  </div>
                )}

                {/* Název domu */}
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                  {selectedHouse?.name}
                </h2>

                {/* Popis */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {selectedHouse?.description}
                </p>

                {/* Tlačítko Karta domu */}
                <div className="mb-6">
                  <a
                    href={selectedHouse?.houseCardPdf || `/documents/dum-${selectedHouse?.id.padStart(2, '0')}-karta.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-[#00D9B5] hover:bg-[#00B89A] text-white font-semibold text-sm transition-all duration-200 shadow-[0_4px_12px_rgba(0,217,181,0.3)] hover:shadow-[0_6px_16px_rgba(0,217,181,0.4)]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Karta domu (PDF)
                  </a>
                </div>

                {/* Metriky */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-slate-200/70">
                    <p className="text-xs text-slate-500 mb-1">Užitná plocha</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.usableArea ? Number(selectedHouse.usableArea).toFixed(1) : ''} m²
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200/70">
                    <p className="text-xs text-slate-500 mb-1">Plocha pozemku</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.plotArea} m²
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200/70">
                    <p className="text-xs text-slate-500 mb-1">Pokoje</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.rooms}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200/70">
                    <p className="text-xs text-slate-500 mb-1">Koupelny</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.bathrooms}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200/70 col-span-2">
                    <p className="text-xs text-slate-500 mb-1">Prodejní cena</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.price != null && selectedHouse?.price !== 'Na dotaz'
                        ? `${new Intl.NumberFormat('cs-CZ', { maximumFractionDigits: 0 }).format(selectedHouse.price)} Kč`
                        : 'Na dotaz'}
                    </p>
                    {selectedHouse?.id && ['3', '4', '5'].includes(selectedHouse.id) && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200 mt-2">
                        Zvýhodněná cena
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vizualizace interiéru – celý řádek miniatur, rozkliknutelné */}
          <div className="mt-8 md:mt-10">
            <h3 className="text-base font-semibold text-slate-900 mb-3">Vizualizace interiéru</h3>
            {/* Řádek větších miniatur (3× větší kostičky) */}
            <div className="flex flex-wrap gap-3">
              {interiorImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => openInteriorLightbox(index)}
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-slate-200/70 bg-white hover:border-[#00D9B5] hover:ring-2 hover:ring-[#00D9B5]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#00D9B5] focus:ring-offset-2 flex-shrink-0"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-2">
              Kliknutím na obrázek zobrazíte vizualizaci v plné velikosti.
            </p>
          </div>

          {/* Divider před tabulkou */}
          <div className="mt-12 border-t border-slate-100" />

          {/* Tabulka dostupnosti (bez mapy) */}
          <div className="mt-12">
            <AvailabilityTableOnly />
          </div>
        </div>
      </div>
      
      {/* Lightbox pro zobrazení půdorysů a pohledu na dům */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
      {/* Lightbox pro vizualizace interiéru */}
      {interiorLightboxOpen && interiorImages.length > 0 && (
        <Lightbox
          images={interiorImages}
          currentIndex={interiorLightboxIndex}
          onClose={() => setInteriorLightboxOpen(false)}
          onNavigate={(index) => setInteriorLightboxIndex(index)}
        />
      )}
    </div>
  )
}

export default HousePickerLayout

