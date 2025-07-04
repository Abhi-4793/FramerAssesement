"use client";
import React, { useEffect, useRef, useState } from "react";

const steps = [
  { id: "step-1", number: "01", title: "Register your account" },
  { id: "step-2", number: "02", title: "Deposit your funds" },
  { id: "step-3", number: "03", title: "KYC" },
  { id: "step-4", number: "04", title: "Start trading" },
];

export default function ScrollStepsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  //   <div className="relative flex flex-col items-center h-[70vh] z-50 w-32">
  //         {/* Vertical Bar - background */}
  //         <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-white/20 z-0" />
  //         {/* Vertical Bar - progress fill */}
  //         <div
  //           className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-purple-500 rounded-full z-10 transition-all duration-300"
  //           style={{ height: `${progress}%` }}
  //         />
  //         {/* Step Numbers & Titles */}
  //         {steps.map((step, i) => (
  //           <div
  //             key={step.id}
  //             className="relative flex items-center w-full"
  //             style={{
  //               height: `${100 / (steps.length - 1)}%`,
  //               minHeight: "30px",
  //             }}
  //           >
  //             {/* Alternating titles left/right */}
  //             {i % 2 !== 0 ? (
  //               <>
  //                 <div className="w-1/2  text-right ">
  //                   <div className="text-sm text-white/40">Step {i + 1}</div>
  //                   <div className="text-lg mr-[20vw] font-semibold text-white">
  //                     {step.title}
  //                   </div>
  //                 </div>
  //                 <div className="w-0 flex flex-col items-center">
  //                   <span className="text-3xl font-bold text-white">
  //                     {step.number}
  //                   </span>
  //                 </div>
  //                 <div className="w-1/2" />
  //               </>
  //             ) : (
  //               <>
  //                 <div className="w-1/2" />
  //                 <div className="w-0 flex flex-col items-center">
  //                   <span className="text-3xl font-bold text-white">
  //                     {step.number}
  //                   </span>
  //                 </div>
  //                 <div className="w-1/2 text-left pl-4">
  //                   <div className="text-sm text-white/40">Step {i + 1}</div>
  //                   <div className="text-lg font-semibold text-white">
  //                     {step.title}
  //                   </div>
  //                 </div>
  //               </>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //   const [isVisible, setIsVisible] = useState(false);

  //   // Fade-in and progress calculation with Intersection Observer
  //   useEffect(() => {
  //     const section = sectionRef.current;
  //     if (!section) return;

  //     // Fade-in observer
  //     const fadeObserver = new window.IntersectionObserver(
  //       ([entry]) => setIsVisible(entry.isIntersecting),
  //       { threshold: 0.1 }
  //     );
  //     fadeObserver.observe(section);

  //     // Progress observer
  //     const onScroll = () => {
  //       const rect = section.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;
  //       const sectionHeight = rect.height;

  //       // Calculate scroll progress within the section
  //       const scrollY = Math.min(
  //         Math.max(windowHeight - rect.top, 0),
  //         sectionHeight + windowHeight
  //       );
  //       const progressPercent = Math.min(
  //         Math.max(scrollY / (sectionHeight + windowHeight), 0),
  //         1
  //       );

  //       setProgress(progressPercent * 100);
  //     };

  //     window.addEventListener("scroll", onScroll);
  //     window.addEventListener("resize", onScroll);
  //     onScroll();

  //     return () => {
  //       fadeObserver.disconnect();
  //       window.removeEventListener("scroll", onScroll);
  //       window.removeEventListener("resize", onScroll);
  //     };
  //   }, [progress]);

  //   // Fade-in CSS class
  //   const fadeClass = isVisible
  //     ? "opacity-100 translate-y-0"
  //     : "opacity-0 translate-y-12";
  const scrollListner = () => {};
  useEffect(() => {
    window.addEventListener("scroll", scrollListner);

    return () => window.removeEventListener("scroll", scrollListner);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[200vh]  px-3 bg-transparent flex flex-col justify-center items-center transition-all duration-700 `}
    >
      {/* Progress Bar and Steps */}
      <span>01</span>
      <div className="w-2 h-[100vh] border border-white  rounded-xl  items-center justify-center">
        <div
          className="w-full bg-amber-200 rounded-full"
          style={{ height: `${progress}` }}
        />
      </div>
    </section>
  );
}
