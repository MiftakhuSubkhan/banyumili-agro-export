import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ArticlesSection } from "@/components/home/ArticlesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <ProductsSection />
        <ProcessSection />
        <ArticlesSection />
      </main>
      <Footer />
    </>
  );
}
