"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const { items, subtotal, updateQuantity, removeItem, isCartOpen, closeCart, checkout } = useCart();
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, closeCart]);
  
  if (!isCartOpen) return null;
  
  const shipping = subtotal >= 500000 ? 0 : 25000;
  const total = subtotal + shipping;
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col md:flex-row">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />
      
      {/* Cart Panel */}
      <aside className="relative w-full md:w-96 bg-black border-l border-neutral-800 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-800">
          <h2 className="text-xl font-bold text-white">Keranjang ({items.length})</h2>
          <button
            onClick={closeCart}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Tutup keranjang"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <svg className="w-16 h-16 text-neutral-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-neutral-400">Keranjang kosong</p>
              <p className="text-neutral-600 text-sm mt-1">Tambah produk untuk memulai belanja</p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="mt-6 px-6 py-3 bg-[#C0392B] text-white font-semibold rounded-lg hover:bg-[#E74C3C] transition-colors"
              >
                Mulai Belanja
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={`${item.productId}-${item.size}`} className="flex gap-3">
                <Link href={`/product/${item.productSlug}`} className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </Link>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <Link href={`/product/${item.productSlug}`} onClick={closeCart} className="block">
                      <h4 className="font-medium text-white truncate group-hover:text-[#C0392B] transition-colors">{item.name}</h4>
                      <p className="text-xs text-neutral-500 mt-0.5">Size: {item.size}</p>
                    </Link>
                    <p className="font-semibold text-white mt-1">{formatCurrency(item.price)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-neutral-700 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                        className="px-2.5 py-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                        aria-label="Kurangi"
                      >−</button>
                      <span className="px-3 py-1.5 text-sm font-medium text-white w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                        className="px-2.5 py-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                        aria-label="Tambah"
                      >+</button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.size)}
                      className="text-xs text-neutral-500 hover:text-red-400 transition-colors"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-4 border-t border-neutral-800 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-neutral-400">
                <span>Subtotal</span>
                <span className="text-white">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Ongkir</span>
                <span className="text-white">{shipping === 0 ? 'Gratis' : formatCurrency(shipping)}</span>
              </div>
              {shipping === 0 && (
                <p className="text-xs text-green-400 flex items-center justify-end gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gratis ongkir untuk order {'>'} Rp 500.000
                </p>
              )}
              <div className="flex justify-between border-t border-neutral-800 pt-2 text-base font-bold text-white">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
            
            <div className="space-y-3 pt-2">
              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  closeCart();
                  // Navigate to cart page for checkout
                  window.location.href = '/cart';
                }}
              >
                Lanjut ke Checkout
              </Button>
              <Link
                href="/shop"
                onClick={closeCart}
                className="block w-full text-center px-6 py-3.5 border-2 border-neutral-700 text-neutral-300 font-semibold rounded-lg hover:border-[#C0392B] hover:text-white transition-colors"
              >
                Lanjut Belanja
              </Link>
            </div>
          </div>
        )}
      </aside>
      
      <style jsx>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}