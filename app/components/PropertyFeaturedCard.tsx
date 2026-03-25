import React from 'react';
import { Property } from '../data/properties';

interface PropertyFeaturedCardProps {
  property: Property;
}

export default function PropertyFeaturedCard({ property }: PropertyFeaturedCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] bg-white cursor-pointer">
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src={property.image}
        />
        {property.isExclusive && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#19322F]">
            Exclusive
          </div>
        )}
        {property.isNew && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#19322F]">
            New Arrival
          </div>
        )}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#19322F] hover:bg-[#006655] hover:text-white transition-all">
          <span className="material-icons text-xl">favorite_border</span>
        </button>
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
      </div>
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-medium text-[#19322F] group-hover:text-[#006655] transition-colors">{property.title}</h3>
            <p className="text-[#5C706D] text-sm flex items-center gap-1 mt-1">
              <span className="material-icons text-sm">place</span> {property.location}
            </p>
          </div>
          <span className="text-xl font-semibold text-[#006655]">${property.price.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-[#19322F]/5">
          <div className="flex items-center gap-2 text-[#5C706D] text-sm">
            <span className="material-icons text-lg">king_bed</span> {property.beds} Beds
          </div>
          <div className="flex items-center gap-2 text-[#5C706D] text-sm">
            <span className="material-icons text-lg">bathtub</span> {property.baths} Baths
          </div>
          <div className="flex items-center gap-2 text-[#5C706D] text-sm">
            <span className="material-icons text-lg">square_foot</span> {property.sqft} m²
          </div>
        </div>
      </div>
    </div>
  );
}
