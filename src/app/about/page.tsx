import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Banyumili Agro Export",
  description:
    "Learn about Banyumili Agro Export, our history, direct farmer partnerships, and commitment to sustainable international agricultural trade.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutClient />
      <Footer />
    </>
  );
}
