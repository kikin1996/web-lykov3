import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const DATA_FILE = path.join(process.cwd(), 'public', 'data', 'houses.json')

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

  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch {
    return NextResponse.json({ error: 'Chyba čtení dat' }, { status: 500 })
  }
}

export async function PUT(request) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Nepřihlášen' }, { status: 401 })
  }

  try {
    const houses = await request.json()
    fs.writeFileSync(DATA_FILE, JSON.stringify(houses, null, 2), 'utf-8')
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Chyba zápisu dat' }, { status: 500 })
  }
}
