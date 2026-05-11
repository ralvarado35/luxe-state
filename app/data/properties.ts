import { db } from '../../lib/db';
import { properties, propertyImages } from '../../lib/db/schema';
import { eq, and, gte, lte, ilike, or, sql as drizzleSql, desc } from 'drizzle-orm';

export interface Property {
  id: string;
  title: string;
  slug: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  images?: string[];
  description?: string;
  amenities?: string[];
  type: 'sale' | 'rent';
  isExclusive?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface PropertyFilters {
  query?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: string;
  beds?: number;
  baths?: number;
  amenities?: string[];
  category?: string;
}

export const PROPERTIES_PER_PAGE = 8;

/**
 * Helper to extract localized text from a JSON string or return the string as-is
 */
function localize(text: string | null | undefined, lang: string): string {
  if (!text) return '';
  try {
    // If it's a JSON string like {"en": "...", "es": "..."}
    if (text.startsWith('{') && text.includes(':')) {
      const parsed = JSON.parse(text);
      return parsed[lang] || parsed['en'] || text;
    }
  } catch (e) {
    // Not JSON, return as is
  }
  return text;
}

export async function getFeaturedProperties(lang: string = 'es'): Promise<Property[]> {
  const result = await db.query.properties.findMany({
    where: eq(properties.isFeatured, true),
    with: {
      images: {
        orderBy: (images, { asc }) => [asc(images.order)]
      }
    }
  });

  return result.map(p => ({
    ...p,
    title: localize(p.title, lang),
    description: localize(p.description, lang),
    type: p.type as 'sale' | 'rent',
    images: p.images.map(img => img.url),
    isExclusive: p.isExclusive || false,
    isNew: p.isNew || false,
    isFeatured: p.isFeatured || false,
  }));
}

export async function getPropertyBySlug(slug: string, lang: string = 'es'): Promise<Property | null> {
  const p = await db.query.properties.findFirst({
    where: eq(properties.slug, slug),
    with: {
      images: {
        orderBy: (images, { asc }) => [asc(images.order)]
      }
    }
  });

  if (!p) return null;

  return {
    ...p,
    title: localize(p.title, lang),
    description: localize(p.description, lang),
    type: p.type as 'sale' | 'rent',
    images: p.images.map(img => img.url),
    isExclusive: p.isExclusive || false,
    isNew: p.isNew || false,
    isFeatured: p.isFeatured || false,
  };
}

export async function getPaginatedProperties(page: number, filters: PropertyFilters = {}, lang: string = 'es') {
  const whereConditions = [];

  if (filters.query) {
    whereConditions.push(
      or(
        ilike(properties.title, `%${filters.query}%`),
        ilike(properties.location, `%${filters.query}%`)
      )
    );
  }

  if (filters.location) {
    whereConditions.push(ilike(properties.location, `%${filters.location}%`));
  }

  if (filters.minPrice !== undefined && !isNaN(filters.minPrice)) {
    whereConditions.push(gte(properties.price, filters.minPrice));
  }

  if (filters.maxPrice !== undefined && !isNaN(filters.maxPrice)) {
    whereConditions.push(lte(properties.price, filters.maxPrice));
  }

  if (filters.type && filters.type !== 'all' && filters.type !== 'Any Type') {
    whereConditions.push(eq(properties.type, filters.type.toLowerCase() as 'sale' | 'rent'));
  }

  if (filters.beds && filters.beds > 0) {
    whereConditions.push(gte(properties.beds, filters.beds));
  }

  if (filters.baths && filters.baths > 0) {
    whereConditions.push(gte(properties.baths, filters.baths));
  }

  if (filters.category && filters.category !== 'All') {
    whereConditions.push(ilike(properties.title, `%${filters.category}%`));
  }

  const where = whereConditions.length > 0 ? and(...whereConditions) : undefined;

  // Get total count
  const countResult = await db.select({ count: drizzleSql<number>`count(*)` }).from(properties).where(where);
  const totalItems = Number(countResult[0].count);

  const totalPages = Math.max(1, Math.ceil(totalItems / PROPERTIES_PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const offset = (currentPage - 1) * PROPERTIES_PER_PAGE;

  const itemsResult = await db.query.properties.findMany({
    where,
    limit: PROPERTIES_PER_PAGE,
    offset,
    orderBy: [desc(properties.isNew), desc(properties.id)],
    with: {
      images: {
        orderBy: (images, { asc }) => [asc(images.order)]
      }
    }
  });

  const items = itemsResult.map(p => ({
    ...p,
    title: localize(p.title, lang),
    description: localize(p.description, lang),
    type: p.type as 'sale' | 'rent',
    images: p.images.map(img => img.url),
    isExclusive: p.isExclusive || false,
    isNew: p.isNew || false,
    isFeatured: p.isFeatured || false,
  }));

  return {
    items,
    currentPage,
    totalPages,
    totalItems,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
  };
}
