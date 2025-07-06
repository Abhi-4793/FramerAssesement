"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Reusablebanner from "./Reusablebanner";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderWrapper } from "./AnimatedBorder";
import cn from "classnames";

export default function VerticalProgress() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [progress, setProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const { ref: sectionObserverRef } = useInView({
    threshold: 0.2,
  });
  const steps = [
    { id: "01", stepnum: "Step 1", title: "Register Your Account" },
    { id: "02", stepnum: "Step 2", title: "Deposit Your Funds" },
    { id: "03", stepnum: "Step 3", title: "KYC" },
    { id: "04", stepnum: "Step 4", title: "Start Trading&Earn Points" },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = rect.height + windowHeight;

      const scrollY = start - rect.top;
      const rawProgress = scrollY / end;

      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      className="relative min-h-screen bg-black text-white "
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
        className="relative flex flex-col items-center max-w-7xl mx-auto mt-15 py-24 z-10"
      >
        {/* Vertical Progress Bar */}
        <div className="absolute h-[calc(200vh-100px)] w-1 bg-gray-700 left-1/2 transform -translate-x-1/2  rounded">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-20 pointer-events-none"></div>

          <div
            ref={progressRef}
            style={{ height: `${progress * 100}%` }}
            className="absolute bottom-0 origin-top w-1 bg-white transition-[height] duration-500 ease-in-out"
          />
        </div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "absolute z-50 ml-18 mt-10 transition-opacity duration-700",
              visibleSteps.includes(index) ? "opacity-100" : "opacity-0"
            )}
            style={{
              top: `${index * 430 + 60}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* <div className="relative z-50"> */}
            {/* Outer ring to hide the line with black bg */}
            {/* <div className="absolute inset-0 rounded-full bg-black w-16 h-16 -z-10" /> */}

            {/* Step number */}
            <div className="backdrop-blur-sm bg-black/30 text-white w-14 h-14  py-10 px-10 rounded-full flex items-center justify-center text-3xl font-bold z-50">
              {step.id}
            </div>
          </div>
        ))}

        {/* Steps */}
        <div className="relative w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              data-index={index}
              className={cn(
                "flex items-center z-20 justify-between w-full mb-80 relative transition-opacity duration-700",
                index % 2 === 0 ? "flex-row-reverse" : "flex-row",
                visibleSteps.includes(index) ? "opacity-100" : "opacity-0"
              )}
            >
              <div
                className={cn(
                  "w-1/2",
                  index % 2 === 0 ? "pl-15 pt-5" : "pr-20  text-right"
                )}
              >
                <div className="text-white text-2xl flex flex-col  font-semibold">
                  <span className="font-extralight text-gray-700">
                    {step.stepnum}
                  </span>
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
            className="group flex bg-[#6242a5] text-white font-bold  w-45 h-12"
          >
            Open Free Account
            <ArrowUpRight className="w-4 h-4 group-hover:inline-block transition duration-300" />
          </Button>
        </AnimatedBorderWrapper>
      </div>
    </div>
  );
}
