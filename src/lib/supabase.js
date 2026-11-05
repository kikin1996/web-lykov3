import { createClient } from '@supabase/supabase-js'

let _supabase = null

export function getSupabase() {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !key) throw new Error('Supabase env vars are not set')
    const schema = process.env.NEXT_PUBLIC_SUPABASE_SCHEMA
    _supabase = createClient(url, key, schema ? { db: { schema } } : undefined)
  }
  return _supabase
}
