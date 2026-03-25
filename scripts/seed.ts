import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as dotenv from 'dotenv';
import { properties } from '../lib/db/schema';
import { featuredProperties, newProperties } from '../app/data/properties';

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function main() {
  console.log('Seeding database...');
  
  const allProperties = [...featuredProperties, ...newProperties];
  
  for (const prop of allProperties) {
    try {
      await db.insert(properties).values({
        id: prop.id,
        title: prop.title,
        price: prop.price,
        location: prop.location,
        beds: prop.beds,
        baths: prop.baths,
        sqft: prop.sqft,
        image: prop.image,
        type: prop.type as 'sale' | 'rent',
        isExclusive: prop.isExclusive || false,
        isNew: prop.isNew || false,
      }).onConflictDoNothing();
      console.log(`Inserted property: ${prop.title}`);
    } catch (e) {
      console.error(`Error inserting property ${prop.title}:`, e);
    }
  }
  
  console.log('Seed completed!');
}

main();
