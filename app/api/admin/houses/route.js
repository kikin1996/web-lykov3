import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getSupabase } from '../../../../src/lib/supabase'

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

  const supabase = getSupabase()
  const { data, error } = await supabase
    .from('houses')
    .select('id, name, status, price, price_without_vat, usable_area, plot_area, rooms, bathrooms, hero_image, floorplan_image, herb_icon, house_card_pdf, description')
    .order('id')

  if (error) {
    console.error('Supabase houses error:', JSON.stringify(error))
    return NextResponse.json({ error: error.message || 'Chyba čtení dat', code: error.code }, { status: 500 })
  }

  const mapped = data.map((h) => ({
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

  return NextResponse.json(mapped)
}

export async function PUT(request) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Nepřihlášen' }, { status: 401 })
  }

  try {
    const houses = await request.json()
    const supabase = getSupabase()

    const results = await Promise.all(
      houses.map((h) =>
        supabase.from('houses').update({ status: h.status, price: h.price }).eq('id', h.id)
      )
    )

    const failed = results.find((r) => r.error)
    if (failed) {
      console.error('Supabase update error:', JSON.stringify(failed.error))
      return NextResponse.json({ error: failed.error.message || 'Chyba zápisu dat' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('PUT error:', e)
    return NextResponse.json({ error: 'Chyba zápisu dat' }, { status: 500 })
  }
}
