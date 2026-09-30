"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  SunMedium,
  ClipboardCheck,
  PackageCheck,
  ArrowRight,
  ShieldCheck,
  Anchor,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/context/LanguageContext";

const processSteps = [
  {
    stepNumber: "01",
    nameId: "Ethical Sourcing",
    nameEn: "Ethical Sourcing",
    descId: "Seleksi kulit kopi ceri matang dari sentra dataran tinggi Jawa Tengah.",
    descEn: "Selective ripe coffee cherry pulp from Central Java highland processing mills.",
    icon: <Sprout className="w-5 h-5 text-[#C89B3C]" />,
  },
  {
    stepNumber: "02",
    nameId: "Elevated Drying",
    nameEn: "Elevated Drying",
    descId: "Penjemuran alami higienis di atas meja jaring tanpa menyentuh tanah.",
    descEn: "Hygienic solar drying on elevated mesh beds without soil contact.",
    icon: <SunMedium className="w-5 h-5 text-[#C89B3C]" />,
  },
  {
    stepNumber: "03",
    nameId: "Quality Control",
    nameEn: "Quality Control",
    descId: "Sortasi manual, skrining benda asing, dan pengujian kadar air stabil ≤ 11%.",
    descEn: "Manual sorting, foreign matter screening, and stable moisture testing ≤ 11%.",
    icon: <ClipboardCheck className="w-5 h-5 text-[#C89B3C]" />,
  },
  {
    stepNumber: "04",
    nameId: "Hermetic Packaging",
    nameEn: "Hermetic Packaging",
    descId: "Pengemasan kedap udara dan kesiapan muat kargo via Pelabuhan Tanjung Emas (IDSRG).",
    descEn: "Airtight packaging and ocean cargo readiness via Tanjung Emas Port (IDSRG).",
    icon: <PackageCheck className="w-5 h-5 text-[#C89B3C]" />,
  },
];

export function ProcessSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#081C15] text-[#F8F3E7] relative overflow-hidden">
      {/* Background ambiance & ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1B4332]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative botanical watermark on left */}
      <svg
        className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 text-[#1B4332]/25 pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3 6.63 0 12-5.37 12-12 0-.68-.07-1.35-.2-2zM4.9 18.2C6.73 13.7 9.5 9 17 8c-7.5 1-10.27 5.7-12.1 10.2z" />
      </svg>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Kolom Kiri: Alur 4 Tahapan Ekspor (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
                {t("ALUR RANTAI PASOK", "SUPPLY CHAIN FLOW")}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mt-2 tracking-tight">
                {t("Dari Sumber Lokal ke Pasar Global", "From Local Origin to Global Markets")}
              </h2>
              {/* Garis aksen emas */}
              <div className="w-12 h-0.5 bg-[#C89B3C] mt-3" />
            </div>

            {/* 4 Tahapan Ekspor Grid Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-[#0D281E]/80 border border-[#C89B3C]/25 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:border-[#C89B3C]/60 hover:bg-[#133A29] group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#1B4332] border border-[#C89B3C]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {step.icon}
                      </div>
                      <span className="font-mono text-xs font-bold text-[#C89B3C]/80">
                        {step.stepNumber}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-base text-white group-hover:text-[#C89B3C] transition-colors">
                        {language === "ID" ? step.nameId : step.nameEn}
                      </h3>
                      <p className="text-xs text-[#F8F3E7]/80 mt-1.5 leading-relaxed">
                        {language === "ID" ? step.descId : step.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-1 flex items-center gap-4">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#C89B3C] hover:text-white transition-colors group"
              >
                <span>
                  {t(
                    "Pelajari Prosedur Rantai Pasok Lengkap",
                    "Explore Full Supply Chain Procedure"
                  )}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Foto Pelabuhan & Pengapalan Ekspor Tanjung Emas (lg:col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C89B3C]/35 shadow-2xl min-h-[380px] sm:min-h-[420px] flex flex-col justify-between p-6 sm:p-8 group bg-[#061812]">
              {/* Gambar Kapal Ekspedisi */}
              <Image
                src="/images/hero/cargo-ship.jpg"
                alt="Pengapalan Ekspor Cascara via Pelabuhan Tanjung Emas IDSRG Semarang"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Gradient Overlay Transparan */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#081C15]/90 via-[#081C15]/45 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C15]/90 via-[#081C15]/20 to-transparent z-10" />

              {/* Teks Callout di atas Gambar Kapal */}
              <div className="relative z-20 space-y-3 max-w-sm">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#C89B3C] font-bold bg-[#081C15]/85 px-2.5 py-1 rounded border border-[#C89B3C]/40 backdrop-blur-sm">
                  <Anchor className="w-3 h-3" />
                  PORT OF DISPATCH: TANJUNG EMAS (IDSRG)
                </span>
                <h3 className="font-serif italic text-xl sm:text-2xl text-white font-medium leading-snug drop-shadow-md">
                  &ldquo;Export-Grade Cascara Ready for Global Transit&rdquo;
                </h3>
                <p className="text-xs text-[#F8F3E7]/90 leading-relaxed font-light drop-shadow-sm">
                  {t(
                    "Dikemas dalam kantong ultra-hermetik GrainPro/Ecotact, siap dikirim melalui Pelabuhan Tanjung Emas (IDSRG), Semarang menuju pelabuhan tujuan pembeli di Eropa, Asia, dan Amerika.",
                    "Packed in ultra-hermetic GrainPro/Ecotact barrier bags, ready for ocean container loading via Tanjung Emas Port (IDSRG), Semarang to global buyer destinations."
                  )}
                </p>
              </div>

              {/* Status Badge di Bagian Bawah Kartu Kapal */}
              <div className="relative z-20 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-[#F8F3E7]/85">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">
                    {t("FOB / CIF International Terms", "FOB / CIF International Terms")}
                  </span>
                </div>
                <span className="text-[#C89B3C] font-mono font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t("100% Food Safety", "100% Food Safety")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
