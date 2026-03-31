import { Suspense } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilters from "./components/CategoryFilters";
import PropertyFeaturedCard from "./components/PropertyFeaturedCard";
import PropertyCard from "./components/PropertyCard";
import Pagination from "./components/Pagination";
import { featuredProperties, getPaginatedProperties } from "./data/properties";

interface HomePageProps {
  searchParams: Promise<{ 
    page?: string;
    q?: string;
    location?: string;
    minPrice?: string;
    maxPrice?: string;
    type?: string;
    beds?: string;
    baths?: string;
    amenities?: string;
    category?: string;
  }>;
}

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const page = Number(params.page ?? '1');
  
  const filters: any = {};
  if (params.q) filters.query = params.q;
  if (params.location) filters.location = params.location;
  if (params.minPrice) filters.minPrice = parseInt(params.minPrice);
  if (params.maxPrice) filters.maxPrice = parseInt(params.maxPrice);
  if (params.type) filters.type = params.type;
  if (params.beds) filters.beds = parseInt(params.beds);
  if (params.baths) filters.baths = parseInt(params.baths);
  if (params.amenities) filters.amenities = params.amenities.split(',');
  if (params.category) filters.category = params.category;

  const { items, currentPage, totalPages, totalItems, hasPrev, hasNext } =
    getPaginatedProperties(page, filters);

  const filteredFeatured = featuredProperties.filter(p => {
    if (!filters.query && !filters.location && !filters.type && !filters.category) return true;
    
    const q = (filters.query || '').toLowerCase();
    const loc = (filters.location || '').toLowerCase();
    const type = (filters.type || '').toLowerCase();
    const cat = (filters.category || '').toLowerCase();
    
    const matchesQ = !q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q));
    const matchesLoc = !loc || p.location.toLowerCase().includes(loc);
    const matchesType = !type || type === 'all' || type === 'any type' || p.type === type || p.title.toLowerCase().includes(type);
    const matchesCat = !cat || cat === 'all' || p.title.toLowerCase().includes(cat);
    
    return matchesQ && matchesLoc && matchesType && matchesCat;
  });

  return (
    <div className="min-h-screen bg-[#EEF6F6] text-[#19322F] font-sans" suppressHydrationWarning>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#19322F] leading-tight">
              Find your <span className="relative inline-block">
                <span className="relative z-10 font-medium">sanctuary</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#006655]/20 -rotate-1 z-0"></span>
              </span>.
            </h1>
            
            <Suspense fallback={<div className="h-16 bg-white/50 animate-pulse rounded-xl max-w-2xl mx-auto" />}>
              <SearchBar />
            </Suspense>
            
            <Suspense fallback={<div className="h-10 bg-white/50 animate-pulse rounded-full w-64 mx-auto" />}>
              <CategoryFilters />
            </Suspense>
          </div>
        </section>

        {/* Featured Collections */}
        {filteredFeatured.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-[#19322F]">
                Featured <span className="font-semibold text-[#006655]">Collections</span>
              </h2>
              <button className="text-[#006655] font-medium text-sm flex items-center gap-1 hover:underline">
                View all <span className="material-icons text-base">arrow_forward</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredFeatured.map((property) => (
                <PropertyFeaturedCard key={property.id} property={property} />
              ))}
            </div>
          </section>
        )}

        {/* New in Market */}
        <section id="new-properties">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-[#19322F]">
                New <span className="font-semibold text-[#006655]">in Market</span>
              </h2>
              <p className="text-[#5C706D] mt-1 text-sm">
                Fresh opportunities added this week.{" "}
                <span className="text-[#006655] font-medium">{totalItems} properties match</span>
              </p>
            </div>
          </div>
          
          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-[#19322F]/10">
              <span className="material-icons text-5xl text-[#5C706D]/30 mb-4">search_off</span>
              <p className="text-[#5C706D] text-lg">No properties found matching your filters.</p>
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            hasPrev={hasPrev}
            hasNext={hasNext}
          />
        </section>
      </main>
    </div>
  );
}
