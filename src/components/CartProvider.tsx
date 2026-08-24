"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CartItem } from '@/types';
import { formatCurrency, generateWhatsAppMessage } from '@/lib/utils';
import { siteConfig } from '@/lib/config';

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
  checkout: (customerInfo: any, paymentMethod: 'transfer' | 'cod') => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  useEffect(() => {
    const stored = localStorage.getItem('halt-cart');
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {}
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('halt-cart', JSON.stringify(items));
  }, [items]);
  
  const addItem = useCallback((item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(i => i.productId === item.productId && i.size === item.size);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity || 1;
        return updated;
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
    setIsCartOpen(true);
  }, []);
  
  const removeItem = useCallback((productId: string, size: string) => {
    setItems(prev => prev.filter(i => !(i.productId === productId && i.size === size)));
  }, []);
  
  const updateQuantity = useCallback((productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size);
      return;
    }
    setItems(prev => prev.map(i => 
      i.productId === productId && i.size === size ? { ...i, quantity } : i
    ));
  }, [removeItem]);
  
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const checkout = useCallback((customerInfo: any, paymentMethod: 'transfer' | 'cod') => {
    const shipping = subtotal >= 500000 ? 0 : 25000;
    const total = subtotal + shipping;
    
    const order = {
      id: `HALT-${Date.now()}`,
      items,
      customer: customerInfo,
      subtotal,
      shipping,
      total,
      paymentMethod,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
      whatsappMessage: '',
    };
    
    order.whatsappMessage = generateWhatsAppMessage(order);
    
    // Open WhatsApp with order details
    window.open(siteConfig.whatsappLink.replace('Halo%20HALT.CO%2C%20saya%20ingin%20bertanya%20tentang%20produk%20anda.', encodeURIComponent(order.whatsappMessage)), '_blank');
    
    // Clear cart after checkout
    clearCart();
    closeCart();
    
    // Show success
    alert('Pesanan berhasil dikirim ke WhatsApp! Silakan lengkapi pembayaran di chat.');
  }, [items, subtotal, clearCart]);
  
  const toggleCart = useCallback(() => setIsCartOpen(prev => !prev), []);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  
  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      subtotal,
      itemCount,
      checkout,
      isCartOpen,
      toggleCart,
      openCart,
      closeCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}