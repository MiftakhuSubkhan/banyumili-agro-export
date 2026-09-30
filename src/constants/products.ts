import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "processed-coffee-husk-feed",
    slug: "kulit-kopi-pakan",
    name: "Sun-Dried Coffee Husk for Animal Feed (Livestock Grade)",
    indonesianName: "Kulit Kopi Kering Olahan Pakan Ternak (Feed Grade)",
    tagline: "Export-grade sun-dried coffee husk, high in digestible fiber and energy for dairy cattle & ruminants",
    category: "feed-grade",
    origin: "Central Java, Indonesia",
    harvestSeason: "Year-Round Continuous Supply",
    shortDescription:
      "Bahan baku pakan ternak dari kulit kopi kering olahan sentra Jawa Tengah. Sumber serat kasar terdigestikan (18–24%) dan energi (TDN 58–64%) teruji, bebas batu & aflatoksin, siap ekspor dalam karung PP 50kg dan Jumbo Bag 1 ton.",
    fullDescription:
      "Banyumili Agro Export memproduksi dan mengekspor Kulit Kopi Kering Mutu Pakan Ternak (Sun-Dried Coffee Husk for Livestock Feed) dari sentra perkebunan dataran tinggi Jawa Tengah, Indonesia. Melalui metode pengeringan matahari terkontrol, de-stoning (penghilangan batu & tanah), serta penyaringan ayakan getar, kami menghasilkan kulit kopi kering alami yang bersih, beraroma harum, dan berkadar air stabil ≤ 11.5%. Produk ini sangat ideal sebagai pakan sumber serat berkualitas tinggi dan suplemen energi yang meningkatkan kecernaan rumen pada sapi perah, sapi potong (feedlot), kambing, dan domba.",
    heroImage: "/images/products/coffee-husk-feed-natural.jpg",
    galleryImages: [
      "/images/products/coffee-husk-feed-natural.jpg",
      "/images/hero/coffee-husk-feed-natural.jpg",
      "/images/about/export-warehouse.jpg",
    ],
    keyFeatures: [
      "100% Pure Natural Sun-Dried Coffee Husk (Zero Soil Contact & De-stoned)",
      "High Digestible Fiber Content (Crude Fiber 18.0% – 24.0%) for Optimal Rumen Health",
      "Crude Protein 10.5% – 12.5% & Total Digestible Nutrients (TDN) 58.0% – 64.0%",
      "Screened Particle Sizes (Whole Husk & Screened Coarse Flakes 2–8mm)",
      "Strict Moisture Control ≤ 11.5% to Inhibit Mold with Long Shelf Stability (18 Months)",
      "Screened & Certified Free from Aflatoxins (< 10 ppb) & Foreign Debris (< 0.5%)",
    ],
    specifications: [
      { label: "HS Code", value: "2308.00", standard: "Vegetable materials used in animal feeding" },
      { label: "Origin", value: "Central Java, Indonesia", standard: "Traceable Single Origin" },
      { label: "Processing Method", value: "Solar/Kiln dried, mechanically de-stoned & sieved", standard: "Feed Safety Grade" },
      { label: "Crude Protein (CP)", value: "10.5% – 12.5%", standard: "Kjeldahl Method (Dry Basis)" },
      { label: "Crude Fiber (CF)", value: "18.0% – 24.0%", standard: "Weende Method / AOAC" },
      { label: "Moisture Content", value: "Max 10.5% – 11.5%", standard: "Oven Drying / ISO Standard" },
      { label: "Total Digestible Nutrients", value: "58.0% – 64.0% (TDN)", standard: "Ruminant Energy Standard" },
      { label: "Aflatoxin / Mycotoxins", value: "Non-Detectable / Negative (< 10 ppb)", standard: "ELISA / HPLC Lab Test" },
      { label: "Extraneous Matter", value: "< 0.5% (Sieved & De-stoned)", standard: "Physical Quality Inspection" },
      { label: "Physical Form", value: "Clean Dried Whole Husk & Screened Flakes", standard: "Uniform Dehydrated" },
    ],
    packagingOptions: [
      {
        type: "Jumbo Bulk Big Bag",
        netWeight: "650 kg – 1,000 kg",
        grossWeight: "655 kg – 1,008 kg",
        details: "Heavy-duty UV-stabilized woven PP Jumbo Big Bags with 4 lifting loops and discharge spout.",
      },
      {
        type: "Heavy-Duty Woven PP Bag",
        netWeight: "40 kg – 50 kg Net Weight",
        grossWeight: "40.5 kg – 50.5 kg Gross Weight",
        details: "Multi-ply heavy woven polypropylene bag with PE moisture-barrier inner liner.",
      },
    ],
    gradesAvailable: [
      "Grade A Whole Dried Husk (Clean Sun-Dried Coffee Husk for Ruminant Rations)",
      "Grade B Coarse Screened Flakes (2mm – 8mm Flakes for Total Mixed Ration / TMR)",
      "Milled Feed Meal (Custom coarse ground for commercial feed compounders)",
    ],
    moistureContent: "Max 10.5% – 11.5%",
    shelfLife: "18 Months in cool, dry ventilated warehouse",
    hsCode: "2308.00 (Vegetable products of a kind used in animal feeding)",
    moq: "1 x 20ft FCL (~14 - 16 Metric Tons) / 1 x 40ft HC (~24 - 26 Metric Tons)",
    incoterms: ["FOB Tanjung Emas (IDSRG), Semarang", "CIF Destination Port", "CFR"],
    certifications: [
      "Phytosanitary Certificate (Badan Karantina Indonesia)",
      "Animal Feed Quarantine & Safety Certificate",
      "Certificate of Origin (COO / Form A / AK / CEPT)",
      "Comprehensive Laboratory Proximate & Aflatoxin Analysis",
    ],
    flavorProfileOrAroma: [
      "Sweet Natural Caramel & Dried Fruit Fragrance",
      "High Feed Ingestion Palatability",
      "Clean Vegetal Aroma",
      "Zero Sour / Spoilage Odor",
    ],
  },
];
