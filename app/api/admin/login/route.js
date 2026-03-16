import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const { password } = await request.json()

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Admin není nakonfigurován' }, { status: 500 })
  }

  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_session', process.env.ADMIN_TOKEN || 'admin_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 dní
      path: '/'
    })
    return response
  }

  return NextResponse.json({ error: 'Nesprávné heslo' }, { status: 401 })
}
