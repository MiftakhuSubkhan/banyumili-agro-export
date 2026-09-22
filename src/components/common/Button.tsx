import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  isExternal,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";

  const variants = {
    primary:
      "bg-[#C89B3C] text-[#081C15] hover:bg-[#B68A2E] shadow-sm font-semibold hover:shadow active:scale-[0.98]",
    secondary:
      "bg-[#1B4332] text-white hover:bg-[#143628] shadow-sm active:scale-[0.98]",
    outline:
      "border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332]/5 active:scale-[0.98]",
    ghost:
      "text-[#1B4332] hover:bg-[#1B4332]/10",
    dark:
      "bg-[#081C15] text-[#F8F3E7] hover:bg-[#143628] border border-white/10 active:scale-[0.98]",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
