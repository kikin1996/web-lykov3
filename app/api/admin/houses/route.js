import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '../../../../src/lib/supabase'

export const dynamic = 'force-dynamic'

function isAuthenticated() {
  const cookieStore = cookies()
  const session = cookieStore.get('admin_session')
  const token = process.env.ADMIN_TOKEN || 'admin_token'
  return session?.value === token
}

export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Nepřihlášen' }, { status: 401 })
  }

  const { data, error } = await supabase
    .from('houses')
    .select('*')
    .order('id')

  if (error) {
    return NextResponse.json({ error: 'Chyba čtení dat' }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function PUT(request) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Nepřihlášen' }, { status: 401 })
  }

  try {
    const houses = await request.json()

    const updates = houses.map((h) => ({
      id: h.id,
      name: h.name,
      status: h.status,
      price: h.price,
      price_without_vat: h.priceWithoutVat,
      usable_area: h.usableArea,
      plot_area: h.plotArea,
      rooms: h.rooms,
      bathrooms: h.bathrooms,
      hero_image: h.heroImage,
      floorplan_image: h.floorplanImage,
      herb_icon: h.herbIcon,
      house_card_pdf: h.houseCardPdf,
      description: h.description,
    }))

    const { error } = await supabase.from('houses').upsert(updates)

    if (error) {
      return NextResponse.json({ error: 'Chyba zápisu dat' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Chyba zápisu dat' }, { status: 500 })
  }
}
