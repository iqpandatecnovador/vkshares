"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { translations } from "@/lib/i18n";

type MembershipData = {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  tag: string;
};

export default function MembershipCards() {
  const { t } = useLanguage();

  const membershipsData = [
    {
      id: "silver",
      name: t.memberships.silver.name,
      price: t.memberships.silver.price,
      priceValue: 200,
      description: t.memberships.silver.description,
      features: t.memberships.silver.features,
      highlighted: false,
      cta: t.memberships.silver.cta,
      tag: t.memberships.silver.tag
    },
    {
      id: "gold",
      name: t.memberships.gold.name,
      price: t.memberships.gold.price,
      priceValue: 300,
      description: t.memberships.gold.description,
      features: t.memberships.gold.features,
      highlighted: true,
      cta: t.memberships.gold.cta,
      tag: t.memberships.gold.tag
    },
    {
      id: "platinum",
      name: t.memberships.platinum.name,
      price: t.memberships.platinum.price,
      priceValue: 500,
      description: t.memberships.platinum.description,
      features: t.memberships.platinum.features,
      highlighted: false,
      cta: t.memberships.platinum.cta,
      tag: t.memberships.platinum.tag
    },
    {
      id: "specialPlatinum",
      name: t.memberships.specialPlatinum.name,
      price: t.memberships.specialPlatinum.price,
      priceValue: 1500,
      description: t.memberships.specialPlatinum.description,
      features: t.memberships.specialPlatinum.features,
      highlighted: true,
      cta: t.memberships.specialPlatinum.cta,
      tag: t.memberships.specialPlatinum.tag
    }
  ];

  return (
    <section id="memberships" className="py-32 bg-[#030b14] relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-light mb-6 text-white"
          >
            {t.memberships.title1} <span className="font-semibold text-[var(--color-brand)]">{t.memberships.title2}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            {t.memberships.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {membershipsData.map((membership, index) => (
            <MembershipCard key={membership.id} membership={membership} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MembershipCard({ membership, index, t }: { membership: MembershipData; index: number; t: typeof translations.en }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    try {
      setIsProcessing(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Solo enviamos el identificador del plan. El precio lo resuelve el
          // servidor (src/lib/pricing.ts) para impedir manipulación de precios.
          membershipId: membership.id,
          ...formData
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Hubo un error al procesar la solicitud.");
        setIsProcessing(false);
      }
    } catch (err) {
      console.error(err);
      alert("Hubo un error al conectar con el servidor.");
      setIsProcessing(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`relative rounded-3xl p-[1px] overflow-hidden group ${
          membership.highlighted ? "scale-105 z-10 md:-translate-y-4" : "z-0 mt-4 md:mt-0"
        }`}
      >
        {/* Dynamic glow effect on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(circle 250px at var(--x, 50%) var(--y, 50%), ${membership.highlighted ? 'rgba(217, 26, 42, 0.4)' : 'rgba(0, 229, 255, 0.2)'}, transparent 80%)`
          }}
        />
        
        {/* Border gradient */}
        <div className={`absolute inset-0 z-0 ${membership.highlighted ? 'bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-50' : 'bg-gradient-to-b from-[var(--color-brand)]/20 to-transparent opacity-30'}`} />

        <div className="relative z-10 h-full bg-[#030b14]/90 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center text-center">
          
          {membership.tag && (
            <div className="absolute top-0 transform -translate-y-1/2">
              <span className={`text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full ${membership.id === 'specialPlatinum' ? 'bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-black' : 'bg-[var(--color-accent)] text-white'}`}>
                {membership.tag}
              </span>
            </div>
          )}

          <h3 className="font-heading text-xl font-light text-white mb-6 tracking-wide uppercase mt-4">{membership.name}</h3>
          
          <div className="mb-6 flex flex-col items-center justify-center">
            <span className="text-white/40 text-lg mb-1">$</span>
            <span className={`text-5xl font-serif tracking-tight ${membership.highlighted ? 'text-[var(--color-accent)]' : 'text-[var(--color-brand)]'}`}>
              {membership.priceValue.toLocaleString()}
            </span>
          </div>
          
          <p className="text-white/70 text-xs mb-8 px-2 h-16">{membership.description}</p>
          
          <ul className="space-y-4 mb-10 flex-1 w-full text-left">
            {membership.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-white/80 text-xs">
                <Check size={16} className={membership.highlighted ? "text-[var(--color-accent)] flex-shrink-0" : "text-[var(--color-brand)] flex-shrink-0"} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => setShowModal(true)}
            className={`w-full py-4 rounded-md font-bold tracking-wide transition-all flex items-center justify-center gap-2 text-sm ${
            membership.highlighted 
              ? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] shadow-[0_0_15px_rgba(217,26,42,0.5)]' 
              : 'bg-[var(--color-brand)] text-black hover:bg-[var(--color-brand-light)] shadow-[0_0_15px_rgba(0,229,255,0.3)]'
            }`}
          >
            {membership.cta}
          </button>
        </div>
      </motion.div>

      {/* Lead Capture Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#030b14] border border-[var(--color-brand)]/20 rounded-xl p-8 max-w-md w-full relative"
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-heading text-white mb-2">{t.modal.title}</h3>
            <p className="text-white/50 text-sm mb-6">
              {t.modal.subtitle}
            </p>
            
            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest mb-1 block">{t.modal.name}</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest mb-1 block">{t.modal.email}</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest mb-1 block">{t.modal.phone}</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full mt-6 py-4 rounded-md bg-[var(--color-accent)] text-white font-bold tracking-wide flex items-center justify-center transition-all hover:bg-[var(--color-accent-light)] disabled:opacity-70 shadow-[0_0_15px_rgba(217,26,42,0.4)]"
              >
                {isProcessing ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  t.modal.cta
                )}
              </button>
              <p className="text-center text-white/30 text-xs mt-4 flex items-center justify-center gap-1">
                🔒 {t.modal.secure}
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
