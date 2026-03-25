import React from 'react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 group cursor-pointer h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={property.image}
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-[#006655] hover:text-white transition-colors text-[#19322F]">
          <span className="material-icons text-lg">favorite_border</span>
        </button>
        <div className={`absolute bottom-3 left-3 text-white text-xs font-bold px-2 py-1 rounded ${
          property.type === 'sale' ? 'bg-[#19322F]/90' : 'bg-[#006655]/90'
        }`}>
          {property.type === 'sale' ? 'FOR SALE' : 'FOR RENT'}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-bold text-lg text-[#19322F]">
            ${property.price.toLocaleString()}
            {property.type === 'rent' && <span className="text-sm font-normal text-[#5C706D]">/mo</span>}
          </h3>
        </div>
        <h4 className="text-[#19322F] font-medium truncate mb-1">{property.title}</h4>
        <p className="text-[#5C706D] text-xs mb-4">{property.location}</p>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1 text-[#5C706D] text-xs">
            <span className="material-icons text-sm text-[#006655]/80">king_bed</span> {property.beds}
          </div>
          <div className="flex items-center gap-1 text-[#5C706D] text-xs">
            <span className="material-icons text-sm text-[#006655]/80">bathtub</span> {property.baths}
          </div>
          <div className="flex items-center gap-1 text-[#5C706D] text-xs">
            <span className="material-icons text-sm text-[#006655]/80">square_foot</span> {property.sqft}m²
          </div>
        </div>
      </div>
    </article>
  );
}
