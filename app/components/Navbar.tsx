import React from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import NavbarUserMenu from './NavbarUserMenu';
import { getDictionary, Locale } from '@/lib/get-dictionary';

export default async function Navbar({ lang = 'es' }: { lang?: string }) {
  const dict = await getDictionary(lang as Locale);

  return (
    <nav className="sticky top-0 z-50 bg-[#EEF6F6]/95 backdrop-blur-md border-b border-[#19322F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={`/${lang}`} className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#19322F] flex items-center justify-center">
              <span className="material-icons text-white text-lg">apartment</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-[#19322F]">LuxeEstate</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-[#006655] font-medium text-sm border-b-2 border-[#006655] px-1 py-1" href={`/${lang}`}>{dict.nav.buy}</Link>
            <Link className="text-[#19322F]/70 hover:text-[#19322F] font-medium text-sm hover:border-b-2 hover:border-[#19322F]/20 px-1 py-1 transition-all" href={`/${lang}`}>{dict.nav.rent}</Link>
            <Link className="text-[#19322F]/70 hover:text-[#19322F] font-medium text-sm hover:border-b-2 hover:border-[#19322F]/20 px-1 py-1 transition-all" href={`/${lang}`}>{dict.nav.sell}</Link>
            <Link className="text-[#19322F]/70 hover:text-[#19322F] font-medium text-sm hover:border-b-2 hover:border-[#19322F]/20 px-1 py-1 transition-all" href={`/${lang}`}>{dict.nav.saved}</Link>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector currentLang={lang} />
            
            <button className="text-[#19322F] hover:text-[#006655] transition-colors">
              <span className="material-icons">search</span>
            </button>
            <button className="text-[#19322F] hover:text-[#006655] transition-colors relative">
              <span className="material-icons">notifications_none</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#EEF6F6]"></span>
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-[#19322F]/10 ml-2">
              <NavbarUserMenu lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
