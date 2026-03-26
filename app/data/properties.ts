export interface Property {
  id: string;
  title: string;
  slug: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  images?: string[];
  description?: string;
  amenities?: string[];
  type: 'sale' | 'rent';
  isExclusive?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const featuredProperties: Property[] = [
  {
    id: 'f1',
    title: 'The Glass Pavilion',
    slug: 'the-glass-pavilion',
    price: 5250000,
    location: 'Beverly Hills, California',
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjNDU9iE4zwPuWeg-CjIrLI-87GF24_LgOggcXT0vmUYfMx2q1dJAheiqWqVN-39uiwyLKEfP18FsG1vtUyAPX902OhGEfM4clcQiDsJW7MBbc_BoMtZXtqIeFKIfkHnkIPwmFbQg8Eaan6ULV99T8AUVUuKsro0HoTMrIaxw5pp1uSuQlF8X5Dait4US1W4vmyZnVioXbFnCoaOOZ0LPorb0rVGAIQd9reWcpqq27C0oO4ltnsCTHIcjIm0xp-2qVbRJSIZzWPv0'
    ],
    description: 'Experience modern luxury in this architecturally stunning home. Featuring floor-to-ceiling glass walls and premium finishes throughout.',
    amenities: ['Smart Home System', 'Swimming Pool', 'Private Gym', 'Wine Cellar'],
    type: 'sale',
    isExclusive: true,
    isFeatured: true,
  },
  {
    id: 'f2',
    title: 'Azure Heights Penthouse',
    slug: 'azure-heights-penthouse',
    price: 3800000,
    location: 'Downtown, Vancouver',
    beds: 3,
    baths: 3,
    sqft: 2100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s'
    ],
    description: 'A breathtaking penthouse in the heart of Vancouver, offering panoramic city views and ultra-modern amenities.',
    amenities: ['24/7 Concierge', 'Roof Terrace', 'Private Elevator'],
    type: 'sale',
    isNew: true,
    isFeatured: true,
  },
];

export const newProperties: Property[] = [
  {
    id: 'n1',
    title: 'Modern Family Home',
    slug: 'modern-family-home',
    price: 850000,
    location: '123 Pine St, Seattle',
    beds: 3,
    baths: 2,
    sqft: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E',
    type: 'sale',
  },
  {
    id: 'n2',
    title: 'Urban Loft',
    slug: 'urban-loft',
    price: 3200,
    location: '456 Elm Ave, Portland',
    beds: 1,
    baths: 1,
    sqft: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4',
    type: 'rent',
  },
  {
    id: 'n3',
    title: 'Highland Retreat',
    slug: 'highland-retreat',
    price: 620000,
    location: '789 Mountain Rd, Bend',
    beds: 2,
    baths: 2,
    sqft: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro',
    type: 'sale',
  },
  {
    id: 'n4',
    title: 'Sea View Penthouse',
    slug: 'sea-view-penthouse',
    price: 4500,
    location: '321 Ocean Dr, Miami',
    beds: 3,
    baths: 3,
    sqft: 180,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U',
    type: 'rent',
  },
  {
    id: 'n5',
    title: 'Central Studio',
    slug: 'central-studio',
    price: 550000,
    location: '555 Main St, Chicago',
    beds: 1,
    baths: 1,
    sqft: 50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE',
    type: 'sale',
  },
  {
    id: 'n6',
    title: 'Garden Villa',
    slug: 'garden-villa',
    price: 2800,
    location: '999 Oak Ln, Austin',
    beds: 2,
    baths: 2,
    sqft: 110,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8',
    type: 'rent',
  },
  {
    id: 'n7',
    title: 'Coastal Cliffside Mansion',
    slug: 'coastal-cliffside-mansion',
    price: 8900000,
    location: 'Malibu, California',
    beds: 6,
    baths: 7,
    sqft: 8500,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
  },
  {
    id: 'n8',
    title: 'Rustic Forest Lodge',
    slug: 'rustic-forest-lodge',
    price: 3500000,
    location: 'Aspen, Colorado',
    beds: 5,
    baths: 4,
    sqft: 4200,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
  },
  {
    id: 'n9',
    title: 'Modernist Desert Oasis',
    slug: 'modernist-desert-oasis',
    price: 2200000,
    location: 'Scottsdale, Arizona',
    beds: 4,
    baths: 3.5,
    sqft: 3800,
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isNew: true,
  },
  {
    id: 'n10',
    title: 'Historic Brownstone',
    slug: 'historic-brownstone',
    price: 4200000,
    location: 'Brooklyn, New York',
    beds: 5,
    baths: 4.5,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
  },
  {
    id: 'n11',
    title: 'Lakefront Glass House',
    slug: 'lakefront-glass-house',
    price: 5800000,
    location: 'Lake Tahoe, Nevada',
    beds: 4,
    baths: 4,
    sqft: 5200,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
  },
  {
    id: 'n12',
    title: 'Minimalist Zen Retreat',
    slug: 'minimalist-zen-retreat',
    price: 1500000,
    location: 'Kyoto, Japan',
    beds: 3,
    baths: 2,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1472224311441-914510e44ee3?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
  },
  {
    id: 'n13',
    title: 'Industrial Loft Penthouse',
    slug: 'industrial-loft-penthouse',
    price: 2900000,
    location: 'London, UK',
    beds: 3,
    baths: 3,
    sqft: 3100,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isNew: true,
  },
  {
    id: 'n14',
    title: 'Tropical Beachfront Bungalow',
    slug: 'tropical-beachfront-bungalow',
    price: 850000,
    location: 'Bali, Indonesia',
    beds: 2,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
  },
  {
    id: 'n15',
    title: 'European Lakeside Estate',
    slug: 'european-lakeside-estate',
    price: 12000000,
    location: 'Lake Como, Italy',
    beds: 8,
    baths: 10,
    sqft: 12500,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
  },
  {
    id: 'n16',
    title: 'Modern Farmhouse',
    slug: 'modern-farmhouse',
    price: 6500000,
    location: 'Napa Valley, California',
    beds: 5,
    baths: 5,
    sqft: 5800,
    image: 'https://images.unsplash.com/photo-1628744219436-b5e80fa9aa07?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
  },
];

export const PROPERTIES_PER_PAGE = 8;

export function getPaginatedProperties(page: number) {
  const totalItems = newProperties.length;
  const totalPages = Math.ceil(totalItems / PROPERTIES_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * PROPERTIES_PER_PAGE;
  const items = newProperties.slice(start, start + PROPERTIES_PER_PAGE);

  return {
    items,
    currentPage,
    totalPages,
    totalItems,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
  };
}
