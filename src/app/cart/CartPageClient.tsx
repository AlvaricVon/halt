"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Form';
import { formatCurrency, generateWhatsAppMessage, generateOrderId } from '@/lib/utils';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

export function CartPageClient() {
  const { items, subtotal, updateQuantity, removeItem, clearCart, checkout, closeCart } = useCart();
  const [activeStep, setActiveStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    notes: '',
    paymentMethod: 'transfer',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const shipping = subtotal >= 500000 ? 0 : 25000;
  const total = subtotal + shipping;
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi';
    if (!formData.phone.trim()) newErrors.phone = 'Nomor WhatsApp wajib diisi';
    if (!formData.address.trim()) newErrors.address = 'Alamat lengkap wajib diisi';
    if (!formData.city.trim()) newErrors.city = 'Kota/Kabupaten wajib diisi';
    if (!formData.province) newErrors.province = 'Provinsi wajib dipilih';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Kode pos wajib diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const order = {
      id: generateOrderId(),
      items,
      customer: formData,
      subtotal,
      shipping,
      total,
      paymentMethod: formData.paymentMethod as 'transfer' | 'cod',
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
      whatsappMessage: '',
    };
    
    order.whatsappMessage = generateWhatsAppMessage(order);
    
    // Open WhatsApp
    window.open(siteConfig.whatsappLink.replace(
      'Halo%20HALT.CO%2C%20saya%20ingin%20bertanya%20tentang%20produk%20anda.',
      encodeURIComponent(order.whatsappMessage)
    ), '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      setActiveStep('success');
    }, 500);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };
  
  if (items.length === 0 && activeStep === 'cart') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center">
          <svg className="w-20 h-20 text-neutral-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h1 className="text-2xl font-bold text-white mb-2">Keranjang Kosong</h1>
          <p className="text-neutral-400 mb-8">Belum ada produk di keranjang Anda</p>
          <Link href="/shop">
            <Button size="lg">Mulai Belanja</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  if (activeStep === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C0392B]/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-[#C0392B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Pesanan Terkirim!</h1>
          <p className="text-neutral-400 mb-8">
            Detail pesanan telah dikirim ke WhatsApp. 
            Silakan lengkapi pembayaran dan kirim bukti transfer ke admin.
          </p>
          <div className="space-y-3">
            <Link href="/shop">
              <Button size="lg" className="w-full">Lanjut Belanja</Button>
            </Link>
            <Link href="/" className="block w-full px-6 py-3.5 border-2 border-neutral-700 text-neutral-300 font-semibold rounded-lg hover:border-[#C0392B] hover:text-white transition-colors">
              Kembali ke Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const isCart = activeStep === 'cart';
  const isCheckout = activeStep === 'checkout';
  const isSuccess = !isCart && !isCheckout;
  
  return (
    <div className="py-8 lg:py-16">
      <div className="container-custom">
        {/* Progress Steps */}
        <div className="hidden lg:flex items-center justify-center gap-4 mb-12">
          <div className={cn('flex items-center gap-2', (isCart || isCheckout) ? 'text-white' : 'text-[#C0392B]')}>
            <div className={cn('w-10 h-10 rounded-full flex items-center justify-center font-bold', (isCart || isCheckout) ? 'bg-[#C0392B]' : 'bg-neutral-800')}>
              1
            </div>
            <span className="font-medium hidden sm:inline">Keranjang</span>
          </div>
          <div className="w-16 h-1 bg-neutral-800" />
          <div className={cn('flex items-center gap-2', isCheckout ? 'text-white' : 'text-neutral-500')}>
            <div className={cn('w-10 h-10 rounded-full flex items-center justify-center font-bold', (isCheckout || isSuccess) ? 'bg-[#C0392B]' : 'bg-neutral-800')}>
              2
            </div>
            <span className="font-medium hidden sm:inline">Checkout</span>
          </div>
          <div className="w-16 h-1 bg-neutral-800" />
          <div className={cn('flex items-center gap-2', isSuccess ? 'text-[#C0392B]' : 'text-neutral-500')}>
            <div className={cn('w-10 h-10 rounded-full flex items-center justify-center font-bold', isSuccess ? 'bg-[#C0392B]' : 'bg-neutral-800')}>
              3
            </div>
            <span className="font-medium hidden sm:inline">Selesai</span>
          </div>
        </div>
        
        {activeStep === 'cart' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Keranjang ({items.length} item{items.length !== 1 ? 's' : ''})</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={`${item.productId}-${item.size}`} className="flex gap-4 bg-neutral-950 border border-neutral-800 rounded-2xl p-4">
                    <Link href={`/product/${item.productSlug}`} className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link href={`/product/${item.productSlug}`} className="block">
                        <h3 className="font-semibold text-white truncate hover:text-[#C0392B] transition-colors">{item.name}</h3>
                        <p className="text-sm text-neutral-500 mt-1">Size: {item.size}</p>
                      </Link>
                      <p className="font-bold text-white mt-2">{formatCurrency(item.price)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center border border-neutral-700 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                          className="px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                          aria-label="Kurangi"
                        >−</button>
                        <span className="px-4 py-2 text-base font-medium text-white w-10 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                          className="px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                          aria-label="Tambah"
                        >+</button>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-white">{formatCurrency(item.price * item.quantity)}</span>
                        <button
                          onClick={() => removeItem(item.productId, item.size)}
                          className="text-xs text-neutral-500 hover:text-red-400 transition-colors"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Continue Shopping */}
              <div className="mt-8 pt-8 border-t border-neutral-800">
                <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C0392B] hover:text-[#E74C3C] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Lanjut Belanja
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-6">Ringkasan Pesanan</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-neutral-400 text-sm">
                    <span>Subtotal ({items.length} item{items.length !== 1 ? 's' : ''})</span>
                    <span className="text-white">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400 text-sm">
                    <span>Ongkir</span>
                    <span className="text-white">{shipping === 0 ? 'Gratis' : formatCurrency(shipping)}</span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-xs text-green-400 flex items-center justify-end gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Gratis ongkir {'>'} Rp 500.000
                    </p>
                  )}
                </div>
                
                <div className="border-t border-neutral-800 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold text-white">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
                
                <Button
                  size="lg"
                  className="w-full mb-3"
                  onClick={() => setActiveStep('checkout')}
                >
                  Lanjut ke Checkout
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                  <svg className="w-4 h-4 text-[#C0392B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Pembayaran Aman</span>
                  <span className="text-neutral-700">|</span>
                  <svg className="w-4 h-4 text-[#C0392B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Retur 30 Hari</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeStep === 'checkout' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Items Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4">Pesanan Anda</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {items.map(item => (
                    <div key={`${item.productId}-${item.size}`} className="flex gap-3 py-2 border-b border-neutral-800 last:border-0">
                      <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{item.name}</p>
                        <p className="text-xs text-neutral-500">Size {item.size} × {item.quantity}</p>
                        <p className="text-sm font-semibold text-white">{formatCurrency(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-neutral-800 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-neutral-400">
                    <span>Subtotal</span>
                    <span className="text-white">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Ongkir</span>
                    <span className="text-white">{shipping === 0 ? 'Gratis' : formatCurrency(shipping)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-white border-t border-neutral-800 pt-2">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 lg:p-8 space-y-8">
                <h2 className="text-2xl font-bold text-white">Detail Pengiriman</h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Nama Lengkap *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    placeholder="Nama penerima"
                    required
                  />
                  <Input
                    label="Nomor WhatsApp *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    placeholder="08xx-xxxx-xxxx"
                    required
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <Select
                    label="Provinsi *"
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    error={errors.province}
                    required
                    options={[
                      { value: '', label: 'Pilih Provinsi' },
                      { value: 'Aceh', label: 'Aceh' },
                      { value: 'Sumatera Utara', label: 'Sumatera Utara' },
                      { value: 'Sumatera Barat', label: 'Sumatera Barat' },
                      { value: 'Riau', label: 'Riau' },
                      { value: 'Kepulauan Riau', label: 'Kepulauan Riau' },
                      { value: 'Jambi', label: 'Jambi' },
                      { value: 'Sumatera Selatan', label: 'Sumatera Selatan' },
                      { value: 'Bengkulu', label: 'Bengkulu' },
                      { value: 'Lampung', label: 'Lampung' },
                      { value: 'Bangka Belitung', label: 'Bangka Belitung' },
                      { value: 'DKI Jakarta', label: 'DKI Jakarta' },
                      { value: 'Jawa Barat', label: 'Jawa Barat' },
                      { value: 'Jawa Tengah', label: 'Jawa Tengah' },
                      { value: 'DI Yogyakarta', label: 'DI Yogyakarta' },
                      { value: 'Jawa Timur', label: 'Jawa Timur' },
                      { value: 'Banten', label: 'Banten' },
                      { value: 'Bali', label: 'Bali' },
                      { value: 'Nusa Tenggara Barat', label: 'Nusa Tenggara Barat' },
                      { value: 'Nusa Tenggara Timur', label: 'Nusa Tenggara Timur' },
                      { value: 'Kalimantan Barat', label: 'Kalimantan Barat' },
                      { value: 'Kalimantan Tengah', label: 'Kalimantan Tengah' },
                      { value: 'Kalimantan Selatan', label: 'Kalimantan Selatan' },
                      { value: 'Kalimantan Timur', label: 'Kalimantan Timur' },
                      { value: 'Kalimantan Utara', label: 'Kalimantan Utara' },
                      { value: 'Sulawesi Utara', label: 'Sulawesi Utara' },
                      { value: 'Sulawesi Tengah', label: 'Sulawesi Tengah' },
                      { value: 'Sulawesi Selatan', label: 'Sulawesi Selatan' },
                      { value: 'Sulawesi Tenggara', label: 'Sulawesi Tenggara' },
                      { value: 'Gorontalo', label: 'Gorontalo' },
                      { value: 'Sulawesi Barat', label: 'Sulawesi Barat' },
                      { value: 'Maluku', label: 'Maluku' },
                      { value: 'Maluku Utara', label: 'Maluku Utara' },
                      { value: 'Papua Barat', label: 'Papua Barat' },
                      { value: 'Papua', label: 'Papua' },
                      { value: 'Papua Tengah', label: 'Papua Tengah' },
                      { value: 'Papua Pegunungan', label: 'Papua Pegunungan' },
                      { value: 'Papua Selatan', label: 'Papua Selatan' },
                      { value: 'Papua Barat Daya', label: 'Papua Barat Daya' },
                    ]}
                  />
                  <Input
                    label="Kota / Kabupaten *"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    error={errors.city}
                    placeholder="Contoh: Pekanbaru"
                    required
                  />
                </div>
                
                <Input
                  label="Kode Pos *"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  error={errors.postalCode}
                  placeholder="Contoh: 28111"
                  required
                />
                
                <Textarea
                  label="Alamat Lengkap *"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  error={errors.address}
                  placeholder="Jalan, RT/RW, Kelurahan, Kecamatan"
                  required
                  rows={3}
                />
                
                <Textarea
                  label="Catatan (Opsional)"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Instruksi khusus untuk kurir, dll."
                  rows={2}
                />
                
                {/* Payment Method */}
                <div>
                  <h3 className="font-bold text-white mb-4">Metode Pembayaran</h3>
                  <div className="space-y-3">
                    {[
                      { id: 'transfer', name: 'Transfer Bank', desc: 'BCA / Mandiri / BNI / BRI', icon: '🏦' },
                      { id: 'cod', name: 'COD (Bayar di Tempat)', desc: 'Area Pekanbaru & sekitarnya', icon: '💵' },
                    ].map(method => (
                      <label
                        key={method.id}
                        className={cn(
                          'flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all',
                          formData.paymentMethod === method.id
                            ? 'border-[#C0392B] bg-[#C0392B]/5'
                            : 'border-neutral-800 hover:border-neutral-700'
                        )}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={handleInputChange}
                          className="w-5 h-5 accent-[#C0392B]"
                        />
                        <span className="text-2xl">{method.icon}</span>
                        <div className="flex-1">
                          <p className="font-medium text-white">{method.name}</p>
                          <p className="text-sm text-neutral-400">{method.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  
                  {formData.paymentMethod === 'transfer' && (
                    <div className="mt-4 p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                      <p className="font-medium text-white mb-3">Rekening Pembayaran:</p>
                      <div className="space-y-2 text-sm">
                        {[
                          { bank: 'BCA', number: '1234567890' },
                          { bank: 'Mandiri', number: '0987654321' },
                          { bank: 'BNI', number: '1122334455' },
                          { bank: 'BRI', number: '5566778899' },
                        ].map((bank, i) => (
                          <div key={i} className="flex justify-between text-neutral-300 font-mono">
                            <span>{bank.bank}</span>
                            <span>a.n. HALT.CO - {bank.number}</span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-xs text-neutral-500">
                        * Kirim bukti transfer ke WhatsApp setelah bayar. Order diproses setelah verifikasi.
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Submit */}
                <div className="pt-4 border-t border-neutral-800">
                  <Button
                    type="submit"
                    size="xl"
                    className="w-full"
                    loading={isSubmitting}
                  >
                    Bayar Sekarang — {formatCurrency(total)}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full mt-3"
                    onClick={() => setActiveStep('cart')}
                  >
                    Kembali ke Keranjang
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}