import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { getFeaturedProducts, getNewProducts, formatPrice } from '@/lib/products';
import { ProductCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C0392B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#C0392B]/5 rounded-full blur-3xl" />
        
        {/* Noise overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%20opacity%3D%220.03%22%2F%3E%3C%2Fsvg%3E')] opacity-50 pointer-events-none" />
        
        <div className="container-custom relative py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C0392B]/10 border border-[#C0392B]/20 text-sm font-medium text-[#C0392B] mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C0392B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C0392B]" />
              </span>
              Coming Soon
            </div>
            
            {/* Tagline */}
            <p className="mb-6 text-lg lg:text-xl font-medium text-neutral-300 animate-slide-up delay-100">
              {siteConfig.tagline}
            </p>
            
            {/* Main Headline */}
            <h1 className="mb-8 text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight animate-slide-up delay-200">
              <span className="block text-white">HALT</span>
              <span className="block gradient-red">.CO</span>
            </h1>
            
            {/* Subheadline */}
            <p className="mb-12 text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-300">
              Ajakan untuk berhenti sejenak dari rutinitas "autopilot" dan hidup lebih sadar akan arah yang dituju.
              Streetwear premium dari Pekanbaru, Indonesia.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
              <Link href="/shop">
                <Button size="xl" className="w-full sm:w-auto">
                  Belanja Sekarang
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Our Story
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm text-neutral-500 animate-fade-in delay-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C0392B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gratis Ongkir {'>'} Rp 500rb</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C0392B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Pembayaran Aman</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C0392B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Retur 30 Hari</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C0392B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>COD Pekanbaru</span>
              </div>
            </div>
          </div>
          
          {/* Hero Product Showcase */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-slide-up delay-500">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950">
              <Image
                src="/prototype.png"
                alt="HALT.CO Prototype Collection"
                fill
                className="object-cover scale-110"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <Image
                    src="/logo-mark.png"
                    alt="HALT.CO Logo Mark"
                    width={200}
                    height={200}
                    className="mx-auto mb-6 opacity-30"
                  />
                  <p className="text-neutral-400 text-lg">Prototype Collection 001</p>
                  <p className="text-neutral-600 text-sm mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 lg:py-32 bg-neutral-950/50 border-y border-neutral-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950">
                <Image
                  src="/logo-dark.png"
                  alt="HALT.CO Story"
                  fill
                  className="object-cover scale-110 opacity-10"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-neutral-500">Our Story Visual</p>
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-black/95 backdrop-blur border border-neutral-800 rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-[#C0392B]/20 rounded-xl text-[#C0392B]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 119.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Since 2026</p>
                    <p className="font-bold text-white">Pekanbaru, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Our Story</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-6">
                Filosofi <span className="text-[#C0392B]">break the pattern.</span>
              </h2>
              <div className="prose prose-invert max-w-none space-y-4 text-neutral-300">
                <p className="leading-relaxed">
                  HALT.CO lahir dari keinginan untuk menciptakan jeda — momen untuk <strong className="text-white">berhenti sejenak</strong> 
                  dari rutinitas "autopilot" yang membuat kita kehilangan arah.
                </p>
                <p className="leading-relaxed">
                  Kami percaya pakaian bukan sekadar penutup tubuh, tapi ekspresi kesadaran diri. 
                  Setiap potongan, jahitan, dan detail dirancang untuk mengingatkan Anda: 
                  <em className="text-[#C0392B]">"Kamu punya pilihan untuk memilih jalannya sendiri."</em>
                </p>
                <p className="leading-relaxed font-medium">
                  Didirikan di Pekanbaru, 2026. Untuk para pencari makna, bukan sekadar follower tren.
                </p>
              </div>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C0392B] hover:text-[#E74C3C] transition-colors">
                Baca Cerita Lengkap
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Featured</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white">
                Produk Unggulan
              </h2>
              <p className="mt-2 text-neutral-400">Koleksi terpilih yang merepresentasikan identitas HALT.CO</p>
            </div>
            <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C0392B] hover:text-[#E74C3C] transition-colors lg:mt-0">
              Lihat Semua
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon - Featured Products */}
      <section className="py-20 lg:py-32 bg-neutral-950/50 border-y border-neutral-900">
        <div className="container-custom">
          <div className="text-center">
            <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Coming Soon</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              Produk Unggulan
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
              Koleksi terpilih yang merepresentasikan identitas HALT.CO. Sedang disiapkan dengan penuh perhatian.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#C0392B]/10 border border-[#C0392B]/20 text-[#C0392B] font-medium">
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Collection Section */}
      <section id="prototype" className="py-20 lg:py-32 bg-neutral-950/50 border-y border-neutral-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Coming Soon</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              Drop Perdana HALT.CO
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
              Koleksi pertama yang memulai semuanya. Desain liquid typography signature, 
              bahan premium, dan filosofi yang terbawa dalam setiap helai benang.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#C0392B]/10 border border-[#C0392B]/20 text-[#C0392B] font-medium">
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* Features/Values Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Kenapa HALT.CO</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              Kualitas Tanpa Kompromi
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Setiap detail dipikirkan untuk pengalaman terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Bahan Premium',
                desc: 'Cotton combed 30s, french terry 400GSM, twill stretch — dipilih satu per satu.'
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 .998L12 17l3.001 3L15 20l-.75-3L12 14.25z" />
                  </svg>
                ),
                title: 'Desain Signature',
                desc: 'Liquid typography "halt.co" & "break the pattern." — eksklusif & recognisable.'
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Fit Perfected',
                desc: 'Oversized fit, drop shoulder, crew neck — dicoba berulang untuk kenyamanan maksimal.'
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: 'Garansi Kepuasan',
                desc: 'Retur 30 hari, size exchange gratis. Kepuasan Anda prioritas utama kami.'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 bg-neutral-950/50 border border-neutral-800 rounded-2xl hover:border-[#C0392B]/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B]/10 via-transparent to-transparent" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center bg-black/50 backdrop-blur border border-neutral-800 rounded-3xl p-10 lg:p-16">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              Siap <span className="text-[#C0392B]">Break the Pattern?</span>
            </h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-xl mx-auto">
              Bergabung dengan komunitas yang memilih hidup sadar. 
              Koleksi terbatas, restock tidak dijamin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/shop">
                <Button size="xl" className="w-full sm:w-auto">
                  Mulai Belanja
                </Button>
              </Link>
              <Link href="https://wa.me/6281293988757?text=Halo%20HALT.CO" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Tanya via WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}