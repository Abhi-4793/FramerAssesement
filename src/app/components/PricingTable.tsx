"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { AnimatedBorderWrapper } from "./AnimatedBorder";

const features = [
  "Who It’s For",
  "Initial Capital Requirement",
  "Spread Advantage",
  "Trading Fees",
  "Leverage Capacity",
  "Minimum Lot Size",
  "Trade Execution Limit",
  "Open Position Capacity",
  "Stop Out Threshold",
  "Margin Call Activation",
  "Swap Policy",
  "Risk Exposure",
  "Asset Options",
];

const pricingData = [
  {
    title: "Abcd Vintage",
    description:
      "Perfect for balanced, all-level traders looking for consistency and solid growth.",
    values: [
      "$10%",
      "from 0.2 pips",
      "No Commission",
      "1:Unlimited",
      "0.01",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "Moderate",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
  {
    title: "Abcd Cent",
    description:
      "Designed for beginners ready to step into the trading world with minimal risk.",
    values: [
      "$10",
      "from 0.3 pips",
      "Zero Commission",
      "1:Unlimited",
      "Same",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "Low",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
  {
    title: "Abcd Pro",
    description:
      "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
    values: [
      "$500",
      "from 0.1 pips",
      "No Commission",
      "1:Unlimited",
      "Same",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "High",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
];

export default function PricingTable() {
  return (
    <div className="max-w-9xl mx-auto mt-40  items-center justify-center overflow-x-hidden h-screen">
      <div className="grid grid-cols-[1fr_repeat(3,minmax(150px,1fr))]  text-sm text-white">
        <div className="flex flex-col w-50 ml-50 space-y-5 pt-[28%] py-0 pr-4 text-left opacity-60 font-light">
          {features.map((f, i) => (
            <div key={i}>
              {f}
              <Separator className="my-1  w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0" />
            </div>
          ))}
        </div>

        {pricingData.map((plan, idx) => {
          const card = (
            <Card
              key={idx}
              className={`rounded-2xl items-center w-[20vw] justify-center text-center shadow-xl ${
                idx === 0 || idx === 2
                  ? "bg-gradient-to-tl from-[#030105] to-[#0a0013]"
                  : `bg-[linear-gradient(154deg,#000,#0d020d_129%)]`
              }`}
              // style={
              //   idx === 0 || idx === 2
              //     ? {}
              //     : {
              //         WebkitMaskImage:
              //           "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 100%)",
              //         maskImage:
              //           "linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25))",
              //       }
              // }
            >
              <CardContent className="p-3  space-y-5">
                <h3 className="text-xl text-white font-semibold">
                  {plan.title}
                </h3>
                <p className="text-sm text-white opacity-70">
                  {plan.description}
                </p>
                <Separator className="my-1  w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0" />
                <div className="space-y-6 text-white pt-4 text-center text-sm">
                  {plan.values.map((val, i) => (
                    <div key={i}>
                      {val}
                      <Separator className="my-1  w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0" />
                    </div>
                  ))}
                </div>
                <Button
                  variant={"outline"}
                  className="mt-6 bg-gradient-to-b from-[#9f8bcf] to-[#6242a5]"
                >
                  Start Trading
                </Button>
              </CardContent>
            </Card>
          );

          // Wrap the 2nd card (idx === 1)
          return idx === 1 ? (
            <AnimatedBorderWrapper key={idx}>{card}</AnimatedBorderWrapper>
          ) : (
            card
          );
        })}
      </div>
    </div>
  );
}
