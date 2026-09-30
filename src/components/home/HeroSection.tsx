"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Wheat, ShieldCheck, Ship } from "lucide-react";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#081C15]">
      {/* Background Hero Panoramic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/coffee-husk-feed-natural.jpg"
          alt="Indonesian Sun-Dried Coffee Husk for Livestock Feed Export"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.88] contrast-[1.05]"
        />

        {/* Sophisticated Dark Gradient Overlay on Left for Flawless Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081C15]/95 via-[#081C15]/75 to-transparent lg:w-[70%] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081C15]/90 via-[#081C15]/40 to-black/30 z-10 lg:hidden" />

        {/* Script Callout on Top Right */}
        <div className="absolute top-28 sm:top-32 right-6 sm:right-14 z-20 hidden md:block text-right pointer-events-none select-none">
          <p className="font-serif italic text-white/95 text-base sm:text-xl lg:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {t("Bahan Pakan Ternak Berkelanjutan,", "Sustainable Livestock Feed Solutions,")}
          </p>
          <p className="font-serif italic text-[#C89B3C] text-base sm:text-xl lg:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {t("Nutrisi Serat Ruminansia Unggul", "Superior Ruminant Fiber Nutrition")}
          </p>
        </div>
      </div>

      <Container className="relative z-20">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#C89B3C] uppercase drop-shadow-sm bg-[#081C15]/80 px-3 py-1 rounded-full border border-[#C89B3C]/30">
              {t("PRODUSEN & EKSPORTIR KULIT KOPI PAKAN TERNAK", "INDONESIAN COFFEE HUSK FEED EXPORTER")}
            </span>
          </div>

          {/* Hero Main Heading with Playfair Display Serif */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.14] tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Export-Grade{" "}
            <span className="text-[#C89B3C] font-serif italic font-normal">
              Coffee Husk
            </span>{" "}
            for Livestock &amp; Animal Feed
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base text-[#F8F3E7]/90 leading-relaxed max-w-xl drop-shadow-sm font-light">
            {t(
              "Memasok kulit kopi kering berkualitas ekspor dari sentra perkebunan Jawa Tengah. Sumber serat kasar terdigestikan (18–24%), protein teruji (10.5–12.5%), dan bebas aflatoksin untuk pakan sapi perah, sapi potong, dan industri peternakan global.",
              "Supplying export-grade sun-dried coffee husk directly from Central Java highlands. High digestible crude fiber (18–24%), verified crude protein (10.5–12.5%), and aflatoxin-safe for dairy cattle, beef feedlots, and global livestock producers."
            )}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#B68A2E] text-[#081C15] px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <span>{t("Lihat Spesifikasi Pakan", "Explore Feed Specifications")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact?inquiry=quote"
              className="inline-flex items-center gap-2 bg-[#1B4332]/80 hover:bg-[#1B4332] text-white border border-white/20 backdrop-blur-sm px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4 text-[#C89B3C]" />
              <span>{t("Minta Penawaran Harga (RFQ)", "Request Quotation (RFQ)")}</span>
            </Link>
          </div>

          {/* Metrik Ringkas Bar */}
          <div className="mt-10 pt-7 border-t border-white/20 grid grid-cols-3 gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#C89B3C] flex items-center justify-center shrink-0">
                <Wheat className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-white/95 leading-tight">
                CP 10.5%–12.5% • TDN ~62%
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#C89B3C] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-white/95 leading-tight">
                HS Code 2308.00 (Feed)
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#C89B3C] flex items-center justify-center shrink-0">
                <Ship className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-white/95 leading-tight">
                FOB Tanjung Emas (IDSRG)
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
