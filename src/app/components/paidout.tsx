"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedBorderWrapper } from "./AnimatedBorder";
import { useInView } from "react-intersection-observer";
export default function HeroSection() {
  const [count, setCount] = useState<number>(281);
  const [startTime, setStartTime] = useState(Date.now());
  const { ref, inView } = useInView({
    threshold: 0.3, //30% visible
    triggerOnce: false, // Change to true if you want it to fade in only once
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;

      if (elapsed >= 8) {
        setStartTime(Date.now());
        setCount(281);
      } else {
        setCount((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);
  return (
    <section className="relative min-h-screen h-full  flex items-center justify-center overflow-hidden text-white text-center">
      {/* 💡 Overlay Content */}
      <div className="absolute inset-0 z-30 flex flex-col gap-1 max-w-4xl mb-10 items-center justify-center mx-auto">
        <Button
          variant={"default"}
          size={"lg"}
          className="text-pink-200 rounded-full text-[20px] bg-black border-2 hover:bg-black w-45 h-12"
        >
          Payouts
        </Button>
        <div
          className={` mt-20 transition-all duration-1000 eease-[cubic-bezier(0.25, 1, 0.5, 1)] transform ${
            inView ? "opacity-[1]" : "opacity-[0.5] "
          }`}
          ref={ref}
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            We’ve Paid Out Over <br />
            <span className="text-white/90">$1M to Traders</span>
          </h1>

          <p className="text-white/80 mt-2">
            Your Trust is Our Fuel—Power Up with Abcd
          </p>
        </div>

        <h2 className="text-[60px] md:text-[240px] font-normal font-[helvetica] tracking-tighter bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent mt-6">
          $999,{count}
          <span className="text-purple-400 text-[200px] text-6xl">+</span>
        </h2>
        <AnimatedBorderWrapper className="w-fit">
          {" "}
          <Button
            variant="default"
            size={"lg"}
            className="group flex bg-black hover:bg-gray-900   text-white font-bold w-40 h-12"
          >
            Are you next ?
            <ArrowUpRight className="w-4 h-4 group-hover:hidden transition duration-300" />
            <ArrowRight className="w-4 h-4 hidden group-hover:inline-block transition duration-300" />
          </Button>
        </AnimatedBorderWrapper>
      </div>
      {/* //Video Bacground */}
      <div className="relative w-full h-[140vh] top-[45%]">
        <div className="absolute inset-0 bg-[rgba(184,7,7,0)] mix-blend-screen [clip-path:inset(0_0_50%_0)] opacity-60 z-10 pointer-events-none" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fill [clip-path:inset(0_0_50%_0)] brightness-75 contrast-125 saturate-150 filter hue-rotate-[40deg] z-0"
        >
          <source src="/video/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
