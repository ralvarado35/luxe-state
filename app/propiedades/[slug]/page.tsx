import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredProperties, newProperties } from '../../data/properties';
import Navbar from '../../components/Navbar';

import PropertyMapClient from '../../components/PropertyMapClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = [...featuredProperties, ...newProperties].find(p => p.slug === slug);
  
  if (!property) return { title: 'Property Not Found' };

  return {
    title: `${property.title} | $${property.price.toLocaleString()} | LuxeEstate`,
    description: property.description || `View details for ${property.title} in ${property.location}.`,
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = [...featuredProperties, ...newProperties].find(p => p.slug === slug);

  if (!property) {
    notFound();
  }

  // Default images if none provided
  const displayImages = property.images && property.images.length > 0 
    ? property.images 
    : [property.image];

  return (
    <div className="min-h-screen bg-[#EEF6F6] text-[#19322F]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-[#19322F]/60">
          <Link href="/" className="hover:text-[#006655] transition-colors">Home</Link>
          <span className="material-icons text-xs">chevron_right</span>
          <span className="font-medium text-[#19322F]">Property Details</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Left Column: Gallery & Description */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-sm group">
              <img 
                alt={property.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={property.image}
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {property.isExclusive && (
                  <span className="bg-[#006655] text-white text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">Premium</span>
                )}
                {property.isNew && (
                  <span className="bg-white/90 backdrop-blur text-[#19322F] text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">New</span>
                )}
              </div>
              <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#19322F] px-4 py-2 rounded-lg text-sm font-medium shadow-lg backdrop-blur transition-all flex items-center gap-2">
                <span className="material-icons text-sm">grid_view</span>
                View All Photos
              </button>
            </div>

            {/* Thumbnails Gallery */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x">
              {displayImages.map((img, idx) => (
                <div key={idx} className={`flex-none w-48 aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all snap-start ${idx === 0 ? 'ring-2 ring-[#006655] ring-offset-2 ring-offset-[#EEF6F6]' : 'opacity-70 hover:opacity-100'}`}>
                  <img alt={`${property.title} ${idx + 1}`} className="w-full h-full object-cover" src={img} />
                </div>
              ))}
            </div>

            {/* Property Hero Info (Mobile only or redundant) */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#006655]/5 space-y-8">
              <div>
                <h2 className="text-lg font-semibold mb-6 text-[#19322F]">Property Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center justify-center p-4 bg-[#006655]/5 rounded-lg border border-[#006655]/10">
                    <span className="material-icons text-[#006655] text-2xl mb-2">square_foot</span>
                    <span className="text-xl font-bold text-[#19322F]">{property.sqft}</span>
                    <span className="text-xs uppercase tracking-wider text-[#19322F]/50">Square Meters</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-[#006655]/5 rounded-lg border border-[#006655]/10">
                    <span className="material-icons text-[#006655] text-2xl mb-2">bed</span>
                    <span className="text-xl font-bold text-[#19322F]">{property.beds}</span>
                    <span className="text-xs uppercase tracking-wider text-[#19322F]/50">Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-[#006655]/5 rounded-lg border border-[#006655]/10">
                    <span className="material-icons text-[#006655] text-2xl mb-2">shower</span>
                    <span className="text-xl font-bold text-[#19322F]">{property.baths}</span>
                    <span className="text-xs uppercase tracking-wider text-[#19322F]/50">Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-[#006655]/5 rounded-lg border border-[#006655]/10">
                    <span className="material-icons text-[#006655] text-2xl mb-2">directions_car</span>
                    <span className="text-xl font-bold text-[#19322F]">2</span>
                    <span className="text-xs uppercase tracking-wider text-[#19322F]/50">Garage</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4 text-[#19322F]">About this home</h2>
                <div className="prose prose-slate max-w-none text-[#19322F]/70 leading-relaxed">
                  <p>{property.description || 'No description available for this property.'}</p>
                </div>
              </div>

              {property.amenities && (
                <div>
                  <h2 className="text-lg font-semibold mb-6 text-[#19322F]">Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-[#19322F]/70">
                        <span className="material-icons text-[#006655]/60 text-sm">check_circle</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#006655]/5">
                <div className="mb-4">
                  <h1 className="text-4xl font-light text-[#19322F] mb-2">${property.price.toLocaleString()}</h1>
                  <p className="text-[#19322F]/60 font-medium flex items-center gap-1">
                    <span className="material-icons text-[#006655] text-sm">location_on</span>
                    {property.location}
                  </p>
                </div>
                <div className="h-px bg-slate-100 my-6"></div>
                
                {/* Agent Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    alt="Agent" 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4TxUmdQRb2VMjuaNxLEwLorv_dgHzoET2_wL5toSvew6nhtziaR3DX-U69DBN7J74yO6oKokpw8tqEFutJf13MeXghCy7FwZuAxnoJel6FYcKeCRUVinpZtrNnkZvXd-MY5_2MAtRD7JP5BieHixfCaeAPW04jm-y-nvF3HIrwcZ_HRDk_MrNP5WiPV3u9zNrEgM-SQoWGh4xLVSV444aZAbVl03mjjsW5WBpIeodCyqJxprTDp6Q157D06VxcdUSCf-l9UKQT-w" 
                  />
                  <div>
                    <h3 className="font-semibold text-[#19322F]">Sarah Jenkins</h3>
                    <div className="flex items-center gap-1 text-xs text-[#006655] font-medium">
                      <span className="material-icons text-[14px]">star</span>
                      <span>Top Rated Agent</span>
                    </div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button className="p-2 rounded-full bg-[#006655]/10 text-[#006655] hover:bg-[#006655] hover:text-white transition-colors">
                      <span className="material-icons text-sm">chat</span>
                    </button>
                    <button className="p-2 rounded-full bg-[#006655]/10 text-[#006655] hover:bg-[#006655] hover:text-white transition-colors">
                      <span className="material-icons text-sm">call</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-[#006655] hover:bg-[#005544] text-white py-4 px-6 rounded-lg font-medium transition-all shadow-lg shadow-[#006655]/20 flex items-center justify-center gap-2 group">
                    <span className="material-icons text-xl group-hover:scale-110 transition-transform">calendar_today</span>
                    Schedule Visit
                  </button>
                  <button className="w-full bg-transparent border border-[#19322F]/10 hover:border-[#006655] text-[#19322F]/80 hover:text-[#006655] py-4 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                    <span className="material-icons text-xl">mail_outline</span>
                    Contact Agent
                  </button>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white p-2 rounded-xl shadow-sm border border-[#006655]/5">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                  <PropertyMapClient location={property.location} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": property.title,
              "description": property.description,
              "url": `https://luxeestate.com/propiedades/${property.slug}`,
              "image": property.image,
              "price": property.price,
              "priceCurrency": "USD",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": property.location,
              }
            }),
          }}
        />
      </main>
    </div>
  );
}
