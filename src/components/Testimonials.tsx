"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { TestimonialItem } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#030b14] relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl text-white font-light tracking-wide mb-4"
          >
            {t.testimonials.title}
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.items.map((item: TestimonialItem, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-8 border border-white/10 relative"
            >
              <Quote className="text-[var(--color-brand)]/20 w-12 h-12 absolute top-6 right-6" />
              <p className="text-white/80 font-light italic mb-8 relative z-10 min-h-[80px]">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)] font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{item.name}</h4>
                  <span className="text-[var(--color-brand)] text-xs uppercase tracking-wider">{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
