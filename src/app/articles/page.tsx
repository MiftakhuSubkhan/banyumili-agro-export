import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticlesClient } from "./ArticlesClient";

export const metadata: Metadata = {
  title: "Articles & Market Insights | Banyumili Agro Export",
  description:
    "Latest market intelligence, trade updates, harvest insights, and quality guidelines for Indonesian coffee, black pepper, and cinnamon.",
};

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <ArticlesClient />
      <Footer />
    </>
  );
}
