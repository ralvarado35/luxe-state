'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSelector({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Using FlagCDN for reliable flag images instead of emojis which can fail on Windows
  const languages = [
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  ];

  const handleLanguageChange = (newLang: string) => {
    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=31536000;SameSite=Lax`;
    
    // Replace the locale in the pathname
    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPathname = segments.join('/');
    
    setIsOpen(false);
    router.push(newPathname);
  };

  const currentFlag = languages.find(l => l.code === currentLang)?.flag;

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#19322F] hover:bg-black/5 rounded-lg transition-colors"
          id="language-menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {currentFlag ? (
            <img src={currentFlag} alt={currentLang} className="w-5 h-auto rounded-sm shadow-sm" />
          ) : (
            <span className="material-symbols-outlined text-xl">language</span>
          )}
          <span className="uppercase text-xs font-bold tracking-wider">{currentLang}</span>
          <span className="material-symbols-outlined text-sm opacity-50">keyboard_arrow_down</span>
        </button>
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu-button"
          >
            <div className="py-1" role="none">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`${
                    currentLang === lang.code ? 'bg-[#006655]/5 text-[#006655]' : 'text-[#19322F]'
                  } flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors group`}
                  role="menuitem"
                >
                  <img 
                    src={lang.flag} 
                    alt={lang.name} 
                    className="w-5 h-auto rounded-sm shadow-sm grayscale group-hover:grayscale-0 transition-all" 
                  />
                  <span className={`${currentLang === lang.code ? 'font-semibold' : ''} flex-grow text-left`}>
                    {lang.name}
                  </span>
                  {currentLang === lang.code && (
                    <span className="material-icons text-xs">check</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
