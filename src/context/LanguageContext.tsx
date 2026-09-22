"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ID" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (idText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ID");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("banyumili_lang") as Language | null;
      if (savedLang === "ID" || savedLang === "EN") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore local storage error in restricted contexts
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("banyumili_lang", lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "ID" ? "EN" : "ID");
  };

  const t = (idText: string, enText: string): string => {
    return language === "ID" ? idText : enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
