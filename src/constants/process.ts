import { ProcessStep } from "@/types/process";

export const EXPORT_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Product Sourcing",
    titleId: "Pengadaan Produk",
    tagline: "Direct ethical procurement from certified farmer networks",
    description:
      "We source directly from farmer groups and regional processing stations across Sumatra, Java, and Sulawesi, ensuring origin traceability and optimal freshness.",
    descriptionId:
      "Bekerja sama langsung dengan petani lokal dan stasiun pengolahan untuk memastikan keterlacakan asal dan kesegaran bahan baku.",
    icon: "Sprout",
    activities: [
      "Harvest monitoring & cherry/berry ripeness selection",
      "Fair-trade partner farmer contracts",
      "Initial lot moisture verification",
    ],
    timeline: "1 - 2 Weeks",
  },
  {
    stepNumber: 2,
    title: "Quality Inspection",
    titleId: "Pemeriksaan Kualitas",
    tagline: "Rigorous laboratory testing & physical grading",
    description:
      "Each batch undergoes strict multi-point physical grading: density checks, moisture measurement, defect sorting, screen grading, and laboratory analysis.",
    descriptionId:
      "Setiap batch melewati uji laboratorium fisik, uji kadar air, penyortiran cacat, dan analisis zat aktif sesuai standar ekspor internasional.",
    icon: "ClipboardCheck",
    activities: [
      "Moisture meter testing (ISO compliant)",
      "Density & sieve screen grading",
      "Third-party surveyor inspection (SGS / Sucofindo available)",
    ],
    timeline: "3 - 5 Days",
  },
  {
    stepNumber: 3,
    title: "Packaging",
    titleId: "Pengemasan",
    tagline: "Export-grade packaging engineered for ocean shipping",
    description:
      "Commodities are packaged in GrainPro hermetic liners, multi-layer kraft paper bags, or corrugated master cartons to withstand moisture and maritime climate variations.",
    descriptionId:
      "Produk dikemas menggunakan karung goni berlapis GrainPro, kantong kraft tahan lembap, atau karton tebal khusus pengiriman maritim jarak jauh.",
    icon: "PackageCheck",
    activities: [
      "Hermetic GrainPro sealing for coffee beans",
      "PP woven / Kraft bag sewing with moisture barrier",
      "Custom buyer labeling, barcodes & shipping marks",
    ],
    timeline: "3 - 7 Days",
  },
  {
    stepNumber: 4,
    title: "Export Documentation",
    titleId: "Dokumentasi Ekspor",
    tagline: "Full legal compliance and customs clearance",
    description:
      "We handle all export paperwork: Bill of Lading, Phytosanitary Certificate, Certificate of Origin (COO), Commercial Invoice, Packing List, and Fumigation certificates.",
    descriptionId:
      "Pengurusan kelengkapan legalitas ekspor secara komprehensif: Bill of Lading, Sertifikat Fitosanitari, Certificate of Origin, Invoice, dan Fumigasi.",
    icon: "FileText",
    activities: [
      "Indonesian Agricultural Quarantine Phytosanitary certification",
      "Ministry of Trade Certificate of Origin (Form A / AK / IJEPA)",
      "Customs Export Declaration (PEB / NPE)",
    ],
    timeline: "3 - 5 Days",
  },
  {
    stepNumber: 5,
    title: "International Shipping",
    titleId: "Pengiriman Internasional",
    tagline: "Reliable freight forwarding to global destination ports",
    description:
      "Container stuffing with desiccant dry-bags, container seal security, and vessel departure from Tanjung Priok, Panjang, or Belawan to your port of destination.",
    descriptionId:
      "Pemuatan kontainer (stuffing) dengan pengaman kantong desikan dan penyegelan resmi, berlayar dari pelabuhan utama Indonesia ke pelabuhan tujuan pembeli.",
    icon: "Ship",
    activities: [
      "Container stuffing inspection with desiccant protection",
      "Vessel booking with top-tier global shipping lines",
      "Real-time shipment tracking and document courier dispatch",
    ],
    timeline: "14 - 35 Days (Transit Port Dependent)",
  },
];
