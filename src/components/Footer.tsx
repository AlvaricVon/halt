import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

export function Footer() {
  const footerLinks = {
    shop: [
      { label: 'Semua Produk', href: '/shop' },
      { label: 'Prototype Collection', href: '/shop?collection=prototype' },
      { label: 'Kaos', href: '/shop?category=tshirt' },
      { label: 'Hoodie', href: '/shop?category=hoodie' },
      { label: 'Pants', href: '/shop?category=pants' },
    ],
    help: [
      { label: 'Cara Order', href: '/contact#cara-order' },
      { label: 'Pengiriman & Retur', href: '/contact#pengiriman' },
      { label: 'Size Guide', href: '/contact#size-guide' },
      { label: 'FAQ', href: '/contact#faq' },
      { label: 'Kebijakan Privasi', href: '/contact#privasi' },
    ],
    about: [
      { label: 'Our Story', href: '/about' },
      { label: 'Filosofi Brand', href: '/about#filosofi' },
      { label: 'Proses Produksi', href: '/about#produksi' },
      { label: 'Founder', href: '/about#founder' },
    ],
  };
  
  const socialLinks = [
    { name: 'Instagram', href: siteConfig.instagram, icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )},
    { name: 'TikTok', href: siteConfig.tiktok, icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.548.604a8.04 8.04 0 0 0-2.342.23 22.04 22.04 0 0 0-.946.35c-.47.17-.925.42-1.29.74-.438.37-.71.82-.99 1.25-.1.16-.16.34-.23.52a46.3 46.3 0 0 1-4.1 3.5c-1.44 1.05-3.3 2.15-5.05 3.15C-.01 10.29 0 10.76 0 11.28c0 .5.04 1.07.06 1.5.06 1.18.1 2.36.1 3.56 0 1.28 0 2.58 0 3.86 0 1.65-.07 3.26-.2 4.85-.12 1.53-.22 3.06-.55 4.55-1.25.32-.15.73-.25 1.07-.38.5-.17 1.07-.22 1.6-.23 1.36-.03 2.71 0 4.06.3.82.17 1.67.44 2.43.86.91.5 1.59 1.24 2.23 2.1.07.1.12.2.18.32a7.8 7.8 0 0 0 3.07-1.45c.6-.53 1.12-1.17 1.5-1.9.2-.38.28-.8.26-1.24a88 88 0 0 0-.58-5.47c-.14-1.07-.38-2.12-.6-3.16-.1-.5-.2-1-.32-1.5a48.6 48.6 0 0 0-1.9-5.74 7.2 7.2 0 0 0-2.15-1.78 7 7 0 0 0-3.1-.24c-.87 0-1.7.12-2.5.12-.57 0-1.14-.06-1.68-.2-.9-.25-1.73-.74-2.5-1.42a30.95 30.95 0 0 1-2.04-2.32c-.63-.92-1.17-1.9-1.5-2.9a17 17 0 0 1-.15-3.05 8 8 0 0 1 1.64-3.85 8.4 8.4 0 0 1 2.87-1.9c.87-.24 1.77-.4 2.68-.4.53 0 1.04.02 1.55.06a57.5 57.5 0 0 1 4.66 1.3c1.73.7 3.28 1.73 4.55 3.07.08.08.17.15.25.22.62.56 1.1 1.24 1.44 2.0.03.07.06.15.09.22.63 1.3 1.1 2.6 1.4 3.9.03.14.02.29-.03.42-.25.72-.6 1.42-1.02 2.1-.32.5-.68.98-1.08 1.44-.18.2-.35.42-.46.67-.3 1.3-.36 2.58-.36 3.87 0 1.28.02 2.57.03 3.86 0 .9-.06 1.8-.12 2.7-.14 1.85-.44 3.62-1.03 5.25-2.1.5-.3 1-.63 1.35-1.05a6 6 0 0 0 1.5-1.94c.27-.58.3-1.2.22-1.83a77.6 77.6 0 0 0-.22-4.5c-.07-.76-.2-1.5-.3-2.26-.13-.97-.2-1.9-.26-2.85-.1-2.02-.16-4.06-.15-6.1a33 33 0 0 0-1.3-4.1 17.6 17.6 0 0 0-3.4-1.6c-1.44-.1-2.87-.06-4.32.13-.52.06-1.02.15-1.52.27a18 18 0 0 0-2.43.82c-1.1.58-1.88 1.45-2.36 2.5-.18.4-.27.8-.27 1.22 0 .6.1 1.2.27 1.76.45 1.46 1.4 2.6 2.5 3.4.4.28.82.52 1.26.72.22.1.42.2.64.3a47.9 47.9 0 0 1 3.7 3.6c1.04 1.45 2.1 3.1 3.15 5.05a47.4 47.4 0 0 1 3.5 4.1c.18.07.36.13.52.23.43.28.88.53 1.25.99.32.36.57.82.74 1.29.18.47.34.93.35.946a8.04 8.04 0 0 0 2.34.23c1.6-.03 3.18-.2 4.7-.5.76-.14 1.5-.33 2.2-.57.65-.2 1.3-.42 1.88-.7.12-.06.23-.1.35-.18a5.8 5.8 0 0 0 2.35-2.68c.5-1.25.76-2.53.8-3.8.05-1.43 0-2.85-.2-4.25-.17-1.2-.5-2.36-1.07-3.4-.3-.56-.65-1.1-1.05-1.6-.4-.47-.88-.88-1.35-1.33-.7-.67-1.5-1.3-2.38-1.8-.25-.15-.5-.28-.75-.4-.4-.17-.78-.33-1.17-.45-.5-.15-1-.22-1.5-.23a5.8 5.8 0 0 0-3.07.57c-1.1.35-2.1.86-2.9 1.5-.35.28-.7.58-1.05.9-.37.3-.74.57-1.1.85-.82.6-1.62 1.25-2.35 1.9a6.6 6.6 0 0 1-2.95.8c-2.45.06-4.83-.63-6.96-2.05-1.05-.68-2.05-1.43-2.9-2.25-.7-.67-1.27-1.42-1.6-2.2-.17-.38-.25-.8-.25-1.22 0-.78.13-1.55.37-2.3a7 7 0 0 1 1.03-2.62 9.8 9.8 0 0 1 3.3-3.6c.6-.5 1.3-.9 2.03-1.2.84-.35 1.74-.52 2.65-.52h.16z" />
      </svg>
    )},
    { name: 'WhatsApp', href: siteConfig.whatsappLink, icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.67m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.43 3.43 0 00-.418-.06 3.43 3.43 0 00-.429.06 10.04 10.04 0 01-4.576 1.02C2.537 21.79 0 19.326 0 16.567 0 10.33 5.04 5.04 11.277.784c.219 0 .418.004.636.012 3.72.092 6.668 3.017 7.538 6.64.487 2.024.503 3.686-.392 4.873-.632.828-1.363 1.39-2.116 1.81-.716.413-1.56.663-2.476.759l-.284-.67z"/>
      </svg>
    )},
  ];
  
  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label={`${siteConfig.name} Home`}>
              <span className="text-3xl lg:text-4xl font-black tracking-tight text-white select-none">
                halt<span className="text-[#C0392B]">.co</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-base leading-relaxed mb-8 max-w-xs">
              {siteConfig.description}
            </p>
            <p className="text-neutral-500 text-sm mb-6">
              Est. {siteConfig.founded} · {siteConfig.location}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#C0392B] hover:bg-[#C0392B]/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="font-bold text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-[#C0392B] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h4 className="font-bold text-white mb-4">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-[#C0392B] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h4 className="font-bold text-white mb-4">Tentang</h4>
            <ul className="space-y-3">
              {footerLinks.about.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-[#C0392B] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-neutral-900">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-bold text-xl text-white mb-2">Tetap Terhubung</h4>
              <p className="text-neutral-400">
                Dapatkan info drop produk baru, restock, dan promo eksklusif langsung ke email Anda.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md" action="/api/newsletter" method="POST">
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
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <Link href="/contact#syarat" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="/contact#privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}