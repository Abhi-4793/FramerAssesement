import React from "react";

export default function FancyWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative  ${className}`}>
      {/* Border Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-700 to-black animate-border-spin pointer-events-none z-0 rounded-2xl" />

      {/* Border Padding Layer */}
      <div className="relative z-10 p-[1px] rounded-2xl bg-black h-full w-full">
        {children}
      </div>
    </div>
  );
}
