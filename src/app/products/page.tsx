import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Export Products & Specifications | Banyumili Agro Export",
  description:
    "Premium Indonesian agricultural export commodities: Specialty Coffee (Arabica & Robusta), High-Density Lampung Black Pepper, and Mount Kerinci Cassia Cinnamon.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <ProductsClient />
      <Footer />
    </>
  );
}
