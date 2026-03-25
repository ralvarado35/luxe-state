import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// This is required for local development when using @neondatabase/serverless
// with standard fetch (e.g. in Next.js)
if (process.env.NODE_ENV === 'development') {
  neonConfig.fetchConnectionCache = true;
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
