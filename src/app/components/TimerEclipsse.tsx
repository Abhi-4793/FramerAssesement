"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedBorderWrapper } from "./AnimatedBorder";
import { useInView } from "react-intersection-observer";

export default function TimerEclipsseSection() {
  const [count, setCount] = useState<number>(281);
  const [startTime, setStartTime] = useState(Date.now());
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

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
    <section className="relative min-h-screen h-full flex items-center justify-center overflow-hidden text-white text-center">
      <div className="absolute inset-0 z-30 flex flex-col gap-4 max-w-4xl mb-10 items-center justify-center mx-auto">
        <Button
          variant={"outline"}
          size={"lg"}
          className="bg-[linear-gradient(91deg,_rgb(200,186,232)_0%,_rgb(177,149,240)_98.2475%)] bg-clip-text text-transparent font-semibold font-['Manrope'] w-30 h-8"
        >
          <span>Payouts</span>
        </Button>

        <div
          ref={ref}
          className={`mt-10 transition-opacity duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            hasAnimated ? "animate-fadeInShadow" : "opacity-50"
          }`}
        >
          <h1
            className={`text-3xl md:text-5xl font-bold perspective-1200 transform-style-3d`}
          >
            <span
              className={`${
                hasAnimated ? "inline-block animate-depthFade" : "opacity-0"
              }`}
            >
              We’ve Paid Out Over <br />
              <span className="text-white/90">$1M to Traders</span>
            </span>
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
          <Button
            variant="default"
            size={"lg"}
            className="group flex bg-black hover:bg-gray-900 text-white font-bold w-45 px-20 py-5 h-12"
          >
            Are you next ?
            <ArrowUpRight className="w-4 h-4 group-hover:hidden transition duration-300" />
            <ArrowRight className="w-4 h-4 hidden group-hover:inline-block transition duration-300" />
          </Button>
        </AnimatedBorderWrapper>
      </div>

      {/* Video Background */}
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
