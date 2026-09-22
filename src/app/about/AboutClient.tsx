"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { COMPANY_INFO, VALUE_PILLARS, COMPANY_STATS } from "@/constants/company";
import { PillarEmblem } from "@/components/common/PillarEmblem";
import { useLanguage } from "@/context/LanguageContext";

export function AboutClient() {
  const { language, t } = useLanguage();

  return (
    <main className="pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-[#081C15] text-[#F8F3E7] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1B4332_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#C89B3C]">
            {t("TENTANG KAMI", "ABOUT US")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3">
            {t("Mengenal Banyumili Agro Export", "About Banyumili Agro Export")}
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-[#F8F3E7]/80 text-sm sm:text-base leading-relaxed">
            {t(
              "Jembatan terpercaya antara kekayaan hasil bumi Indonesia dengan standar industri komoditas global.",
              "A trusted bridge between Indonesia's rich agricultural heritage and global commodity industry standards."
            )}
          </p>
        </Container>
      </section>

      {/* Content Section: Menggunakan Background Semula */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B5E34]">
                {t("PROFIL PERUSAHAAN", "COMPANY PROFILE")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#081C15] mt-2 mb-6">
                {t(
                  "Dedikasi Kami untuk Kualitas & Keberlanjutan",
                  "Our Dedication to Quality & Sustainability"
                )}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#081C15]/80 leading-relaxed">
                <p>
                  {language === "ID"
                    ? COMPANY_INFO.fullBio
                    : "Banyumili Agro Export was founded with a clear vision: to introduce Indonesia's finest agricultural commodities to the global marketplace through strict quality control, equitable farmer partnerships, and dependable international maritime logistics."}
                </p>
                <p>
                  {t(
                    "Dengan pengalaman berkolaborasi langsung bersama petani lokal di Sumatera dan berbagai daerah penghasil komoditas utama, kami memastikan rantai pasok yang transparan, bebas perantara spekulatif, dan memiliki kontrol mutu yang ketat.",
                    "Working directly alongside local farming cooperatives in Sumatra and primary harvesting regions across Indonesia, we establish a transparent supply chain devoid of speculative middlemen, enforcing rigorous quality assurance from soil to shipment."
                  )}
                </p>
              </div>
            </div>

            {/* Stats Grid: Kotak Putih Elegan dengan Soft Shadow */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#1B4332]/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] transition-all duration-300">
              {COMPANY_STATS.map((stat, idx) => {
                const statDesc =
                  idx === 0
                    ? t("Berasal dari sentra perkebunan Indonesia", "Ethically sourced from Indonesian origins")
                    : idx === 1
                    ? t("Tujuan ekspor di Asia, Eropa, & Amerika", "Export destinations across Asia, Europe & Americas")
                    : idx === 2
                    ? t("Petani binaan mitra di sentra perkebunan", "Partnered farming households in origin centers")
                    : t("Volume kapasitas ekspor per tahun", "Annual agricultural export capacity");

                return (
                  <div key={idx} className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-bold font-serif text-[#1B4332]">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold text-[#8B5E34] uppercase tracking-wider">
                      {language === "ID" ? stat.labelId : stat.label}
                    </p>
                    <p className="text-xs text-[#081C15]/70 leading-normal">
                      {statDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Value Pillars: Mengalir Alami di Bawah Stats seperti Semula */}
          <div className="mt-20">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B5E34]">
                {t("PILAR UTAMA KAMI", "OUR CORE PILLARS")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#081C15] mt-2">
                {t(
                  "Komitmen untuk Perdagangan Global yang Berkelanjutan",
                  "Commitment to Sustainable Global Trade"
                )}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VALUE_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-[#1B4332]/10 shadow-sm hover:shadow-xl hover:border-[#C89B3C]/35 transition-all duration-300 group hover:-translate-y-1 flex items-start gap-4 sm:gap-5"
                >
                  <PillarEmblem icon={pillar.icon} />
                  <div className="space-y-1.5 flex-1 pt-0.5">
                    <h4 className="text-base sm:text-lg font-serif font-bold text-[#081C15] group-hover:text-[#1B4332] transition-colors leading-snug">
                      {language === "ID" ? pillar.titleId : pillar.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#081C15]/75 leading-relaxed">
                      {language === "ID" ? pillar.descriptionId : pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
