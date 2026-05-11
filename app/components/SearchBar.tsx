'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  lang?: string;
}

export default function SearchBar({ 
  placeholder = "Search by city, neighborhood, or address...", 
  buttonText = "Search",
  lang = "es"
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    params.set('page', '1'); // Reset to first page on search
    router.push(`/${lang}?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative group max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <span className="material-icons text-[#5C706D] text-2xl group-focus-within:text-[#006655] transition-colors">search</span>
      </div>
      <input 
        className="block w-full pl-12 pr-4 py-4 rounded-xl border-none bg-white text-[#19322F] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] placeholder-[#5C706D]/60 focus:ring-2 focus:ring-[#006655] focus:bg-white transition-all text-lg outline-none" 
        placeholder={placeholder} 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button 
        onClick={handleSearch}
        className="absolute inset-y-2 right-2 px-6 bg-[#006655] hover:bg-[#006655]/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-[#006655]/20"
      >
        {buttonText}
      </button>
    </div>
  );
}
