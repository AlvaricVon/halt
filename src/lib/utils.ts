import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatPrice(amount: number): string {
  return formatCurrency(amount);
}

export function generateOrderId(): string {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `HALT-${year}${month}${day}-${random}`;
}

export function generateWhatsAppMessage(order: any): string {
  const itemsText = order.items.map((item: any, i: number) => 
    `${i + 1}. ${item.name} - Size ${item.size} x${item.quantity} - ${formatCurrency(item.price * item.quantity)}`
  ).join('\n');
  
  return `Halo HALT.CO, saya ingin order:\n\n${itemsText}\n\nSubtotal: ${formatCurrency(order.subtotal)}\nOngkir: ${formatCurrency(order.shipping)}\nTotal: ${formatCurrency(order.total)}\n\nNama: ${order.customer.name}\nNo. WA: ${order.customer.phone}\nAlamat: ${order.customer.address}, ${order.customer.city}, ${order.customer.province} ${order.customer.postalCode}\n${order.customer.notes ? `Catatan: ${order.customer.notes}` : ''}\n\nMetode Bayar: ${order.paymentMethod === 'transfer' ? 'Transfer Bank' : 'COD'}\n\nMohon dikonfirmasi ya. Terima kasih!`;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}