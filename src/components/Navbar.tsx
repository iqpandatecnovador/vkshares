"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#030b14]/90 backdrop-blur-md border-[var(--color-brand)]/20 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2">
          {/* Logo representation based on image (sun/palm tree vibe) */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[#030b14] flex items-center justify-center p-[2px]">
            <div className="w-full h-full rounded-full bg-[#030b14] flex items-center justify-center overflow-hidden relative">
              <div className="absolute bottom-0 w-full h-1/3 bg-[var(--color-brand-light)]/40" />
              <div className="w-4 h-4 rounded-full bg-yellow-400 absolute top-2 right-2" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-wide text-white leading-tight">
              VKSHARES
            </span>
            <span className="text-[10px] tracking-widest text-[var(--color-brand)] uppercase">Management</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm tracking-widest uppercase text-white/70 hover:text-[var(--color-brand)] transition-colors">
            {t.nav.services}
          </Link>
          <Link href="#memberships" className="text-sm tracking-widest uppercase text-white/70 hover:text-[var(--color-brand)] transition-colors">
            {t.nav.membership}
          </Link>
          <Link href="#contact" className="text-sm tracking-widest uppercase text-white/70 hover:text-[var(--color-brand)] transition-colors">
            {t.nav.contact}
          </Link>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors ml-4"
          >
            <Globe size={16} />
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button 
            onClick={toggleLanguage}
            className="text-white/80 hover:text-white"
          >
            <Globe size={20} />
          </button>
          <button
            className="p-2 text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#030b14] flex flex-col items-center justify-center gap-8"
          >
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading font-light tracking-widest text-white/80 hover:text-[var(--color-brand)] transition-all"
            >
              {t.nav.services}
            </Link>
            <Link
              href="#memberships"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading font-light tracking-widest text-white/80 hover:text-[var(--color-brand)] transition-all"
            >
              {t.nav.membership}
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading font-light tracking-widest text-white/80 hover:text-[var(--color-brand)] transition-all"
            >
              {t.nav.contact}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
