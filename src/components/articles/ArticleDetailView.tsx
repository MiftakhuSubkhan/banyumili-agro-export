"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Article } from "@/types/article";
import { useLanguage } from "@/context/LanguageContext";
import {
  Calendar,
  Clock,
  ChevronRight,
  User,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Send,
  Share2,
} from "lucide-react";

interface ArticleDetailViewProps {
  article: Article;
  relatedArticles: Article[];
}

export function ArticleDetailView({
  article,
  relatedArticles,
}: ArticleDetailViewProps) {
  const { language, t } = useLanguage();

  const isId = language === "ID";
  const title = isId ? article.title : article.titleEn;
  const summary = isId ? article.summary : article.summaryEn;
  const authorRole = isId ? article.authorRole : article.authorRoleEn;
  const readTime = isId ? article.readTime : article.readTime.replace("menit baca", "min read");
  const keyTakeaways = isId ? article.keyTakeaways : article.keyTakeawaysEn;
  const sections = article.sections || [];

  const categoryLabel =
    isId
      ? article.categoryLabel ||
        (article.category === "Commodities"
          ? "Komoditas"
          : article.category === "Quality Standards"
          ? "Standar Kualitas"
          : "Tren Pasar")
      : article.category;

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title,
          text: summary,
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert(isId ? "Tautan artikel berhasil disalin!" : "Article link copied to clipboard!");
    }
  };

  return (
    <main className="pt-24 pb-20 bg-white">
      {/* 1. Breadcrumb Navigasi */}
      <section className="bg-[#F8F3E7]/80 border-b border-[#1B4332]/10 py-3.5">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-2 text-xs text-[#081C15]/70"
          >
            <Link
              href="/"
              className="hover:text-[#1B4332] font-medium transition-colors"
            >
              {t("Beranda", "Home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8B5E34]/50 shrink-0" />
            <Link
              href="/articles"
              className="hover:text-[#1B4332] font-medium transition-colors"
            >
              {t("Artikel", "Articles")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8B5E34]/50 shrink-0" />
            <span className="text-[#1B4332] font-semibold truncate max-w-[240px] sm:max-w-md">
              {title}
            </span>
          </nav>
        </Container>
      </section>

      {/* 2. Article Header & Meta */}
      <article className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Meta Tags: Category, Date, Read Time */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
              <span className="bg-[#1B4332] text-[#F8F3E7] font-semibold px-3 py-1 rounded-full uppercase tracking-wider text-[11px] shadow-sm">
                {categoryLabel}
              </span>

              <div className="flex items-center gap-1.5 text-[#8B5E34] font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{article.date}</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#8B5E34] font-medium">
                <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#081C15] leading-[1.2] tracking-tight">
              {title}
            </h1>

            {/* Author Byline & Social Share */}
            <div className="flex items-center justify-between border-y border-[#1B4332]/10 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B4332] text-[#F8F3E7] flex items-center justify-center font-bold text-sm shadow-sm border border-[#C89B3C]/40">
                  <User className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-[#081C15]">
                    {article.author}
                  </h4>
                  <p className="text-[11px] text-[#081C15]/65 leading-tight">
                    {authorRole}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#C89B3C] bg-[#F8F3E7] px-3.5 py-2 rounded-lg border border-[#1B4332]/10 hover:border-[#C89B3C]/40 transition-all"
                title={t("Bagikan Artikel", "Share Article")}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t("Bagikan", "Share")}</span>
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[#1B4332]/10 bg-[#081C15]/5">
              <Image
                src={article.thumbnail}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>

            {/* Summary Lead Box */}
            <div className="border-l-4 border-[#C89B3C] bg-[#F8F3E7]/60 p-5 sm:p-6 rounded-r-xl">
              <p className="text-base sm:text-lg font-serif italic text-[#081C15]/90 leading-relaxed">
                &ldquo;{summary}&rdquo;
              </p>
            </div>

            {/* Key Takeaways Box (Poin Utama) */}
            {keyTakeaways && keyTakeaways.length > 0 && (
              <div className="bg-[#F8F3E7] rounded-2xl p-6 sm:p-8 border border-[#C89B3C]/35 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-[#1B4332] font-serif font-bold text-base sm:text-lg">
                  <div className="w-7 h-7 rounded-full bg-[#1B4332] text-[#C89B3C] flex items-center justify-center shadow-inner">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>{t("Poin Utama Artikel", "Key Takeaways")}</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#081C15]/85">
                  {keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. Prose Article Body Styling */}
            <div className="pt-4 space-y-8 text-sm sm:text-base text-[#081C15]/85 leading-relaxed font-normal">
              {/* Introduction Paragraph */}
              <p className="leading-relaxed sm:text-lg text-[#081C15]/90 font-light">
                {isId ? article.summary : article.summaryEn}
              </p>

              {/* Structured Sections */}
              {sections.map((section, sIdx) => {
                const heading = isId ? section.heading : section.headingEn;
                const content = isId ? section.content : section.contentEn || section.content;
                const bullets = isId
                  ? section.bulletPoints
                  : section.bulletPointsEn || section.bulletPoints;

                return (
                  <div key={sIdx} className="space-y-4 pt-2">
                    {heading && (
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#081C15] mt-6 pt-2 border-b border-[#1B4332]/10 pb-2">
                        {heading}
                      </h2>
                    )}

                    <p className="leading-relaxed text-[#081C15]/85">{content}</p>

                    {bullets && bullets.length > 0 && (
                      <ul className="space-y-2.5 pl-2">
                        {bullets.map((b, bIdx) => {
                          const parts = b.split("**");
                          return (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C] shrink-0 mt-2" />
                              <span className="leading-relaxed">
                                {parts.length >= 3 ? (
                                  <>
                                    <strong className="text-[#1B4332] font-semibold">
                                      {parts[1]}
                                    </strong>
                                    {parts.slice(2).join("")}
                                  </>
                                ) : (
                                  b
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 4. Section CTA: Konsultasi / Request Quote Ekspor */}
            <div className="mt-14 pt-8 border-t border-[#1B4332]/15">
              <div className="bg-gradient-to-br from-[#1B4332] via-[#143D2D] to-[#081C15] rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl border border-[#C89B3C]/30">
                {/* Ambient glow decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4 max-w-xl">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C89B3C] font-bold">
                    EXPORT TRADE DESK
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    {t(
                      "Tertarik Mengimpor Komoditas Ini?",
                      "Interested in Sourcing This Commodity?"
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F8F3E7]/85 leading-relaxed font-light">
                    {t(
                      "Hubungi perwakilan perdagangan Banyumili Agro Export untuk spesifikasi sampel laboratorium, volume pasokan kontainer, dan estimasi penawaran harga FOB / CIF.",
                      "Connect with Banyumili Agro Export trade desk for official lab samples, container supply availability, and competitive FOB/CIF quotations."
                    )}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#B68A2E] text-[#081C15] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
                    >
                      <span>{t("Minta Penawaran Harga (RFQ)", "Request Quotation (RFQ)")}</span>
                      <Send className="w-4 h-4" />
                    </Link>

                    <a
                      href="https://wa.me/6285624015416?text=Halo%20Tim%20Banyumili%20Agro%20Export,%20saya%20tertarik%20berdiskusi%20mengenai%20komoditas%20ekspor."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
                    >
                      <PhoneCall className="w-4 h-4 text-[#C89B3C]" />
                      <span>WhatsApp (+62 856-2401-5416)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Articles Button */}
            <div className="pt-4">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1B4332] hover:text-[#C89B3C] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{t("Kembali ke Semua Artikel", "Back to All Articles")}</span>
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {/* 5. Daftar 2 Artikel Terkait Lainnya */}
      {relatedArticles.length > 0 && (
        <section className="py-14 sm:py-20 bg-[#F8F3E7]/50 border-t border-[#1B4332]/10">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5E34]">
                    {t("REKOMENDASI BACAAN", "RECOMMENDED READING")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#081C15] mt-1">
                    {t("Artikel Terkait Lainnya", "Related Articles & Insights")}
                  </h3>
                </div>

                <Link
                  href="/articles"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1B4332] hover:text-[#C89B3C] transition-colors"
                >
                  <span>{t("Lihat Semua", "View All")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => {
                  const relTitle = isId ? rel.title : rel.titleEn;
                  const relSummary = isId ? rel.summary : rel.summaryEn;
                  const relCategory =
                    isId
                      ? rel.categoryLabel ||
                        (rel.category === "Commodities"
                          ? "Komoditas"
                          : rel.category === "Quality Standards"
                          ? "Standar Kualitas"
                          : "Tren Pasar")
                      : rel.category;

                  return (
                    <div
                      key={rel.id}
                      className="bg-white rounded-2xl border border-[#1B4332]/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#081C15]/5">
                          <Image
                            src={rel.thumbnail}
                            alt={relTitle}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-[#1B4332] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow">
                            {relCategory}
                          </div>
                        </div>

                        <div className="p-6">
                          <p className="text-[11px] font-semibold text-[#8B5E34] uppercase tracking-wider mb-2">
                            {rel.date} • {isId ? rel.readTime : rel.readTime.replace("menit baca", "min read")}
                          </p>
                          <h4 className="font-serif font-bold text-base sm:text-lg text-[#081C15] group-hover:text-[#1B4332] transition-colors line-clamp-2 leading-snug">
                            {relTitle}
                          </h4>
                          <p className="text-xs text-[#081C15]/75 mt-2 line-clamp-2 leading-relaxed">
                            {relSummary}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0">
                        <Link
                          href={`/articles/${rel.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B5E34] group-hover:text-[#C89B3C] transition-colors"
                        >
                          <span>{t("Baca Selengkapnya", "Read Article")}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
