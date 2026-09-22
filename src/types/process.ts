export interface ProcessStep {
  stepNumber: number;
  title: string;
  titleId: string; // Indonesian title as seen in the mockup (e.g. Pengadaan Produk)
  tagline: string;
  description: string;
  descriptionId: string;
  icon: string;
  activities: string[];
  timeline: string;
}
