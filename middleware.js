import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

function getTodayKey() {
  return new Date().toISOString().split('T')[0]
}

async function trackVisit(pathname) {
  const today = getTodayKey()
  await Promise.all([
    kv.incr('analytics:total'),
    kv.incr(`analytics:day:${today}`),
    kv.zincrby('analytics:pages', 1, pathname),
  ])
}

export async function middleware(request) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin/dashboard')) {
    const session = request.cookies.get('admin_session')
    const token = process.env.ADMIN_TOKEN || 'admin_token'

    if (!session?.value || session.value !== token) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  const shouldTrack =
    !pathname.startsWith('/api/') &&
    !pathname.startsWith('/_next/') &&
    !pathname.startsWith('/admin') &&
    !pathname.includes('.')

  if (shouldTrack) {
    trackVisit(pathname).catch(() => {})
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/dashboard/:path*', '/((?!_next/static|_next/image|favicon.ico).*)']
}
