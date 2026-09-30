"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  ShieldCheck,
  CheckCircle2,
  FileText,
  X,
  Printer,
  Wheat,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/constants/products";

export function ProductsSection() {
  const { language, t } = useLanguage();
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);

  const product = PRODUCTS[0];

  return (
    <section id="spec-sheet" className="py-20 sm:py-28 bg-white relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl xl:max-w-5xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5E34]">
            {t("PRODUK SPESIALISASI TUNGGAL", "OUR SPECIALTY COMMODITY")}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-4xl font-serif font-bold text-[#081C15] mt-2 tracking-tight md:whitespace-nowrap">
            {t(
              "Spesialis Ekspor: Kulit Kopi Kering Mutu Pakan Ternak",
              "Specialty Export: Sun-Dried Coffee Husk for Animal Feed"
            )}
          </h2>
          <div className="w-12 h-0.5 bg-[#C89B3C] mx-auto mt-3 mb-4" />
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#081C15]/75 leading-relaxed">
            {t(
              "Fokus tunggal kami: Memasok kulit kopi kering berkualitas ekspor dari sentra Jawa Tengah sebagai bahan pakan sumber serat dan energi berstandar nutrisi internasional.",
              "Our dedicated focus: Supplying export-grade sun-dried coffee husk from Central Java as a high-fiber and energy-dense feed ingredient meeting global livestock standards."
            )}
          </p>
        </div>

        {/* 1 Spotlight Card (Kartu Tunggal Lebar / Featured Product) */}
        <div className="bg-white rounded-3xl border border-[#1B4332]/15 shadow-[0_12px_40px_rgba(27,67,50,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(27,67,50,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Column (lg:col-span-5) */}
            <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[440px] lg:min-h-full bg-[#081C15] overflow-hidden group">
              <Image
                src={product.heroImage}
                alt="Sun-Dried Coffee Husk for Livestock Feed"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.96]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C15]/90 via-transparent to-black/20" />

              {/* Badges on Top */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#081C15]/85 border border-[#C89B3C]/50 text-[#C89B3C] font-mono text-[11px] font-bold tracking-wider backdrop-blur-md shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  HS Code 2308.00
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#1B4332]/90 border border-white/20 text-white text-[11px] font-semibold backdrop-blur-md shadow-md">
                  <Wheat className="w-3.5 h-3.5 text-[#C89B3C]" />
                  Livestock Feed Grade
                </span>
              </div>

              {/* Bottom Visual Highlights */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C89B3C]">
                  Central Java, Indonesia
                </p>
                <h4 className="font-serif italic text-lg sm:text-xl text-white font-medium drop-shadow-md">
                  100% Kulit Kopi Kering Alami • Bebas Batu &amp; Debu
                </h4>
              </div>
            </div>

            {/* Content & Specification Column (lg:col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Category & Title */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5E34]">
                      SINGLE-COMMODITY SPOTLIGHT
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#081C15] tracking-tight">
                    {language === "ID" ? product.indonesianName : product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#081C15]/75 leading-relaxed pt-1">
                    {language === "ID" ? product.shortDescription : product.tagline}
                  </p>
                </div>

                {/* Key Technical Specifications Grid */}
                <div className="mt-6 pt-6 border-t border-[#1B4332]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-3.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>{t("Spesifikasi Nutrisi & Mutu Ekspor", "Export Nutritional Specifications")}</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-[#F8F3E7]/50 p-3 rounded-xl border border-[#1B4332]/10">
                      <span className="text-[10px] uppercase font-bold text-[#8B5E34] block">
                        CRUDE PROTEIN (CP)
                      </span>
                      <span className="font-semibold text-[#081C15] text-[13px]">
                        10.5% – 12.5% (Dry Basis)
                      </span>
                    </div>

                    <div className="bg-[#F8F3E7]/50 p-3 rounded-xl border border-[#1B4332]/10">
                      <span className="text-[10px] uppercase font-bold text-[#8B5E34] block">
                        CRUDE FIBER (CF)
                      </span>
                      <span className="font-semibold text-[#081C15] text-[13px]">
                        18.0% – 24.0% (Digestible)
                      </span>
                    </div>

                    <div className="bg-[#F8F3E7]/50 p-3 rounded-xl border border-[#1B4332]/10">
                      <span className="text-[10px] uppercase font-bold text-[#8B5E34] block">
                        TOTAL DIGESTIBLE NUTRIENTS (TDN)
                      </span>
                      <span className="font-semibold text-[#081C15] text-[13px]">
                        58.0% – 64.0% (Energy Dense)
                      </span>
                    </div>

                    <div className="bg-[#F8F3E7]/50 p-3 rounded-xl border border-[#1B4332]/10">
                      <span className="text-[10px] uppercase font-bold text-[#8B5E34] block">
                        MOISTURE CONTENT
                      </span>
                      <span className="font-semibold text-[#081C15] text-[13px]">
                        Max 10.5% – 11.5% (Safe)
                      </span>
                    </div>

                    <div className="bg-[#F8F3E7]/50 p-3 rounded-xl border border-[#1B4332]/10">
                      <span className="text-[10px] uppercase font-bold text-[#8B5E34] block">
                        AFLATOXIN / MYCOTOXIN
                      </span>
                      <span className="font-semibold text-[#081C15] text-[13px]">
                        Non-Detectable (&lt; 10 ppb)
                      </span>
                    </div>

                    <div className="bg-[#F8F3E7]/50 p-3 rounded-xl border border-[#1B4332]/10">
                      <span className="text-[10px] uppercase font-bold text-[#8B5E34] block">
                        PACKAGING
                      </span>
                      <span className="font-semibold text-[#081C15] text-[13px] leading-tight block">
                        1,000 kg Jumbo Bag &amp; 50 kg PP Bag
                      </span>
                    </div>
                  </div>

                  {/* Target Industry & Applications */}
                  <div className="mt-3.5 bg-[#1B4332]/5 p-3.5 rounded-xl border border-[#1B4332]/10">
                    <span className="text-[10px] uppercase font-bold text-[#1B4332] block mb-1">
                      {t("TARGET TERNAK & INDUSTRI", "TARGET LIVESTOCK & APPLICATION")}
                    </span>
                    <p className="text-xs text-[#081C15]/85 leading-relaxed">
                      Sapi perah (peningkat lemak susu), sapi potong / penggemukan feedlot (ADG cepat), domba &amp; kambing, serta industri pabrik pakan (feed mills).
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#1B4332]/10 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact?inquiry=quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#143628] text-white px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <span>{t("Minta Penawaran (RFQ)", "Request Quotation (RFQ)")}</span>
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsSpecModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#F8F3E7] hover:bg-[#eae2cf] text-[#1B4332] border border-[#1B4332]/25 px-5 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm active:scale-[0.98]"
                >
                  <Download className="w-4 h-4 text-[#8B5E34]" />
                  <span>{t("Download Spec Sheet", "Download Spec Sheet")}</span>
                </button>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B5E34] hover:text-[#C89B3C] transition-colors ml-auto py-2"
                >
                  <span>{t("Lihat Detail Lengkap", "View Full Details")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Interactive Spec Sheet Modal */}
      {isSpecModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#1B4332]/20 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-[#081C15] text-white p-5 flex items-center justify-between border-b border-[#C89B3C]/30">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#C89B3C]" />
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg leading-snug">
                    Product Technical &amp; Nutritional Spec Sheet
                  </h3>
                  <p className="text-[11px] text-[#F8F3E7]/70 font-mono">
                    REF: BAE-FEED-SPEC-230800
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsSpecModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Printable Spec Sheet */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs text-[#081C15]">
              <div className="border-b border-[#1B4332]/10 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B5E34] block">
                  COMMODITY OVERVIEW
                </span>
                <h4 className="font-serif font-bold text-lg text-[#081C15] mt-1">
                  Sun-Dried Coffee Husk for Animal Feed (Feed Grade)
                </h4>
                <p className="text-xs text-[#081C15]/75 mt-1 leading-relaxed">
                  Export-grade sun-dried coffee husk, de-stoned, cleaned, and sieved to safe moisture threshold ≤ 11.5% in Central Java, Indonesia.
                </p>
              </div>

              {/* Table of Specifications */}
              <div className="rounded-xl border border-[#1B4332]/15 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {product.specifications.map((spec, sIdx) => (
                      <tr
                        key={sIdx}
                        className={`border-b border-[#1B4332]/10 ${
                          sIdx % 2 === 0 ? "bg-[#F8F3E7]/40" : ""
                        }`}
                      >
                        <td className="p-2.5 font-bold text-[#1B4332] w-2/5">{spec.label}</td>
                        <td className="p-2.5 font-semibold text-[#081C15]">{spec.value}</td>
                      </tr>
                    ))}
                    <tr className="border-b border-[#1B4332]/10">
                      <td className="p-2.5 font-bold text-[#1B4332]">Minimum Order (MOQ)</td>
                      <td className="p-2.5 font-semibold text-[#081C15]">{product.moq}</td>
                    </tr>
                    <tr className="bg-[#F8F3E7]/40">
                      <td className="p-2.5 font-bold text-[#1B4332]">Packaging Options</td>
                      <td className="p-2.5 text-[#081C15]">
                        {product.packagingOptions.map((p) => `${p.type} (${p.netWeight})`).join(", ")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Compliance & Export Terms */}
              <div className="bg-[#1B4332]/5 p-3.5 rounded-xl border border-[#1B4332]/10 text-[11px] space-y-1">
                <span className="font-bold text-[#1B4332] block">Port of Dispatch &amp; Incoterms:</span>
                <p className="text-[#081C15]/80">
                  FOB Tanjung Emas Port (IDSRG), Semarang / CIF Global Ports. Accompanied by Phytosanitary Certificate (Badan Karantina Indonesia), Certificate of Origin (COO), and accredited laboratory nutritional/toxicology COA.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#F8F3E7] p-4 flex items-center justify-between border-t border-[#1B4332]/15">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#1B4332] border border-[#1B4332]/20 px-4 py-2 rounded-lg font-semibold text-xs transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>Print Spec Sheet</span>
              </button>

              <div className="flex items-center gap-2">
                <Link
                  href="/contact?inquiry=quote"
                  onClick={() => setIsSpecModalOpen(false)}
                  className="bg-[#1B4332] hover:bg-[#143628] text-white px-4 py-2 rounded-lg font-bold text-xs transition-colors"
                >
                  Request Official Quotation
                </Link>
                <button
                  type="button"
                  onClick={() => setIsSpecModalOpen(false)}
                  className="px-3 py-2 text-xs font-semibold text-[#081C15]/70 hover:text-[#081C15]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
