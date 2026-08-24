"use client";

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-[#0F0F0F] border border-neutral-800',
      elevated: 'bg-[#0F0F0F] shadow-xl shadow-black/50 border border-neutral-800',
      outlined: 'bg-transparent border-2 border-neutral-700',
    };
    
    return (
      <div
        ref={ref}
        className={cn('rounded-2xl overflow-hidden transition-all duration-300', variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
export { Card };

export interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    isNew?: boolean;
    isFeatured?: boolean;
  };
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Card variant="default" className="group hover:variant-elevated cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
        />
        {(product.isNew || product.isFeatured) && (
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="px-2.5 py-1 text-xs font-bold text-white bg-[#C0392B] rounded">
                NEW
              </span>
            )}
            {product.isFeatured && (
              <span className="px-2.5 py-1 text-xs font-bold text-black bg-white rounded">
                FEATURED
              </span>
            )}
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-bold text-lg text-white group-hover:text-[#C0392B] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-neutral-500 line-through">
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}