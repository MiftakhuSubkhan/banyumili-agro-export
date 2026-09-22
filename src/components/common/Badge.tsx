import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "gold" | "green" | "cream" | "dark";
  className?: string;
}

export function Badge({
  children,
  variant = "gold",
  className,
  ...props
}: BadgeProps) {
  const variants = {
    gold: "text-[#8B5E34] uppercase tracking-wider text-[11px] font-bold",
    green: "text-[#1B4332] bg-[#1B4332]/10 px-2.5 py-1 rounded-full text-xs font-semibold",
    cream: "text-[#C89B3C] bg-[#081C15]/40 border border-[#C89B3C]/30 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
    dark: "text-white bg-[#081C15] px-2.5 py-1 rounded text-xs font-medium",
  };

  return (
    <span
      className={cn("inline-flex items-center", variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
