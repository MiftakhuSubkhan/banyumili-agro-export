"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Leaf } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PRODUCTS } from "@/constants/products";
import { useLanguage } from "@/context/LanguageContext";

export function ProductsSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5E34]">
              {t("PRODUK EKSPOR UNGGULAN", "FEATURED EXPORT COMMODITIES")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#081C15] mt-2 tracking-tight">
              {t("Komoditas Pilihan dari Indonesia", "Finest Selected Commodities from Indonesia")}
            </h2>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#1B4332] hover:text-[#C89B3C] transition-colors shrink-0"
          >
            <span>{t("Lihat Semua Produk", "View All Products")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Product Cards matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const shortDesc =
              language === "ID"
                ? product.id === "indonesian-specialty-coffee"
                  ? "Biji kopi hijau berkualitas tinggi dengan aroma khas daerah dan profil rasa kaya dari sentra perkebunan terbaik Indonesia."
                  : product.id === "lampung-black-pepper"
                  ? "Lada hitam Indonesia dengan aroma tajam, warna seragam, dan densitas tinggi, sangat diminati oleh industri pangan dunia."
                  : "Kayu manis alami Kerinci dengan aroma harum khas dan kadar minyak atsiri tinggi untuk industri pangan dan rempah internasional."
                : product.shortDescription;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-[#1B4332]/10 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_35px_rgba(27,67,50,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#081C15]/5">
                    <Image
                      src={product.heroImage}
                      alt={language === "ID" ? product.indonesianName : product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category leaf badge overlay */}
                    <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-[#1B4332] text-[#F8F3E7] flex items-center justify-center shadow-md">
                      <Leaf className="w-3.5 h-3.5 text-[#C89B3C]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-[#081C15] group-hover:text-[#1B4332] transition-colors mb-2.5">
                      {language === "ID" ? product.indonesianName : product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#081C15]/75 leading-relaxed">
                      {shortDesc}
                    </p>
                  </div>
                </div>

                {/* Action Link at Bottom */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/products#${product.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#8B5E34] group-hover:text-[#C89B3C] transition-colors"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#C89B3C]/15 text-[#8B5E34] group-hover:bg-[#C89B3C] group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                    <span>{t("Lihat Detail Produk", "View Product Details")}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
