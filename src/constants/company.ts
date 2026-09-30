import { CompanyInfo, ValuePillar, StatItem } from "@/types/company";

export const COMPANY_INFO: CompanyInfo = {
  name: "Banyumili Agro Export",
  tagline: "Premier Indonesian Exporter of Sun-Dried Coffee Husk for Livestock Feed",
  taglineId: "Eksportir Terpercaya Kulit Kopi Kering (Feed Grade) untuk Pakan Ternak Global",
  shortBio:
    "Banyumili Agro Export is a specialized Indonesian agricultural exporter producing export-grade sun-dried coffee husk for livestock feed. We supply high-fiber feed ingredients for dairy cattle, beef ruminants, and global livestock farming.",
  fullBio:
    "Banyumili Agro Export adalah produsen dan eksportir spesialis bahan baku pakan ternak berbahan dasar kulit kopi kering olahan (Sun-Dried Coffee Husk for Livestock Feed) dari Indonesia. Mengoptimalkan potensi hasil samping perkebunan kopi di sentra dataran tinggi Jawa Tengah, kami memproduksi pakan sumber serat dan energi berkualitas tinggi melalui penjemuran higienis, de-stoning, dan sortasi ketat. Produk kami dirancang khusus untuk memenuhi standar nutrisi peternakan sapi perah, sapi potong, dan industri pakan ternak global dengan jaminan bebas mikotoksin/aflatoksin, kadar serat teruji, dan kestabilan suplai kontainer sepanjang tahun.",
  established: 2020,
  originCountry: "Boyolali, Jawa Tengah, Indonesia",
  headquarters: "Boyolali, Jawa Tengah, Indonesia",
  email: "banyumiliagroexport@gmail.com",
  phone: "+62 856-2401-5416",
  whatsapp: "+6285624015416",
  socials: {
    linkedin: "https://linkedin.com/company/banyumili-agro-export",
    instagram: "https://instagram.com/banyumiliagro",
    whatsapp: "https://wa.me/6285624015416",
  },
};

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: "sourcing",
    title: "Highland Supply Security",
    titleId: "Pasokan Masif & Berkelanjutan",
    description:
      "Direct partnerships with coffee processing wet mills across Central Java, guaranteeing massive and continuous raw pulp supply year-round.",
    descriptionId:
      "Kemitraan langsung dengan pabrik pengolahan kopi di Jawa Tengah menjamin kepastian pasokan bahan baku secara masif dan kontinu.",
    icon: "Sprout",
  },
  {
    id: "quality",
    title: "Nutritional Integrity & Safety",
    titleId: "Standar Nutrisi & Bebas Toksin",
    description:
      "Precision solar/kiln drying and de-stoning with strict lab verification for Crude Protein, Digestible Fiber, and negative Aflatoxin levels.",
    descriptionId:
      "Pengeringan terkontrol, penghilangan debu/batu, dan uji laboratorium terakreditasi untuk kadar protein, serat, dan bebas aflatoksin.",
    icon: "Award",
  },
  {
    id: "reach",
    title: "Global Maritime Logistics",
    titleId: "Kesiapan Logistik Ekspor Pelabuhan",
    description:
      "Heavy-duty 50kg PP bags and 1,000kg Jumbo Bulk Bags, containerized and shipped via Tanjung Emas Port (IDSRG) under FOB/CIF/CFR terms.",
    descriptionId:
      "Pengemasan karung 50kg dan Jumbo Bag 1 ton dengan stuffing kontainer FCL cepat via Pelabuhan Tanjung Emas (IDSRG), Semarang.",
    icon: "Globe2",
  },
];

export const TRUST_BADGES = [
  {
    title: "High-Nutrition Feed Grade",
    titleId: "Mutu Pakan Bernutrisi Tinggi",
    icon: "Leaf",
  },
  {
    title: "Aflatoxin & Mycotoxin Safe",
    titleId: "Bebas Cemaran & Aflatoksin",
    icon: "Users",
  },
  {
    title: "Bulk Ocean Freight Ready",
    titleId: "Kesiapan Muat Kargo Kontainer",
    icon: "Globe",
  },
];

export const COMPANY_STATS: StatItem[] = [
  {
    value: "100%",
    label: "Indonesian Origin",
    labelId: "Asal Indonesia Murni",
    description: "Sourced directly from Central Java highland processing mills",
  },
  {
    value: "20+",
    label: "Export Destination Countries",
    labelId: "Negara Tujuan Ekspor",
    description: "Trusted by dairy farms, beef feedlots & commercial feed mills",
  },
  {
    value: "1,200+",
    label: "Partner Farmers Empowered",
    labelId: "Mitra Petani & Pabrik Kopi",
    description: "Empowering rural communities through agricultural circularity",
  },
  {
    value: "10,000+",
    label: "Metric Tons Annual Capacity",
    labelId: "Kapasitas Pasokan per Tahun",
    description: "Continuous volume capacity in whole dried husk & screened flakes",
  },
];
