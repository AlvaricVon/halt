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

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL' | '28' | '30' | '32' | '34' | '36';

export interface SizeChart {
  size: Size;
  length: number; // LD - Lingkar Dada / Body Length
  chest: number;  // PB - Panjang Badan / Chest Width
  shoulder?: number;
  sleeve?: number;
}

export interface CartItem {
  productId: string;
  productSlug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerInfo;
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: 'transfer' | 'cod';
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  whatsappMessage: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  notes?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  instagram: string;
  tiktok: string;
  address: string;
  founded: string;
  location: string;
}