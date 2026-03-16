'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        const data = await res.json()
        setError(data.error || 'Chyba při přihlášení')
      }
    } catch {
      setError('Nelze se připojit k serveru')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-offWhite">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-neutral-darkNavy">Admin</h1>
          <p className="text-neutral-mediumGray text-sm mt-1">Luční Háj – správa nemovitostí</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Heslo"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-neutral-darkNavy focus:outline-none focus:ring-2 focus:ring-primary-teal"
            required
            autoFocus
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-teal text-white py-3 rounded-lg font-semibold hover:bg-primary-tealDark transition-colors disabled:opacity-60"
          >
            {loading ? 'Přihlašuji...' : 'Přihlásit se'}
          </button>
        </form>
      </div>
    </div>
  )
}
