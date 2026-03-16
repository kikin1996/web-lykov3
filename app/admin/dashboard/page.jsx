'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const STATUS_OPTIONS = ['Volný', 'Rezervovaný', 'Prodaný']

const STATUS_COLORS = {
  'Volný': 'bg-emerald-100 text-emerald-700',
  'Rezervovaný': 'bg-amber-100 text-amber-700',
  'Prodaný': 'bg-gray-100 text-gray-500'
}

const formatPrice = (price) =>
  new Intl.NumberFormat('cs-CZ', { maximumFractionDigits: 0 }).format(price)

export default function AdminDashboard() {
  const [houses, setHouses] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/admin/houses')
      .then((res) => {
        if (res.status === 401) {
          router.push('/admin')
          return null
        }
        return res.json()
      })
      .then((data) => {
        if (data) {
          setHouses(data)
          setLoading(false)
        }
      })
      .catch(() => {
        setMessage({ type: 'error', text: 'Chyba při načítání dat' })
        setLoading(false)
      })
  }, [router])

  const updateHouse = (id, field, value) => {
    setHouses((prev) =>
      prev.map((h) => (h.id === id ? { ...h, [field]: value } : h))
    )
  }

  const saveAll = async () => {
    setSaving(true)
    setMessage(null)
    try {
      const res = await fetch('/api/admin/houses', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(houses)
      })
      if (res.ok) {
        setMessage({ type: 'success', text: 'Uloženo! Změny se projeví po obnově stránky.' })
      } else {
        setMessage({ type: 'error', text: 'Chyba při ukládání' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Chyba připojení' })
    }
    setSaving(false)
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-offWhite">
        <p className="text-neutral-mediumGray">Načítání...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-offWhite">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-neutral-darkNavy">Správa nemovitostí</h1>
          <p className="text-sm text-neutral-mediumGray">Luční Háj</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-neutral-mediumGray hover:text-neutral-darkNavy transition-colors"
        >
          Odhlásit
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Actions bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-neutral-mediumGray text-sm">
            Upravte ceny a stav dostupnosti nemovitostí a klikněte na Uložit.
          </p>
          <button
            onClick={saveAll}
            disabled={saving}
            className="bg-primary-teal text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-tealDark transition-colors disabled:opacity-60"
          >
            {saving ? 'Ukládám...' : 'Uložit změny'}
          </button>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${
              message.type === 'success'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-offWhite border-b border-gray-200">
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-mediumGray">
                  Dům
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-mediumGray">
                  Cena (Kč)
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-mediumGray">
                  Stav
                </th>
              </tr>
            </thead>
            <tbody>
              {houses.map((house, index) => (
                <tr
                  key={house.id}
                  className={`border-b border-gray-100 hover:bg-neutral-offWhite transition-colors ${
                    index === houses.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  {/* Název */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {house.herbIcon && (
                        <img
                          src={house.herbIcon}
                          alt=""
                          className="w-8 h-8 opacity-70"
                          aria-hidden="true"
                        />
                      )}
                      <span className="font-semibold text-neutral-darkNavy text-sm">
                        {house.name}
                      </span>
                    </div>
                  </td>

                  {/* Cena */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={house.price}
                        onChange={(e) =>
                          updateHouse(house.id, 'price', parseInt(e.target.value) || 0)
                        }
                        className="w-36 border border-gray-200 rounded-lg px-3 py-2 text-sm text-neutral-darkNavy focus:outline-none focus:ring-2 focus:ring-primary-teal"
                      />
                      <span className="text-xs text-neutral-mediumGray">
                        = {formatPrice(house.price)} Kč
                      </span>
                    </div>
                  </td>

                  {/* Stav */}
                  <td className="px-6 py-4">
                    <select
                      value={house.status}
                      onChange={(e) => updateHouse(house.id, 'status', e.target.value)}
                      className={`border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-teal ${
                        STATUS_COLORS[house.status] || ''
                      }`}
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {STATUS_OPTIONS.map((status) => {
            const count = houses.filter((h) => h.status === status).length
            return (
              <div key={status} className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-neutral-darkNavy">{count}</p>
                <p className="text-sm text-neutral-mediumGray mt-1">{status}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
