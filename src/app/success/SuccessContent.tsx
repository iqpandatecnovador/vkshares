"use client";

import { motion } from "framer-motion";
import { CheckCircle, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

function getWindowDimensions() {
  if (typeof window === "undefined") return { width: 0, height: 0 };
  return { width: window.innerWidth, height: window.innerHeight };
}

export default function SuccessContent({ membershipLabel }: { membershipLabel: string | null }) {
  const [windowDimension, setWindowDimension] = useState(getWindowDimensions);

  useEffect(() => {
    const handleResize = () => setWindowDimension(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-[#030b14] flex flex-col items-center py-20 px-6 relative overflow-hidden">
      {windowDimension.width > 0 && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          colors={['#00E5FF', '#80F2FF', '#D91A2A', '#ffffff']}
          recycle={false}
          numberOfPieces={400}
          gravity={0.15}
        />
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-10 mb-16 z-10"
      >
        <div className="w-20 h-20 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center mx-auto mb-6 border border-[var(--color-brand)]/30 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
          <CheckCircle size={40} className="text-[var(--color-brand)]" />
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-white mb-4 uppercase tracking-wide">
          Membership <span className="font-bold text-[var(--color-brand)]">Confirmed</span>
        </h1>
        {membershipLabel && (
          <p className="text-[var(--color-brand)] text-sm uppercase tracking-widest mb-3">
            {membershipLabel} Plan
          </p>
        )}
        <p className="text-white/60 text-lg max-w-xl mx-auto font-light">
          Welcome to VKSHARES. We have received your payment. Your journey to maximizing your ROI begins now.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 z-10">

        {/* Left Column: Video */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center border border-[var(--color-brand)]/20 shadow-[0_0_30px_rgba(0,229,255,0.05)]"
        >
          <h3 className="text-xl font-heading text-white mb-6 w-full text-left uppercase tracking-widest text-sm text-[var(--color-brand)]">A message from our Director</h3>
          <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/50 relative border border-[var(--color-brand)]/20 group">
            {/* Placeholder de Video - Reemplazar con iframe de YouTube/Vimeo */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
              alt="Resort View"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              style={{ filter: "hue-rotate(180deg) saturate(1.5)" }}
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center pl-1 hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,26,42,0.5)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Actions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          {/* Calendly Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-[var(--color-brand)]/20 shadow-[0_0_30px_rgba(0,229,255,0.05)] flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center mb-6">
              <Calendar className="text-[var(--color-brand)]" />
            </div>
            <h3 className="text-xl font-heading text-white mb-2 uppercase tracking-wide">Final Step: Onboarding</h3>
            <p className="text-white/60 text-sm mb-8 font-light">
              Choose the day and time for your onboarding call to prepare your weeks for rental.
            </p>

            {/* Calendly Placeholder */}
            <div className="flex-1 w-full bg-[#030b14]/50 rounded-xl border border-[var(--color-brand)]/10 p-6 flex flex-col items-center justify-center min-h-[200px]">
              <span className="text-[var(--color-brand)]/40 text-sm mb-4 uppercase tracking-widest text-center">[ Calendly Integration ]</span>
              <button className="px-6 py-3 rounded-full border border-[var(--color-brand)] text-[var(--color-brand)] text-sm font-medium hover:bg-[var(--color-brand)] hover:text-black transition-all">
                Schedule Now
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 z-10 w-full max-w-5xl"
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-full p-2 flex flex-col sm:flex-row items-center justify-between border border-[var(--color-brand)]/20 shadow-[0_0_20px_rgba(0,229,255,0.05)]">
          <div className="flex items-center gap-4 px-6 py-4 sm:py-2">
            <MessageCircle className="text-[var(--color-brand)]" />
            <span className="text-white/80 font-light">Prefer to coordinate via WhatsApp?</span>
          </div>
          <a
            href="https://wa.me/5213222067343" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--color-brand)] text-black font-bold flex items-center justify-center gap-2 hover:bg-[var(--color-brand-light)] transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          >
            Talk to Concierge <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>

      {/* Footer Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 z-10"
      >
        <Link href="/" className="text-[var(--color-brand)]/50 hover:text-[var(--color-brand)] transition-colors text-sm flex items-center gap-2 uppercase tracking-widest">
          Return to Home
        </Link>
      </motion.div>
    </main>
  );
}
