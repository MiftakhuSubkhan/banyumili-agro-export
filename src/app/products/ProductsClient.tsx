"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { PRODUCTS } from "@/constants/products";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  CheckCircle2,
  Package,
  ShieldCheck,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";

export function ProductsClient() {
  const { language, t } = useLanguage();

  const productData: Record<
    string,
    {
      categoryLabel: string;
      origin: string;
      harvestSeason: string;
      tagline: string;
      fullDescription: string;
      features: string[];
    }
  > = {
    "processed-coffee-husk-feed": {
      categoryLabel: t("KULIT KOPI KERING PAKAN", "DRIED COFFEE HUSK FEED"),
      origin: t("Dataran Tinggi Jawa Tengah, Indonesia", "Central Java Highlands, Indonesia"),
      harvestSeason: t(
        "Pasokan Kontinu Sepanjang Tahun",
        "Year-Round Continuous Supply"
      ),
      tagline: t(
        "Bahan baku pakan ternak tinggi serat & energi untuk ransum sapi perah, sapi potong & peternakan ruminansia",
        "High-fiber & energy-dense feed ingredient for dairy cattle, beef feedlots & ruminant farming"
      ),
      fullDescription: t(
        "Banyumili Agro Export memproduksi dan mengekspor Kulit Kopi Kering Mutu Pakan Ternak (Sun-Dried Coffee Husk for Livestock Feed) dari sentra dataran tinggi Jawa Tengah, Indonesia. Melalui metode pengeringan matahari terkontrol, de-stoning (penghilangan batu & tanah), serta penyaringan ayakan getar, kami menghasilkan kulit kopi kering alami yang bersih, beraroma harum, dan berkadar air stabil ≤ 11.5%. Produk ini sangat ideal sebagai pakan sumber serat berkualitas tinggi dan suplemen energi yang meningkatkan kecernaan rumen pada sapi perah, sapi potong (feedlot), kambing, dan domba.",
        "Banyumili Agro Export produces and exports export-grade Sun-Dried Coffee Husk for Livestock Feed sourced from Central Java highlands. Processed through controlled solar drying, de-stoning, and vibrating sieve screening to yield clean, aromatic dried husk with stable moisture ≤ 11.5%. Providing rich digestible fiber and energy for dairy and beef cattle."
      ),
      features: [
        t("100% Kulit Kopi Kering Alami Bersih Bebas Batu & Tanah (< 0.5% Kotoran)", "100% Pure Natural Sun-Dried Coffee Husk (Zero Soil Contact & De-stoned)"),
        t("Kaya Serat Kasar Terdigestikan (Crude Fiber 18.0% – 24.0%)", "High Digestible Fiber Content (Crude Fiber 18.0% – 24.0%)"),
        t("Kadar Protein Kasar 10.5% – 12.5% & TDN 58% – 64%", "Crude Protein 10.5% – 12.5% & TDN 58% – 64% for Ruminant Energy"),
        t("Bebas Aflatoksin (< 10 ppb) & Kemasan Jumbo Bag 1.000kg / Karung 50kg", "Aflatoxin Safe (< 10 ppb) & 1,000kg Jumbo Bulk / 50kg PP Packaging"),
      ],
    },
  };

  return (
    <main className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="bg-[#081C15] text-[#F8F3E7] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1B4332_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#C89B3C]">
            {t("PRODUK SPESIALISASI TUNGGAL", "SPECIALTY EXPORT COMMODITY")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3">
            {t(
              "Our Specialty Product: Sun-Dried Coffee Husk for Livestock Feed",
              "Our Specialty Product: Sun-Dried Coffee Husk for Livestock Feed"
            )}
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-[#F8F3E7]/80 text-sm sm:text-base leading-relaxed">
            {t(
              "Memasok produk kulit kopi kering bermutu tinggi dari sentra Jawa Tengah untuk industri pakan ternak global. Kaya serat kasar & protein, bebas mikotoksin, dan siap ekspor via Pelabuhan Tanjung Emas (FOB/CIF).",
              "Supplying export-grade sun-dried coffee husk directly from Central Java highlands for global animal nutrition. High fiber & protein, mycotoxin-free, ready for global export via Tanjung Emas Port (FOB/CIF)."
            )}
          </p>
        </Container>
      </section>

      {/* Product Cards: 3-Column Layout per Product */}
      <section className="py-16 bg-white">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            {PRODUCTS.map((product) => {
              const details = productData[product.id as keyof typeof productData];

              return (
                <div
                  key={product.id}
                  id={product.slug}
                  className="bg-white rounded-2xl border border-[#1B4332]/10 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
                    {/* KOLOM 1: Visual Foto Produk & Identitas Asal (lg:col-span-4) */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                      {/* Foto Produk Resolusi Tinggi */}
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#081C15]/5 border border-[#1B4332]/10 shadow-inner group">
                        <Image
                          src={product.heroImage}
                          alt={language === "ID" ? product.indonesianName : product.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Kategori Badge di atas foto */}
                        <div className="absolute top-3.5 left-3.5 bg-[#1B4332] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                          {details?.categoryLabel || product.category}
                        </div>
                      </div>

                      {/* Box Info Asal & Panen */}
                      <div className="bg-[#F8F3E7] p-4 rounded-xl border border-[#1B4332]/10 space-y-2.5 text-xs text-[#081C15]/80">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-[#8B5E34] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#081C15] block">
                              {t("Daerah Asal:", "Origin:")}
                            </span>
                            <span className="text-[11px] text-[#081C15]/75 leading-tight">
                              {details?.origin || product.origin}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 pt-1 border-t border-[#1B4332]/10">
                          <Calendar className="w-4 h-4 text-[#8B5E34] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#081C15] block">
                              {t("Ketersediaan Pasokan:", "Supply Season:")}
                            </span>
                            <span className="text-[11px] text-[#081C15]/75">
                              {details?.harvestSeason || product.harvestSeason}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 pt-1 border-t border-[#1B4332]/10">
                          <Award className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#081C15] block">
                              {t("Kesiapan Dokumen Karantina:", "Export Compliance:")}
                            </span>
                            <span className="text-[10px] text-[#081C15]/75">
                              Phytosanitary, Animal Feed Safety, COO, Lab COA
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* KOLOM 2: Deskripsi, Keunggulan & Tombol RFQ (lg:col-span-4) */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <span className="text-xs font-serif italic text-[#8B5E34] block">
                          {details?.tagline || product.tagline}
                        </span>

                        <h2 className="text-2xl font-serif font-bold text-[#081C15] leading-tight">
                          {language === "ID" ? product.indonesianName : product.name}{" "}
                          <span className="block text-base font-normal text-[#1B4332] mt-0.5">
                            {language === "ID" ? `(${product.name})` : `(${product.indonesianName})`}
                          </span>
                        </h2>

                        <p className="text-xs sm:text-sm text-[#081C15]/80 leading-relaxed">
                          {details?.fullDescription || product.fullDescription}
                        </p>

                        {/* Keunggulan Utama */}
                        <div className="pt-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1B4332] mb-2">
                            {t("Keunggulan Nutrisi & Mutu:", "Key Quality Features:")}
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[#081C15]/85">
                            {(details?.features || product.keyFeatures).map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C89B3C] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tombol RFQ */}
                      <div className="pt-2">
                        <Link
                          href={`/contact?product=${encodeURIComponent(product.name)}`}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#143628] text-white text-xs sm:text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow"
                        >
                          <span>{t("Minta Penawaran Harga (RFQ)", "Request Quotation (RFQ)")}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* KOLOM 3: Lembar Spesifikasi Teknis Ekspor (lg:col-span-4) */}
                    <div className="lg:col-span-4 bg-[#F8F3E7] p-5 sm:p-6 rounded-xl border border-[#1B4332]/10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-[#1B4332]/10 pb-3 mb-3">
                          <h3 className="font-serif font-bold text-sm sm:text-base text-[#081C15] flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#1B4332]" />
                            {t("Spesifikasi Nutrisi & Mutu", "Nutritional Specifications")}
                          </h3>
                          <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded text-[#8B5E34] border border-[#1B4332]/10">
                            HS: {product.hsCode.split(" ")[0]}
                          </span>
                        </div>

                        {/* Tabel Parameter */}
                        <div className="divide-y divide-[#1B4332]/10 text-xs">
                          {product.specifications.slice(0, 8).map((spec, sIdx) => (
                            <div key={sIdx} className="py-2 flex justify-between gap-3">
                              <span className="text-[#081C15]/70">{spec.label}</span>
                              <span className="font-semibold text-[#081C15] text-right">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                          <div className="py-2 flex justify-between gap-3">
                            <span className="text-[#081C15]/70">
                              {t("Jumlah Minimum Order (MOQ)", "Minimum Order (MOQ)")}
                            </span>
                            <span className="font-semibold text-[#1B4332] text-right">
                              {product.moq}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Kemasan Pengapalan */}
                      <div className="mt-4 pt-3 border-t border-[#1B4332]/10 flex items-center gap-2 text-[11px] text-[#081C15]/80">
                        <Package className="w-4 h-4 text-[#C89B3C] shrink-0" />
                        <span className="leading-snug">
                          <strong>{t("Kemasan:", "Packaging:")}</strong>{" "}
                          {product.packagingOptions.map((p) => p.type).join(" / ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
