"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  ClipboardCheck,
  Package,
  FileCheck2,
  Ship,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/context/LanguageContext";

const steps = [
  {
    titleId: "Pengadaan Produk",
    titleEn: "Direct Sourcing",
    icon: <Sprout className="w-5 h-5 text-[#C89B3C]" />,
  },
  {
    titleId: "Pemeriksaan Kualitas",
    titleEn: "Quality Inspection",
    icon: <ClipboardCheck className="w-5 h-5 text-[#C89B3C]" />,
  },
  {
    titleId: "Pengemasan",
    titleEn: "Export Packaging",
    icon: <Package className="w-5 h-5 text-[#C89B3C]" />,
  },
  {
    titleId: "Dokumentasi Ekspor",
    titleEn: "Documentation",
    icon: <FileCheck2 className="w-5 h-5 text-[#C89B3C]" />,
  },
  {
    titleId: "Pengiriman Internasional",
    titleEn: "Ocean Freight",
    icon: <Ship className="w-5 h-5 text-[#C89B3C]" />,
  },
];

export function ProcessSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#081C15] text-[#F8F3E7] relative overflow-hidden">
      {/* Background ambiance & tropical leaf watermark */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1B4332]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative leaf watermark on left */}
      <svg
        className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 text-[#1B4332]/25 pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3 6.63 0 12-5.37 12-12 0-.68-.07-1.35-.2-2zM4.9 18.2C6.73 13.7 9.5 9 17 8c-7.5 1-10.27 5.7-12.1 10.2z" />
      </svg>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Kolom Kiri: Alur 5 Tahapan Ekspor (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
                {t("PROSES EKSPOR", "EXPORT PROCESS")}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mt-2 tracking-tight">
                {t("Dari Sumber Lokal ke Pasar Global", "From Local Origin to Global Markets")}
              </h2>
              {/* Garis aksen emas sesuai mockup */}
              <div className="w-12 h-0.5 bg-[#C89B3C] mt-3" />
            </div>

            {/* 5 Tahapan Ekspor dalam 1 Baris Horizontal Konsisten (Tidak wrapping di desktop) */}
            <div className="w-full overflow-x-auto lg:overflow-visible pb-3 pt-2 scrollbar-none">
              <div className="flex items-start justify-between min-w-[500px] lg:min-w-0 w-full">
                {steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center shrink-0 w-[74px] sm:w-[86px] group">
                      {/* Circle Node Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#133A29] border border-[#C89B3C]/50 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#C89B3C] group-hover:bg-[#1B4332] shadow-lg">
                        {step.icon}
                      </div>
                      {/* Step Title */}
                      <span className="text-[11px] font-medium text-white/90 mt-2.5 leading-snug px-1">
                        {language === "ID" ? step.titleId : step.titleEn}
                      </span>
                    </div>

                    {/* Connecting Arrow between steps */}
                    {idx < steps.length - 1 && (
                      <div className="flex-1 flex items-center justify-center text-[#C89B3C]/60 mt-6 px-1 min-w-[14px]">
                        <div className="w-full border-t border-dashed border-[#C89B3C]/40" />
                        <ArrowRight className="w-3.5 h-3.5 -ml-1 shrink-0 text-[#C89B3C]" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#C89B3C] hover:text-white transition-colors group"
              >
                <span>{t("Pelajari Prosedur Rantai Pasok Lengkap", "Explore Full Supply Chain Procedure")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Foto Kapal Ekspedisi Kargo Kontainer (lg:col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C89B3C]/30 shadow-2xl min-h-[360px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-8 group bg-[#061812]">
              {/* Gambar Kapal Kargo Resolusi Tinggi & Tajam */}
              <Image
                src="/images/hero/cargo-ship.jpg"
                alt="Kapal Kontainer Ekspor Internasional Banyumili Agro Export"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Gradient Overlay Transparan - Memberi kontras teks di kiri tanpa menggelapkan kapal di kanan */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#081C15]/90 via-[#081C15]/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C15]/85 via-[#081C15]/20 to-transparent z-10" />

              {/* Teks Callout di atas Gambar Kapal */}
              <div className="relative z-20 space-y-2.5 max-w-xs">
                <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-[#C89B3C] font-bold bg-[#081C15]/80 px-2.5 py-1 rounded border border-[#C89B3C]/40 backdrop-blur-sm">
                  MARITIME LOGISTICS
                </span>
                <h3 className="font-serif italic text-xl sm:text-2xl text-white font-medium leading-snug drop-shadow-md">
                  &ldquo;Trusted Partner for Sustainable Tomorrow&rdquo;
                </h3>
                <p className="text-xs text-[#F8F3E7]/90 leading-relaxed font-light drop-shadow-sm">
                  {t(
                    "Kontainer berstandar pangan internasional dikirim melalui pelabuhan strategis Tanjung Priok & Panjang menuju pelabuhan tujuan Anda di seluruh dunia.",
                    "International food-grade containers shipped via strategic Indonesian ports Tanjung Priok & Panjang directly to destination ports worldwide."
                  )}
                </p>
              </div>

              {/* Status Badge di Bagian Bawah Kartu Kapal */}
              <div className="relative z-20 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#F8F3E7]/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">
                    {t("Jadwal Pengapalan Terintegrasi", "Scheduled Ocean Freight")}
                  </span>
                </div>
                <span className="text-[#C89B3C] font-mono font-semibold">
                  {t("25+ Negara", "25+ Countries")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
