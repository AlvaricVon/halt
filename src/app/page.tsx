import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <nav className="container-custom flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2" aria-label="halt Home">
            <Image
              src="/logo.png"
              alt="halt logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-xl font-bold tracking-tight">halt</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#collection" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">
              Koleksi
            </Link>
            <Link href="#about" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">
              Tentang
            </Link>
            <Link href="#contact" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">
              Kontak
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/checkout" 
              className="hidden sm:block px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-neutral-800 transition-colors"
            >
              Belanja Sekarang
            </Link>
            <button className="md:hidden p-2" aria-label="Menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-16">
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-neutral-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-white to-neutral-50" />
          
          {/* Background decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-black/5 rounded-full blur-3xl" />
          
          <div className="container-custom relative py-20 lg:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-sm font-medium text-black mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/20 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                </span>
                Koleksi Baru Sudah Datang
              </div>
              
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl leading-[1.1]">
                halt
                <br />
                <span className="text-neutral-400">Premium Streetwear</span>
              </h1>
              
              <p className="mb-10 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Desain minimalis, kualitas premium, dan kenyamanan maksimal. 
                halt hadir untuk melengkapi gaya hidupmu sehari-hari.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/checkout"
                  className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-black rounded-md hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Beli Sekarang
                </Link>
                <Link
                  href="#collection"
                  className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-black bg-white border-2 border-black rounded-md hover:bg-neutral-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Lihat Koleksi
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pengiriman Gratis {">"}500rb
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Pembayaran Aman
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Retur 30 Hari
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="mt-16 relative mx-auto max-w-4xl">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-neutral-100">
                <Image
                  src="/logo.png"
                  alt="halt Premium Streetwear Collection"
                  fill
                  className="object-cover scale-150 opacity-10"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Image
                      src="/logo-mark.png"
                      alt="halt logo mark"
                      width={120}
                      height={120}
                      className="mx-auto mb-4 opacity-20"
                    />
                    <p className="text-neutral-400 text-lg">Koleksi Terbaru</p>
                  </div>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-4 bg-white rounded-xl shadow-xl border border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-black text-white rounded-lg">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Produk Terlaris</p>
                    <p className="font-semibold text-black">Oversized Tee - Hitam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section id="collection" className="py-20 lg:py-32 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Koleksi Utama
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Dipilih dengan cermat, bahan berkualitas tinggi, dan desain yang timeless.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Oversized Tee",
                  color: "Hitam / Putih / Abu",
                  price: "Rp 299.000",
                  image: "/logo.png",
                  badge: "Best Seller",
                },
                {
                  name: "Heavyweight Hoodie",
                  color: "Hitam / Navy / Grey",
                  price: "Rp 549.000",
                  image: "/logo-dark.png",
                  badge: "New",
                },
                {
                  name: "Relaxed Fit Pants",
                  color: "Hitam / Khaki / Navy",
                  price: "Rp 399.000",
                  image: "/logo-mark.png",
                  badge: null,
                },
                {
                  name: "Cropped Jacket",
                  color: "Hitam / Cream",
                  price: "Rp 699.000",
                  image: "/logo.png",
                  badge: "Limited",
                },
              ].map((product, index) => (
                <article
                  key={index}
                  className="group relative bg-white rounded-2xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover scale-125 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        href="/checkout"
                        className="px-6 py-3 text-white bg-black rounded-md font-medium hover:bg-neutral-800 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                    {product.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-black rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-semibold text-black group-hover:text-neutral-900 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">{product.color}</p>
                    <p className="mt-2 font-bold text-lg text-black">{product.price}</p>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link
                href="/checkout"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-black rounded-md hover:bg-neutral-800 transition-colors"
              >
                Lihat Semua Produk
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32 bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Kenapa Memilih halt?
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Kami berkomitmen memberikan pengalaman terbaik untuk setiap pelanggan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Kualitas Premium",
                  desc: "Menggunakan bahan terbaik dengan jahitan yang rapi dan tahan lama untuk penggunaan sehari-hari.",
                },
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Desain Minimalis",
                  desc: "Estetika bersih dan timeless yang mudah dikombinasikan dengan gaya apapun.",
                },
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                  title: "Garansi Kepuasan",
                  desc: "Retur gratis 30 hari jika produk tidak sesuai ekspektasi. Kepuasanmu adalah prioritas kami.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-black mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src="/logo-dark.png"
                    alt="Tentang halt"
                    fill
                    className="object-cover scale-125 opacity-10"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">
                  Tentang <span className="text-neutral-400">halt</span>
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    halt lahir dari keinginan untuk menciptakan pakaian yang tidak hanya terlihat baik, 
                    tapi juga nyaman dipakai sehari-hari. Kami percaya bahwa style tidak harus rumit.
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    Setiap produk halt dirancang dengan perhatian detail — dari pemilihan kain, 
                    potongan yang nyaman, hingga finishing yang rapi. Kami menggunakan bahan 
                    premium seperti combed cotton 30s, french terry, dan heavyweight cotton 
                    yang tahan lama dan nyaman di kulit.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    "Berhenti mencari, mulai memakai" — itu filosofi halt. Karena pakaian terbaik 
                    adalah yang membuatmu percaya diri tanpa usaha berlebihan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-black text-white">
          <div className="container-custom text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Siap Upgrade Wardrobe-mu?
            </h2>
            <p className="mb-10 text-lg text-neutral-400 max-w-2xl mx-auto">
              Bergabung dengan ribuan pelanggan puas yang sudah merasakan kualitas halt.
            </p>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-black bg-white rounded-md hover:bg-neutral-100 transition-colors"
            >
              Mulai Belanja
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-neutral-50 border-t border-neutral-200">
        <div className="container-custom py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4" aria-label="halt Home">
                <Image
                  src="/logo.png"
                  alt="halt logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold tracking-tight text-black">halt</span>
              </Link>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Premium streetwear dengan desain minimalis dan kualitas terbaik untuk gaya hidupmu sehari-hari.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-neutral-400 hover:text-black transition-colors" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-black transition-colors" aria-label="TikTok">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.548.604a8.04 8.04 0 0 0-2.342.23 22.04 22.04 0 0 0-.946.35c-.47.17-.925.42-1.29.74-.438.37-.71.82-.99 1.25-.1.16-.16.34-.23.52a46.3 46.3 0 0 1-4.1 3.5c-1.44 1.05-3.3 2.15-5.05 3.15C-.01 10.29 0 10.76 0 11.28c0 .5.04 1.07.06 1.5.06 1.18.1 2.36.1 3.56 0 1.28 0 2.58 0 3.86 0 1.65-.07 3.26-.2 4.85-.12 1.53-.22 3.06-.55 4.55-1.25.32-.15.73-.25 1.07-.38.5-.17 1.07-.22 1.6-.23 1.36-.03 2.71 0 4.06.3.82.17 1.67.44 2.43.86.91.5 1.59 1.24 2.23 2.1.07.1.12.2.18.32a7.8 7.8 0 0 0 3.07-1.45c.6-.53 1.12-1.17 1.5-1.9.2-.38.28-.8.26-1.24a88 88 0 0 0-.58-5.47c-.14-1.07-.38-2.12-.6-3.16-.1-.5-.2-1-.32-1.5a48.6 48.6 0 0 0-1.9-5.74 7.2 7.2 0 0 0-2.15-1.78 7 7 0 0 0-3.1-.24c-.87 0-1.7.12-2.5.12-.57 0-1.14-.06-1.68-.2-.9-.25-1.73-.74-2.5-1.42a30.95 30.95 0 0 1-2.04-2.32c-.63-.92-1.17-1.9-1.5-2.9a17 17 0 0 1-.15-3.05 8 8 0 0 1 1.64-3.85 8.4 8.4 0 0 1 2.87-1.9c.87-.24 1.77-.4 2.68-.4.53 0 1.04.02 1.55.06a57.5 57.5 0 0 1 4.66 1.3c1.73.7 3.28 1.73 4.55 3.07.08.08.17.15.25.22.62.56 1.1 1.24 1.44 2.0.03.07.06.15.09.22.63 1.3 1.1 2.6 1.4 3.9.03.14.02.29-.03.42-.25.72-.6 1.42-1.02 2.1-.32.5-.68.98-1.08 1.44-.18.2-.35.42-.46.67-.3 1.3-.36 2.58-.36 3.87 0 1.28.02 2.57.03 3.86 0 .9-.06 1.8-.12 2.7-.14 1.85-.44 3.62-1.03 5.25-2.1.5-.3 1-.63 1.35-1.05a6 6 0 0 0 1.5-1.94c.27-.58.3-1.2.22-1.83a77.6 77.6 0 0 0-.22-4.5c-.07-.76-.2-1.5-.3-2.26-.13-.97-.2-1.9-.26-2.85-.1-2.02-.16-4.06-.15-6.1a33 33 0 0 0-1.3-4.1 17.6 17.6 0 0 0-3.4-1.6c-1.44-.1-2.87-.06-4.32.13-.52.06-1.02.15-1.52.27a18 18 0 0 0-2.43.82c-1.1.58-1.88 1.45-2.36 2.5-.18.4-.27.8-.27 1.22 0 .6.1 1.2.27 1.76.45 1.46 1.4 2.6 2.5 3.4.4.28.82.52 1.26.72.22.1.42.2.64.3a47.9 47.9 0 0 1 3.7 3.6c1.04 1.45 2.1 3.1 3.15 5.05a47.4 47.4 0 0 1 3.5 4.1c.18.07.36.13.52.23.43.28.88.53 1.25.99.32.36.57.82.74 1.29.18.47.34.93.35.946a8.04 8.04 0 0 0 2.34.23c1.6-.03 3.18-.2 4.7-.5.76-.14 1.5-.33 2.2-.57.65-.2 1.3-.42 1.88-.7.12-.06.23-.1.35-.18a5.8 5.8 0 0 0 2.35-2.68c.5-1.25.76-2.53.8-3.8.05-1.43 0-2.85-.2-4.25-.17-1.2-.5-2.36-1.07-3.4-.3-.56-.65-1.1-1.05-1.6-.4-.47-.88-.88-1.35-1.33-.7-.67-1.5-1.3-2.38-1.8-.25-.15-.5-.28-.75-.4-.4-.17-.78-.33-1.17-.45-.5-.15-1-.22-1.5-.23a5.8 5.8 0 0 0-3.07.57c-1.1.35-2.1.86-2.9 1.5-.35.28-.7.58-1.05.9-.37.3-.74.57-1.1.85-.82.6-1.62 1.25-2.35 1.9a6.6 6.6 0 0 1-2.95.8c-2.45.06-4.83-.63-6.96-2.05-1.05-.68-2.05-1.43-2.9-2.25-.7-.67-1.27-1.42-1.6-2.2-.17-.38-.25-.8-.25-1.22 0-.78.13-1.55.37-2.3a7 7 0 0 1 1.03-2.62 9.8 9.8 0 0 1 3.3-3.6c.6-.5 1.3-.9 2.03-1.2.84-.35 1.74-.52 2.65-.52h.16z" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-black transition-colors" aria-label="Twitter">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-semibold text-black mb-4">Belanja</h4>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li><a href="/checkout" className="hover:text-black transition-colors">Semua Produk</a></li>
                <li><a href="#collection" className="hover:text-black transition-colors">Koleksi Baru</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Best Seller</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Bantuan</h4>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li><a href="#" className="hover:text-black transition-colors">Cara Pemesanan</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Pengiriman & Retur</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Kontak Kami</h4>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@halt.id" className="hover:text-black transition-colors">hello@halt.id</a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jl. Contoh No. 123, Jakarta</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+628123456789" className="hover:text-black transition-colors">+62 812-3456-789</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-neutral-500">
                © 2025 halt. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-neutral-500">
                <a href="#" className="hover:text-black transition-colors">Kebijakan Privasi</a>
                <a href="#" className="hover:text-black transition-colors">Syarat & Ketentuan</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}