// FLOORS DATA
export const floors = [
  {
    id: 1,
    name: "1. Patro",
    level: 1,
    totalApartments: 4,
    availableApartments: 2,
    floorPlanImage: "/images/floors/floor-1-plan.jpg"
  },
  {
    id: 2,
    name: "2. Patro",
    level: 2,
    totalApartments: 4,
    availableApartments: 3,
    floorPlanImage: "/images/floors/floor-2-plan.jpg"
  },
  {
    id: 3,
    name: "3. Patro",
    level: 3,
    totalApartments: 4,
    availableApartments: 1,
    floorPlanImage: "/images/floors/floor-3-plan.jpg"
  },
  {
    id: 4,
    name: "4. Patro",
    level: 4,
    totalApartments: 4,
    availableApartments: 4,
    floorPlanImage: "/images/floors/floor-4-plan.jpg"
  },
]

// APARTMENTS DATA
export const apartments = [
  {
    id: "1-01",
    floorId: 1,
    apartmentNumber: "1.01",
    type: "2+kk",
    size: 52.4,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    balcony: true,
    balconySize: 8.5,
    parking: false,
    orientation: "Jih",
    price: 1250000,
    pricePerSqm: 23855,
    status: "available",
    features: ["Prostorný obývací pokoj", "Moderní kuchyň", "Balkon"],
    floorPlan: "/images/apartments/1-01-floorplan.jpg",
    images: [
      "/images/apartments/1-01-living.jpg",
      "/images/apartments/1-01-kitchen.jpg"
    ],
    description: "Krásný světlý byt s orientací na jih, ideální pro mladé páry nebo jednotlivce. Moderní dispozice s prostorným obývacím pokojem a kuchyní."
  },
  {
    id: "1-02",
    floorId: 1,
    apartmentNumber: "1.02",
    type: "3+kk",
    size: 68.2,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    balcony: true,
    balconySize: 12.0,
    parking: true,
    orientation: "Východ",
    price: 1680000,
    pricePerSqm: 24633,
    status: "available",
    features: ["Velký obývací pokoj", "Samostatná kuchyň", "Balkon", "Parkování"],
    floorPlan: "/images/apartments/1-02-floorplan.jpg",
    images: [
      "/images/apartments/1-02-living.jpg",
      "/images/apartments/1-02-bedroom.jpg"
    ],
    description: "Prostorný byt 3+kk s balkonem a parkovacím místem. Ideální pro rodiny s dětmi."
  },
  {
    id: "1-03",
    floorId: 1,
    apartmentNumber: "1.03",
    type: "2+kk",
    size: 55.8,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    balcony: false,
    parking: false,
    orientation: "Sever",
    price: 1320000,
    pricePerSqm: 23656,
    status: "reserved",
    features: ["Kompaktní dispozice", "Moderní vybavení"],
    floorPlan: "/images/apartments/1-03-floorplan.jpg",
    images: [],
    description: "Kompaktní byt 2+kk s moderním vybavením."
  },
  {
    id: "1-04",
    floorId: 1,
    apartmentNumber: "1.04",
    type: "3+kk",
    size: 72.5,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 2,
    balcony: true,
    balconySize: 15.0,
    parking: true,
    orientation: "Západ",
    price: 1850000,
    pricePerSqm: 25517,
    status: "sold",
    features: ["Luxusní byt", "Dvě koupelny", "Velký balkon"],
    floorPlan: "/images/apartments/1-04-floorplan.jpg",
    images: [],
    description: "Luxusní byt 3+kk s dvěma koupelnami a velkým balkonem."
  },
  {
    id: "2-01",
    floorId: 2,
    apartmentNumber: "2.01",
    type: "2+kk",
    size: 54.2,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    balcony: true,
    balconySize: 9.0,
    parking: false,
    orientation: "Jih",
    price: 1290000,
    pricePerSqm: 23782,
    status: "available",
    features: ["Světlý byt", "Balkon", "Moderní dispozice"],
    floorPlan: "/images/apartments/2-01-floorplan.jpg",
    images: [],
    description: "Světlý byt 2+kk s balkonem a moderní dispozicí."
  },
  {
    id: "2-02",
    floorId: 2,
    apartmentNumber: "2.02",
    type: "3+kk",
    size: 70.8,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    balcony: true,
    balconySize: 13.5,
    parking: true,
    orientation: "Východ",
    price: 1720000,
    pricePerSqm: 24294,
    status: "available",
    features: ["Prostorný byt", "Balkon", "Parkování"],
    floorPlan: "/images/apartments/2-02-floorplan.jpg",
    images: [],
    description: "Prostorný byt 3+kk s balkonem a parkovacím místem."
  },
  {
    id: "2-03",
    floorId: 2,
    apartmentNumber: "2.03",
    type: "2+kk",
    size: 57.3,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    balcony: false,
    parking: false,
    orientation: "Sever",
    price: 1350000,
    pricePerSqm: 23560,
    status: "available",
    features: ["Kompaktní byt", "Moderní vybavení"],
    floorPlan: "/images/apartments/2-03-floorplan.jpg",
    images: [],
    description: "Kompaktní byt 2+kk s moderním vybavením."
  },
  {
    id: "2-04",
    floorId: 2,
    apartmentNumber: "2.04",
    type: "3+kk",
    size: 74.1,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 2,
    balcony: true,
    balconySize: 16.0,
    parking: true,
    orientation: "Západ",
    price: 1920000,
    pricePerSqm: 25898,
    status: "reserved",
    features: ["Luxusní byt", "Dvě koupelny", "Velký balkon"],
    floorPlan: "/images/apartments/2-04-floorplan.jpg",
    images: [],
    description: "Luxusní byt 3+kk s dvěma koupelnami a velkým balkonem."
  },
  {
    id: "3-01",
    floorId: 3,
    apartmentNumber: "3.01",
    type: "2+kk",
    size: 56.0,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    balcony: true,
    balconySize: 9.5,
    parking: false,
    orientation: "Jih",
    price: 1330000,
    pricePerSqm: 23750,
    status: "available",
    features: ["Světlý byt", "Balkon", "Moderní dispozice"],
    floorPlan: "/images/apartments/3-01-floorplan.jpg",
    images: [],
    description: "Světlý byt 2+kk s balkonem a moderní dispozicí."
  },
  {
    id: "3-02",
    floorId: 3,
    apartmentNumber: "3.02",
    type: "3+kk",
    size: 71.5,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    balcony: true,
    balconySize: 14.0,
    parking: true,
    orientation: "Východ",
    price: 1750000,
    pricePerSqm: 24476,
    status: "sold",
    features: ["Prostorný byt", "Balkon", "Parkování"],
    floorPlan: "/images/apartments/3-02-floorplan.jpg",
    images: [],
    description: "Prostorný byt 3+kk s balkonem a parkovacím místem."
  },
  {
    id: "3-03",
    floorId: 3,
    apartmentNumber: "3.03",
    type: "2+kk",
    size: 58.7,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    balcony: false,
    parking: false,
    orientation: "Sever",
    price: 1380000,
    pricePerSqm: 23492,
    status: "sold",
    features: ["Kompaktní byt", "Moderní vybavení"],
    floorPlan: "/images/apartments/3-03-floorplan.jpg",
    images: [],
    description: "Kompaktní byt 2+kk s moderním vybavením."
  },
  {
    id: "3-04",
    floorId: 3,
    apartmentNumber: "3.04",
    type: "3+kk",
    size: 75.8,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 2,
    balcony: true,
    balconySize: 17.0,
    parking: true,
    orientation: "Západ",
    price: 1980000,
    pricePerSqm: 26121,
    status: "sold",
    features: ["Luxusní byt", "Dvě koupelny", "Velký balkon"],
    floorPlan: "/images/apartments/3-04-floorplan.jpg",
    images: [],
    description: "Luxusní byt 3+kk s dvěma koupelnami a velkým balkonem."
  },
  {
    id: "4-01",
    floorId: 4,
    apartmentNumber: "4.01",
    type: "2+kk",
    size: 57.5,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    balcony: true,
    balconySize: 10.0,
    parking: false,
    orientation: "Jih",
    price: 1360000,
    pricePerSqm: 23652,
    status: "available",
    features: ["Světlý byt", "Balkon", "Moderní dispozice"],
    floorPlan: "/images/apartments/4-01-floorplan.jpg",
    images: [],
    description: "Světlý byt 2+kk s balkonem a moderní dispozicí."
  },
  {
    id: "4-02",
    floorId: 4,
    apartmentNumber: "4.02",
    type: "3+kk",
    size: 73.2,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    balcony: true,
    balconySize: 15.0,
    parking: true,
    orientation: "Východ",
    price: 1800000,
    pricePerSqm: 24590,
    status: "available",
    features: ["Prostorný byt", "Balkon", "Parkování"],
    floorPlan: "/images/apartments/4-02-floorplan.jpg",
    images: [],
    description: "Prostorný byt 3+kk s balkonem a parkovacím místem."
  },
  {
    id: "4-03",
    floorId: 4,
    apartmentNumber: "4.03",
    type: "2+kk",
    size: 59.8,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    balcony: false,
    parking: false,
    orientation: "Sever",
    price: 1400000,
    pricePerSqm: 23411,
    status: "available",
    features: ["Kompaktní byt", "Moderní vybavení"],
    floorPlan: "/images/apartments/4-03-floorplan.jpg",
    images: [],
    description: "Kompaktní byt 2+kk s moderním vybavením."
  },
  {
    id: "4-04",
    floorId: 4,
    apartmentNumber: "4.04",
    type: "Penthouse",
    size: 120.5,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    balcony: true,
    balconySize: 35.0,
    parking: true,
    orientation: "Západ",
    price: 3500000,
    pricePerSqm: 29046,
    status: "available",
    features: ["Luxusní penthouse", "Dvě koupelny", "Velká terasa", "Parkování"],
    floorPlan: "/images/apartments/4-04-floorplan.jpg",
    images: [],
    description: "Exkluzivní penthouse s velkou terasou a výhledem na město."
  },
]

