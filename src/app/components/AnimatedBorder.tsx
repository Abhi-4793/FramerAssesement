import React from "react";

export function AnimatedBorderWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative p-[2px] rounded-xl overflow-hidden z-10 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-700 to-black animate-border-spin z-0" />

      <div className="relative  rounded-[10px] bg-black text-white z-10">
        {children}
      </div>
    </div>
  );
}
