"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { EXPORT_PROCESS_STEPS } from "@/constants/process";
import { useLanguage } from "@/context/LanguageContext";
import { Sprout, ClipboardCheck, PackageCheck, FileText, Ship, ArrowRight } from "lucide-react";

const stepIcons: Record<string, React.ReactNode> = {
  Sprout: <Sprout className="w-6 h-6 text-[#C89B3C]" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6 text-[#C89B3C]" />,
  PackageCheck: <PackageCheck className="w-6 h-6 text-[#C89B3C]" />,
  FileText: <FileText className="w-6 h-6 text-[#C89B3C]" />,
  Ship: <Ship className="w-6 h-6 text-[#C89B3C]" />,
};

export function ProcessClient() {
  const { language, t } = useLanguage();

  const activitiesData: Record<number, { id: string[]; en: string[] }> = {
    1: {
      id: [
        "Pemantauan panen & pemilihan kematangan ceri/biji",
        "Kontrak kemitraan adil langsung dengan petani",
        "Verifikasi awal kadar air bahan baku di perkebunan",
      ],
      en: [
        "Harvest monitoring & cherry/berry ripeness selection",
        "Fair-trade direct partner farmer contracts",
        "Initial lot moisture verification at plantation",
      ],
    },
    2: {
      id: [
        "Pengujian kadar air dengan moisture meter standar ISO",
        "Grading densitas dan pengayakan ukuran biji/batang",
        "Inspeksi surveyor pihak ketiga (SGS / Sucofindo siap)",
      ],
      en: [
        "Moisture meter testing (ISO compliant)",
        "Density & sieve screen grading",
        "Third-party surveyor inspection (SGS / Sucofindo available)",
      ],
    },
    3: {
      id: [
        "Penyegelan hermetik GrainPro untuk biji kopi",
        "Karung PP woven / Kraft berlapis proteksi kelembapan",
        "Pelabelan kustom buyer, barcode & shipping mark",
      ],
      en: [
        "Hermetic GrainPro sealing for coffee beans",
        "PP woven / Kraft bag sewing with moisture barrier",
        "Custom buyer labeling, barcodes & shipping marks",
      ],
    },
    4: {
      id: [
        "Sertifikasi Fitosanitari Badan Karantina Pertanian RI",
        "Surat Keterangan Asal (COO Form A / AK / IJEPA)",
        "Pemberitahuan Ekspor Barang (PEB / NPE Bea Cukai)",
      ],
      en: [
        "Indonesian Agricultural Quarantine Phytosanitary certification",
        "Ministry of Trade Certificate of Origin (Form A / AK / IJEPA)",
        "Customs Export Declaration (PEB / NPE)",
      ],
    },
    5: {
      id: [
        "Inspeksi stuffing kontainer & penempatan kantong desikan",
        "Booking kapal dengan maskapai pelayaran global ternama",
        "Pelacakan pengiriman real-time & kurir kilat dokumen asli",
      ],
      en: [
        "Container stuffing inspection with desiccant protection",
        "Vessel booking with top-tier global shipping lines",
        "Real-time shipment tracking and express document courier",
      ],
    },
  };

  return (
    <main className="pt-24 pb-20">
      {/* Banner */}
      <section className="bg-[#081C15] text-[#F8F3E7] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1B4332_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#C89B3C]">
            {t("PROSES EKSPOR", "EXPORT PROCESS & LOGISTICS")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3">
            {t("Dari Sumber Lokal ke Pasar Global", "From Indonesian Origins to Global Markets")}
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-[#F8F3E7]/80 text-sm sm:text-base leading-relaxed">
            {t(
              "Standar operasional ekspor transparan, terukur, dan patuh regulasi karantina internasional untuk menjamin integritas muatan Anda.",
              "Transparent, measurable export operating procedures adhering to international quarantine standards to protect cargo integrity."
            )}
          </p>
        </Container>
      </section>

      {/* 5 Steps Process */}
      <section className="py-16">
        <Container>
          <div className="space-y-8 max-w-4xl mx-auto">
            {EXPORT_PROCESS_STEPS.map((step) => {
              const acts =
                language === "ID"
                  ? activitiesData[step.stepNumber]?.id || step.activities
                  : activitiesData[step.stepNumber]?.en || step.activities;

              return (
                <div
                  key={step.stepNumber}
                  className="bg-white rounded-2xl border border-[#1B4332]/10 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow relative"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#081C15] flex items-center justify-center shrink-0 border border-[#C89B3C]/20 shadow-inner">
                    {stepIcons[step.icon]}
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#8B5E34] bg-[#8B5E34]/10 px-2 py-0.5 rounded">
                          {language === "ID" ? `Langkah ${step.stepNumber}` : `Step ${step.stepNumber}`}
                        </span>
                        <h2 className="text-lg sm:text-xl font-serif font-bold text-[#081C15]">
                          {language === "ID" ? step.titleId : step.title}
                        </h2>
                      </div>
                      <span className="text-xs text-[#1B4332] font-semibold bg-[#1B4332]/10 px-2.5 py-1 rounded-full">
                        {step.timeline}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#081C15]/80 leading-relaxed">
                      {language === "ID" ? step.descriptionId : step.description}
                    </p>

                    <div className="pt-2 border-t border-zinc-100">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#081C15]/70">
                        {acts.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-[#1B4332] text-white p-8 sm:p-12 rounded-2xl max-w-4xl mx-auto shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-3">
              {t("Siap Bermitra dengan Banyumili Agro Export?", "Ready to Partner with Banyumili Agro Export?")}
            </h3>
            <p className="text-sm text-white/80 max-w-xl mx-auto mb-6">
              {t(
                "Diskusikan kebutuhan spesifikasi komoditas, estimasi jadwal panen, dan port shipping bersama tim ekspor kami.",
                "Discuss commodity specifications, harvest schedules, and destination port shipping options with our export specialists."
              )}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C89B3C] text-[#081C15] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#B68A2E] transition-colors"
            >
              <span>{t("Mulai Konsultasi Ekspor", "Start Export Consultation")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
