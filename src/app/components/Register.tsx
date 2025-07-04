"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Reusablebanner from "./Reusablebanner";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderWrapper } from "./AnimatedBorder";
import cn from "classnames";

export default function VerticalProgress() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  const [progress, setProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const { ref: sectionObserverRef } = useInView({
    threshold: 0.1,
  });
  const steps = [
    { id: "01", stepnum: "Step 1", title: "Register Your Account" },
    { id: "02", stepnum: "Step 2", title: "Deposit Your Funds" },
    { id: "03", stepnum: "Step 3", title: "KYC" },
    { id: "04", stepnum: "Step 4", title: "Start Trading&Earn Points" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      // Calculate progress only within this section
      const rawProgress = (scrollY - sectionTop) / sectionHeight;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleSteps((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    stepRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
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
        className="relative flex flex-col items-center max-w-7xl mx-auto mt-10 py-24 z-10"
      >
        {/* Vertical Progress Bar */}
        <div className="absolute h-[calc(200vh-130px)] w-1 bg-gray-700 left-1/2 transform -translate-x-1/2 overflow-hidden rounded">
          <div
            ref={progressRef}
            style={{ height: `${progress * 90}%` }}
            className="absolute bottom-0 w-1 bg-white transition-all duration-300"
          />
        </div>

        {/* Steps */}
        <div className="relative w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => {
                stepRefs.current[index] = el!;
              }}
              className={cn(
                "flex items-center justify-between w-full mb-80 relative transition-opacity duration-700",
                index % 2 === 0 ? "flex-row-reverse" : "flex-row",
                visibleSteps.includes(index) ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="w-1/2 px-4">
                <div className="text-white text-2xl flex flex-col font-semibold">
                  <span>{step.stepnum}</span>
                  <span>{step.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AnimatedBorderWrapper className="w-fit mt-10">
          <Button
            variant="default"
            size="sm"
            className="group flex bg-[#6242a5] text-white font-bold w-45 h-12"
          >
            Open Free Account
            <ArrowUpRight className="w-4 h-4 group-hover:inline-block transition duration-300" />
          </Button>
        </AnimatedBorderWrapper>
      </div>
    </div>
  );
}
