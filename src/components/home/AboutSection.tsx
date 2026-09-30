"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wheat, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Description & Heading */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5E34]">
                {t("TENTANG KAMI", "ABOUT US")}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#081C15] mt-2 tracking-tight">
                {t(
                  "Produsen & Eksportir Pakan Kulit Kopi Indonesia",
                  "Indonesian Processed Coffee Husk Feed Manufacturer"
                )}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#081C15]/80 leading-relaxed">
              {t(
                "Banyumili Agro Export adalah produsen dan eksportir bahan baku pakan ternak berkualitas tinggi dari kulit kopi olahan (Processed Coffee Husk for Animal Feed). Berpusat di sentra dataran tinggi Jawa Tengah, kami mentransformasi hasil samping perkebunan kopi menjadi pakan sumber serat dan energi berdensitas tinggi untuk peternakan sapi perah, sapi potong, dan industri pabrik pakan (feed mills) internasional.",
                "Banyumili Agro Export is a premier manufacturer and exporter of high-nutrition processed coffee husk feed ingredients. Sourced directly from Central Java highland processing mills, we transform coffee cherry pulp into high-density digestible fiber and energy feed components formulated for dairy cattle, beef feedlots, and commercial feed compounders worldwide."
              )}
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#081C15]/85">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>
                  {t(
                    "Pelet Pakan 6–8mm Berdensitas Padat (~600 kg/m³), hemat ruang muat kontainer & tahan lama",
                    "High-Density 6–8mm Feed Pellets (~600 kg/m³), optimizing cargo space & long shelf stability"
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>
                  {t(
                    "Nutrisi Rumen Teruji: Crude Protein 10.5–12.5%, Serat Kasar 18–24%, & Bebas Aflatoksin (< 10 ppb)",
                    "Verified Rumen Nutrition: Crude Protein 10.5–12.5%, Crude Fiber 18–24%, & Aflatoxin Safe (< 10 ppb)"
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>
                  {t(
                    "Kemasan Ekspor Fleksibel: Karung Woven PP 50kg & Jumbo Bulk Big Bag 1.000kg",
                    "Flexible Export Packaging: 50kg PP Woven Bags & 1,000kg Jumbo Bulk Big Bags"
                  )}
                </span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#143628] text-white px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <span>{t("Lebih Lanjut Tentang Kami", "Learn More About Us")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual with Overlapping Card */}
          <div className="lg:col-span-6 relative">
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#1B4332]/10">
              <Image
                src="/images/about/export-warehouse.jpg"
                alt="Gudang & Fasilitas Ekspor Pakan Ternak Kulit Kopi Banyumili Agro"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Responsive Card: Floating overlap on desktop */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 w-full sm:w-[320px] bg-white p-5 rounded-2xl border border-[#1B4332]/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:shadow-[0_14px_35px_rgba(0,0,0,0.12)] z-10">
              <div className="flex sm:block items-start gap-3.5 sm:gap-0">
                <div className="w-9 h-9 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center sm:mb-3 shrink-0">
                  <Wheat className="w-4 h-4 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#081C15] leading-snug">
                    {t("Nutrisi Teruji & Sirkularitas Agro", "Tested Nutrition & Agro-Circularity")}
                  </h4>
                  <p className="text-xs text-[#081C15]/75 mt-1 sm:mt-1.5 leading-relaxed">
                    {t(
                      "Penyediaan bahan pakan konsentrat & serat berkualitas untuk ketahanan pakan peternakan global.",
                      "Supplying high-quality fiber & concentrate feed ingredients for global livestock resilience."
                    )}
                  </p>
                </div>
              </div>
              <div className="w-8 h-0.5 bg-[#C89B3C] rounded-full mt-3 hidden sm:block" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
