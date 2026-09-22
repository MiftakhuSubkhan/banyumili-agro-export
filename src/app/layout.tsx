import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Banyumili Agro Export",
    template: "%s | Banyumili Agro Export",
  },
  description:
    "Connecting Indonesia's finest agricultural commodities—Specialty Coffee, High-Density Black Pepper, and Premium Cassia Cinnamon—to international B2B importers worldwide.",
  icons: {
    icon: "/images/hero/logo-transparent.png",
    shortcut: "/images/hero/logo-transparent.png",
    apple: "/images/hero/logo-transparent.png",
  },
  keywords: [
    "Indonesian Coffee Exporter",
    "Specialty Coffee Arabica Robusta",
    "Kerinci Cassia Cinnamon Korintje",
    "Indonesian Agricultural Commodities",
    "B2B Agro Export Indonesia",
    "Banyumili Agro Export",
  ],
  authors: [{ name: "Banyumili Agro Export" }],
  creator: "Banyumili Agro Export",
  publisher: "Banyumili Agro Export",
  metadataBase: new URL("https://banyumiliagroexport.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://banyumiliagroexport.com",
    title: "Banyumili Agro Export | Connecting Indonesia's Finest Coffee & Spices To The World",
    description:
      "Premium Indonesian agricultural exporter. Trusted sourcing, international quality standards, and reliable global supply.",
    siteName: "Banyumili Agro Export",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F8F3E7] text-[#081C15] font-sans antialiased selection:bg-[#C89B3C] selection:text-[#081C15]">
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
