import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
// import { discord } from 'better-auth/social-providers'
import { db } from '@stewardly/database'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 10,
  },
  // socialProviders: {
  //   discord: {
  //     clientId: process.env.DISCORD_CLIENT_ID!,
  //     clientSecret: process.env.DISCORD_CLIENT_SECRET!,
  //   },
  // },
})

export type Session = typeof auth.$Infer.Session
