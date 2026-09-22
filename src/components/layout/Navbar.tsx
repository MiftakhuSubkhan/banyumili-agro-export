"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, toggleLanguage } = useLanguage();

  const isHomePage = pathname === "/";
  // Transparent only on the homepage when not scrolled; all other pages always have solid white navbar
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent py-5 border-b border-white/10"
          : "bg-white/95 backdrop-blur-md shadow-md border-b border-[#1B4332]/10 py-3.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with adaptive theme: light when transparent, dark when white */}
        <Logo theme={isTransparent ? "light" : "dark"} />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs uppercase tracking-wider font-semibold transition-colors duration-200 relative py-1",
                  isTransparent
                    ? isActive
                      ? "text-white font-bold"
                      : "text-white/85 hover:text-[#C89B3C]"
                    : isActive
                      ? "text-[#1B4332] font-bold"
                      : "text-[#081C15]/75 hover:text-[#1B4332]"
                )}
              >
                {language === "ID" ? item.labelId : item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C89B3C] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Language Switcher */}
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded transition-colors",
              isTransparent
                ? "text-white/85 hover:text-white"
                : "text-[#081C15]/80 hover:text-[#1B4332]"
            )}
            title="Switch Language (Pilih Bahasa)"
          >
            <button
              type="button"
              onClick={() => setLanguage("ID")}
              className={cn(
                "px-1 py-0.5 rounded transition-all",
                language === "ID"
                  ? isTransparent
                    ? "font-bold text-[#C89B3C] underline underline-offset-4"
                    : "font-bold text-[#1B4332] underline underline-offset-4"
                  : "opacity-50 hover:opacity-100"
              )}
            >
              ID
            </button>
            <span className="opacity-40">|</span>
            <button
              type="button"
              onClick={() => setLanguage("EN")}
              className={cn(
                "px-1 py-0.5 rounded transition-all",
                language === "EN"
                  ? isTransparent
                    ? "font-bold text-[#C89B3C] underline underline-offset-4"
                    : "font-bold text-[#1B4332] underline underline-offset-4"
                  : "opacity-50 hover:opacity-100"
              )}
            >
              EN
            </button>
          </div>

          {/* CTA Button "Hubungi Kami" */}
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow",
              isTransparent
                ? "bg-[#1B4332] hover:bg-[#143628] text-white border border-white/20 shadow-md"
                : "bg-[#1B4332] hover:bg-[#143628] text-white"
            )}
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>{language === "ID" ? "Hubungi Kami" : "Contact Us"}</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Quick Lang Switch */}
          <button
            type="button"
            onClick={toggleLanguage}
            className={cn(
              "text-xs font-bold px-2.5 py-1 rounded-md border transition-colors",
              isTransparent
                ? "text-white border-white/30 hover:bg-white/10"
                : "text-[#1B4332] border-[#1B4332]/20 hover:bg-[#1B4332]/5"
            )}
          >
            {language}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "p-2 rounded-md focus:outline-none transition-colors",
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-[#1B4332] hover:bg-[#1B4332]/10"
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (always clean solid white with dark green theme) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-[#1B4332]/15 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-[#1B4332]/10 text-[#1B4332] font-bold"
                    : "text-[#081C15] hover:bg-zinc-100"
                )}
              >
                {language === "ID" ? item.labelId : item.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-200 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#1B4332] text-white py-3 rounded-lg font-semibold text-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#C89B3C]" />
              <span>{language === "ID" ? "Hubungi Kami" : "Contact Us"}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
