export const siteConfig = {
  name: 'HALT.CO',
  tagline: 'break the pattern.',
  description: 'Ajakan untuk berhenti sejenak dari rutinitas "autopilot" dan hidup lebih sadar akan arah yang dituju. Streetwear premium dari Pekanbaru.',
  url: 'https://haltco.vercel.app',
  whatsappNumber: '628123456789',
  whatsappLink: 'https://wa.me/628123456789?text=Halo%20HALT.CO%2C%20saya%20ingin%20bertanya%20tentang%20produk%20anda.',
  email: 'hello@halt.co',
  instagram: 'https://instagram.com/halt.co',
  tiktok: 'https://tiktok.com/@halt.co',
  address: 'Jl. Contoh No. 123, Pekanbaru, Riau',
  founded: '2026',
  location: 'Pekanbaru, Indonesia',
};

export const themeColors = {
  // Dark mode dominant
  background: '#0A0A0A',
  foreground: '#FAFAFA',
  muted: '#1A1A1A',
  mutedForeground: '#A3A3A3',
  border: '#262626',
  // Red accent
  primary: '#C0392B',
  primaryForeground: '#FFFFFF',
  primaryHover: '#E74C3C',
  secondary: '#1A1A1A',
  secondaryForeground: '#FAFAFA',
  accent: '#1A1A1A',
  accentForeground: '#FAFAFA',
  card: '#0F0F0F',
  cardForeground: '#FAFAFA',
  // Semantic
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
};

export const sizeCharts: Record<string, { size: string; length: number; chest: number; shoulder: number; sleeve: number }[]> = {
  tshirt: [
    { size: 'S', length: 68, chest: 52, shoulder: 48, sleeve: 22 },
    { size: 'M', length: 70, chest: 55, shoulder: 50, sleeve: 23 },
    { size: 'L', length: 72, chest: 58, shoulder: 52, sleeve: 24 },
    { size: 'XL', length: 74, chest: 61, shoulder: 54, sleeve: 25 },
    { size: 'XXL', length: 76, chest: 64, shoulder: 56, sleeve: 26 },
  ],
  hoodie: [
    { size: 'S', length: 68, chest: 55, shoulder: 50, sleeve: 58 },
    { size: 'M', length: 70, chest: 58, shoulder: 52, sleeve: 59 },
    { size: 'L', length: 72, chest: 61, shoulder: 54, sleeve: 60 },
    { size: 'XL', length: 74, chest: 64, shoulder: 56, sleeve: 61 },
    { size: 'XXL', length: 76, chest: 67, shoulder: 58, sleeve: 62 },
  ],
  pants: [
    { size: '28', length: 98, chest: 38, shoulder: 0, sleeve: 0 },
    { size: '30', length: 100, chest: 40, shoulder: 0, sleeve: 0 },
    { size: '32', length: 102, chest: 42, shoulder: 0, sleeve: 0 },
    { size: '34', length: 104, chest: 44, shoulder: 0, sleeve: 0 },
    { size: '36', length: 106, chest: 46, shoulder: 0, sleeve: 0 },
  ],
};

export const categories = [
  { id: 'tshirt', name: 'Kaos', slug: 'kaos' },
  { id: 'hoodie', name: 'Hoodie', slug: 'hoodie' },
  { id: 'pants', name: 'Pants', slug: 'pants' },
  { id: 'accessories', name: 'Aksesoris', slug: 'aksesoris' },
] as const;

export const paymentMethods = [
  { id: 'transfer', name: 'Transfer Bank', description: 'BCA / Mandiri / BNI / BRI', icon: 'bank' },
  { id: 'cod', name: 'COD (Bayar di Tempat)', description: 'Tersedia area Pekanbaru & sekitarnya', icon: 'cash' },
] as const;

export const bankAccounts = [
  { bank: 'BCA', number: '1234567890', name: 'HALT.CO' },
  { bank: 'Mandiri', number: '0987654321', name: 'HALT.CO' },
  { bank: 'BNI', number: '1122334455', name: 'HALT.CO' },
  { bank: 'BRI', number: '5566778899', name: 'HALT.CO' },
] as const;