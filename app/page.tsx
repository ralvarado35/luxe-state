import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilters from "./components/CategoryFilters";
import PropertyFeaturedCard from "./components/PropertyFeaturedCard";
import PropertyCard from "./components/PropertyCard";
import Pagination from "./components/Pagination";
import { featuredProperties, getPaginatedProperties } from "./data/properties";

interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const page = Number(params.page ?? '1');
  const { items, currentPage, totalPages, totalItems, hasPrev, hasNext } =
    getPaginatedProperties(page);

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
            
            <SearchBar />
            
            <CategoryFilters />
          </div>
        </section>

        {/* Featured Collections */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-[#19322F]">Featured Collections</h2>
              <p className="text-[#5C706D] mt-1 text-sm">Curated properties for the discerning eye.</p>
            </div>
            <a className="hidden sm:flex items-center gap-1 text-sm font-medium text-[#006655] hover:opacity-70 transition-opacity" href="#">
              View all <span className="material-icons text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProperties.map((property) => (
              <PropertyFeaturedCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* New in Market */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-[#19322F]">New in Market</h2>
              <p className="text-[#5C706D] mt-1 text-sm">
                Fresh opportunities added this week.{" "}
                <span className="text-[#006655] font-medium">{totalItems} properties</span>
              </p>
            </div>
            <div className="hidden md:flex bg-white p-1 rounded-lg">
              <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-[#19322F] text-white shadow-sm">All</button>
              <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[#5C706D] hover:text-[#19322F]">Buy</button>
              <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[#5C706D] hover:text-[#19322F]">Rent</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

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
