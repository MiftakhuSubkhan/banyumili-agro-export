import { CompanyInfo, ValuePillar, StatItem } from "@/types/company";

export const COMPANY_INFO: CompanyInfo = {
  name: "Banyumili Agro Export",
  tagline: "Connecting Indonesia's Finest Coffee & Spices To The World",
  taglineId: "Menghadirkan Kopi & Rempah Terbaik Indonesia ke Seluruh Dunia",
  shortBio:
    "Banyumili Agro Export is an Indonesian agricultural commodity export company dedicated to supplying high-grade specialty coffee, Lampung black pepper, and Kerinci cassia cinnamon directly from trusted farmer networks to international B2B importers.",
  fullBio:
    "Banyumili Agro Export adalah perusahaan ekspor hasil pertanian Indonesia yang berfokus pada komoditas kopi, lada hitam, dan kayu manis. Kami berkomitmen untuk menghubungkan potensi pertanian lokal dengan pasar internasional melalui produk berkualitas, kemitraan yang berkelanjutan, serta layanan ekspor yang profesional.",
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
    title: "Trusted Sourcing",
    titleId: "Sourcing Terpercaya",
    description:
      "Working directly in close partnership with local smallholder farmers and certified cooperatives across Indonesia.",
    descriptionId:
      "Bekerja sama dengan petani dan pemasok lokal pilihan di berbagai wilayah Indonesia.",
    icon: "Sprout",
  },
  {
    id: "quality",
    title: "Premium Quality",
    titleId: "Kualitas Premium",
    description:
      "Rigorous quality control, density testing, and international certification standards before dispatch.",
    descriptionId:
      "Produk melalui proses seleksi dan kontrol kualitas sesuai standar ekspor internasional.",
    icon: "Award",
  },
  {
    id: "reach",
    title: "Global Reach",
    titleId: "Jangkauan Global",
    description:
      "Serving international buyers across Europe, North America, Middle East, and Asia with consistent supply.",
    descriptionId:
      "Mendukung kebutuhan pasar internasional dengan pasokan yang konsisten dan terpercaya.",
    icon: "Globe2",
  },
];

export const TRUST_BADGES = [
  {
    title: "Premium Quality Products",
    titleId: "Kualitas Produk Premium",
    icon: "Leaf",
  },
  {
    title: "Sustainable Partnership",
    titleId: "Kemitraan Berkelanjutan",
    icon: "Users",
  },
  {
    title: "Global Market Reach",
    titleId: "Jangkauan Pasar Global",
    icon: "Globe",
  },
];

export const COMPANY_STATS: StatItem[] = [
  {
    value: "100%",
    label: "Indonesian Origin",
    labelId: "Asal Indonesia Murni",
    description: "Ethically harvested from primary producing regions",
  },
  {
    value: "25+",
    label: "Export Destination Countries",
    labelId: "Negara Tujuan Ekspor",
    description: "Trusted by importers across Europe, Asia & the Americas",
  },
  {
    value: "1,200+",
    label: "Partner Farmers Empowered",
    labelId: "Mitra Petani Berdaya",
    description: "Direct fair-trade collaboration supporting local communities",
  },
  {
    value: "5,000+",
    label: "Metric Tons Export Capacity",
    labelId: "Kapasitas Ekspor per Tahun",
    description: "Scalable volume with strict grade integrity",
  },
];
