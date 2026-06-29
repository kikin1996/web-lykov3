import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin/dashboard')) {
    const session = request.cookies.get('admin_session')
    const token = process.env.ADMIN_TOKEN
    if (!token) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }

    if (!session?.value || session.value !== token) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/dashboard/:path*']
}