// GALLERY DATA
export const gallery = [
  // Interiér Bungalov (fotky z dum-12)
  {
    id: 11,
    url: "/images/gallery/dum-12/" + encodeURIComponent("f (1)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("f (1)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Ložnice"
  },
  {
    id: 12,
    url: "/images/gallery/dum-12/" + encodeURIComponent("f (2)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("f (2)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Ložnice"
  },
  {
    id: 13,
    url: "/images/gallery/dum-12/" + encodeURIComponent("f (3)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("f (3)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Ložnice"
  },
  {
    id: 14,
    url: "/images/gallery/dum-12/" + encodeURIComponent("f (4)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("f (4)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Ložnice"
  },
  {
    id: 15,
    url: "/images/gallery/dum-12/" + encodeURIComponent("g_ (1)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("g_ (1)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 16,
    url: "/images/gallery/dum-12/" + encodeURIComponent("g_ (2)2_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("g_ (2)2_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 17,
    url: "/images/gallery/dum-12/" + encodeURIComponent("g_ (3)3_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("g_ (3)3_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 18,
    url: "/images/gallery/dum-12/" + encodeURIComponent("g_ (4)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("g_ (4)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 19,
    url: "/images/gallery/dum-12/" + encodeURIComponent("g_ (5)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("g_ (5)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 20,
    url: "/images/gallery/dum-12/" + encodeURIComponent("g_ (6)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("g_ (6)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 21,
    url: "/images/gallery/dum-12/" + encodeURIComponent("g_ (7)2_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("g_ (7)2_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 22,
    url: "/images/gallery/dum-12/" + encodeURIComponent("h (1)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("h (1)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Dětský pokoj"
  },
  {
    id: 23,
    url: "/images/gallery/dum-12/" + encodeURIComponent("h (2)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("h (2)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Dětský pokoj"
  },
  {
    id: 24,
    url: "/images/gallery/dum-12/" + encodeURIComponent("h (3)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("h (3)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Dětský pokoj"
  },
  {
    id: 25,
    url: "/images/gallery/dum-12/" + encodeURIComponent("h (4)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("h (4)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Dětský pokoj"
  },
  {
    id: 26,
    url: "/images/gallery/dum-12/" + encodeURIComponent("h (5)_dum12.jpg"),
    thumbnail: "/images/gallery/dum-12/" + encodeURIComponent("h (5)_dum12.jpg"),
    category: "bungalov-interier",
    caption: "Dětský pokoj"
  },
  // Interiér Dvojdomek (fotky z domy-2-4-6-8)
  {
    id: 27,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (1)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (1)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 28,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (2)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (2)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 29,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (3)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (3)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 30,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (4)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (4)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 31,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (5)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (5)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 32,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (6)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (6)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 33,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (7)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("a (7)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Obývací pokoj s kuchyní"
  },
  {
    id: 34,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (1)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (1)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Dětský pokoj"
  },
  {
    id: 35,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (2)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (2)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Dětský pokoj"
  },
  {
    id: 36,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (3)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (3)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Dětský pokoj"
  },
  {
    id: 37,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (4)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (4)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Dětský pokoj"
  },
  {
    id: 38,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (5)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("b (5)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Dětský pokoj"
  },
  {
    id: 39,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (1)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (1)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Ložnice"
  },
  {
    id: 40,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (2)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (2)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Ložnice"
  },
  {
    id: 41,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (3)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (3)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Ložnice"
  },
  {
    id: 42,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (4)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (4)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Ložnice"
  },
  {
    id: 43,
    url: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (5)_domy2468.jpg"),
    thumbnail: "/images/gallery/domy-2-4-6-8/" + encodeURIComponent("c (5)_domy2468.jpg"),
    category: "dvojdomek-interier",
    caption: "Ložnice"
  },
  // Exteriér
  {
    id: 55,
    url: "/images/gallery/exterior/ex (1).jpg",
    thumbnail: "/images/gallery/exterior/ex (1).jpg",
    category: "exterior",
    caption: "Vizualizace všech domů"
  },
  {
    id: 56,
    url: "/images/gallery/exterior/ex (2).jpg",
    thumbnail: "/images/gallery/exterior/ex (2).jpg",
    category: "exterior",
    caption: "Vizualizace všech domů"
  },
  {
    id: 57,
    url: "/images/gallery/exterior/ex (3).jpg",
    thumbnail: "/images/gallery/exterior/ex (3).jpg",
    category: "exterior",
    caption: "Dvojdomek"
  },
  {
    id: 58,
    url: "/images/gallery/exterior/ex (4).jpg",
    thumbnail: "/images/gallery/exterior/ex (4).jpg",
    category: "exterior",
    caption: "Bungalov"
  },
  {
    id: 85,
    url: "/images/gallery/exterior/bungalov_ex_2.png",
    thumbnail: "/images/gallery/exterior/bungalov_ex_2.png",
    category: "exterior",
    caption: "Bungalov s rodinou"
  },
  {
    id: 86,
    url: "/images/gallery/exterior/bungalov_ex_3.png",
    thumbnail: "/images/gallery/exterior/bungalov_ex_3.png",
    category: "exterior",
    caption: "Bungalov - terasa"
  },
  {
    id: 88,
    url: "/images/gallery/exterior/dvojdum_2.png",
    thumbnail: "/images/gallery/exterior/dvojdum_2.png",
    category: "exterior",
    caption: "Dvojdomek - zahrada"
  },
  {
    id: 89,
    url: "/images/gallery/exterior/dvojdum_3.png",
    thumbnail: "/images/gallery/exterior/dvojdum_3.png",
    category: "exterior",
    caption: "Dvojdomek - terasa a zahrada"
  },
  {
    id: 90,
    url: "/images/gallery/exterior/dvojdum_4.png",
    thumbnail: "/images/gallery/exterior/dvojdum_4.png",
    category: "exterior",
    caption: "Bungalov - letecký pohled"
  },
  {
    id: 91,
    url: "/images/gallery/exterior/dvojdum_5.png",
    thumbnail: "/images/gallery/exterior/dvojdum_5.png",
    category: "exterior",
    caption: "Dvojdomek s rodinou"
  },
  // Okolí / Location
  {
    id: 59,
    url: "/images/gallery/location/barokni statek.jpg",
    thumbnail: "/images/gallery/location/barokni statek.jpg",
    category: "location",
    caption: "Barokní statek"
  },
  {
    id: 60,
    url: "/images/gallery/location/hrad tynec nad sazavou.jpg",
    thumbnail: "/images/gallery/location/hrad tynec nad sazavou.jpg",
    category: "location",
    caption: "Hrad Týnec nad Sázavou"
  },
  {
    id: 61,
    url: "/images/gallery/location/Hrad Zbořený Kostelec.jpg",
    thumbnail: "/images/gallery/location/Hrad Zbořený Kostelec.jpg",
    category: "location",
    caption: "Hrad Zbořený Kostelec"
  },
  {
    id: 62,
    url: "/images/gallery/location/ondrejovska hvezdarna.jpg",
    thumbnail: "/images/gallery/location/ondrejovska hvezdarna.jpg",
    category: "location",
    caption: "Ondřejovská hvězdárna"
  },
  {
    id: 63,
    url: "/images/gallery/location/sazava tynec.jpg",
    thumbnail: "/images/gallery/location/sazava tynec.jpg",
    category: "location",
    caption: "Sázava Týnec"
  },
  {
    id: 64,
    url: "/images/gallery/location/sazava.jpg",
    thumbnail: "/images/gallery/location/sazava.jpg",
    category: "location",
    caption: "Sázava"
  },
  {
    id: 65,
    url: "/images/gallery/location/svet skodovek.webp",
    thumbnail: "/images/gallery/location/svet skodovek.webp",
    category: "location",
    caption: "Svět Škodovek"
  },
  {
    id: 66,
    url: "/images/gallery/location/tynec nad sazavou.jpg",
    thumbnail: "/images/gallery/location/tynec nad sazavou.jpg",
    category: "location",
    caption: "Týnec nad Sázavou"
  },
  {
    id: 67,
    url: "/images/gallery/location/zakladni skola tynec.jpeg",
    thumbnail: "/images/gallery/location/zakladni skola tynec.jpeg",
    category: "location",
    caption: "Základní škola Týnec"
  },
  {
    id: 68,
    url: "/images/gallery/location/zricenina hradu zlenice.jpg",
    thumbnail: "/images/gallery/location/zricenina hradu zlenice.jpg",
    category: "location",
    caption: "Zřícenina hradu Zlenice"
  },
]

// PROJECT STATS
export const projectStats = {
  totalArea: 15000,
  totalApartments: 250,
  totalBlocks: 5,
  parkingSpaces: 1050,
}











