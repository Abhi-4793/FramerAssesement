"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; // your scroll area component
import { useInView } from "react-intersection-observer";
import Reusablebanner from "./Reusablebanner";

const steps = ["01", "02", "03", "04"];

export default function VerticalProgress() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { ref: sectionObserverRef } = useInView({
    threshold: 0.1,
  });

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
    <ScrollArea className="flex-1 h-[100vh] pr-4">
      <div
        ref={sectionObserverRef}
        className="relative min-h-screen bg-black text-white overflow-hidden"
      >
        {/* Optional background image overlay */}
        <img
          src="/images/eclipsse.png"
          alt="eclipse"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 brightness-50 z-0 pointer-events-none"
        />
        <Reusablebanner
          buttonText={"Our Process"}
          headerstart=" Become a "
          headerspan="Abcd Pro "
          headerend="in sec..."
          subtext="🚀 Sign up. Fund. Trade."
        />
        {/* Main section with vertical progress */}
        <div
          ref={sectionRef}
          className="relative flex max-w-7xl mx-auto py-24 z-10"
        >
          {/* Vertical Progress Bar & Step Numbers */}
          <div className="relative w-20 flex justify-center items-start">
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

          {/* Scrollable content inside ScrollArea */}

          <div className="flex flex-col gap-52 px-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="min-h-[100vh] flex items-center justify-center"
              >
                <div className="text-4xl font-semibold text-white">
                  {`Step ${step} Content`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
