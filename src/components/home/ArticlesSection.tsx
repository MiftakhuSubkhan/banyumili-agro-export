"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ARTICLES } from "@/constants/articles";
import { useLanguage } from "@/context/LanguageContext";

export function ArticlesSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#F8F3E7]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5E34]">
              {t("ARTIKEL & WAWASAN", "ARTICLES & INSIGHTS")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#081C15] mt-2 tracking-tight">
              {t("Informasi Terkini Seputar Pertanian dan Ekspor", "Latest Insights on Agriculture & Global Trade")}
            </h2>
          </div>

          <Link
            href="/articles"
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#1B4332] hover:text-[#C89B3C] transition-colors shrink-0"
          >
            <span>{t("Lihat Semua Artikel", "View All Articles")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Article Cards matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-[#1B4332]/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#081C15]/5">
                  <Image
                    src={article.thumbnail}
                    alt={language === "ID" ? article.title : article.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[11px] font-semibold text-[#8B5E34] uppercase tracking-wider mb-2">
                    {article.date}
                  </p>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#081C15] group-hover:text-[#1B4332] transition-colors line-clamp-2 leading-snug">
                    {language === "ID" ? article.title : article.titleEn}
                  </h3>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0">
                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B5E34] group-hover:text-[#C89B3C] transition-colors"
                >
                  <span>{t("Baca Selengkapnya", "Read More")}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
