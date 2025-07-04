"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const steps = ["01", "02", "03", "04"];

export default function VerticalProgress() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { ref: sectionObserverRef } = useInView({ threshold: 0.1 });

  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !progressRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top >= windowHeight || rect.bottom <= 0) return;

      const scrollProgress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
      );

      setProgress(scrollProgress);

      stepRefs.current.forEach((el, i) => {
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top < windowHeight / 2 && r.bottom > windowHeight / 2) {
            setActiveIndex(i);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionObserverRef}
      className="relative min-h-[400vh] w-full overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/your-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-red-500/30" />{" "}
        {/* optional overlay */}
      </div>

      {/* Progress UI */}
      <div
        ref={sectionRef}
        className="absolute left-10 top-0 bottom-0 flex justify-center pointer-events-none"
      >
        <div className="relative flex items-start">
          <div className="h-full w-1 bg-gray-700 relative overflow-hidden rounded">
            <div
              ref={progressRef}
              style={{ height: `${progress * 100}%` }}
              className="absolute bottom-0 w-1 bg-white transition-all duration-300"
            />
          </div>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={cn(
                  "text-white/30 font-bold text-xl transition-opacity duration-500",
                  {
                    "text-white/90": index === activeIndex,
                    "opacity-100": index === activeIndex,
                    "opacity-30": index !== activeIndex,
                  }
                )}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex flex-col gap-52 px-10 max-w-6xl mx-auto relative z-10 pt-40">
        {steps.map((step, index) => (
          <div
            key={index}
            className="min-h-[100vh] flex items-center justify-center"
          >
            <div className="text-4xl font-semibold text-white drop-shadow">
              Step {step} Content
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
