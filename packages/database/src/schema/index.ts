import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const invites = pgTable('invites', {
  id: uuid('uuid4'),
  email: text('email').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})
