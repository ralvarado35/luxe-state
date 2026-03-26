# Best Practices Inmobiliarias (Luxe Estate)

Guía condensada de puntos clave para el desarrollo de la plataforma.

---

### 🏗️ Arquitectura y Rendimiento
*   **Server components:** Usar RSC por defecto para reducir el JS en el cliente.
*   **ISR (Incremental Static Regeneration):** Actualizar listados cada 60s sin rebiuld completo.
*   **Streaming/Suspense:** Mostrar Skeletons durante el fetch de propiedades.
*   **Image Optimization:**
    *   Formas modernos (WebP/AVIF).
    *   `priority` en la imagen principal (Hero).
    *   `blurDataURL` para el placeholder de carga.
*   **Dynamic Imports:** Cargar componentes pesados (mapas, sliders) solo cuando sean necesarios.

### 🎨 Diseño y Estética Premium
*   **Colores clave:** `Nordic` (Oscuro), `Mosque` (Acción), `Hint of Green` (Acentos), `Clear Day` (Fondo).
*   **Tipografía:** **SF Pro Display** obligatorio (Inter como fallback).
*   **Visuales:** Imágenes de alta resolución, bordes redondeados suaves y sombras sutiles.
*   **Hovers:** Micro-interacciones fluidas en tarjetas y botones.
*   **Layout:** Uso de espacios en blanco (whitespace) para un aire minimalista y limpio.

### 🔍 Experiencia de Usuario (UX)
*   **Filtros rápidos:** Precio, ubicación y tipo de propiedad siempre accesibles.
*   **Maps Search:** Integración de mapa interactivo con pines visuales.
*   **Property Detail:**
    *   Galería de fotos intuitiva.
    *   Información técnica clara (m², cuartos, baños).
    *   Botón directo de contacto/WhatsApp.
*   **Simuladores:** Calculadora de cuotas hipotecarias integrada.
*   **Favoritos:** Guardado de propiedades sin necesidad de registro inmediato.

### 🚀 SEO e Indexación
*   **SEO Dinámico:** Meta-tags únicos por propiedad (Título con ubicación + precio).
*   **JSON-LD:** Datos estructurados para aparecer como "Product/Real Estate Listing" en Google.
*   **Friendly URLs:** `luxeestate.com/ventas/apartamento-miramontes-tegucigalpa`.
*   **Sitemap Dinámico:** Indexación automática de nuevas entradas.
*   **Content Marketing:** Blog de guías por zona para captar tráfico "top of funnel".

### 💡 Ideas de Valor Agregado
*   **AI Match:** Sugerencias basadas en búsquedas anteriores.
*   **Comparador:** Tabla visual de diferencias entre 2 o 3 propiedades.
*   **Market Insights:** Gráficos de tendencia de precios en la zona.
*   **Tour 360:** Recorridos virtuales integrados directamente en el detalle.

---
> [!IMPORTANT]
> Cada pixel debe transmitir **lujo y profesionalismo**. Menos es más.
