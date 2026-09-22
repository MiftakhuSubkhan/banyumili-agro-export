import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProcessClient } from "./ProcessClient";

export const metadata: Metadata = {
  title: "Export Process & Logistics | Banyumili Agro Export",
  description:
    "Explore our streamlined 5-step agricultural export process from local origin sourcing in Indonesia to international destination ports.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <ProcessClient />
      <Footer />
    </>
  );
}
