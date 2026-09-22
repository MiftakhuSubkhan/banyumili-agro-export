import React from "react";

interface PillarEmblemProps {
  icon: string;
  className?: string;
}

export function PillarEmblem({ icon, className = "" }: PillarEmblemProps) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      {/* Golden Ambient Glow */}
      <div className="absolute inset-0 bg-[#C89B3C]/20 rounded-2xl blur-md group-hover:bg-[#C89B3C]/40 group-hover:scale-105 transition-all duration-300" />
      {/* Jewel Emerald Badge */}
      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1B4332] via-[#143D2D] to-[#081C15] border border-[#C89B3C]/45 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-[#C89B3C] transition-all duration-300">
        {icon === "Sprout" && (
          <svg
            className="w-7 h-7 text-[#F3D794] group-hover:text-white transition-colors drop-shadow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22v-9" />
            <path
              d="M12 13c0-4.5-3-7-7.5-7 0 4.5 3 7.5 7.5 7.5Z"
              fill="#C89B3C"
              fillOpacity="0.35"
            />
            <path
              d="M12 11c0-4 3-6.5 7.5-6.5 0 4-3 7-7.5 7Z"
              fill="#E8C374"
              fillOpacity="0.45"
            />
            <circle cx="9.5" cy="9.5" r="1" fill="#FFFFFF" />
          </svg>
        )}

        {icon === "Award" && (
          <svg
            className="w-7 h-7 text-[#F3D794] group-hover:text-white transition-colors drop-shadow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8.5" r="5.5" fill="#C89B3C" fillOpacity="0.35" />
            <path d="m9.5 8.5 1.8 1.8 3.5-3.5" strokeWidth="2" stroke="#FFFFFF" />
            <path
              d="M15.5 13 17 21l-5-2.5L7 21l1.5-8"
              fill="#E8C374"
              fillOpacity="0.35"
            />
          </svg>
        )}

        {icon === "Globe2" && (
          <svg
            className="w-7 h-7 text-[#F3D794] group-hover:text-white transition-colors drop-shadow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" fill="#C89B3C" fillOpacity="0.3" />
            <path d="M12 3a14.5 14.5 0 0 0 0 18" />
            <path d="M12 3a14.5 14.5 0 0 1 0 18" />
            <path d="M3 12h18" strokeWidth="2" />
            <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
          </svg>
        )}
      </div>
    </div>
  );
}
