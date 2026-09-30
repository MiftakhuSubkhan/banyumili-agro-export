"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { FOOTER_QUICK_LINKS, FOOTER_PRODUCT_LINKS } from "@/constants/navigation";
import { COMPANY_INFO } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#081C15] text-[#F8F3E7] border-t border-[#1B4332] relative overflow-hidden">
      {/* Decorative subtle gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B4332]/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo theme="light" />
            <p className="text-xs sm:text-sm text-[#F8F3E7]/70 leading-relaxed max-w-sm pt-2">
              {t(
                "Spesialis eksportir kulit kopi kering (Premium Sun-Dried Cascara) bermutu tinggi dari sentra dataran tinggi Jawa Tengah. Diproses higienis di atas raised beds untuk industri minuman herbal dan botani global.",
                "Premier Indonesian exporter specializing in export-grade sun-dried cascara (coffee husk). Hygienically processed on elevated raised beds for global beverage and botanical markets."
              )}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#C89B3C]">
              {language === "ID" ? FOOTER_QUICK_LINKS.titleId : FOOTER_QUICK_LINKS.title}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {FOOTER_QUICK_LINKS.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F8F3E7]/80 hover:text-[#C89B3C] transition-colors duration-150 inline-block"
                  >
                    {language === "ID" ? link.labelId : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Products */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#C89B3C]">
              {language === "ID" ? FOOTER_PRODUCT_LINKS.titleId : FOOTER_PRODUCT_LINKS.title}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {FOOTER_PRODUCT_LINKS.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F8F3E7]/80 hover:text-[#C89B3C] transition-colors duration-150 inline-block"
                  >
                    {language === "ID" ? link.labelId : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#C89B3C]">
              {t("Kontak Kami", "Contact Us")}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F8F3E7]/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.originCountry}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#C89B3C] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Follow Us */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#C89B3C]">
              {t("Ikuti Kami", "Follow Us")}
            </h3>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B4332] text-[#F8F3E7] hover:bg-[#C89B3C] hover:text-[#081C15] flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B4332] text-[#F8F3E7] hover:bg-[#C89B3C] hover:text-[#081C15] flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B4332] text-[#F8F3E7] hover:bg-[#C89B3C] hover:text-[#081C15] flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="border-t border-white/10 bg-[#061610]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F8F3E7]/60">
          <p>
            {t(
              "© 2026 Banyumili Agro Export. Seluruh hak cipta dilindungi undang-undang.",
              "© 2026 Banyumili Agro Export. All rights reserved."
            )}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#C89B3C] transition-colors"
            >
              {t("Kebijakan Privasi", "Privacy Policy")}
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-[#C89B3C] transition-colors"
            >
              {t("Syarat & Ketentuan", "Terms & Conditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
