import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { CartPageClient } from './CartPageClient';

export const metadata: Metadata = {
  title: 'Keranjang',
  description: 'Keranjang belanja HALT.CO - Review dan checkout pesanan Anda.',
  openGraph: {
    title: 'Keranjang | HALT.CO',
    description: 'Keranjang belanja HALT.CO',
  },
};

export default function CartPage() {
  return <CartPageClient />;
}