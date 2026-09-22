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

  const productData = {
    "indonesian-specialty-coffee": {
      categoryLabel: t("KOPI SPESIALTI", "SPECIALTY COFFEE"),
      origin: t("Jawa Tengah & Dataran Tinggi Sumatera, Indonesia", "Central Java & Sumatra Highlands, Indonesia"),
      harvestSeason: t(
        "Mei – September (Arabika) & Juni – Oktober (Robusta)",
        "May – September (Arabica) & June – October (Robusta)"
      ),
      tagline: t(
        "Arabika single-origin & Robusta fine unggulan dari dataran tinggi vulkanik",
        "Single-origin Arabica & robust fine Robusta from volcanic highlands"
      ),
      fullDescription: t(
        "Banyumili Agro Export menghadirkan kopi spesialti Indonesia yang tersohor di dunia. Dari aroma khas rempah dan tanah Sumatra Mandheling hingga keasaman kompleks bernuansa floral Aceh Gayo dan Robusta Lampung bercita rasa cokelat tebal. Kami menerapkan kendali mutu ketat, sortasi ceri, stabilisasi kadar air, serta pengemasan kedap udara GrainPro guna menjaga kesegaran biji selama pelayaran maritim internasional.",
        "Banyumili Agro Export offers world-renowned Indonesian specialty coffees. From the full-bodied, earthy notes of Sumatra Mandheling to the floral, complex acidity of Aceh Gayo and bold, chocolatey Lampung Robusta. We manage strict quality control, cherry sorting, moisture stabilization, and vacuum or GrainPro packaging to protect bean integrity across long-distance sea transit."
      ),
      features: [
        t("Pilihan Grade 1 Spesialti / Fine Robusta", "Grade 1 Specialty / Fine Robusta selection"),
        t("Sortasi tangan teliti dan pemilahan ukuran triple-screen", "Strict hand-sorting and triple-screen grading"),
        t("Perlindungan kantong kedap udara hermetik GrainPro", "GrainPro inner hermetic bag protection"),
        t("Kemitraan terlacak langsung dengan koperasi petani lokal", "Traceable single-origin cooperatives"),
      ],
    },
    "lampung-black-pepper": {
      categoryLabel: t("REMPAH UNGGULAN", "PREMIUM SPICES"),
      origin: t("Lampung & Sumatera Selatan, Indonesia", "Lampung & South Sumatra, Indonesia"),
      harvestSeason: t("Juli – Oktober", "July – October"),
      tagline: t(
        "Lada hitam Lampung dengan kadar piperin tinggi & aroma tajam khas",
        "Lampung origin black pepper with high piperine content & pungent aroma"
      ),
      fullDescription: t(
        "Lada Hitam Lampung Indonesia diakui secara global sebagai tolok ukur kepedasan mantap, kadar piperin tinggi (alkaloid aktif), serta densitas curah (bulk density) yang sangat padat. Dikeringkan di bawah sinar matahari dan dibersihkan menggunakan mesin spiral untuk memisahkan kotoran, debu, dan pinhead, lada hitam kami memenuhi standar mutu ASTA dan FAQ bagi industri bumbu dan pengolahan pangan dunia.",
        "Indonesian Lampung Black Pepper is internationally recognized as the benchmark for bold pungency, high piperine content (active alkaloid), and exceptional bulk density. Sun-dried and machine cleaned to remove light berries, dust, and pinheads, our black pepper satisfies both ASTA and FAQ international standards for global food manufacturers and spice grinders."
      ),
      features: [
        t("Densitas curah tinggi (550 - 580 g/L)", "High bulk density (550 - 580 g/L)"),
        t("Kadar piperin tinggi (min 4.0% - 5.5%)", "High piperine content (min 4.0% - 5.5%)"),
        t("Pembersihan mesin spiral & pendeteksi logam", "Spiral machine-cleaned & metal detected"),
        t("Kadar air rendah mencegah timbulnya jamur laut", "Low moisture to prevent mold during maritime transit"),
      ],
    },
    "kerinci-cassia-cinnamon": {
      categoryLabel: t("KAYU MANIS ALAMI", "NATURAL CINNAMON"),
      origin: t("Kabupaten Kerinci, Jambi & Sumatera Barat", "Kerinci Regency, Jambi & West Sumatra"),
      harvestSeason: t("Sepanjang Tahun (Puncak: September – Desember)", "Year-Round (Peak: September – December)"),
      tagline: t(
        "Kayu manis Kerinci (Korintje) Cassia vera dengan rasa manis hangat & minyak atsiri pekat",
        "Kerinci (Korintje) Cassia vera with intense sweet warmth & high oil density"
      ),
      fullDescription: t(
        "Dipanen dari lereng subur Gunung Kerinci di Sumatera, Kayu Manis Korintje (Cinnamomum burmannii) menghasilkan cita rasa kayu manis paling manis dan bersih di dunia. Dikupas secara alami, difermentasi terkontrol, dan dikeringkan di bawah sinar matahari hingga membentuk gulungan rapi dan padat. Kayu manis kami kaya akan minyak atsiri sinamaldehid alami tanpa bahan kimia maupun pemutih buatan.",
        "Harvested from the lush slopes of Mount Kerinci in Sumatra, Indonesian Korintje Cassia (Cinnamomum burmannii) produces the sweetest, cleanest cinnamon flavor in the world. Naturally stripped, carefully cured, and sun-dried to form tight, uniform quills or cut rolls. Our cassia features high volatile cinnamaldehyde oil levels without adulterants or chemical bleaching."
      ),
      features: [
        t("Asal Kerinci / Padang Korintje asli terverifikasi", "Kerinci / Padang Korintje origin verified"),
        t("Kandungan minyak atsiri tinggi 2.5% – 3.5%", "Volatile Oil content 2.5% – 3.5%"),
        t("Batang gulung ganda rapi & panjang potongan seragam", "Beautiful double-curled quills & uniform cut lengths"),
        t("Tersedia batangan utuh, potongan gulung, patahan bersih (KBBC)", "Available in whole sticks, cut rolls, broken, or tea bag cut"),
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
            {t("PRODUK EKSPOR UNGGULAN", "FEATURED EXPORT COMMODITIES")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3">
            {t("Komoditas Pilihan dari Indonesia", "Finest Selected Commodities from Indonesia")}
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-[#F8F3E7]/80 text-sm sm:text-base leading-relaxed">
            {t(
              "Kopi spesialti, lada hitam berdensitas tinggi, dan kayu manis pilihan dengan sertifikasi internasional dan kepatuhan standar ekspor maritim.",
              "Specialty coffee, high-density black pepper, and premium cassia cinnamon with international certifications and maritime export compliance."
            )}
          </p>
        </Container>
      </section>

      {/* Product Cards: 3-Column Layout per Product */}
      <section className="py-16 bg-[#F8F3E7]/40">
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
                              {t("Musim Panen:", "Harvest Season:")}
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
                              {t("Kesiapan Sertifikasi:", "Certifications:")}
                            </span>
                            <span className="text-[10px] text-[#081C15]/75">
                              COO, Phytosanitary, Halal, SGS Inspection
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
                            {t("Keunggulan Mutu:", "Key Quality Features:")}
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
                            {t("Spesifikasi Teknis", "Technical Specifications")}
                          </h3>
                          <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded text-[#8B5E34] border border-[#1B4332]/10">
                            HS: {product.hsCode.split(" ")[0]}
                          </span>
                        </div>

                        {/* Tabel Parameter */}
                        <div className="divide-y divide-[#1B4332]/10 text-xs">
                          {product.specifications.map((spec, sIdx) => (
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
