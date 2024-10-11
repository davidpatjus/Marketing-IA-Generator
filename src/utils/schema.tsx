import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
})

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    user: varchar('user').notNull().unique(),  
    credits: integer('credits').default(0), 
    maxCreditUsage: integer('maxCreditUsage').default(30000), 
  });
  