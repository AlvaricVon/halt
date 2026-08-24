"use client";

import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#C0392B] text-white shadow-xl shadow-[#C0392B]/40',
          'hover:scale-105 hover:shadow-2xl transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:ring-offset-2 focus:ring-offset-black',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
        aria-label="Chat via WhatsApp"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.67m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.43 3.43 0 00-.418-.06 3.43 3.43 0 00-.429.06 10.04 10.04 0 01-4.576 1.02C2.537 21.79 0 19.326 0 16.567 0 10.33 5.04 5.04 11.277.784c.219 0 .418.004.636.012 3.72.092 6.668 3.017 7.538 6.64.487 2.024.503 3.686-.392 4.873-.632.828-1.363 1.39-2.116 1.81-.716.413-1.56.663-2.476.759l-.284-.67z"/>
        </svg>
        <span className="absolute -right-2 -bottom-1 w-5 h-5 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
          1
        </span>
      </a>
    </>
  );
}