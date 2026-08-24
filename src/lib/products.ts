export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'tshirt' | 'hoodie' | 'pants' | 'accessories';
  sizes: string[];
  description: string;
  materials: string[];
  features: string[];
  fit: 'oversized' | 'regular' | 'slim';
  isNew?: boolean;
  isFeatured?: boolean;
  stock: Record<string, number>;
  createdAt: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'prototype-tee-black',
    name: 'Prototype Tee',
    price: 299000,
    originalPrice: 349000,
    images: [
      '/logo.png',
      '/logo-dark.png',
      '/logo-mark.png',
    ],
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Kaos signature HALT.CO dengan potongan oversized dan bahan cotton combed 30s premium. Desain liquid typography "halt.co" di dada depan, merepresentasikan filosofi "break the pattern."',
    materials: [
      '100% Cotton Combed 30s',
      'Gramasi 200 GSM',
      'Preshrunk & Anti-pilling',
      'Jahitan double needle',
      'Label woven custom',
    ],
    features: [
      'Oversize Fit',
      'Drop Shoulder',
      'Crew Neck',
      'Heavyweight Cotton',
    ],
    fit: 'oversized',
    isNew: true,
    isFeatured: true,
    stock: {
      S: 15,
      M: 25,
      L: 30,
      XL: 20,
      XXL: 10,
    },
    createdAt: '2026-01-15',
  },
  {
    id: '2',
    slug: 'prototype-tee-white',
    name: 'Prototype Tee',
    price: 299000,
    originalPrice: 349000,
    images: [
      '/logo-dark.png',
      '/logo.png',
      '/logo-mark.png',
    ],
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Variasi putih dari Prototype Tee signature. Liquid typography hitam di dada depan yang kontras, cocok untuk layering atau standalone.',
    materials: [
      '100% Cotton Combed 30s',
      'Gramasi 200 GSM',
      'Preshrunk & Anti-pilling',
      'Jahitan double needle',
      'Label woven custom',
    ],
    features: [
      'Oversize Fit',
      'Drop Shoulder',
      'Crew Neck',
      'Heavyweight Cotton',
    ],
    fit: 'oversized',
    isNew: true,
    isFeatured: false,
    stock: {
      S: 10,
      M: 20,
      L: 25,
      XL: 15,
      XXL: 5,
    },
    createdAt: '2026-01-15',
  },
  {
    id: '3',
    slug: 'heavyweight-hoodie-black',
    name: 'Heavyweight Hoodie',
    price: 599000,
    originalPrice: 699000,
    images: [
      '/logo-mark.png',
      '/logo.png',
      '/logo-dark.png',
    ],
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Hoodie heavyweight 400 GSM dari french terry premium. Desain minimalis dengan logo HALT.CO liquid typography di dada kiri dan "break the pattern." di lengan kanan. Fleece lining untuk kehangatan maksimal.',
    materials: [
      '100% Cotton French Terry',
      'Gramasi 400 GSM',
      'Fleece lining premium',
      'Kantung kangaroo reinforced',
      'Hood adjustable dengan drawstring custom',
      'Rib cuff & hem',
    ],
    features: [
      'Oversize Fit',
      'Drop Shoulder',
      'Heavyweight French Terry',
      'Fleece Lined',
    ],
    fit: 'oversized',
    isNew: true,
    isFeatured: true,
    stock: {
      S: 8,
      M: 12,
      L: 15,
      XL: 10,
      XXL: 5,
    },
    createdAt: '2026-02-01',
  },
  {
    id: '4',
    slug: 'relaxed-cargo-pants-black',
    name: 'Relaxed Cargo Pants',
    price: 449000,
    originalPrice: 499000,
    images: [
      '/logo.png',
      '/logo-mark.png',
      '/logo-dark.png',
    ],
    category: 'pants',
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Cargo pants relaxed fit dari twill cotton stretch. Multiple pocket utility, elastic waistband dengan drawstring, stopper custom HALT.CO. Desain fungsional untuk aktivitas sehari-hari.',
    materials: [
      '98% Cotton 2% Spandex Twill',
      'Stretch 4-way',
      'Elastic waistband + drawstring',
      'Kantung cargo utility',
      'Stopper & zipper custom',
    ],
    features: [
      'Relaxed Fit',
      'Stretch 4-Way',
      'Multi Pocket',
      'Custom Hardware',
    ],
    fit: 'regular',
    isNew: false,
    isFeatured: false,
    stock: {
      '28': 10,
      '30': 15,
      '32': 20,
      '34': 15,
      '36': 8,
    },
    createdAt: '2026-02-15',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter(p => p.isNew);
}

export function getAllProducts(): Product[] {
  return [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getRelatedProducts(currentSlug: string, limit = 4): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return [];
  return products
    .filter(p => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export function getSizeChart(category: Product['category']) {
  const charts: Record<string, any[]> = {
    tshirt: [
      { size: 'S', length: 68, chest: 52, shoulder: 48, sleeve: 22 },
      { size: 'M', length: 70, chest: 55, shoulder: 50, sleeve: 23 },
      { size: 'L', length: 72, chest: 58, shoulder: 52, sleeve: 24 },
      { size: 'XL', length: 74, chest: 61, shoulder: 54, sleeve: 25 },
      { size: 'XXL', length: 76, chest: 64, shoulder: 56, sleeve: 26 },
    ],
    hoodie: [
      { size: 'S', length: 68, chest: 55, shoulder: 50, sleeve: 58 },
      { size: 'M', length: 70, chest: 58, shoulder: 52, sleeve: 59 },
      { size: 'L', length: 72, chest: 61, shoulder: 54, sleeve: 60 },
      { size: 'XL', length: 74, chest: 64, shoulder: 56, sleeve: 61 },
      { size: 'XXL', length: 76, chest: 67, shoulder: 58, sleeve: 62 },
    ],
    pants: [
      { size: '28', length: 98, chest: 38 },
      { size: '30', length: 100, chest: 40 },
      { size: '32', length: 102, chest: 42 },
      { size: '34', length: 104, chest: 44 },
      { size: '36', length: 106, chest: 46 },
    ],
  };
  return charts[category] || charts.tshirt;
}