'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import FilterModal from './FilterModal';

interface CategoryFiltersProps {
  dict?: {
    categories: {
      all: string;
      house: string;
      apartment: string;
      villa: string;
      penthouse: string;
    };
    filters: string;
  };
  filterDict?: any; // New prop for FilterModal translations
  lang?: string;
}

export default function CategoryFilters({ 
  dict = {
    categories: {
      all: 'All',
      house: 'House',
      apartment: 'Apartment',
      villa: 'Villa',
      penthouse: 'Penthouse'
    },
    filters: 'Filters'
  },
  filterDict,
  lang = 'es'
}: CategoryFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'All', label: dict.categories.all },
    { id: 'House', label: dict.categories.house },
    { id: 'Apartment', label: dict.categories.apartment },
    { id: 'Villa', label: dict.categories.villa },
    { id: 'Penthouse', label: dict.categories.penthouse },
  ];

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    params.set('page', '1'); // Reset to first page
    router.push(`/${lang}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2 px-4 -mx-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-[#19322F] text-white shadow-lg shadow-[#19322F]/10 hover:-translate-y-0.5'
                : 'bg-white border border-[#19322F]/5 text-[#5C706D] hover:text-[#19322F] hover:border-[#006655]/50 hover:bg-[#006655]/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
        <div className="w-px h-6 bg-[#19322F]/10 mx-2" />
        <button
          onClick={() => setIsFilterOpen(true)}
          className="whitespace-nowrap flex items-center gap-1 px-4 py-2 rounded-full text-[#19322F] font-medium text-sm hover:bg-black/5 transition-colors"
        >
          <span className="material-icons text-base">tune</span> {dict.filters}
        </button>
      </div>

      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        lang={lang}
        dict={filterDict}
      />
    </>
  );
}
