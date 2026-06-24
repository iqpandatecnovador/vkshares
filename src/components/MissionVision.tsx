"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function MissionVision() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-[#030b14] relative z-10 border-t border-b border-[var(--color-brand)]/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-brand)]/10 to-transparent border border-[var(--color-brand)]/20 shadow-[0_0_30px_rgba(0,229,255,0.05)] relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-brand)]/20 rounded-full blur-3xl"></div>
            <h3 className="text-3xl font-heading font-light text-white mb-6 uppercase tracking-widest border-b border-[var(--color-brand)]/30 pb-4 inline-block">
              {t.mission.title}
            </h3>
            <p className="text-white/80 font-light leading-relaxed text-lg">
              {t.mission.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-bl from-[var(--color-accent)]/10 to-transparent border border-[var(--color-accent)]/20 shadow-[0_0_30px_rgba(217,26,42,0.05)] relative overflow-hidden"
          >
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[var(--color-accent)]/20 rounded-full blur-3xl"></div>
            <h3 className="text-3xl font-heading font-light text-white mb-6 uppercase tracking-widest border-b border-[var(--color-accent)]/30 pb-4 inline-block">
              {t.vision.title}
            </h3>
            <p className="text-white/80 font-light leading-relaxed text-lg">
              {t.vision.description}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
