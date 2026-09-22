import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  theme?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
}

export function Logo({
  theme = "dark",
  className,
  showTagline = true,
}: LogoProps) {
  const isLight = theme === "light";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group select-none", className)}
      aria-label="Banyumili Agro Export - Home"
    >
      {/* Brand Icon Emblem without background */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center">
        <Image
          src="/images/hero/logo-transparent.png"
          alt="Banyumili Agro Export Emblem"
          width={40}
          height={40}
          className={cn(
            "object-contain w-full h-full transition-all duration-300",
            isLight
              ? "drop-shadow-[0_2px_10px_rgba(200,155,60,0.4)] brightness-110"
              : "drop-shadow-sm"
          )}
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "font-serif font-bold text-base sm:text-lg tracking-tight leading-tight transition-colors duration-200",
              isLight ? "text-white drop-shadow-sm" : "text-[#081C15]"
            )}
          >
            Banyumili
          </span>
          <span
            className={cn(
              "text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors duration-200",
              isLight ? "text-[#C89B3C]" : "text-[#1B4332]"
            )}
          >
            Agro Export
          </span>
        </div>
        {showTagline && (
          <span
            className={cn(
              "text-[9px] sm:text-[10px] tracking-wider uppercase font-medium leading-none mt-0.5 transition-colors duration-200",
              isLight ? "text-[#F8F3E7]/80" : "text-[#8B5E34]"
            )}
          >
            From Indonesia to the World
          </span>
        )}
      </div>
    </Link>
  );
}
