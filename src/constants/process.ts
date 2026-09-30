import { ProcessStep } from "@/types/process";

export const EXPORT_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Raw Pulp Sourcing & Separation",
    titleId: "Sourcing & Pemisahan Bahan Baku",
    tagline: "Direct collection of fresh, clean coffee cherry pulp from Central Java wet mills",
    description:
      "Direct partnerships with large-scale coffee processing wet mills across Central Java highlands, collecting fresh coffee pulp immediately after depulping to preserve nutrients and prevent wild spoilage.",
    descriptionId:
      "Kemitraan langsung dengan pabrik pengolahan basah kopi di dataran tinggi Jawa Tengah, mengumpulkan kulit ceri segar segera setelah pemisahan biji untuk menjaga nutrisi dan mencegah pembusukan.",
    icon: "Sprout",
    activities: [
      "Immediate collection of fresh coffee cherry pulp from highland wet mills",
      "Pre-cleaning and mechanical de-stoning to remove soil and extraneous impurities",
      "Full supply chain traceability back to origin processing centers",
    ],
    timeline: "Year-Round Continuous Inflow",
  },
  {
    stepNumber: 2,
    title: "Solar Dehydration & Moisture Locking",
    titleId: "Pengeringan Matahari & Kunci Kadar Air",
    tagline: "Controlled solar greenhouse drying to lock moisture at stable ≤ 11.5%",
    description:
      "Raw pulp is dried using protected solar drying facilities, reducing moisture safely from >75% to stable ≤ 11.5% to completely inhibit mold spores and preserve digestible fiber.",
    descriptionId:
      "Bahan baku dikeringkan di dalam fasilitas solar drying terlindung, menurunkan kadar air secara aman hingga stabil ≤ 11.5% untuk mencegah timbulnya jamur dan mempertahankan kualitas serat.",
    icon: "SunMedium",
    activities: [
      "Protected solar greenhouse drying with continuous natural convective airflow",
      "Uniform moisture reduction to strict export threshold (≤ 10.5% – 11.5%)",
      "Dust extraction and initial mechanical sorting",
    ],
    timeline: "5 - 10 Days Controlled Solar Drying",
  },
  {
    stepNumber: 3,
    title: "De-Stoning, Screening & Lab QC",
    titleId: "Sortasi, De-Stoning & Uji Laboratorium",
    tagline: "Vibrating sieve grading, magnetic metal separation & full proximate COA",
    description:
      "Dried husk undergoes mechanical de-stoning, dust aspiration, and multi-deck vibrating sieve grading to produce uniform, clean dried coffee husk flakes. Every lot is lab-tested for nutrition and aflatoxin safety.",
    descriptionId:
      "Kulit kopi kering melalui proses penghilangan batu (de-stoning), penyedotan debu, dan ayakan getar bertingkat untuk menghasilkan serpihan kulit kopi bersih, diikuti uji proksimat nutrisi dan bebas aflatoksin.",
    icon: "ClipboardCheck",
    activities: [
      "Multi-deck vibrating sifter grading and foreign matter extraction (< 0.5%)",
      "High-power magnetic metal separation to protect livestock digestion",
      "Accredited lab COA testing for Crude Protein, Crude Fiber, TDN, and negative Aflatoxin",
    ],
    timeline: "1 - 2 Days Precision Grading & QC",
  },
  {
    stepNumber: 4,
    title: "Bulk Packaging & Port Loading",
    titleId: "Pengemasan Kargo & Pengapalan Ekspor",
    tagline: "50kg woven PP bags & 1,000kg Jumbo Bulk Bags ready for ocean dispatch via Tanjung Emas (IDSRG)",
    description:
      "Automated packaging into 50kg moisture-barrier bags or 1-ton UV-resistant Jumbo Bulk Bags. Prompt container stuffing and customs quarantine clearance at Tanjung Emas Port (IDSRG), Semarang.",
    descriptionId:
      "Pengemasan rapi ke dalam karung PP 50kg atau Jumbo Big Bag 1.000kg dengan liner penahan lembap, siap stuffing kontainer FCL di Pelabuhan Tanjung Emas (IDSRG), Semarang.",
    icon: "PackageCheck",
    activities: [
      "50 kg heavy-duty PP woven bags with PE inner liner protection",
      "1,000 kg heavy-duty Jumbo Big Bags with lifting loops and discharge spouts",
      "Container stuffing, fumigation, Phytosanitary & Feed Safety customs clearance",
    ],
    timeline: "3 - 5 Days Port Readiness & Dispatch",
  },
];
