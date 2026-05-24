import { NextResponse } from 'next/server'
import { supabase } from '../../../src/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET() {
  const { data, error } = await supabase
    .from('houses')
    .select('*')
    .order('id')

  if (error || !data) {
    return NextResponse.json([])
  }

  const houses = data.map((h) => ({
    id: h.id,
    name: h.name,
    status: h.status,
    price: h.price,
    priceWithoutVat: h.price_without_vat,
    usableArea: parseFloat(h.usable_area) || 0,
    plotArea: parseFloat(h.plot_area) || 0,
    rooms: h.rooms,
    bathrooms: h.bathrooms,
    heroImage: h.hero_image,
    floorplanImage: h.floorplan_image,
    herbIcon: h.herb_icon,
    houseCardPdf: h.house_card_pdf,
    description: h.description,
  }))

  return NextResponse.json(houses)
}
