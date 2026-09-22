"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Leaf, Users, Globe } from "lucide-react";
import { Container } from "@/components/common/Container";
import { TRUST_BADGES } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#081C15]">
      {/* Background Hero Panoramic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/background-hero.jpeg"
          alt="Indonesian Agricultural Export Coffee, Black Pepper, Cinnamon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-center filter brightness-[0.92] contrast-[1.03]"
        />

        {/* Sophisticated Dark Gradient Overlay on Left for Flawless Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081C15]/90 via-[#081C15]/65 to-transparent lg:w-[65%] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081C15]/80 via-transparent to-black/20 z-10 lg:hidden" />

        {/* Script Callout on Top Right matching reference mockup */}
        <div className="absolute top-28 sm:top-32 right-6 sm:right-14 z-20 hidden md:block text-right pointer-events-none select-none">
          <p className="font-serif italic text-white/95 text-base sm:text-xl lg:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {t("Pemberdayaan Petani,", "Empowering Farmers,")}
          </p>
          <p className="font-serif italic text-[#C89B3C] text-base sm:text-xl lg:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {t("Peluang Global", "Global Opportunities")}
          </p>
        </div>
      </div>

      <Container className="relative z-20">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#C89B3C] uppercase drop-shadow-sm">
              INDONESIAN AGRICULTURAL EXPORT COMPANY
            </span>
          </div>

          {/* Hero Main Heading with Playfair Display Serif */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.12] tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Connecting Indonesia&apos;s{" "}
            <span className="text-[#C89B3C] font-serif block sm:inline italic font-normal">
              Finest Coffee &amp; Spices
            </span>{" "}
            To The World
          </h1>

          {/* Subtitle matching mockup text */}
          <p className="mt-5 text-sm sm:text-base text-[#F8F3E7]/90 leading-relaxed max-w-xl drop-shadow-sm font-light">
            {t(
              "Banyumili Agro Export menghadirkan kopi, lada hitam, dan kayu manis berkualitas tinggi dari Indonesia dengan jaringan petani terpercaya dan standar ekspor internasional.",
              "Banyumili Agro Export delivers high-grade specialty coffee, Lampung black pepper, and Kerinci cassia cinnamon directly from trusted farmer networks to international B2B importers."
            )}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#B68A2E] text-[#081C15] px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <span>{t("Lihat Produk Ekspor", "Explore Export Products")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1B4332]/80 hover:bg-[#1B4332] text-white border border-white/20 backdrop-blur-sm px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4 text-[#C89B3C]" />
              <span>{t("Hubungi Kami", "Contact Us")}</span>
            </Link>
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#C89B3C] flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div className="text-[10px] sm:text-xs font-medium text-white/95 leading-tight">
                {language === "ID" ? TRUST_BADGES[0].titleId : TRUST_BADGES[0].title}
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#C89B3C] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div className="text-[10px] sm:text-xs font-medium text-white/95 leading-tight">
                {language === "ID" ? TRUST_BADGES[1].titleId : TRUST_BADGES[1].title}
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#C89B3C] flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div className="text-[10px] sm:text-xs font-medium text-white/95 leading-tight">
                {language === "ID" ? TRUST_BADGES[2].titleId : TRUST_BADGES[2].title}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
