import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Belanja koleksi streetwear premium HALT.CO — Kaos, Hoodie, Pants, dan Aksesoris.',
  openGraph: {
    title: 'Shop | HALT.CO',
    description: 'Belanja koleksi streetwear premium HALT.CO',
  },
};

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-neutral-950/50 border-b border-neutral-900">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Shop</span>
            <h1 className="mt-2 text-4xl lg:text-5xl font-black tracking-tight text-white">
              Koleksi HALT.CO
            </h1>
            <p className="mt-4 text-neutral-400 text-lg">
              Temukan produk yang merepresentasikan filosofi <span className="text-[#C0392B]">break the pattern.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="font-bold text-white mb-4">Kategori</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/shop" className="flex items-center justify-between px-3 py-2 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-neutral-900">
                        <span>Semua Produk</span>
                        <span className="text-xs text-neutral-500">4</span>
                      </a>
                    </li>
                    <li>
                      <a href="/shop?category=tshirt" className="flex items-center justify-between px-3 py-2 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-neutral-900">
                        <span>Kaos</span>
                        <span className="text-xs text-neutral-500">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="/shop?category=hoodie" className="flex items-center justify-between px-3 py-2 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-neutral-900">
                        <span>Hoodie</span>
                        <span className="text-xs text-neutral-500">1</span>
                      </a>
                    </li>
                    <li>
                      <a href="/shop?category=pants" className="flex items-center justify-between px-3 py-2 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-neutral-900">
                        <span>Pants</span>
                        <span className="text-xs text-neutral-500">1</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                {/* Size Filter */}
                <div>
                  <h3 className="font-bold text-white mb-4">Ukuran</h3>
                  <div className="flex flex-wrap gap-2">
                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                      <button key={size} className="px-3 py-1.5 text-sm font-medium text-neutral-400 border border-neutral-700 rounded-lg hover:border-[#C0392B] hover:text-white hover:bg-[#C0392B]/10 transition-colors">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Filter */}
                <div>
                  <h3 className="font-bold text-white mb-4">Harga</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'Di bawah Rp 300.000', min: 0, max: 300000 },
                      { label: 'Rp 300.000 - Rp 500.000', min: 300000, max: 500000 },
                      { label: 'Di atas Rp 500.000', min: 500000, max: Infinity },
                    ].map((range, i) => (
                      <label key={i} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-[#C0392B] border-neutral-700 rounded" />
                        <span className="text-sm text-neutral-300">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Sort */}
                <div>
                  <h3 className="font-bold text-white mb-4">Urutkan</h3>
                  <select className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:border-transparent appearance-none">
                    <option value="newest">Terbaru</option>
                    <option value="price-asc">Harga: Terendah</option>
                    <option value="price-desc">Harga: Tertinggi</option>
                    <option value="name-asc">Nama: A-Z</option>
                    <option value="featured">Unggulan</option>
                  </select>
                </div>
              </div>
            </aside>
            
            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="product-grid">
                {/* Products will be rendered here - using ProductCard component */}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <button className="px-4 py-2 border border-neutral-700 rounded-lg text-neutral-400 hover:border-[#C0392B] hover:text-white transition-colors disabled:opacity-50" disabled>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 bg-[#C0392B] text-white font-semibold rounded-lg">1</button>
                <button className="w-10 h-10 border border-neutral-700 text-neutral-400 rounded-lg hover:border-[#C0392B] hover:text-white transition-colors">2</button>
                <button className="w-10 h-10 border border-neutral-700 text-neutral-400 rounded-lg hover:border-[#C0392B] hover:text-white transition-colors">3</button>
                <button className="px-4 py-2 border border-neutral-700 rounded-lg text-neutral-400 hover:border-[#C0392B] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-neutral-950/50 border-y border-neutral-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
            Tidak Mau Ketinggalan Drop Berikutnya?
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            Dapatkan akses eksklusif ke pre-order, restock info, dan promo khusus hanya untuk subscriber.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="/api/newsletter" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              required
              className="flex-1 px-5 py-3.5 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:border-transparent transition-colors"
            />
            <button type="submit" className="px-7 py-3.5 bg-[#C0392B] text-white font-semibold rounded-lg hover:bg-[#E74C3C] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-neutral-600">Tidak ada spam. Unsubscribe kapan saja.</p>
        </div>
      </section>
    </div>
  );
}