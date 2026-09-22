"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { COMPANY_INFO } from "@/constants/company";
import { PRODUCTS } from "@/constants/products";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    product: PRODUCTS[0].name,
    volume: "1 x 20ft FCL",
    incoterms: "FOB",
    message: "",
  });

  const [lastWaUrl, setLastWaUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText =
      language === "ID"
        ? `Halo Tim Sales Banyumili Agro Export,

Saya ingin mengajukan Permintaan Penawaran (RFQ) resmi dengan rincian berikut:

*INFORMASI BUYER / PERUSAHAAN:*
• Nama Lengkap: ${formData.name}
• Nama Perusahaan: ${formData.company}
• Email Bisnis: ${formData.email}
• Negara Tujuan Ekspor: ${formData.country}

*SPESIFIKASI PESANAN:*
• Komoditas: ${formData.product}
• Estimasi Volume: ${formData.volume}
• Ketentuan Incoterms: ${formData.incoterms}
• Catatan Tambahan / Spesifikasi: ${formData.message.trim() || "-"}

Mohon konfirmasi ketersediaan pasokan dan penawaran harga terbaik. Terima kasih.`
        : `Hello Banyumili Agro Export Sales Team,

I would like to submit an official Request for Quotation (RFQ) with the following details:

*BUYER / COMPANY INFORMATION:*
• Full Name: ${formData.name}
• Company Name: ${formData.company}
• Business Email: ${formData.email}
• Destination Country: ${formData.country}

*ORDER SPECIFICATIONS:*
• Commodity: ${formData.product}
• Estimated Volume: ${formData.volume}
• Incoterms: ${formData.incoterms}
• Additional Notes / Specifications: ${formData.message.trim() || "-"}

Please confirm product availability, CIF/FOB pricing, and lead time. Thank you.`;

    const encoded = encodeURIComponent(waText);
    const waUrl = `https://wa.me/6285624015416?text=${encoded}`;
    setLastWaUrl(waUrl);

    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }

    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#081C15] text-[#F8F3E7] py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1B4332_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
          <Container className="relative z-10 text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C89B3C]">
              {t("HUBUNGI KAMI", "CONTACT US")}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3">
              {t("Permintaan Penawaran & Kemitraan (RFQ)", "Request for Quotation & Partnership")}
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-[#F8F3E7]/80 text-sm sm:text-base leading-relaxed">
              {t(
                "Hubungi tim perdagangan ekspor kami untuk permintaan harga komoditas (FOB / CIF), spesifikasi sampel, dan penjadwalan kontainer.",
                "Connect with our export trade desk for official commodity quotations (FOB / CIF), lab samples, and ocean container bookings."
              )}
            </p>
          </Container>
        </section>

        {/* Contact & RFQ Grid */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Info */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#8B5E34]">
                    {t("INFORMASI KONTAK", "CONTACT INFORMATION")}
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[#081C15] mt-2 mb-4">
                    {t("Kantor & Layanan Ekspor", "Office & Export Trade Desk")}
                  </h2>
                  <p className="text-sm text-[#081C15]/75 leading-relaxed">
                    {t(
                      "Kami siap melayani kebutuhan importir dan distributor dari seluruh dunia dengan komunikasi transparan dan respon cepat.",
                      "We assist global importers and commodity distributors worldwide with transparent communication and prompt execution."
                    )}
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#1B4332]/10">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#081C15]">
                        {t("Lokasi Kantor & Gudang", "Headquarters & Warehouse")}
                      </h4>
                      <p className="text-xs text-[#081C15]/70 mt-1">{COMPANY_INFO.headquarters}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#1B4332]/10">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#081C15]">
                        {t("Email Resmi", "Official Email")}
                      </h4>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-xs text-[#1B4332] hover:text-[#C89B3C] font-medium mt-1 inline-block"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#1B4332]/10">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#081C15]">
                        {t("WhatsApp & Telepon Langsung", "Direct WhatsApp & Phone")}
                      </h4>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#1B4332] hover:text-[#C89B3C] font-medium mt-1 inline-block"
                      >
                        {COMPANY_INFO.phone} {t("(Pertanyaan Internasional)", "(International Inquiries)")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right RFQ Form */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#1B4332]/10 shadow-sm">
                <h3 className="text-xl font-serif font-bold text-[#081C15] mb-2">
                  {t("Formulir Permintaan Penawaran (RFQ)", "Request for Quotation (RFQ) Form")}
                </h3>
                <p className="text-xs text-[#081C15]/70 mb-6">
                  {t(
                    "Isi data di bawah ini dan perwakilan perdagangan kami akan merespons dalam 1x24 jam kerja.",
                    "Complete the fields below and our export sales specialist will respond within 24 business hours."
                  )}
                </p>

                {submitted ? (
                  <div className="bg-[#1B4332]/5 border border-[#1B4332]/20 p-8 rounded-2xl text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle className="w-9 h-9 text-[#1B4332]" />
                    </div>
                    <h4 className="font-serif font-bold text-xl text-[#081C15]">
                      {t(
                        "Permintaan Penawaran Siap Dikirim ke WhatsApp!",
                        "Quotation Request Ready to Send via WhatsApp!"
                      )}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#081C15]/80 max-w-md mx-auto leading-relaxed">
                      {t(
                        "Rincian komoditas dan spesifikasi Anda telah disiapkan untuk WhatsApp resmi kami di",
                        "Your commodity order details and specifications have been prepared for our official WhatsApp at"
                      )}{" "}
                      <strong className="text-[#1B4332]">+62 856-2401-5416</strong>.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      {lastWaUrl && (
                        <a
                          href={lastWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#143628] text-white px-6 py-3 rounded-lg text-xs font-bold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                        >
                          <Send className="w-4 h-4 text-[#C89B3C]" />
                          <span>{t("Buka Chat WhatsApp Sekarang", "Open WhatsApp Chat Now")}</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-semibold text-[#1B4332] hover:text-[#C89B3C] underline py-2.5 px-4"
                      >
                        {t("Kirim Penawaran Lain", "Submit Another Inquiry")}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#081C15] mb-1">
                          {t("Nama Lengkap *", "Full Name *")}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2 text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#081C15] mb-1">
                          {t("Nama Perusahaan *", "Company Name *")}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2 text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                          placeholder="Global Imports Ltd."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#081C15] mb-1">
                          {t("Email Bisnis *", "Business Email *")}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2 text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                          placeholder="buyer@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#081C15] mb-1">
                          {t("Negara Tujuan Ekspor *", "Destination Country *")}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-3.5 py-2 text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                          placeholder="Germany, Japan, USA, UAE, etc."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#081C15] mb-1">
                          {t("Komoditas Pilihan", "Selected Commodity")}
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-white"
                        >
                          {PRODUCTS.map((p) => (
                            <option key={p.id} value={p.name}>
                              {language === "ID" ? `${p.indonesianName} (${p.name})` : p.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#081C15] mb-1">
                          {t("Estimasi Volume", "Estimated Volume")}
                        </label>
                        <select
                          value={formData.volume}
                          onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-white"
                        >
                          <option value="Sample LCL">
                            {t("Sampel / Uji Coba (LCL)", "Sample / Trial (LCL)")}
                          </option>
                          <option value="1 x 20ft FCL">1 x 20ft FCL (~15-18 MT)</option>
                          <option value="2 x 40ft FCL">2+ Full Container Loads</option>
                          <option value="Long Term Contract">
                            {t("Kontrak Pasokan Tahunan", "Annual Supply Contract")}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#081C15] mb-1">
                          Incoterms
                        </label>
                        <select
                          value={formData.incoterms}
                          onChange={(e) => setFormData({ ...formData, incoterms: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-white"
                        >
                          <option value="FOB">FOB (Tanjung Priok / Panjang)</option>
                          <option value="CIF">CIF (Destination Port)</option>
                          <option value="CFR">CFR (Cost & Freight)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#081C15] mb-1">
                        {t("Spesifikasi Khusus / Catatan Tambahan", "Special Specifications / Extra Notes")}
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                        placeholder={t(
                          "Sebutkan grade yang diinginkan, pelabuhan tujuan (discharge port), atau kebutuhan sertifikasi khusus...",
                          "Specify desired grade, discharge port, target packaging, or required certifications..."
                        )}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-[#1B4332] hover:bg-[#143628] text-white py-3.5 rounded-lg font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] group"
                    >
                      <Send className="w-4 h-4 text-[#C89B3C] group-hover:translate-x-0.5 transition-transform" />
                      <span>
                        {t("Kirim Permintaan Penawaran", "Send RFQ via WhatsApp")}
                      </span>
                    </button>
                    <p className="text-[11px] text-center text-[#081C15]/60 pt-1">
                      {t(
                        "Data RFQ akan otomatis dibuka di WhatsApp tim sales ekspor kami",
                        "RFQ details will automatically open in WhatsApp for our export sales desk"
                      )}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
