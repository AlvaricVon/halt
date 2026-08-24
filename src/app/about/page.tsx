import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Cerita lengkap HALT.CO — filosofi brand, proses produksi, dan founder di balik streetwear premium Pekanbaru.',
  openGraph: {
    title: 'Our Story | HALT.CO',
    description: 'Cerita lengkap HALT.CO — filosofi brand, proses produksi, dan founder',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#C0392B]/10 rounded-full blur-3xl" />
        <div className="container-custom relative text-center">
          <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Our Story</span>
          <h1 className="mt-4 text-4xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Filosofi <span className="text-[#C0392B]">break the pattern.</span>
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Lebih dari sekadar brand pakaian. HALT.CO adalah gerakan untuk hidup sadar.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Filosofi</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-6">
                Mengapa Kami Ada
              </h2>
              <div className="space-y-6 text-neutral-300 leading-relaxed">
                <p>
                  Kita hidup di era di mana semuanya bergerak cepat. Trend berganti mingguan, 
                  notifikasi tak henti-hentinya, dan kita sering terjebak dalam mode 
                  <strong className="text-white">"autopilot"</strong> — hidup tanpa sadar, 
                  hanya mengikuti arus.
                </p>
                <p>
                  <strong className="text-[#C0392B]">HALT.CO lahir untuk menghentikan itu.</strong>
                </p>
                <p>
                  Nama "HALT" berarti berhenti. Bukan berhenti bergerak, tapi berhenti sejenak 
                  untuk <em className="text-white">memilih</em>. Memilih apa yang dipakai, 
                  memilih jalannya sendiri, memilih hidup dengan niat.
                </p>
                <p className="font-medium text-lg">
                  Setiap helai benang, setiap potongan kain, setiap desain liquid typography 
                  "halt.co" dan "break the pattern." — semuanya pengingat: <strong className="text-[#C0392B]">Kamu punya pilihan.</strong>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950">
                <img
                  src="/logo.png"
                  alt="HALT.CO Filosofi"
                  className="w-full h-full object-cover scale-110 opacity-10"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-6xl font-black text-white/10 select-none">break the pattern.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origin" className="py-20 lg:py-32 bg-neutral-950/50 border-y border-neutral-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950">
                <img
                  src="/logo-dark.png"
                  alt="Pekanbaru Origin"
                  className="w-full h-full object-cover scale-110 opacity-10"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-black/95 backdrop-blur border border-neutral-800 rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-[#C0392B]/20 rounded-xl text-[#C0392B]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Origin</p>
                    <p className="font-bold text-white">Pekanbaru, Riau</p>
                    <p className="text-sm text-neutral-400">Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Asal Mula</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-6">
                Lahir di <span className="text-[#C0392B]">Pekanbaru</span>, 2026
              </h2>
              <div className="space-y-6 text-neutral-300 leading-relaxed">
                <p>
                  HALT.CO didirikan di Pekanbaru, Riau, pada tahun 2026. 
                  Sebuah kota yang sering terlewat oleh industri fashion besar, 
                  tapi kaya akan kreativitas muda dan semangat berkarya.
                </p>
                <p>
                  Kami bangga dengan asal kami. Bukan Jakarta, bukan Bandung — tapi Pekanbaru. 
                  Ini membuktikan bahwa kualitas premium dan desain kelas dunia 
                  bisa lahir dari mana saja, selama ada niat dan komitmen.
                </p>
                <p>
                  Setiap produk HALT.CO diproduksi secara lokal dengan standar internasional. 
                  Kami bekerja sama dengan konveksi terbaik di Riau, 
                  memastikan setiap jahitan, setiap label, setiap detail memenuhi standar kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section id="produksi" className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Proses Produksi</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              Standar Tanpa Kompromi
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Dari pemilihan benang hingga jahitan terakhir — setiap langkah diuji ketat
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Pemilihan Bahan',
                desc: 'Cotton combed 30s, french terry 400GSM, twill 98/2 stretch — disourcing dari supplier terpercaya dengan sertifikat kualitas.',
              },
              {
                step: '02',
                title: 'Pengembangan Pola',
                desc: 'Pola oversized fit, drop shoulder, crew neck diuji berulang pada berbagai tipe tubuh untuk fit terbaik.',
              },
              {
                step: '03',
                title: 'Produksi Kecil',
                desc: 'Small batch production untuk quality control maksimal. Setiap potongan dicek manual sebelum dijahit.',
              },
              {
                step: '04',
                title: 'Finishing & QC',
                desc: 'Label woven custom, stopper, zipper YKK, double needle stitching. Final QC sebelum packing.',
              },
            ].map((item, index) => (
              <div key={index} className="p-6 lg:p-8 bg-neutral-950/50 border border-neutral-800 rounded-2xl hover:border-[#C0392B]/50 transition-colors relative">
                <span className="text-xs font-bold text-[#C0392B] mb-2 block">{item.step}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Founder</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-6">
              Di Balik HALT.CO
            </h2>
            <div className="bg-neutral-950/50 border border-neutral-800 rounded-3xl p-8 lg:p-12">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                <span className="text-4xl font-black text-white/20">Founder</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                <span className="text-[#C0392B]">Founder Name</span>
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-6 max-w-xl mx-auto">
                "Saya membuat HALT.CO karena merasa kesepian di tengah keramaian. 
                Semua orang terlihat sibuk, tapi sedikit yang sadar ke mana mereka pergi. 
                Saya ingin bikin pakaian yang jadi pengingat harian: <em className='text-[#C0392B] italic'>berhenti sebentar, periksa kompasmu, lalu lanjut.</em>"
              </p>
              <div className="flex items-center justify-center gap-6 text-neutral-500">
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.548.604a8.04 8.04 0 0 0-2.342.23 22.04 22.04 0 0 0-.946.35c-.47.17-.925.42-1.29.74-.438.37-.71.82-.99 1.25-.1.16-.16.34-.23.52a46.3 46.3 0 0 1-4.1 3.5c-1.44 1.05-3.3 2.15-5.05 3.15C-.01 10.29 0 10.76 0 11.28c0 .5.04 1.07.06 1.5.06 1.18.1 2.36.1 3.56 0 1.28 0 2.58 0 3.86 0 1.65-.07 3.26-.2 4.85-.12 1.53-.22 3.06-.55 4.55-1.25.32-.15.73-.25 1.07-.38.5-.17 1.07-.22 1.6-.23 1.36-.03 2.71 0 4.06.3.82.17 1.67.44 2.43.86.91.5 1.59 1.24 2.23 2.1.07.1.12.2.18.32a7.8 7.8 0 0 0 3.07-1.45c.6-.53 1.12-1.17 1.5-1.9.2-.38.28-.8.26-1.24a88 88 0 0 0-.58-5.47c-.14-1.07-.38-2.12-.6-3.16-.1-.5-.2-1-.32-1.5a48.6 48.6 0 0 0-1.9-5.74 7.2 7.2 0 0 0-2.15-1.78 7 7 0 0 0-3.1-.24c-.87 0-1.7.12-2.5.12-.57 0-1.14-.06-1.68-.2-.9-.25-1.73-.74-2.5-1.42a30.95 30.95 0 0 1-2.04-2.32c-.63-.92-1.17-1.9-1.5-2.9a17 17 0 0 1-.15-3.05 8 8 0 0 1 1.64-3.85 8.4 8.4 0 0 1 2.87-1.9c.87-.24 1.77-.4 2.68-.4.53 0 1.04.02 1.55.06a57.5 57.5 0 0 1 4.66 1.3c1.73.7 3.28 1.73 4.55 3.07.08.08.17.15.25.22.62.56 1.1 1.24 1.44 2.0.03.07.06.15.09.22.63 1.3 1.1 2.6 1.4 3.9.03.14.02.29-.03.42-.25.72-.6 1.42-1.02 2.1-.32.5-.68.98-1.08 1.44-.18.2-.35.42-.46.67-.3 1.3-.36 2.58-.36 3.87 0 1.28.02 2.57.03 3.86 0 .9-.06 1.8-.12 2.7-.14 1.85-.44 3.62-1.03 5.25-2.1.5-.3 1-.63 1.35-1.05a6 6 0 0 0 1.5-1.94c.27-.58.3-1.2.22-1.83a77.6 77.6 0 0 0-.22-4.5c-.07-.76-.2-1.5-.3-2.26-.13-.97-.2-1.9-.26-2.85-.1-2.02-.16-4.06-.15-6.1a33 33 0 0 0-1.3-4.1 17.6 17.6 0 0 0-3.4-1.6c-1.44-.1-2.87-.06-4.32.13-.52.06-1.02.15-1.52.27a18 18 0 0 0-2.43.82c-1.1.58-1.88 1.45-2.36 2.5-.18.4-.27.8-.27 1.22 0 .6.1 1.2.27 1.76.45 1.46 1.4 2.6 2.5 3.4.4.28.82.52 1.26.72.22.1.42.2.64.3a47.9 47.9 0 0 1 3.7 3.6c1.04 1.45 2.1 3.1 3.15 5.05a47.4 47.4 0 0 1 3.5 4.1c.18.07.36.13.52.23.43.28.88.53 1.25.99.32.36.57.82.74 1.29.18.47.34.93.35.946a8.04 8.04 0 0 0 2.34.23c1.6-.03 3.18-.2 4.7-.5.76-.14 1.5-.33 2.2-.57.65-.2 1.3-.42 1.88-.7.12-.06.23-.1.35-.18a5.8 5.8 0 0 0 2.35-2.68c.5-1.25.76-2.53.8-3.8.05-1.43 0-2.85-.2-4.25-.17-1.2-.5-2.36-1.07-3.4-.3-.56-.65-1.1-1.05-1.6-.4-.47-.88-.88-1.35-1.33-.7-.67-1.5-1.3-2.38-1.8-.25-.15-.5-.28-.75-.4-.4-.17-.78-.33-1.17-.45-.5-.15-1-.22-1.5-.23a5.8 5.8 0 0 0-3.07.57c-1.1.35-2.1.86-2.9 1.5-.35.28-.7.58-1.05.9-.37.3-.74.57-1.1.85-.82.6-1.62 1.25-2.35 1.9a6.6 6.6 0 0 1-2.95.8c-2.45.06-4.83-.63-6.96-2.05-1.05-.68-2.05-1.43-2.9-2.25-.7-.67-1.27-1.42-1.6-2.2-.17-.38-.25-.8-.25-1.22 0-.78.13-1.55.37-2.3a7 7 0 0 1 1.03-2.62 9.8 9.8 0 0 1 3.3-3.6c.6-.5 1.3-.9 2.03-1.2.84-.35 1.74-.52 2.65-.52h.16z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Nilai Kami</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              Prinsip Yang Menuntun Kami
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Kesadaran', desc: 'Setiap keputusan dibuat dengan niat, bukan kebiasaan.', icon: '🧠' },
              { title: 'Kualitas', desc: 'Tidak ada kompromi pada bahan, jahitan, dan finishing.', icon: '🏆' },
              { title: 'Kejujuran', desc: 'Transparan soal harga, bahan, dan proses produksi.', icon: '🤝' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 lg:p-8 bg-neutral-950/50 border border-neutral-800 rounded-2xl">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-neutral-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}