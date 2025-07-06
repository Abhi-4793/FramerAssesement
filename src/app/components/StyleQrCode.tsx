"use client";

import Image from "next/image";
import React, { useRef } from "react";

export default function QRCodeGlow({ src }: { src: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const wrapper = wrapperRef.current;
    const glow = glowRef.current;
    if (!wrapper || !glow) return;

    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 3D Tilt Effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    wrapper.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Move glow
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  };

  const handleMouseLeave = () => {
    const glow = glowRef.current;
    const wrapper = wrapperRef.current;
    if (glow) {
      glow.style.opacity = "0";
    }
    if (wrapper) {
      wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  const handleMouseEnter = () => {
    const glow = glowRef.current;
    if (glow) {
      glow.style.opacity = "1";
    }
  };

  return (
    <div className="flex justify-center z-10 mt-15  items-center">
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="relative w-80 h-80 rounded-xl bg-[#424141]  p-4 transition-transform duration-200 ease-out"
      >
        {/* QR Image */}
        <Image
          src={src}
          width={100}
          height={100}
          alt="QR Code"
          className="relative z-10 w-full h-full bg-accent-foreground  bg-cover rounded-xl "
        />

        {/* Glow on top of QR */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300 z-20 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.7) 0%, transparent 80%)",
            filter: "blur(20px)",
          }}
        />
      </div>
    </div>
  );
}
