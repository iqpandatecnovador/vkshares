"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustMetrics() {
  const { t } = useLanguage();

  const metrics = [
    { value: t.trust.stat1, label: t.trust.stat1Desc },
    { value: t.trust.stat2, label: t.trust.stat2Desc },
    { value: t.trust.stat3, label: t.trust.stat3Desc },
    { value: t.trust.stat4, label: t.trust.stat4Desc }
  ];

  return (
    <section className="py-20 bg-[#030b14] relative z-10 border-t border-[var(--color-brand)]/10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl font-light text-white tracking-widest uppercase mb-2">
            {t.trust.title}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-brand)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-[var(--color-brand)]/20 shadow-[0_0_20px_rgba(0,229,255,0.05)]"
            >
              <span className="text-4xl md:text-5xl font-heading text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] mb-2 font-bold drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                {metric.value}
              </span>
              <span className="text-white/60 text-xs md:text-sm uppercase tracking-widest text-center">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
