import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as dotenv from 'dotenv';
import { properties, propertyImages } from '../lib/db/schema';
import { eq } from 'drizzle-orm';
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
        slug: prop.slug,
        price: prop.price,
        location: prop.location,
        beds: prop.beds,
        baths: prop.baths,
        sqft: prop.sqft,
        image: prop.image,
        type: prop.type as 'sale' | 'rent',
        isExclusive: prop.isExclusive || false,
        isNew: prop.isNew || false,
        isFeatured: prop.isFeatured || false,
      }).onConflictDoUpdate({
        target: properties.id,
        set: {
          slug: prop.slug,
          isExclusive: prop.isExclusive || false,
          isNew: prop.isNew || false,
          isFeatured: prop.isFeatured || false,
        }
      });

      // Insert gallery images if they exist
      if (prop.images && prop.images.length > 0) {
        await db.delete(propertyImages).where(eq(propertyImages.propertyId, prop.id));
        for (let i = 0; i < prop.images.length; i++) {
          await db.insert(propertyImages).values({
            id: `${prop.id}-img-${i}`,
            propertyId: prop.id,
            url: prop.images[i],
            order: i,
          });
        }
      }

      console.log(`Updated property: ${prop.title}`);
    } catch (e) {
      console.error(`Error updating property ${prop.title}:`, e);
    }
  }
  
  console.log('Seed completed!');
}

main();
