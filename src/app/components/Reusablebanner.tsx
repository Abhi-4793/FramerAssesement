import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  buttonText: string;
  headerstart: string;
  headerspan: String;
  headerend: String;
  subtext: String;
};

export default function Reusablebanner({
  buttonText,
  headerstart,
  headerspan,
  headerend,
  subtext,
}: Props) {
  return (
    <div className="relative top-30 z-10 flex flex-col items-center justify-center h-full text-white text-center font-light px-4">
      <Button
        variant={"outline"}
        size={"lg"}
        className="bg-[linear-gradient(91deg,_rgb(200,186,232)_0%,_rgb(177,149,240)_98.2475%)] bg-clip-text text-transparent  font-semibold font-['Manrope'] w-30 h-8"
      >
        <span className="">{buttonText}</span>
      </Button>

      <h2 className="text-7xl  mt-4 font-sans  font-normal tracking-tighter ">
        {headerstart}
        <span className="text-[#A35CA2] font-['Manrope']">{headerspan}</span>
        {headerend}
      </h2>

      <p className="mt-4 text-lg text-white/70">{subtext}</p>
    </div>
  );
}
