"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030b14]">
      {/* Oceanic Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030b14]/90 via-transparent to-[#030b14] z-10" />
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Resort Background"
          className="w-full h-full object-cover opacity-70 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          style={{ filter: "hue-rotate(180deg) saturate(1.5)" }} // Gives an oceanic deep blue/cyan tint to standard beach photos
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[var(--color-brand)] font-medium tracking-[0.3em] uppercase text-sm mb-6 block drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
            Vacation Property & ROI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight leading-[1.1]"
        >
          {t.hero.title1} <br />
          <span className="font-semibold text-gradient-cyan">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-medium tracking-wide overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(217,26,42,0.4)] border border-[var(--color-accent-light)]">
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.ctaPrimary}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[var(--color-accent-light)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
          <button className="px-8 py-4 rounded-full text-[var(--color-brand)] font-medium tracking-wide border border-[var(--color-brand)]/50 glass hover:bg-[var(--color-brand)]/10 transition-all">
            {t.hero.ctaSecondary}
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[var(--color-brand)]/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-[var(--color-brand)]/20 overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 w-full h-1/2 bg-[var(--color-brand)]"
            />
        </div>
      </motion.div>
    </section>
  );
}
