import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@stewardly/database'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
})

export type Session = typeof auth.$Infer.Session
