"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-[var(--color-brand)]/20 bg-[#030b14] pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-md">
            <span className="font-heading text-2xl font-bold tracking-widest text-white block mb-2">
              VKSHARES
            </span>
            <span className="font-heading text-sm font-light tracking-widest text-[var(--color-brand)] block mb-6 uppercase">
              Management
            </span>
            <p className="text-white/60 font-light leading-relaxed mb-6">
              {t.footer.address}
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-medium tracking-widest uppercase text-sm mb-6">{t.nav.services}</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#memberships" className="text-white/50 hover:text-[var(--color-brand)] transition-colors text-sm font-light">
                    {t.nav.membership}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium tracking-widest uppercase text-sm mb-6">{t.nav.contact}</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/5213222067343" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[var(--color-brand)] transition-colors text-sm font-light">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/50 hover:text-[var(--color-brand)] transition-colors text-sm font-light">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-brand)]/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full border border-[var(--color-brand)]/30 flex items-center justify-center hover:bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition-colors cursor-pointer">
              <span className="text-xs">IG</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-[var(--color-brand)]/30 flex items-center justify-center hover:bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition-colors cursor-pointer">
              <span className="text-xs">FB</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
