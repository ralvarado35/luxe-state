import React from 'react';

export default function CategoryFilters() {
  const categories = ['All', 'House', 'Apartment', 'Villa', 'Penthouse'];
  
  return (
    <div className="flex items-center justify-center gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2 px-4 -mx-4">
      {categories.map((category, index) => (
        <button 
          key={category}
          className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
            index === 0 
              ? 'bg-[#19322F] text-white shadow-lg shadow-[#19322F]/10 hover:-translate-y-0.5' 
              : 'bg-white border border-[#19322F]/5 text-[#5C706D] hover:text-[#19322F] hover:border-[#006655]/50 hover:bg-[#006655]/5'
          }`}
        >
          {category}
        </button>
      ))}
      <div className="w-px h-6 bg-[#19322F]/10 mx-2"></div>
      <button className="whitespace-nowrap flex items-center gap-1 px-4 py-2 rounded-full text-[#19322F] font-medium text-sm hover:bg-black/5 transition-colors">
        <span className="material-icons text-base">tune</span> Filters
      </button>
    </div>
  );
}
