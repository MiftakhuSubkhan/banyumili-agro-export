"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { VALUE_PILLARS } from "@/constants/company";
import { PillarEmblem } from "@/components/common/PillarEmblem";
import { useLanguage } from "@/context/LanguageContext";

export function PillarsSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 sm:py-24 bg-[#F8F3E7]/60 border-t border-[#1B4332]/5">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5E34]">
            {t("PILAR UTAMA KAMI", "OUR CORE PILLARS")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#081C15] mt-2 tracking-tight">
            {t(
              "Komitmen untuk Perdagangan Global yang Berkelanjutan",
              "Commitment to Sustainable Global Trade"
            )}
          </h2>
          {/* Garis aksen emas sesuai mockup */}
          <div className="w-10 h-0.5 bg-[#C89B3C] mx-auto mt-3" />
        </div>

        {/* 3 Pillars Grid dengan layout horizontal & emblem mewah */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#1B4332]/10 shadow-sm hover:shadow-xl hover:border-[#C89B3C]/35 transition-all duration-300 group hover:-translate-y-1 flex items-start gap-4 sm:gap-5"
            >
              {/* Jewel Emblem Badge with Ambient Glow */}
              <PillarEmblem icon={pillar.icon} />

              {/* Text Content */}
              <div className="space-y-1.5 flex-1 pt-0.5">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#081C15] group-hover:text-[#1B4332] transition-colors leading-snug">
                  {language === "ID" ? pillar.titleId : pillar.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#081C15]/75 leading-relaxed">
                  {language === "ID" ? pillar.descriptionId : pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
