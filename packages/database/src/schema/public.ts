import {
  pgTable,
  uuid,
  text,
  timestamp,
  numeric,
  boolean,
  integer,
  jsonb,
  pgEnum,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm/relations'
import { user } from './auth'

export const invites = pgTable('invites', {
  id: uuid('uuid4').notNull().defaultRandom().primaryKey(),
  email: text('email').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

export type NewInvite = typeof invites.$inferInsert

export const roles = pgEnum('roles', ['admin', 'editor', 'user'])

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  userId: text('user')
    .notNull()
    .references(() => user.id),
  firstName: text('first_name'),
  lastName: text('last_name'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})

export const events = pgTable('events', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  name: text('name'),
  description: text('description'),
  startTime: timestamp('start_time', { withTimezone: true }),
  endTime: timestamp('end_time', { withTimezone: true }),
  location: text('location'),
  createdBy: uuid('created_by').references(() => profiles.id),
})

export const eventRegistrations = pgTable('event_registrations', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  eventId: uuid('event_id').references(() => events.id),
  userId: uuid('user_id').references(() => profiles.id),
  registeredAt: timestamp('registered_at', { withTimezone: true }).defaultNow(),
})

export const members = pgTable('members', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  userId: uuid('user_id').references(() => profiles.id),
  email: text('email'),
})

export const staff = pgTable('staff', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  userId: uuid('user_id').references(() => profiles.id),
  email: text('email'),
  position: text('position').notNull(),
  department: text('department'),
  startDate: timestamp('start_date', { withTimezone: true }).notNull(),
  endDate: timestamp('end_date', { withTimezone: true }),
  isActive: boolean('is_active').default(true),
  churchId: uuid('church_id').references(() => churches.id),
})

export const sermons = pgTable('sermons', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  title: text('title'),
  content: text('content'),
  category: text('category'),
  link: text('link'),
  date: timestamp('date', { withTimezone: true }),
})

export const prayerRequests = pgTable('prayer_requests', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  userId: uuid('user_id').references(() => members.id),
  request: text('request'),
  status: text('status'),
  submittedAt: timestamp('submitted_at', { withTimezone: true }).defaultNow(),
})

export const groups = pgTable('groups', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  name: text('name'),
  leaderId: uuid('leader_id').references(() => profiles.id),
  description: text('description'),
})

export const groupMembers = pgTable('group_members', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  groupId: uuid('group_id').references(() => groups.id),
  userId: uuid('user_id').references(() => profiles.id),
})

// Add this new table definition
export const churches = pgTable('churches', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  churchId: text('church_id').notNull().unique(),
  name: text('name').notNull(),
  address: text('address'),
  city: text('city'),
  state: text('state'),
  country: text('country'),
  postalCode: text('postal_code'),
  phone: text('phone'),
  email: text('email'),
  website: text('website'),
  denomination: text('denomination'),
  foundedYear: integer('founded_year'),
  pastorId: uuid('pastor_id').references(() => profiles.id),
  capacity: integer('capacity'),
  description: text('description'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

// Define relations
export const profilesRelations = relations(profiles, ({ many, one }) => ({
  // ... existing relations ...
  church: one(churches, {
    fields: [profiles.id],
    references: [churches.pastorId],
  }),
}))

export const eventsRelations = relations(events, ({ one, many }) => ({
  // ... existing relations ...
  church: one(churches),
}))

export const eventRegistrationsRelations = relations(
  eventRegistrations,
  ({ one, many }) => ({
    event: one(events, {
      fields: [eventRegistrations.eventId],
      references: [events.id],
    }),
    user: one(profiles, {
      fields: [eventRegistrations.userId],
      references: [profiles.id],
    }),
  }),
)

export const membersRelations = relations(members, ({ one }) => ({
  user: one(profiles, { fields: [members.userId], references: [profiles.id] }),
}))

export const prayerRequestsRelations = relations(prayerRequests, ({ one }) => ({
  user: one(members, {
    fields: [prayerRequests.userId],
    references: [members.id],
  }),
}))

export const groupsRelations = relations(groups, ({ one, many }) => ({
  leader: one(profiles, {
    fields: [groups.leaderId],
    references: [profiles.id],
  }),
  members: many(groupMembers),
}))

export const groupMembersRelations = relations(groupMembers, ({ one }) => ({
  group: one(groups, {
    fields: [groupMembers.groupId],
    references: [groups.id],
  }),
  user: one(profiles, {
    fields: [groupMembers.userId],
    references: [profiles.id],
  }),
}))

// Add this new relation
export const churchesRelations = relations(churches, ({ one, many }) => ({
  pastor: one(profiles, {
    fields: [churches.pastorId],
    references: [profiles.id],
  }),
  events: many(events),
  members: many(profiles),
  staff: many(staff),
}))

// Add staff relations
export const staffRelations = relations(staff, ({ one }) => ({
  user: one(profiles, { fields: [staff.userId], references: [profiles.id] }),
  church: one(churches, {
    fields: [staff.churchId],
    references: [churches.id],
  }),
}))
