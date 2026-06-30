'use client';

/**
 * SessionVerifier - Client component that handles the neon_auth_session_verifier query param.
 * 
 * After OAuth login, Neon Auth redirects back to the app with:
 * ?neon_auth_session_verifier=TOKEN
 * 
 * The @neondatabase/auth client SDK automatically detects this param on mount
 * and exchanges it for a real session cookie by calling /api/auth/verify-session.
 * 
 * This component is placed in the root layout to ensure it runs on every page load.
 */
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

export default function SessionVerifier() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifier = searchParams.get('neon_auth_session_verifier');
    if (verifier) {
      // The SDK handles the exchange automatically when authClient is initialized.
      // We just need to clean the URL after the exchange completes.
      const url = new URL(window.location.href);
      url.searchParams.delete('neon_auth_session_verifier');
      
      // Small delay to let the SDK process the verifier token, then reload to refresh server session
      setTimeout(() => {
        router.replace(url.pathname + (url.search || ''));
        router.refresh();
      }, 500);
    }
  }, [searchParams, router]);

  return null;
}
