import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionLink?: {
    label: string;
    href: string;
  };
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  actionLink,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12",
        align === "center" && "text-center md:items-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p
            className={cn(
              "text-xs font-bold uppercase tracking-widest mb-2",
              isDark ? "text-[#C89B3C]" : "text-[#8B5E34]"
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight",
            isDark ? "text-white" : "text-[#081C15]"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-3 text-sm sm:text-base leading-relaxed",
              isDark ? "text-white/80" : "text-[#1B4332]/80"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {actionLink && (
        <Link
          href={actionLink.href}
          className={cn(
            "group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200 shrink-0",
            isDark
              ? "text-[#C89B3C] hover:text-white"
              : "text-[#1B4332] hover:text-[#C89B3C]"
          )}
        >
          <span>{actionLink.label}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
