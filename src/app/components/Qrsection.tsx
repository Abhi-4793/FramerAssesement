"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
// import QRCodeTilt from "./StyleQrCode";
import { useInView } from "react-intersection-observer";
import QRCodeGlow from "./StyleQrCode";

export default function HeroQRSection() {
  //   const [offsetY, setOffsetY] = useState(0);
  const { ref, inView, entry } = useInView({
    triggerOnce: false, // animate both in and out
    threshold: 0.4, // adjust as needed
  });

  // 0 (not visible) => 100vw (off-screen right)
  // 1 (fully visible) => 0 (centered)
  //   let translateX = "100vw";
  //   let opacity = 0;

  //   if (entry) {
  //     const ratio = entry.intersectionRatio;
  //     // Interpolate from 100vw (off-screen) to 0 (center)
  //     translateX = `${(1 - ratio) * 100}vw`;
  //     // Fade in as it becomes more visible
  //     opacity = ratio;

  return (
    <section
      className="relative h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden text-white"
      style={{
        background: `radial-gradient(16% 28.999999999999996% at 50% 50%,#574c70,#00000069)`,
        // backgroundPositionY: `${offsetY * 0.5}px`,
        transition: "background-position 0.3s ease",
      }}
    >
      <QRCodeGlow src="/images/qr.png" />
      {/* sticky top-20 z-10 text-4xl md:text-9xl font-extrabold tracking-tight
      transition-transform duration-1000 ease-in-out will-change-transform
      mx-auto text-center w-fit $
      {inView ? "translate-x-0 opacity-100" : "translate-x-70 opacity-40"} */}
      {/* Text */}
      <h1
        ref={ref}
        className={clsx(
          "absolute z-0 text-4xl md:text-9xl font-semibold tracking-tight text-center whitespace-nowrap transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]",
          {
            "-translate-x-[20vw] opacity-60 ": inView,
            "translate-x-[20vw] opacity-100": !inView,
          }
        )}
        style={{
          willChange: "transform, opacity, left",
        }}
      >
        <span className="inline ">Trade </span>
        <span className="inline text-white/60">Anytime</span>
        <span className="inline">, </span>
        <span className="inline bg-[#a35ca2] bg-clip-text text-transparent">
          Anywhere
        </span>
      </h1>

      {/* App store badges (placeholder or use real image) */}
      <div className="z-10 mt-20 flex flex-col gap-4">
        <Image
          src="/images/store.png"
          alt="Store"
          className="border-none"
          width={100}
          height={45}
        />
      </div>
    </section>
  );
}
