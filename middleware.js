import { NextResponse } from 'next/server'

async function trackVisit(pathname) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return

  await fetch(`${url}/rest/v1/analytics`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({ path: pathname }),
  })
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

  const isPrefetch = request.headers.get('Next-Router-Prefetch') === '1'
  const isRSC = request.headers.get('RSC') === '1'

  const shouldTrack =
    !isPrefetch &&
    !isRSC &&
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
