import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { kv } from '@vercel/kv'
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

function readLocalFile() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return null
  }
}

export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Nepřihlášen' }, { status: 401 })
  }

  try {
    // Zkusit KV (Vercel), fallback na lokální soubor
    const data = await kv.get('houses')
    if (data) return NextResponse.json(data)

    const local = readLocalFile()
    if (local) return NextResponse.json(local)

    return NextResponse.json({ error: 'Chyba čtení dat' }, { status: 500 })
  } catch {
    // KV není dostupné (lokální vývoj bez KV) — použít soubor
    const local = readLocalFile()
    if (local) return NextResponse.json(local)
    return NextResponse.json({ error: 'Chyba čtení dat' }, { status: 500 })
  }
}

export async function PUT(request) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Nepřihlášen' }, { status: 401 })
  }

  try {
    const houses = await request.json()

    try {
      // Uložit do KV (Vercel)
      await kv.set('houses', houses)
    } catch {
      // KV není dostupné — uložit lokálně
      fs.writeFileSync(DATA_FILE, JSON.stringify(houses, null, 2), 'utf-8')
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Chyba zápisu dat' }, { status: 500 })
  }
}
