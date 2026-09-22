"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ARTICLES } from "@/constants/articles";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function ArticlesClient() {
  const { language, t } = useLanguage();

  return (
    <main className="pt-24 pb-20">
      {/* Banner */}
      <section className="bg-[#081C15] text-[#F8F3E7] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1B4332_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#C89B3C]">
            {t("ARTIKEL & WAWASAN", "ARTICLES & INSIGHTS")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3">
            {t(
              "Informasi Terkini Seputar Pertanian & Ekspor",
              "Latest Agricultural & Export Market Insights"
            )}
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-[#F8F3E7]/80 text-sm sm:text-base leading-relaxed">
            {t(
              "Wawasan industri, analisis tren pasar komoditas global, serta perkembangan standar kualitas ekspor hasil bumi Indonesia.",
              "Industry insights, global commodity market trends, and quality standard developments for Indonesian agricultural exports."
            )}
          </p>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article) => {
              const catName =
                language === "ID"
                  ? article.category === "Commodities"
                    ? "Komoditas"
                    : article.category === "Quality Standards"
                    ? "Standar Kualitas"
                    : "Tren Pasar"
                  : article.category;

              const readTimeText =
                language === "ID"
                  ? article.readTime.replace("min read", "menit baca")
                  : article.readTime;

              return (
                <article
                  key={article.id}
                  className="bg-white rounded-xl border border-[#1B4332]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-[#8B5E34] font-medium mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {readTimeText}
                      </span>
                    </div>

                    <h2 className="font-serif font-bold text-lg text-[#081C15] leading-snug hover:text-[#1B4332] transition-colors mb-3">
                      {language === "ID" ? article.title : article.titleEn}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#081C15]/75 leading-relaxed">
                      {language === "ID" ? article.summary : article.summaryEn}
                    </p>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#1B4332] bg-[#1B4332]/10 px-2.5 py-1 rounded-full">
                      {catName}
                    </span>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#8B5E34] hover:text-[#C89B3C] transition-colors"
                    >
                      <span>{t("Baca Selengkapnya", "Read More")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
