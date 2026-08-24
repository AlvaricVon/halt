"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

const products = [
  {
    id: "1",
    name: "Oversized Tee",
    price: 299000,
    image: "/logo.png",
    colors: ["Hitam", "Putih", "Abu"],
    sizes: ["S", "M", "L", "XL"],
    description: "Kaos oversized premium dari combed cotton 30s. Potongan longgar yang nyaman dan bahan yang adem dipakai sehari-hari.",
    details: ["100% Combed Cotton 30s", "Gramasi 180 GSM", "Preshrunk & Anti-pilling", "Jahitan double needle"],
  },
  {
    id: "2",
    name: "Heavyweight Hoodie",
    price: 549000,
    image: "/logo-dark.png",
    colors: ["Hitam", "Navy", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    description: "Hoodie heavyweight 380 GSM dengan french terry premium. Hangat, nyaman, dan tahan lama untuk musim hujan.",
    details: ["100% Cotton French Terry", "Gramasi 380 GSM", "Fleece lining", "Kantung kangaroo & hood adjustable"],
  },
  {
    id: "3",
    name: "Relaxed Fit Pants",
    price: 399000,
    image: "/logo-mark.png",
    colors: ["Hitam", "Khaki", "Navy"],
    sizes: ["28", "30", "32", "34"],
    description: "Celana relaxed fit dari twill cotton premium. Nyaman untuk aktivitas sehari-hari dengan potongan modern.",
    details: ["98% Cotton 2% Spandex", "Stretch 4-way", "Elastic waistband dengan drawstring", "Kantung samping & belakang"],
  },
  {
    id: "4",
    name: "Cropped Jacket",
    price: 699000,
    image: "/logo.png",
    colors: ["Hitam", "Cream"],
    sizes: ["S", "M", "L"],
    description: "Jaket cropped dengan bahan nylon taslan water-resistant. Ringan, stylish, dan cocok untuk layering.",
    details: ["100% Nylon Taslan", "Water resistant", "Lining mesh breathable", "Zipper YKK & stopper custom"],
  },
];

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: "1", name: "Oversized Tee - Hitam", price: 299000, image: "/logo.png", size: "M", quantity: 2 },
    { id: "2", name: "Heavyweight Hoodie - Navy", price: 549000, image: "/logo-dark.png", size: "L", quantity: 1 },
  ]);
  
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(products[0]);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);
  const [selectedSize, setSelectedSize] = useState(products[0].sizes[1]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"cart" | "products">("cart");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    notes: "",
    paymentMethod: "transfer",
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 500000 ? 0 : 25000;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    
    const newItem: CartItem = {
      id: `${selectedProduct.id}-${selectedColor}-${selectedSize}-${Date.now()}`,
      name: `${selectedProduct.name} - ${selectedColor}`,
      price: selectedProduct.price,
      image: selectedProduct.image,
      size: selectedSize,
      quantity,
    };
    
    setCart(prev => [...prev, newItem]);
    setActiveTab("cart");
  };

  const updateQuantity = (id: string, newQty: number) => {
    if (newQty < 1) {
      setCart(prev => prev.filter(item => item.id !== id));
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Pesanan berhasil! Total: ${formatPrice(total)}\n\nDetail pesanan telah dikirim ke ${formData.email}`);
    setCart([]);
    setFormData({
      name: "", email: "", phone: "", address: "", city: "", province: "", postalCode: "", notes: "", paymentMethod: "transfer"
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <nav className="container-custom flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2" aria-label="halt Home">
            <Image src="/logo.png" alt="halt logo" width={40} height={40} className="h-10 w-auto" priority />
            <span className="text-xl font-bold tracking-tight">halt</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Home</Link>
            <Link href="#collection" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Koleksi</Link>
            <Link href="#about" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Tentang</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="relative">
              <Link href="/checkout" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white border-2 border-black rounded-md hover:bg-neutral-50 transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Keranjang ({cart.length})
              </Link>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </span>
          </div>
        </nav>
      </header>

      <main className="pt-16 min-h-screen">
        {/* Page Header */}
        <section className="bg-neutral-50 py-12 lg:py-16">
          <div className="container-custom">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Checkout</h1>
            <p className="mt-2 text-neutral-600">Lengkapi data pengiriman dan pembayaran</p>
          </div>
        </section>

        <div className="container-custom py-8 lg:py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product Selection / Cart */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Tab Navigation */}
                <div className="flex bg-neutral-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab("cart")}
                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                      activeTab === "cart" ? "bg-white text-black shadow-sm" : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    Keranjang ({cart.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("products")}
                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                      activeTab === "products" ? "bg-white text-black shadow-sm" : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    Produk
                  </button>
                </div>

                {activeTab === "cart" ? (
                  <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {cart.length === 0 ? (
                      <div className="text-center py-12">
                        <Image src="/logo-mark.png" alt="Empty cart" width={80} height={80} className="mx-auto mb-4 opacity-20" />
                        <p className="text-neutral-500">Keranjang kosong</p>
                        <p className="text-sm text-neutral-400 mt-1">Tambah produk dari tab Produk</p>
                      </div>
                    ) : (
                      cart.map(item => (
                        <div key={item.id} className="flex gap-4 bg-white border border-neutral-200 rounded-xl p-4">
                          <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover scale-125 opacity-10"
                              sizes="80px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-black truncate">{item.name}</h4>
                            <p className="text-sm text-neutral-500">Size: {item.size}</p>
                            <p className="font-semibold text-black mt-1">{formatPrice(item.price)}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center border border-neutral-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 text-neutral-600 hover:bg-neutral-100 rounded-l-lg transition-colors"
                                aria-label="Kurangi"
                              >−</button>
                              <span className="px-3 py-1 text-sm font-medium w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 text-neutral-600 hover:bg-neutral-100 rounded-r-lg transition-colors"
                                aria-label="Tambah"
                              >+</button>
                            </div>
                            <button
                              onClick={() => updateQuantity(item.id, 0)}
                              className="text-xs text-neutral-500 hover:text-red-600 transition-colors"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {products.map(product => (
                      <button
                        key={product.id}
                        onClick={() => {
                          setSelectedProduct(product);
                          setSelectedColor(product.colors[0]);
                          setSelectedSize(product.sizes[0]);
                          setQuantity(1);
                        }}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                          selectedProduct?.id === product.id
                            ? "border-black bg-neutral-50"
                            : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover scale-125 opacity-10"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-black truncate">{product.name}</h4>
                            <p className="text-sm text-neutral-500">{product.colors.join(", ")}</p>
                            <p className="font-semibold text-black mt-1">{formatPrice(product.price)}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Product Detail Modal when in products tab */}
                {activeTab === "products" && selectedProduct && (
                  <div className="bg-white border border-neutral-200 rounded-xl p-4 animate-slide-up">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                        <Image
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          fill
                          className="object-cover scale-125 opacity-10"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-black">{selectedProduct.name}</h4>
                        <p className="text-sm text-neutral-500">{selectedProduct.description}</p>
                        <p className="font-bold text-lg text-black mt-2">{formatPrice(selectedProduct.price)}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Warna</label>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.colors.map(color => (
                            <button
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-all ${
                                selectedColor === color
                                  ? "border-black bg-black text-white"
                                  : "border-neutral-300 text-neutral-700 hover:border-neutral-400"
                              }`}
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Ukuran</label>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.sizes.map(size => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`w-12 h-12 rounded-lg text-sm font-medium border-2 transition-all flex items-center justify-center ${
                                selectedSize === size
                                  ? "border-black bg-black text-white"
                                  : "border-neutral-300 text-neutral-700 hover:border-neutral-400"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Jumlah</label>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-neutral-300 rounded-lg">
                            <button
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="px-4 py-2 text-neutral-600 hover:bg-neutral-100 rounded-l-lg transition-colors"
                            >−</button>
                            <input
                              type="number"
                              value={quantity}
                              onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                              className="w-16 text-center border-x border-neutral-300 focus:outline-none"
                              min="1"
                            />
                            <button
                              onClick={() => setQuantity(quantity + 1)}
                              className="px-4 py-2 text-neutral-600 hover:bg-neutral-100 rounded-r-lg transition-colors"
                            >+</button>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={handleAddToCart}
                        className="w-full py-3 px-4 bg-black text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
                      >
                        + Tambah ke Keranjang
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary & Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Cart Summary */}
                {cart.length > 0 && (
                  <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-black mb-4">Ringkasan Pesanan</h2>
                    <div className="space-y-3">
                      {cart.map(item => (
                        <div key={item.id} className="flex gap-4 py-3 border-b border-neutral-100 last:border-0">
                          <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover scale-125 opacity-10"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-black truncate">{item.name}</p>
                            <p className="text-sm text-neutral-500">Size: {item.size} × {item.quantity}</p>
                          </div>
                          <p className="font-semibold text-black whitespace-nowrap">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between text-neutral-600">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-neutral-600">
                        <span>Pengiriman</span>
                        <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
                      </div>
                      {shipping === 0 && (
                        <p className="text-sm text-green-600 flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Gratis ongkir untuk pembelian {">"} Rp 500.000
                        </p>
                      )}
                      <div className="flex justify-between border-t border-neutral-200 pt-2 text-base font-semibold text-black">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Shipping Form */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-black mb-6">Alamat Pengiriman</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Nama Lengkap *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder="Nama penerima"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">No. Telepon *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder="email@contoh.com"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-black mb-1">Alamat Lengkap *</label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                        placeholder="Jalan, RT/RW, Kelurahan, Kecamatan"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-black mb-1">Kota / Kabupaten *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder="Jakarta Selatan"
                      />
                    </div>
                    <div>
                      <label htmlFor="province" className="block text-sm font-medium text-black mb-1">Provinsi *</label>
                      <select
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white"
                      >
                        <option value="">Pilih Provinsi</option>
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jawa Tengah">Jawa Tengah</option>
                        <option value="Jawa Timur">Jawa Timur</option>
                        <option value="Banten">Banten</option>
                        <option value="Bali">Bali</option>
                        <option value="Sumatera Utara">Sumatera Utara</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-black mb-1">Kode Pos *</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder="12345"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="notes" className="block text-sm font-medium text-black mb-1">Catatan (Opsional)</label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                        placeholder="Instruksi pengiriman khusus, dll."
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-black mb-6">Metode Pembayaran</h2>
                  <div className="space-y-3">
                    {[
                      { id: "transfer", name: "Transfer Bank", desc: "BCA / Mandiri / BNI / BRI", icon: "🏦" },
                      { id: "ewallet", name: "E-Wallet", desc: "GoPay / ShopeePay / DANA / OVO", icon: "📱" },
                      { id: "cod", name: "COD (Bayar di Tempat)", desc: "Tersedia untuk area tertentu", icon: "💵" },
                    ].map(method => (
                      <label
                        key={method.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.paymentMethod === method.id
                            ? "border-black bg-neutral-50"
                            : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-black border-neutral-300 focus:ring-black focus:ring-2"
                        />
                        <span className="text-2xl">{method.icon}</span>
                        <div className="flex-1">
                          <p className="font-medium text-black">{method.name}</p>
                          <p className="text-sm text-neutral-500">{method.desc}</p>
                        </div>
                        <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                {cart.length > 0 && (
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-black text-white text-lg font-semibold rounded-xl hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    Bayar Sekarang — {formatPrice(total)}
                  </button>
                )}

                {cart.length === 0 && (
                  <div className="text-center py-12 bg-neutral-50 rounded-2xl border border-neutral-200">
                    <Image src="/logo-mark.png" alt="Empty" width={60} height={60} className="mx-auto mb-4 opacity-20" />
                    <p className="text-neutral-500">Keranjang belanja kosong</p>
                    <p className="text-sm text-neutral-400 mt-1">Pilih produk dari tab "Produk" untuk memulai belanja</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t border-neutral-200 mt-auto">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">© 2025 halt. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-black transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-black transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.2s ease-out; }
      `}</style>
    </div>
  );
}