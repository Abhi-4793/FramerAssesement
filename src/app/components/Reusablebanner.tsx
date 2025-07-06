import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  buttonText: string;
  headerstart: string;
  headerspan: string;
  headerend: string;
  subtext: string;
};

export default function Reusablebanner({
  buttonText,
  headerstart,
  headerspan,
  headerend,
  subtext,
}: Props) {
  const fullHeader = `${headerstart}${headerspan}${headerend}`;
  const headerStartLen = headerstart.length;
  const headerSpanLen = headerspan.length;

  return (
    <div className="relative top-30 z-10 flex flex-col items-center justify-center h-full text-white text-center font-light px-4">
      <Button
        variant={"outline"}
        size={"lg"}
        className="bg-[linear-gradient(91deg,_rgb(200,186,232)_0%,_rgb(177,149,240)_98.2475%)] bg-clip-text text-transparent font-semibold font-['Manrope'] w-30 h-8"
      >
        <span>{buttonText}</span>
      </Button>

      <h2 className="text-5xl md:text-7xl mt-4 font-sans font-normal tracking-tighter whitespace-nowrap">
        {fullHeader.split("").map((char, i) => {
          const isSpanChar =
            i >= headerStartLen && i < headerStartLen + headerSpanLen;
          return (
            <span
              key={i}
              className={`char-slide-up ${
                isSpanChar ? "text-[#A35CA2] font-['Manrope']" : ""
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </h2>

      <p className="mt-4 text-lg text-white/70">{subtext}</p>
    </div>
  );
}
