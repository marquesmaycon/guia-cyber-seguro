import { integer, pgTable, serial, timestamp, unique, varchar } from "drizzle-orm/pg-core";

export const section = pgTable('sections', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  likesCount: integer('likes_count').default(0).notNull(),
});

export const likes = pgTable('likes', {
  id: serial('id').primaryKey(),
  sectionId: integer('section_id').references(() => section.id).notNull(),
  fingerprintHash: varchar('fingerprint_hash', { length: 128 }).notNull(),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: varchar('user_agent', { length: 500 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => [
  unique().on(t.sectionId, t.fingerprintHash)
]);