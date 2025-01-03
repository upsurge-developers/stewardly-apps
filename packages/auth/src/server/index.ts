import { config } from 'dotenv'
import { betterAuth } from 'better-auth'
import { Pool } from 'pg'

config({ path: '.env' })

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.AUTH_DATABASE_URL,
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
