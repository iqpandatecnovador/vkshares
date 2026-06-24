"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { WhyUsPoint } from "@/lib/i18n";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const icons = [ShieldCheck, TrendingUp, Lock];

  return (
    <section className="py-24 bg-[#030b14] relative z-10 border-t border-[var(--color-brand)]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl text-white font-light tracking-wide mb-4"
          >
            {t.whyUs.title}
          </motion.h2>
          <p className="text-[var(--color-brand)] tracking-widest uppercase text-sm">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {t.whyUs.points.map((point: WhyUsPoint, i: number) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-[var(--color-brand)]/10 hover:border-[var(--color-brand)]/40 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand)]/20 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                  <Icon className="text-[var(--color-brand)] w-8 h-8" />
                </div>
                <h3 className="text-xl text-white font-heading font-medium mb-4">{point.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
