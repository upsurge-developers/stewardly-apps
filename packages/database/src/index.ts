import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

config({ path: '.env' })

const client = postgres(process.env.DATABASE_URL!)
export const db = drizzle(client)

export * from './schema'
export * from './schema/auth'
export * from './schema/relations'
