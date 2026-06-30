# 🔐 Guía: Avatar OAuth con Neon Auth en Next.js App Router

> **Por qué falla el avatar post-login y cómo nunca más romperlo.**

---

## ❌ El Anti-patrón (lo que NO hacer)

```tsx
// ❌ MAL: Navbar como Server Component leyendo sesión server-side
export default async function Navbar({ lang }) {
  const { data: session } = await auth.getSession(); // ← PROBLEMA
  const user = session?.user;

  return (
    <nav>
      {user ? <Avatar src={user.image} /> : <LoginButton />}
    </nav>
  );
}
```

### ¿Por qué falla?

1. El usuario hace login con OAuth (Google/GitHub).
2. Neon Auth redirige de vuelta con `?neon_auth_session_verifier=TOKEN`.
3. El cliente (`SessionVerifier`) intercepta el token y lo intercambia por una cookie real.
4. Se llama `router.refresh()` para re-renderizar el Server Component.
5. **RACE CONDITION**: el servidor recibe el refresh _antes_ de que la cookie esté lista.
6. Resultado: el Navbar renderiza sin sesión → **no aparece el avatar**.

---

## ✅ El Patrón Correcto

### Paso 1 — Separar el menú de usuario en un Client Component

```tsx
// app/components/NavbarUserMenu.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

export default function NavbarUserMenu({ lang }: { lang: string }) {
  const { data: session, isPending } = authClient.useSession(); // ← REACTIVO
  const user = session?.user;

  if (isPending) {
    return <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />;
  }

  if (user) {
    const avatarSrc =
      user.image ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(
        user.name || user.email || 'User'
      )}&background=006655&color=fff`;

    return (
      <button className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-accent transition-all">
        <Image
          alt={user.name || 'Profile'}
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
    <Link href={`/${lang}/login`} className="btn-primary">
      Log in
    </Link>
  );
}
```

### Paso 2 — El Navbar (Server Component) solo invoca el Client Component

```tsx
// app/components/Navbar.tsx
import NavbarUserMenu from './NavbarUserMenu';

export default async function Navbar({ lang = 'es' }) {
  // ✅ NO leer auth.getSession() aquí para el avatar
  return (
    <nav>
      {/* ...resto del navbar... */}
      <NavbarUserMenu lang={lang} />
    </nav>
  );
}
```

### Paso 3 — SessionVerifier en el layout raíz

```tsx
// app/[lang]/layout.tsx
import { Suspense } from 'react';
import SessionVerifier from '@/app/components/SessionVerifier';

export default async function RootLayout({ children, params }) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense fallback={null}>
          <SessionVerifier />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
```

```tsx
// app/components/SessionVerifier.tsx
'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SessionVerifier() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifier = searchParams.get('neon_auth_session_verifier');
    if (verifier) {
      const url = new URL(window.location.href);
      url.searchParams.delete('neon_auth_session_verifier');
      setTimeout(() => {
        router.replace(url.pathname + (url.search || ''));
        router.refresh();
      }, 500);
    }
  }, [searchParams, router]);

  return null;
}
```

---

## 🔑 Regla de Oro

> **Cualquier UI que dependa del estado de autenticación del usuario DEBE ser un Client Component usando `authClient.useSession()`.**

La sesión en Next.js App Router es **asíncrona y puntual en el servidor**, pero **reactiva en el cliente**. Mezclarlas en el mismo componente causa race conditions.

| Escenario | Usar |
|-----------|------|
| Avatar, nombre, email del usuario | `authClient.useSession()` en Client Component |
| Proteger rutas / redirigir en server | `auth.getSession()` en middleware o Server Component |
| Datos privados del usuario desde DB | `auth.getSession()` en Server Action o Route Handler |

---

## 🐛 El Error de Hidratación "pronounceRootElement"

Si ves en consola:
```
Hydration failed... pronounceRootElement
chrome-extension://egjidjbpglichdcondbcbdnbeeppgdph/inpage.js
```

**No es tu código.** Es la extensión **"Pronounce"** de Chrome inyectando elementos en el DOM.

- ✅ Prueba en modo incógnito (sin extensiones)
- ✅ En producción no ocurre nunca
- ✅ `suppressHydrationWarning` en `<html>` y `<body>` es la solución correcta

---

## 📋 Checklist para nuevos proyectos con OAuth + Neon Auth

- [ ] `lib/auth-client.ts` con `'use client'` y `createAuthClient()`
- [ ] `lib/auth/server.ts` con `createNeonAuth()` (solo para server/middleware)
- [ ] `SessionVerifier` en el layout raíz dentro de `<Suspense fallback={null}>`
- [ ] `suppressHydrationWarning` en `<html>` y `<body>`
- [ ] Avatar/menú de usuario → **siempre** Client Component con `useSession()`
- [ ] `next.config.ts` → `images.remotePatterns` para avatares OAuth:
  ```js
  { hostname: 'lh3.googleusercontent.com' },    // Google
  { hostname: 'avatars.githubusercontent.com' }, // GitHub
  { hostname: 'ui-avatars.com' },               // Fallback generado
  ```

---

*Creado: 2026-06-30 | Stack: Next.js App Router + Neon Auth + OAuth*
