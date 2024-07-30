/* eslint-disable @typescript-eslint/no-explicit-any -- This removes all errors with the declarations below */
import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { createBrowserClient, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const {
  SUPABASE_URL = '',
  SUPABASE_ANON_KEY = '',
  NEXT_PUBLIC_SUPABASE_URL = '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY = '',
} = process.env

const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const createClientOnBrowser = (): SupabaseClient<any, 'public', any> =>
  createBrowserClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)

const createClientOnServer = (): SupabaseClient<any, 'public', any> => {
  const store = cookies()
  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return store.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- Fix type error below
            store.set(name, value, options),
          )
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}

export { client, createClientOnBrowser, createClientOnServer }
