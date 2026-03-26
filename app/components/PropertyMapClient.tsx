'use client';

import dynamic from 'next/dynamic';

const PropertyMap = dynamic(() => import('./PropertyMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-100 animate-pulse flex items-center justify-center text-nordic/40">Loading Map...</div>
});

export default PropertyMap;
