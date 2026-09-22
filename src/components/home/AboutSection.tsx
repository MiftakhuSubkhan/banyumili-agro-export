"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";
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
                {t("Mengenal Banyumili Agro Export", "About Banyumili Agro Export")}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#081C15]/80 leading-relaxed">
              {t(
                "Banyumili Agro Export adalah perusahaan ekspor hasil pertanian Indonesia yang berfokus pada komoditas kopi, lada hitam, dan kayu manis. Kami berkomitmen untuk menghubungkan potensi pertanian lokal dengan pasar internasional melalui produk berkualitas, kemitraan yang berkelanjutan, serta layanan ekspor yang profesional.",
                "Banyumili Agro Export is an Indonesian agricultural commodity export company dedicated to supplying high-grade specialty coffee, Lampung black pepper, and Kerinci cassia cinnamon directly from trusted farmer networks to international B2B importers."
              )}
            </p>

            <div className="pt-2">
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
                src="/images/about/farmer-cherries.jpg"
                alt="Petani Kopi Indonesia Panen Ceri Kopi Merah"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Responsive Card: Rapi di bawah gambar pada mobile, floating overlap di desktop */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 w-full sm:w-[280px] bg-white p-5 rounded-2xl border border-[#1B4332]/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:shadow-[0_14px_35px_rgba(0,0,0,0.12)] z-10">
              <div className="flex sm:block items-start gap-3.5 sm:gap-0">
                <div className="w-9 h-9 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center sm:mb-3 shrink-0">
                  <Sprout className="w-4 h-4 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#081C15] leading-snug">
                    {t("Dari Petani Lokal Untuk Dunia", "From Local Farmers to the World")}
                  </h4>
                  <p className="text-xs text-[#081C15]/75 mt-1 sm:mt-1.5 leading-relaxed">
                    {t(
                      "Kami percaya bahwa produk terbaik lahir dari petani yang diberdayakan.",
                      "We believe that premium agricultural commodities originate from empowered farming communities."
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
