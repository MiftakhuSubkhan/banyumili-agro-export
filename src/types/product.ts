export interface ProductSpecification {
  label: string;
  value: string;
  standard?: string;
}

export interface PackagingOption {
  type: string;
  netWeight: string;
  grossWeight?: string;
  details: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  indonesianName: string;
  tagline: string;
  category: "beverage-cascara" | "feed-grade" | "cascara" | "animal-feed" | "coffee" | "spices" | "cinnamon";
  origin: string;
  harvestSeason: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  keyFeatures: string[];
  specifications: ProductSpecification[];
  packagingOptions: PackagingOption[];
  gradesAvailable: string[];
  moistureContent: string;
  shelfLife: string;
  hsCode: string;
  moq: string; // Minimum Order Quantity
  incoterms: string[];
  certifications: string[];
  flavorProfileOrAroma?: string[];
}
