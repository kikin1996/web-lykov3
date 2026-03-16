import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const DATA_FILE = path.join(process.cwd(), 'public', 'data', 'houses.json')

export async function GET() {
  try {
    const data = await kv.get('houses')
    if (data) return NextResponse.json(data)
  } catch {
    // KV nedostupné, použít soubor
  }

  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch {
    return NextResponse.json([], { status: 500 })
  }
}
