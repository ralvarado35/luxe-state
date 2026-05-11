'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: string;
  dict?: {
    title: string;
    location_label: string;
    location_placeholder: string;
    price_range: string;
    any: string;
    min_price: string;
    max_price: string;
    property_type: string;
    any_type: string;
    bedrooms: string;
    bathrooms: string;
    amenities_label: string;
    clear_all: string;
    show_homes: string;
    amenities: {
      pool: string;
      gym: string;
      parking: string;
      ac: string;
      wifi: string;
      terrace: string;
    }
  };
}

export default function FilterModal({ 
  isOpen, 
  onClose, 
  lang = 'es',
  dict = {
    title: 'Filters',
    location_label: 'Location',
    location_placeholder: 'City, neighborhood, or address',
    price_range: 'Price Range',
    any: 'Any',
    min_price: 'Min Price',
    max_price: 'Max Price',
    property_type: 'Property Type',
    any_type: 'Any Type',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    amenities_label: 'Amenities & Features',
    clear_all: 'Clear all filters',
    show_homes: 'Show Homes',
    amenities: {
      pool: 'Swimming Pool',
      gym: 'Gym',
      parking: 'Parking',
      ac: 'Air Conditioning',
      wifi: 'High-speed Wifi',
      terrace: 'Patio / Terrace'
    }
  }
}: FilterModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [propertyType, setPropertyType] = useState(searchParams.get('type') || '');
  const [beds, setBeds] = useState(parseInt(searchParams.get('beds') || '0'));
  const [baths, setBaths] = useState(parseInt(searchParams.get('baths') || '0'));
  const [amenities, setAmenities] = useState<Set<string>>(
    new Set(searchParams.get('amenities')?.split(',') || [])
  );

  const AMENITIES = [
    { id: 'pool', icon: 'pool', label: dict.amenities.pool },
    { id: 'gym', icon: 'fitness_center', label: dict.amenities.gym },
    { id: 'parking', icon: 'local_parking', label: dict.amenities.parking },
    { id: 'ac', icon: 'ac_unit', label: dict.amenities.ac },
    { id: 'wifi', icon: 'wifi', label: dict.amenities.wifi },
    { id: 'terrace', icon: 'deck', label: dict.amenities.terrace },
  ];

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Sync state with searchParams when modal opens
  useEffect(() => {
    if (isOpen) {
      setLocation(searchParams.get('location') || '');
      setMinPrice(searchParams.get('minPrice') || '');
      setMaxPrice(searchParams.get('maxPrice') || '');
      setPropertyType(searchParams.get('type') || '');
      setBeds(parseInt(searchParams.get('beds') || '0'));
      setBaths(parseInt(searchParams.get('baths') || '0'));
      setAmenities(new Set(searchParams.get('amenities')?.split(',').filter(Boolean) || []));
    }
  }, [isOpen, searchParams]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  const toggleAmenity = (id: string) => {
    setAmenities((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleClear = () => {
    setLocation('');
    setMinPrice('');
    setMaxPrice('');
    setPropertyType('');
    setBeds(0);
    setBaths(0);
    setAmenities(new Set());
    
    const params = new URLSearchParams(searchParams.toString());
    params.delete('location');
    params.delete('minPrice');
    params.delete('maxPrice');
    params.delete('type');
    params.delete('beds');
    params.delete('baths');
    params.delete('amenities');
    params.set('page', '1');
    router.push(`/${lang}?${params.toString()}`);
    handleClose();
  };

  const handleApply = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (location) params.set('location', location); else params.delete('location');
    if (minPrice) params.set('minPrice', minPrice); else params.delete('minPrice');
    if (maxPrice) params.set('maxPrice', maxPrice); else params.delete('maxPrice');
    if (propertyType) params.set('type', propertyType); else params.delete('type');
    if (beds > 0) params.set('beds', beds.toString()); else params.delete('beds');
    if (baths > 0) params.set('baths', baths.toString()); else params.delete('baths');
    
    if (amenities.size > 0) {
      params.set('amenities', Array.from(amenities).join(','));
    } else {
      params.delete('amenities');
    }
    
    params.set('page', '1');
    router.push(`/${lang}?${params.toString()}`);
    handleClose();
  };

  const activeFiltersCount =
    (location ? 1 : 0) +
    (minPrice || maxPrice ? 1 : 0) +
    (propertyType ? 1 : 0) +
    (beds > 0 ? 1 : 0) +
    (baths > 0 ? 1 : 0) +
    amenities.size;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <header className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-30">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{dict.title}</h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          >
            <span className="material-icons">close</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <section>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {dict.location_label}
            </label>
            <div className="relative group">
              <span className="material-icons absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#006655] transition-colors">
                location_on
              </span>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={dict.location_placeholder}
                className="w-full pl-12 pr-4 py-3 bg-[#f5f8f6] border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#006655] focus:bg-white transition-all shadow-sm outline-none"
              />
            </div>
          </section>

          <section>
            <div className="flex justify-between items-end mb-4">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {dict.price_range}
              </label>
              {(minPrice || maxPrice) && (
                <span className="text-sm font-medium text-[#006655]">
                  {minPrice ? `$${parseInt(minPrice.replace(/,/g, '')).toLocaleString()}` : dict.any} – {maxPrice ? `$${parseInt(maxPrice.replace(/,/g, '')).toLocaleString()}` : dict.any}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f5f8f6] p-3 rounded-lg border border-transparent focus-within:border-[#006655]/30 transition-colors">
                <label className="block text-[10px] text-gray-500 uppercase font-medium mb-1">
                  {dict.min_price}
                </label>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-1">$</span>
                  <input
                    type="text"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="0"
                    className="w-full bg-transparent border-0 p-0 text-gray-900 font-medium focus:ring-0 text-sm outline-none"
                  />
                </div>
              </div>
              <div className="bg-[#f5f8f6] p-3 rounded-lg border border-transparent focus-within:border-[#006655]/30 transition-colors">
                <label className="block text-[10px] text-gray-500 uppercase font-medium mb-1">
                  {dict.max_price}
                </label>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-1">$</span>
                  <input
                    type="text"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder={dict.any}
                    className="w-full bg-transparent border-0 p-0 text-gray-900 font-medium focus:ring-0 text-sm outline-none"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {dict.property_type}
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-[#f5f8f6] border-0 rounded-lg py-3 pl-4 pr-10 text-gray-900 appearance-none focus:ring-2 focus:ring-[#006655] cursor-pointer outline-none"
                >
                  <option value="">{dict.any_type}</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                </select>
                <span className="material-icons absolute right-3 top-3 text-gray-400 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">{dict.bedrooms}</span>
                <div className="flex items-center space-x-3 bg-[#f5f8f6] rounded-full p-1">
                  <button
                    onClick={() => setBeds((b) => Math.max(0, b - 1))}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-[#006655] disabled:opacity-50 transition-colors"
                    disabled={beds === 0}
                  >
                    <span className="material-icons text-base">remove</span>
                  </button>
                  <span className="text-sm font-semibold w-8 text-center">
                    {beds === 0 ? dict.any : `${beds}+`}
                  </span>
                  <button
                    onClick={() => setBeds((b) => b + 1)}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#006655] hover:bg-[#006655] hover:text-white transition-colors"
                  >
                    <span className="material-icons text-base">add</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">{dict.bathrooms}</span>
                <div className="flex items-center space-x-3 bg-[#f5f8f6] rounded-full p-1">
                  <button
                    onClick={() => setBaths((b) => Math.max(0, b - 1))}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-[#006655] disabled:opacity-50 transition-colors"
                    disabled={baths === 0}
                  >
                    <span className="material-icons text-base">remove</span>
                  </button>
                  <span className="text-sm font-semibold w-8 text-center">
                    {baths === 0 ? dict.any : `${baths}+`}
                  </span>
                  <button
                    onClick={() => setBaths((b) => b + 1)}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#006655] hover:bg-[#006655] hover:text-white transition-colors"
                  >
                    <span className="material-icons text-base">add</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              {dict.amenities_label}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {AMENITIES.map((amenity) => {
                const isActive = amenities.has(amenity.id);
                return (
                  <label key={amenity.id} className="cursor-pointer group relative">
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={() => toggleAmenity(amenity.id)}
                      className="peer sr-only"
                    />
                    <div
                      className={`h-full px-4 py-3 rounded-lg border text-sm flex items-center justify-center gap-2 transition-all font-medium ${
                        isActive
                          ? 'border-[#006655] bg-[#006655]/10 text-[#006655]'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <span className={`material-icons text-lg ${isActive ? 'text-[#006655]' : 'text-gray-400 group-hover:text-gray-500'}`}>
                        {amenity.icon}
                      </span>
                      {amenity.label}
                    </div>
                  </label>
                );
              })}
            </div>
          </section>
        </div>

        <footer className="bg-white border-t border-gray-100 px-8 py-6 sticky bottom-0 z-30 flex items-center justify-between">
          <button
            onClick={handleClear}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-4"
          >
            {dict.clear_all}
          </button>
          <button
            onClick={handleApply}
            className="bg-[#19322F] hover:bg-[#19322F]/90 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-[#19322F]/30 transition-all hover:shadow-[#19322F]/40 flex items-center gap-2 active:scale-95"
          >
            {dict.show_homes}
            {activeFiltersCount > 0 && (
              <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {activeFiltersCount}
              </span>
            )}
            <span className="material-icons text-sm">arrow_forward</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
