import { NextResponse } from 'next/server'
import { getSupabase } from '../../../src/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET() {
  const supabase = getSupabase()
  const { data, error } = await supabase
    .from('houses')
    .select('id, name, status, price, price_without_vat, usable_area, plot_area, rooms, bathrooms, hero_image, floorplan_image, herb_icon, house_card_pdf, description')
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
