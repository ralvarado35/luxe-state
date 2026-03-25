import { pgTable, text, integer, doublePrecision, boolean, pgEnum } from 'drizzle-orm/pg-core';

export const propertyTypeEnum = pgEnum('property_type', ['sale', 'rent']);

export const properties = pgTable('properties', {
  id: text('id').primaryKey(), // Using text to match current mock IDs
  title: text('title').notNull(),
  price: doublePrecision('price').notNull(),
  location: text('location').notNull(),
  beds: integer('beds').notNull(),
  baths: doublePrecision('baths').notNull(),
  sqft: integer('sqft').notNull(),
  image: text('image').notNull(),
  type: propertyTypeEnum('type').notNull().default('sale'),
  isExclusive: boolean('is_exclusive').default(false),
  isNew: boolean('is_new').default(false),
  isFeatured: boolean('is_featured').default(false),
});
