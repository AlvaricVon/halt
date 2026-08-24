import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact & FAQ',
  description: 'Hubungi HALT.CO via WhatsApp, email, atau baca FAQ seputar ongkir, cara order, return policy, dan size guide.',
  openGraph: {
    title: 'Contact & FAQ | HALT.CO',
    description: 'Hubungi HALT.CO via WhatsApp, email, atau baca FAQ',
  },
};

export default function ContactPage() {
  const faqs = [
    {
      category: 'Pengiriman',
      id: 'pengiriman',
      questions: [
        {
          q: 'Berapa lama proses pengiriman?',
          a: 'Pengiriman diproses 1-2 hari kerja setelah pembayaran dikonfirmasi. Estimasi sampai: 1-3 hari (Jawa/Sumatera), 3-7 hari (lainnya).',
        },
        {
          q: 'Apakah ada gratis ongkir?',
          a: 'Ya, gratis ongkir untuk pembelian minimal Rp 500.000 ke seluruh Indonesia.',
        },
        {
          q: 'Kurir apa yang digunakan?',
          a: 'Kami menggunakan J&T Express, SiCepat, atau JNE tergantung tujuan dan ketersediaan.',
        },
        {
          q: 'Bisa COD (Cash on Delivery)?',
          a: 'COD tersedia untuk area Pekanbaru dan sekitarnya. Silakan hubungi WhatsApp untuk konfirmasi.',
        },
      ],
    },
    {
      category: 'Cara Order',
      id: 'cara-order',
      questions: [
        {
          q: 'Bagaimana cara order di website?',
          a: '1) Pilih produk di halaman Shop, 2) Pilih ukuran & jumlah, 3) Klik "Add to Cart", 4) Buka keranjang & klik "Lanjut ke Checkout", 5) Isi data pengiriman, 6) Pilih metode bayar, 7) Klik "Bayar Sekarang", 8) Kirim bukti transfer via WhatsApp.',
        },
        {
          q: 'Bisa order via WhatsApp?',
          a: 'Bisa! Klik tombol WhatsApp floating di kanan bawah atau kunjungi wa.me/628123456789. Tim kami akan bantu proses order.',
        },
        {
          q: 'Apakah stok real-time?',
          a: 'Ya, stok di website real-time. Jika ukuran bisa dipilih, berarti masih tersedia.',
        },
      ],
    },
    {
      category: 'Size Guide',
      id: 'size-guide',
      questions: [
        {
          q: 'Bagaimana cara memilih ukuran yang tepat?',
          a: 'Buka halaman produk, klik "Lihat Size Chart (LD & PB dalam cm)". Ukur baju favorit Anda yang pas, bandingkan dengan tabel LD (Panjang Badan) & PB (Lingkar Dada). Model 175cm memakai size L untuk oversized fit.',
        },
        {
          q: 'Apa arti LD dan PB?',
          a: 'LD = Lingkar Dada / Body Length (dari bahu ke pinggang). PB = Panjang Badan / Chest Width (lingkar dada dibagi 2, diukar datar di bawah ketiak).',
        },
        {
          q: 'Apakah bisa tukar ukuran?',
          a: 'Bisa! Size exchange gratis 1x dalam 7 hari setelah diterima, syarat: produk baru, tag masih terpasang, beli ongkir pulang saja.',
        },
      ],
    },
    {
      category: 'Retur & Garansi',
      id: 'retur',
      questions: [
        {
          q: 'Bagaimana kebijakan retur?',
          a: 'Retur diterima dalam 30 hari untuk produk cacat produksi (jahitan lepas, bahan rusak, print cacat). Kirim foto/video ke WhatsApp untuk klaim.',
        },
        {
          q: 'Bisa retur kalau salah ukuran?',
          a: 'Bisa tukar ukuran (size exchange) gratis 1x dalam 7 hari. Retur uang hanya untuk cacat produksi.',
        },
        {
          q: 'Berapa lama proses refund?',
          a: 'Refund diproses 3-5 hari kerja setelah barang kembali diterima dan dicek QC.',
        },
      ],
    },
    {
      category: 'Pembayaran',
      id: 'pembayaran',
      questions: [
        {
          q: 'Metode pembayaran apa saja?',
          a: 'Transfer Bank (BCA, Mandiri, BNI, BRI) dan COD (area Pekanbaru). E-Wallet (GoPay, ShopeePay, DANA) coming soon.',
        },
        {
          q: 'Berapa batas waktu pembayaran?',
          a: 'Pembayaran harus dibayar maksimal 2x24 jam setelah order. Order otomatis dibatalkan jika melewati batas waktu.',
        },
        {
          q: 'Apakah aman transfer ke rekening HALT.CO?',
          a: 'Ya, rekening atas nama HALT.CO. Selalu cek nama penerima saat transfer. Kami tidak minta OTP atau PIN.',
        },
      ],
    },
    {
      category: 'Lainnya',
      id: 'lainnya',
      questions: [
        {
          q: 'Apakah produk asli/original?',
          a: '100% original design & produksi HALT.CO. Tidak menjual replika atau barang bekas.',
        },
        {
          q: 'Bisa request custom design?',
          a: 'Untuk sekarang belum menerima custom order. Ikuti Instagram @halt.co untuk info kolaborasi.',
        },
        {
          q: 'Bagaimana jadi reseller/affiliate?',
          a: 'Program reseller coming soon. Daftar newsletter di footer untuk dapat info terbaru.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="container-custom relative text-center">
          <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">Contact</span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
            Butuh Bantuan?
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto">
            Tim kami siap membantu. Chat via WhatsApp untuk respon tercepat, atau baca FAQ di bawah.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 lg:py-16 bg-neutral-950/50 border-y border-neutral-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 lg:p-8 bg-neutral-950 border border-neutral-800 rounded-2xl hover:border-[#C0392B] hover:bg-[#C0392B]/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B] mb-4 group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.67m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.43 3.43 0 00-.418-.06 3.43 3.43 0 00-.429.06 10.04 10.04 0 01-4.576 1.02C2.537 21.79 0 19.326 0 16.567 0 10.33 5.04 5.04 11.277.784c.219 0 .418.004.636.012 3.72.092 6.668 3.017 7.538 6.64.487 2.024.503 3.686-.392 4.873-.632.828-1.363 1.39-2.116 1.81-.716.413-1.56.663-2.476.759l-.284-.67z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-neutral-400 mb-4">Respon paling cepat (biasanya {'>'} 5 menit)</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#C0392B] group-hover:text-[#E74C3C]">
                Chat Sekarang
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            
            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group p-6 lg:p-8 bg-neutral-950 border border-neutral-800 rounded-2xl hover:border-[#C0392B] hover:bg-[#C0392B]/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B] mb-4 group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-neutral-400 mb-4">Untuk pertanyaan detail atau komplain formal</p>
              <span className="text-neutral-300 font-medium">{siteConfig.email}</span>
            </a>
            
            {/* Address */}
            <div className="group p-6 lg:p-8 bg-neutral-950 border border-neutral-800 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B] mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lokasi</h3>
              <p className="text-neutral-400 mb-4">Showroom & Produksi (by appointment)</p>
              <address className="text-neutral-300 not-italic leading-relaxed">{siteConfig.address}</address>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#C0392B] uppercase tracking-wider">FAQ</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tidak menemukan jawabannya? <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#C0392B] hover:text-[#E74C3C] underline">Chat kami di WhatsApp</a>
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((category, catIndex) => (
              <details key={category.id} className="group border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-950/50">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg lg:text-xl font-bold text-white">{category.category}</h3>
                  <svg className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 border-t border-neutral-800">
                  <dl className="space-y-4">
                    {category.questions.map((faq, qIndex) => (
                      <div key={qIndex}>
                        <dt className="font-semibold text-white mb-1">{faq.q}</dt>
                        <dd className="text-neutral-400 leading-relaxed">{faq.a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B]/10 via-transparent to-transparent" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center bg-black/50 backdrop-blur border border-neutral-800 rounded-3xl p-10 lg:p-16">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-neutral-300 text-lg mb-8">
              Tim kami online setiap hari 09:00-21:00 WIB. 
              Jangan ragu untuk chat — kami suka ngobrol soal streetwear.
            </p>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-10 py-4 bg-[#C0392B] text-white font-bold text-lg rounded-lg hover:bg-[#E74C3C] transition-colors">
                Chat via WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}