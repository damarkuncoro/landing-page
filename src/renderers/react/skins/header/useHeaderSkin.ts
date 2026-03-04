import { useState, useEffect } from "react";

/**
 * Shared hook for header skin logic.
 * Menghandle state dan efek umum untuk semua skin header.
 * Menerapkan prinsip DRY (Don't Repeat Yourself) dan reusability.
 */
export const useHeaderSkin = (scrollEffect: boolean) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scrollEffect) {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollEffect]);

  return {
    mobileMenuOpen,
    setMobileMenuOpen,
    isScrolled,
  };
};