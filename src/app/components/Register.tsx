"use client";

import React from "react";
import Reusablebanner from "./Reusablebanner";

import ScrollStepsSection from "./verticalbar";

type Props = {};

export default function Register({}: Props) {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative w-full min-h-screen  bg-black overflow-hidden">
      <img
        src="/images/eclipsse.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full scale-350 pt-[20%] object-cover pointer-events-none z-0 brightness-50 opacity-40"
      />

      {/* Main Content */}

      <Reusablebanner
        buttonText={"Our Process"}
        headerstart=" Become a "
        headerspan="Abcd Pro "
        headerend="in sec..."
        subtext="🚀 Sign up. Fund. Trade."
      />
      <ScrollStepsSection />
      {/* <div className="flex align-bottom items-center">
        <ScrollProgress />
      </div> */}
    </div>
  );
}
