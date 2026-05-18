import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { kv } from '@vercel/kv'

export async function GET() {
  const cookieStore = cookies()
  const session = cookieStore.get('admin_session')
  const token = process.env.ADMIN_TOKEN || 'admin_token'

  if (!session?.value || session.value !== token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const today = new Date().toISOString().split('T')[0]

    const days = Array.from({ length: 30 }, (_, i) => {
      const d = new Date()
      d.setDate(d.getDate() - (29 - i))
      return d.toISOString().split('T')[0]
    })

    const [total, ...dailyCounts] = await Promise.all([
      kv.get('analytics:total'),
      ...days.map((day) => kv.get(`analytics:day:${day}`)),
    ])

    const topPages = await kv.zrange('analytics:pages', 0, 9, {
      rev: true,
      withScores: true,
    })

    const pages = []
    for (let i = 0; i < topPages.length; i += 2) {
      pages.push({ path: topPages[i], count: topPages[i + 1] })
    }

    const daily = days.map((date, i) => ({ date, count: Number(dailyCounts[i] || 0) }))
    const todayCount = daily.find((d) => d.date === today)?.count || 0
    const weekCount = daily.slice(-7).reduce((s, d) => s + d.count, 0)
    const monthCount = daily.reduce((s, d) => s + d.count, 0)

    return NextResponse.json({
      total: Number(total || 0),
      today: todayCount,
      week: weekCount,
      month: monthCount,
      daily,
      pages,
    })
  } catch {
    return NextResponse.json({ total: 0, today: 0, week: 0, month: 0, daily: [], pages: [] })
  }
}
