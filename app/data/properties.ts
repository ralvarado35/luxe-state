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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjNDU9iE4zwPuWeg-CjIrLI-87GF24_LgOggcXT0vmUYfMx2q1dJAheiqWqVN-39uiwyLKEfP18FsG1vtUyAPX902OhGEfM4clcQiDsJW7MBbc_BoMtZXtqIeFKIfkHnkIPwmFbQg8Eaan6ULV99T8AUVUuKsro0HoTMrIaxw5pp1uSuQlF8X5Dait4US1W4vmyZnVioXbFnCoaOOZ0LPorb0rVGAIQd9reWcpqq27C0oO4ltnsCTHIcjIm0xp-2qVbRJSIZzWPv0',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
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
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A beautifully designed modern family home nestled in a quiet Seattle neighborhood, featuring an open-plan kitchen and landscaped backyard.',
    amenities: ['Backyard Garden', 'Garage', 'Fireplace', 'Modern Kitchen'],
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
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Chic industrial-style loft in the heart of Portland with exposed brick, high ceilings, and stunning city views.',
    amenities: ['High Ceilings', 'Exposed Brick', 'City Views', 'Gym Access'],
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
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A serene mountain retreat nestled in the Bend highlands with breathtaking views, cozy interiors, and direct trail access.',
    amenities: ['Mountain Views', 'Fireplace', 'Trail Access', 'Wood Deck'],
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
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U',
      'https://images.unsplash.com/photo-1551361415-69c87624334c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Stunning oceanfront penthouse in Miami featuring panoramic sea views, private rooftop terrace, and resort-style amenities.',
    amenities: ['Ocean Views', 'Rooftop Terrace', 'Pool', 'Valet Parking'],
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
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A sleek and efficient studio apartment in the heart of Chicago, perfect for urban professionals seeking style and convenience.',
    amenities: ['City Views', 'Doorman', 'Rooftop Lounge', 'Bike Storage'],
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
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A charming villa surrounded by lush gardens in Austin\'s most sought-after neighborhood. Enjoy indoor-outdoor living at its finest.',
    amenities: ['Private Garden', 'Patio', 'Outdoor Kitchen', 'Irrigation System'],
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
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A magnificent cliffside mansion perched above the Pacific Ocean in Malibu, delivering unrivaled views and world-class luxury living.',
    amenities: ['Infinity Pool', 'Home Theater', 'Private Beach Access', 'Helipad'],
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
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Escape to this magnificent ski-in/ski-out lodge in Aspen, blending rustic charm with contemporary luxury amid Colorado\'s mountains.',
    amenities: ['Ski-In/Ski-Out', 'Hot Tub', 'Stone Fireplace', 'Game Room'],
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
    images: [
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A stunning modernist residence in the Sonoran Desert featuring dramatic cantilevers, desert landscaping, and a resort-style pool.',
    amenities: ['Desert Pool', 'Outdoor Fireplace', 'Solar Panels', 'Golf Views'],
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
    images: [
      'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'An impeccably restored 19th-century Brooklyn brownstone combining original architectural details with refined modern updates.',
    amenities: ['Original Parquet Floors', 'Chef\'s Kitchen', 'Private Garden', 'Wine Cellar'],
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
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A breathtaking glass-and-steel residence on the shores of Lake Tahoe, perfectly merging architectural purity with natural splendor.',
    amenities: ['Private Dock', 'Heated Floors', 'Boat House', 'Sauna'],
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
    images: [
      'https://images.unsplash.com/photo-1472224311441-914510e44ee3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584286595398-a59511ea4b79?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A masterpiece of minimalist architecture in historic Kyoto, featuring a traditional Japanese garden, shoji screens, and meditation spaces.',
    amenities: ['Zen Garden', 'Tea Room', 'Soaking Tub', 'Bamboo Grove'],
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
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1536437075651-01d675529a5d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185009-5bf9f2849488?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A converted Victorian warehouse penthouse in London\'s vibrant East End featuring soaring ceilings, original ironwork, and skyline terraces.',
    amenities: ['Roof Terrace', 'Exposed Steel Beams', 'Concierge', 'Secure Parking'],
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
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A idyllic thatch-roofed bungalow on a pristine Bali beach, blending Balinese craftsmanship with open-air tropical living.',
    amenities: ['Private Beach Access', 'Plunge Pool', 'Outdoor Shower', 'Rice Field Views'],
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
    images: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A grand 19th-century villa on Lake Como\'s most coveted shores, offering terraced gardens, a private boat house, and timeless Italian elegance.',
    amenities: ['Private Jetty', 'Formal Gardens', 'Ballroom', 'Guest Cottage'],
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
    images: [
      'https://images.unsplash.com/photo-1628744219436-b5e80fa9aa07?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A stunning modern farmhouse on 10 acres of Napa Valley wine country featuring a private vineyard, barn conversion, and panoramic valley views.',
    amenities: ['Private Vineyard', 'Cellar Tasting Room', 'Horse Stables', 'Guest House'],
    type: 'sale',
  },
  {
    id: 'n17',
    title: 'Skyline Penthouse Suite',
    slug: 'skyline-penthouse-suite',
    price: 7200000,
    location: 'Manhattan, New York',
    beds: 4,
    baths: 4,
    sqft: 4800,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
    amenities: ['Panoramic Views', 'Private Elevator', 'Concierge', 'Gym'],
    description: 'Ultra-luxury penthouse atop a Midtown Manhattan tower with 360° views of the skyline and Central Park.',
  },
  {
    id: 'n18',
    title: 'Tuscan Stone Villa',
    slug: 'tuscan-stone-villa',
    price: 3400000,
    location: 'Florence, Italy',
    beds: 5,
    baths: 4,
    sqft: 5600,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isNew: true,
    amenities: ['Vineyard', 'Olive Garden', 'Stone Terrace', 'Wine Cellar'],
    description: 'A breathtaking 16th-century stone villa nestled in the rolling Tuscan hills with private vineyard and olive grove.',
  },
  {
    id: 'n19',
    title: 'Pacific Heights Victorian',
    slug: 'pacific-heights-victorian',
    price: 5100000,
    location: 'San Francisco, California',
    beds: 6,
    baths: 5,
    sqft: 6200,
    image: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    amenities: ['Bay Views', 'Chef\'s Kitchen', 'Garden', 'Carriage House'],
    description: 'An impeccably restored Victorian mansion in prestigious Pacific Heights with sweeping Bay and bridge views.',
  },
  {
    id: 'n20',
    title: 'Hamptons Beach Estate',
    slug: 'hamptons-beach-estate',
    price: 14500000,
    location: 'Southampton, New York',
    beds: 8,
    baths: 9,
    sqft: 11000,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
    amenities: ['Private Beach', 'Tennis Court', 'Pool', 'Guest House'],
    description: 'A legendary oceanfront estate in the Hamptons featuring private beach access, formal gardens, and unmatched luxury.',
  },
  {
    id: 'n21',
    title: 'Zen Courtyard Home',
    slug: 'zen-courtyard-home',
    price: 1850000,
    location: 'Santa Fe, New Mexico',
    beds: 3,
    baths: 3,
    sqft: 2900,
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isNew: true,
    amenities: ['Courtyard Pool', 'Adobe Architecture', 'Mountain Views', 'Meditation Garden'],
    description: 'A serene adobe residence in Santa Fe with a private zen courtyard, reflecting pool, and dramatic mountain panoramas.',
  },
  {
    id: 'n22',
    title: 'Portobello Canal House',
    slug: 'portobello-canal-house',
    price: 2600000,
    location: 'Amsterdam, Netherlands',
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    amenities: ['Canal Views', 'Boat Mooring', 'Historic Facade', 'Private Garden'],
    description: 'A stunning 17th-century merchant\'s canal house in Amsterdam\'s Golden Bend with private boat mooring and lush courtyard.',
  },
  {
    id: 'n23',
    title: 'Coconut Grove Compound',
    slug: 'coconut-grove-compound',
    price: 9800000,
    location: 'Coconut Grove, Miami',
    beds: 7,
    baths: 8,
    sqft: 9200,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
    amenities: ['Bayside Views', 'Infinity Pool', 'Private Dock', 'Smart Home'],
    description: 'A grand tropical compound on Biscayne Bay featuring lush landscaping, private dock, and resort-quality amenities.',
  },
  {
    id: 'n24',
    title: 'Montmartre Artist Loft',
    slug: 'montmartre-artist-loft',
    price: 5200,
    location: 'Paris, France',
    beds: 2,
    baths: 2,
    sqft: 1600,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    type: 'rent',
    isNew: true,
    amenities: ['Eiffel Tower Views', 'Skylight', 'Exposed Beams', 'Terrace'],
    description: 'A charming top-floor artist\'s loft in Montmartre with dramatic skylights, exposed oak beams, and Eiffel Tower views.',
  },
  {
    id: 'n25',
    title: 'Cliffside Retreat',
    slug: 'cliffside-retreat',
    price: 4750000,
    location: 'Big Sur, California',
    beds: 4,
    baths: 3.5,
    sqft: 3600,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    amenities: ['Ocean Bluff Views', 'Infinity Pool', 'Fire Pits', 'Helipad'],
    description: 'Perched on the iconic Big Sur coastline, this architectural masterpiece offers absolute seclusion with dramatic Pacific vistas.',
  },
  {
    id: 'n26',
    title: 'Georgetown Federal Townhouse',
    slug: 'georgetown-federal-townhouse',
    price: 3750000,
    location: 'Georgetown, Washington D.C.',
    beds: 5,
    baths: 4.5,
    sqft: 4100,
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    amenities: ['Historic Details', 'Chef\'s Kitchen', 'Rooftop Terrace', 'Parking'],
    description: 'An elegant Federal-style brick townhouse in historic Georgetown with period details and a stunning rooftop entertaining terrace.',
  },
  {
    id: 'n27',
    title: 'Tulum Jungle Bungalow',
    slug: 'tulum-jungle-bungalow',
    price: 1200000,
    location: 'Tulum, Mexico',
    beds: 3,
    baths: 3,
    sqft: 2200,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isNew: true,
    amenities: ['Cenote Access', 'Plunge Pool', 'Palapa Roof', 'Solar Power'],
    description: 'A sustainably built jungle retreat in Tulum with a private cenote, palapa-style architecture, and off-grid solar systems.',
  },
  {
    id: 'n28',
    title: 'Lake District Manor',
    slug: 'lake-district-manor',
    price: 4900000,
    location: 'Windermere, England',
    beds: 7,
    baths: 6,
    sqft: 8800,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
    amenities: ['Lake Views', 'Boathouse', 'Formal Gardens', 'Wine Cellar'],
    description: 'A distinguished Victorian manor on the shores of Lake Windermere with stunning lake views and private boathouse.',
  },
  {
    id: 'n29',
    title: 'Chelsea Pied-à-Terre',
    slug: 'chelsea-pied-a-terre',
    price: 3800,
    location: 'Chelsea, London',
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
    type: 'rent',
    amenities: ['Concierge', 'Private Gym', 'River Views', 'Parking'],
    description: 'A sophisticated pied-à-terre in coveted Chelsea with Thames views, porter service, and access to a private residents\' garden.',
  },
  {
    id: 'n30',
    title: 'Blue Ridge Mountain Cabin',
    slug: 'blue-ridge-mountain-cabin',
    price: 895000,
    location: 'Asheville, North Carolina',
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isNew: true,
    amenities: ['Mountain Views', 'Hot Tub', 'Stone Fireplace', 'Wraparound Porch'],
    description: 'A luxury log cabin in the Blue Ridge Mountains with wraparound porches, stone fireplace, and panoramic Appalachian views.',
  },
  {
    id: 'n31',
    title: 'Patagonia Ranche Estancia',
    slug: 'patagonia-ranche-estancia',
    price: 6700000,
    location: 'Bariloche, Argentina',
    beds: 6,
    baths: 5,
    sqft: 7400,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
    amenities: ['Andean Views', 'Private Lake', 'Horse Stables', 'Helicopter Pad'],
    description: 'A legendary estancia on the shores of a glacial Patagonian lake, offering 500 acres of pristine wilderness and luxury.',
  },
  {
    id: 'n32',
    title: 'SoHo Cast Iron Loft',
    slug: 'soho-cast-iron-loft',
    price: 7500,
    location: 'SoHo, New York',
    beds: 3,
    baths: 2,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1536437075651-01d675529a5d?auto=format&fit=crop&w=1200&q=80',
    type: 'rent',
    amenities: ['Exposed Cast Iron', 'Floor-to-Ceiling Windows', 'Open Kitchen', 'Doorman'],
    description: 'A magnificent 3,000 sqft loft in a landmarked SoHo cast iron building with original columns and gallery-like proportions.',
  },
  {
    id: 'n33',
    title: 'Santorini Cliffside Villa',
    slug: 'santorini-cliffside-villa',
    price: 5400000,
    location: 'Oia, Santorini, Greece',
    beds: 4,
    baths: 4,
    sqft: 3800,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
    amenities: ['Caldera Views', 'Infinity Pool', 'Cave Rooms', 'Sunset Terrace'],
    description: 'The quintessential Santorini experience — a whitewashed caldera villa with iconic blue-domed views and a sky-pool above the Aegean.',
  },
  {
    id: 'n34',
    title: 'Gold Coast Penthouse',
    slug: 'gold-coast-penthouse',
    price: 3900000,
    location: 'Chicago, Illinois',
    beds: 3,
    baths: 3,
    sqft: 3400,
    image: 'https://images.unsplash.com/photo-1551361415-69c87624334c?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isNew: true,
    amenities: ['Lake Michigan Views', 'Rooftop Terrace', 'Private Elevator', 'Gym'],
    description: 'A dramatic full-floor penthouse in Chicago\'s Gold Coast neighborhood with wraparound lakefront terraces and unmatched skyline views.',
  },
  {
    id: 'n35',
    title: 'Marbella Golf Estate',
    slug: 'marbella-golf-estate',
    price: 8200000,
    location: 'Marbella, Spain',
    beds: 7,
    baths: 8,
    sqft: 10500,
    image: 'https://images.unsplash.com/photo-1628744219436-b5e80fa9aa07?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isExclusive: true,
    amenities: ['Golf Course Views', 'Infinity Pool', 'Mediterranean Garden', 'Cinema'],
    description: 'A palatial Andalusian estate in Marbella\'s Golden Mile with a private cinema, championship golf views, and full-time staff.',
  },
  {
    id: 'n36',
    title: 'Capitol Hill Craftsman',
    slug: 'capitol-hill-craftsman',
    price: 1450000,
    location: 'Seattle, Washington',
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    type: 'sale',
    isNew: true,
    amenities: ['Craftsman Detail', 'Rooftop Deck', 'Modern Kitchen', 'Garage'],
    description: 'A meticulously renovated 1920s Craftsman bungalow in vibrant Capitol Hill with mountain views from a new rooftop deck.',
  },
];

export interface PropertyFilters {
  query?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: string;
  beds?: number;
  baths?: number;
  amenities?: string[];
  category?: string;
}

export const PROPERTIES_PER_PAGE = 8;

export function getPaginatedProperties(page: number, filters: PropertyFilters = {}) {
  console.log('--- Filtering Properties ---');
  console.log('Filters received:', JSON.stringify(filters, null, 2));
  
  let filtered = [...newProperties];

  // Search logic
  if (filters.query) {
    const q = filters.query.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.location.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }

  // Location filter
  if (filters.location) {
    const loc = filters.location.toLowerCase();
    filtered = filtered.filter(p => p.location.toLowerCase().includes(loc));
  }

  // Price range
  if (filters.minPrice !== undefined && !isNaN(filters.minPrice)) {
    filtered = filtered.filter(p => p.price >= filters.minPrice!);
  }
  if (filters.maxPrice !== undefined && !isNaN(filters.maxPrice)) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice!);
  }

  // Property type (sale/rent or specific category in title)
  if (filters.type && filters.type !== 'all' && filters.type !== 'Any Type') {
    const t = filters.type.toLowerCase();
    filtered = filtered.filter(p => 
      p.type === t || p.title.toLowerCase().includes(t)
    );
  }

  // Rooms
  if (filters.beds && filters.beds > 0) {
    filtered = filtered.filter(p => p.beds >= filters.beds!);
  }
  if (filters.baths && filters.baths > 0) {
    filtered = filtered.filter(p => p.baths >= filters.baths!);
  }

  // Amenities
  if (filters.amenities && filters.amenities.length > 0) {
    filtered = filtered.filter(p => 
      filters.amenities!.every(a => 
        p.amenities?.some(pa => pa.toLowerCase().includes(a.toLowerCase()))
      )
    );
  }

  // Category (top-level chips)
  if (filters.category && filters.category !== 'All') {
    const cat = filters.category.toLowerCase();
    filtered = filtered.filter(p => p.title.toLowerCase().includes(cat));
  }

  console.log('Result count:', filtered.length);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PROPERTIES_PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * PROPERTIES_PER_PAGE;
  const items = filtered.slice(start, start + PROPERTIES_PER_PAGE);

  return {
    items,
    currentPage,
    totalPages,
    totalItems,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
  };
}
