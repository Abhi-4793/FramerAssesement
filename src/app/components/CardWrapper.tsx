// components/FancyWrapper.tsx
import React from "react";

export default function FancyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-[2px] rounded-2xl overflow-hidden w-[20vw]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow z-0" />
      <div className="relative z-10 rounded-[14px] bg-black">{children}</div>
    </div>
  );
}
