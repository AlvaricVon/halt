"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';
import { Button } from '@/components/ui/Button';
import { Product, SizeChart } from '@/types';
import { formatPrice, generateWhatsAppMessage } from '@/lib/utils';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/ui/Card';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
  sizeChart: SizeChart[];
}

export function ProductDetailClient({ product, relatedProducts, sizeChart }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [buyNow, setBuyNow] = useState(false);
  const { addItem, openCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  
  const handleAddToCart = async (isBuyNow = false) => {
    if (!selectedSize) {
      alert('Silakan pilih ukuran terlebih dahulu');
      return;
    }
    
    if (product.stock[selectedSize] <= 0) {
      alert('Ukuran ini sedang kosong');
      return;
    }
    
    if (quantity > product.stock[selectedSize]) {
      alert(`Stok tersisa ${product.stock[selectedSize]} untuk ukuran ${selectedSize}`);
      return;
    }
    
    setIsAdding(true);
    
    addItem({
      productId: product.id,
      productSlug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity,
    });
    
    setIsAdding(false);
    
    if (isBuyNow) {
      window.location.href = '/cart';
    }
  };
  
  const handleWhatsAppOrder = () => {
    if (!selectedSize) {
      alert('Silakan pilih ukuran terlebih dahulu');
      return;
    }
    
    const order = {
      id: `HALT-${Date.now()}`,
      items: [{
        productId: product.id,
        productSlug: product.slug,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        quantity,
      }],
      customer: { name: '', phone: '', address: '', city: '', province: '', postalCode: '' },
      subtotal: product.price * quantity,
      shipping: product.price * quantity >= 500000 ? 0 : 25000,
      total: product.price * quantity + (product.price * quantity >= 500000 ? 0 : 25000),
      paymentMethod: 'transfer' as const,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
      whatsappMessage: '',
    };
    
    order.whatsappMessage = generateWhatsAppMessage(order);
    window.open(siteConfig.whatsappLink.replace(
      'Halo%20HALT.CO%2C%20saya%20ingin%20bertanya%20tentang%20produk%20anda.',
      encodeURIComponent(order.whatsappMessage)
    ), '_blank');
  };
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="container-custom py-4 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-neutral-500">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li className="text-neutral-700">/</li>
          <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
          <li className="text-neutral-700">/</li>
          <li><Link href={`/shop?category=${product.category}`} className="hover:text-white transition-colors capitalize">{product.category}</Link></li>
          <li className="text-neutral-700">/</li>
          <li className="text-white font-medium truncate max-w-[200px]">{product.name}</li>
        </ol>
      </nav>
      
      {/* Product Detail */}
      <section className="py-8 lg:py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900">
                <Image
                  src={product.images[selectedImage]}
                  alt={`${product.name} - View ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {product.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={cn(
                          'w-2.5 h-2.5 rounded-full transition-all',
                          i === selectedImage ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                        )}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
                {product.isNew && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white bg-[#C0392B] rounded">
                    NEW
                  </span>
                )}
                {product.isFeatured && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-black bg-white rounded">
                    FEATURED
                  </span>
                )}
              </div>
              
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={cn(
                        'relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all',
                        i === selectedImage ? 'border-[#C0392B]' : 'border-transparent hover:border-neutral-700'
                      )}
                      aria-label={`View image ${i + 1}`}
                      aria-current={i === selectedImage}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - Thumbnail ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              {/* Category & Name */}
              <div>
                <Link
                  href={`/shop?category=${product.category}`}
                  className="text-sm font-medium text-[#C0392B] hover:text-[#E74C3C] transition-colors mb-2 inline-block"
                >
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Link>
                <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-white">
                  {product.name}
                </h1>
              </div>
              
              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-white">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-neutral-500 line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <div className="border-t border-neutral-800 pt-6">
                <h3 className="font-semibold text-white mb-3">Deskripsi</h3>
                <p className="text-neutral-300 leading-relaxed">{product.description}</p>
              </div>
              
              {/* Materials */}
              <div className="border-t border-neutral-800 pt-6">
                <h3 className="font-semibold text-white mb-3">Bahan & Detail</h3>
                <ul className="space-y-2">
                  {product.materials.map((material, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-300">
                      <svg className="w-4 h-4 text-[#C0392B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Size Selection */}
              <div className="border-t border-neutral-800 pt-6">
                <h3 className="font-semibold text-white mb-4">Pilih Ukuran</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={product.stock[size] <= 0}
                      className={cn(
                        'w-12 h-12 lg:w-14 lg:h-14 rounded-lg font-semibold text-sm transition-all flex items-center justify-center',
                        selectedSize === size
                          ? 'border-2 border-[#C0392B] bg-[#C0392B]/10 text-white'
                          : 'border border-neutral-700 text-neutral-300 hover:border-[#C0392B] hover:text-white hover:bg-[#C0392B]/5',
                        product.stock[size] <= 0 && 'opacity-50 cursor-not-allowed line-through'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                
                {/* Size Chart */}
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer text-sm text-neutral-400 hover:text-white transition-colors">
                    <span>Lihat Size Chart (LD & PB dalam cm)</span>
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-neutral-800">
                          <th className="text-left py-2 px-3 font-medium text-white">Size</th>
                          <th className="text-left py-2 px-3 font-medium text-white">LD (Panjang Badan)</th>
                          <th className="text-left py-2 px-3 font-medium text-white">PB (Lingkar Dada)</th>
                          {sizeChart[0]?.shoulder && (
                            <>
                              <th className="text-left py-2 px-3 font-medium text-white">Shoulder</th>
                              <th className="text-left py-2 px-3 font-medium text-white">Sleeve</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {sizeChart.map((row, i) => (
                          <tr key={row.size} className={cn('border-b border-neutral-900/50', product.sizes.includes(row.size as any) ? '' : 'opacity-50')}>
                            <td className="py-2 px-3 font-medium text-white">{row.size}</td>
                            <td className="py-2 px-3 text-neutral-300">{row.length} cm</td>
                            <td className="py-2 px-3 text-neutral-300">{row.chest} cm</td>
                            {row.shoulder && (
                              <>
                                <td className="py-2 px-3 text-neutral-300">{row.shoulder} cm</td>
                                <td className="py-2 px-3 text-neutral-300">{row.sleeve} cm</td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="mt-3 text-xs text-neutral-500">
                      * Ukuran manual, toleransi ±1-2 cm. Model tinggi 175cm memakai size L.
                    </p>
                  </div>
                </details>
              </div>
              
              {/* Quantity Selector */}
              <div className="border-t border-neutral-800 pt-6">
                <div className="flex items-center gap-4">
                  <label className="font-semibold text-white">Jumlah:</label>
                  <div className="flex items-center border border-neutral-700 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                      aria-label="Kurangi"
                    >−</button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={e => setQuantity(Math.max(1, Math.min(product.stock[selectedSize || product.sizes[0]] || 99, parseInt(e.target.value) || 1)))}
                      className="w-16 text-center border-x border-neutral-700 bg-transparent text-white focus:outline-none"
                      min="1"
                      max={product.stock[selectedSize || product.sizes[0]] || 99}
                    />
                    <button
                      onClick={() => setQuantity(Math.min(product.stock[selectedSize || product.sizes[0]] || 99, quantity + 1))}
                      className="px-4 py-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                      aria-label="Tambah"
                    >+</button>
                  </div>
                  <span className="text-sm text-neutral-500">
                    Stok: {selectedSize ? product.stock[selectedSize] : product.stock[product.sizes[0]]} tersedia
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="border-t border-neutral-800 pt-6 space-y-3">
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={() => handleAddToCart(false)}
                    disabled={isAdding}
                    loading={isAdding}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="flex-1"
                    onClick={() => handleAddToCart(true)}
                    disabled={isAdding}
                  >
                    Buy Now
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={handleWhatsAppOrder}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.67m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.43 3.43 0 00-.418-.06 3.43 3.43 0 00-.429.06 10.04 10.04 0 01-4.576 1.02C2.537 21.79 0 19.326 0 16.567 0 10.33 5.04 5.04 11.277.784c.219 0 .418.004.636.012 3.72.092 6.668 3.017 7.538 6.64.487 2.024.503 3.686-.392 4.873-.632.828-1.363 1.39-2.116 1.81-.716.413-1.56.663-2.476.759l-.284-.67z"/>
                  </svg>
                  Order via WhatsApp
                </Button>
              </div>
              
              {/* Shipping Info */}
              <div className="border-t border-neutral-800 pt-6 space-y-3">
                <div className="flex items-center gap-3 p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                  <div className="p-2 bg-[#C0392B]/20 rounded-lg text-[#C0392B]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Gratis Ongkir</p>
                    <p className="text-xs text-neutral-400">Untuk pembelian di atas Rp 500.000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                  <div className="p-2 bg-[#C0392B]/20 rounded-lg text-[#C0392B]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Retur 30 Hari</p>
                    <p className="text-xs text-neutral-400">Garansi kepuasan, size exchange gratis</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                  <div className="p-2 bg-[#C0392B]/20 rounded-lg text-[#C0392B]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.67m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.43 3.43 0 00-.418-.06 3.43 3.43 0 00-.429.06 10.04 10.04 0 01-4.576 1.02C2.537 21.79 0 19.326 0 16.567 0 10.33 5.04 5.04 11.277.784c.219 0 .418.004.636.012 3.72.092 6.668 3.017 7.538 6.64.487 2.024.503 3.686-.392 4.873-.632.828-1.363 1.39-2.116 1.81-.716.413-1.56.663-2.476.759l-.284-.67z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">COD Tersedia</p>
                    <p className="text-xs text-neutral-400">Area Pekanbaru & sekitarnya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-white">
                  Produk Serupa
                </h2>
                <Link href={`/shop?category=${product.category}`} className="text-sm font-semibold text-[#C0392B] hover:text-[#E74C3C] transition-colors">
                  Lihat Semua
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(p => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}