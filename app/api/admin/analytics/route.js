import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getSupabase } from '../../../../src/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET() {
  const cookieStore = cookies()
  const session = cookieStore.get('admin_session')
  const token = process.env.ADMIN_TOKEN || 'admin_token'

  if (!session?.value || session.value !== token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = getSupabase()
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const [totalRes, todayRes, weekRes, monthRes, dailyRes, pagesRes] = await Promise.all([
      supabase.from('analytics').select('*', { count: 'exact', head: true }),
      supabase.from('analytics').select('*', { count: 'exact', head: true })
        .gte('visited_at', new Date().toISOString().split('T')[0]),
      supabase.from('analytics').select('*', { count: 'exact', head: true })
        .gte('visited_at', new Date(Date.now() - 7 * 86400000).toISOString()),
      supabase.from('analytics').select('*', { count: 'exact', head: true })
        .gte('visited_at', thirtyDaysAgo.toISOString()),
      supabase.rpc('daily_visits', { days_back: 30 }),
      supabase.rpc('top_pages', { limit_count: 10 }),
    ])

    const days = Array.from({ length: 30 }, (_, i) => {
      const d = new Date()
      d.setDate(d.getDate() - (29 - i))
      return d.toISOString().split('T')[0]
    })

    const dailyMap = {}
    if (dailyRes.data) {
      dailyRes.data.forEach((r) => { dailyMap[r.day] = r.count })
    }
    const daily = days.map((date) => ({ date, count: Number(dailyMap[date] || 0) }))

    return NextResponse.json({
      total: totalRes.count || 0,
      today: todayRes.count || 0,
      week: weekRes.count || 0,
      month: monthRes.count || 0,
      daily,
      pages: pagesRes.data || [],
    })
  } catch {
    return NextResponse.json({ total: 0, today: 0, week: 0, month: 0, daily: [], pages: [] })
  }
}
