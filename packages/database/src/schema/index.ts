import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const invites = pgTable('invites', {
  id: uuid('uuid4').notNull().defaultRandom().primaryKey(),
  email: text('email').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

export type NewInvite = typeof invites.$inferInsert
