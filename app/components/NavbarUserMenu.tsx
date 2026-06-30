'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

interface NavbarUserMenuProps {
  lang: string;
}

export default function NavbarUserMenu({ lang }: NavbarUserMenuProps) {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    // Skeleton placeholder mientras carga
    return (
      <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />
    );
  }

  if (user) {
    const avatarSrc =
      user.image ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(
        user.name || user.email || 'User'
      )}&background=006655&color=fff`;

    return (
      <button className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden ring-2 ring-transparent hover:ring-[#006655] transition-all">
        <Image
          alt={user.name || 'Profile'}
          className="w-full h-full object-cover"
          src={avatarSrc}
          width={36}
          height={36}
          referrerPolicy="no-referrer"
          unoptimized={!!user.image}
        />
      </button>
    );
  }

  return (
    <Link
      href={`/${lang}/login`}
      className="flex items-center justify-center bg-[#006655] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#004d40] transition-colors"
    >
      Log in
    </Link>
  );
}
