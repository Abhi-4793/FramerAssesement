"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { AnimatedBorderWrapper } from "./AnimatedBorder";
import FancyWrapper from "./CardWrapper";

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
    <div className="max-w-screen-xl mx-auto mt-40 overflow-x-hidden px-4 overflow-hidden">
      <div className="flex text-sm text-white overflow-hidden">
        {/* Feature Column */}
        <div className="flex flex-col space-y-5 mt-30 text-left opacity-60 min-w-[200px] pr-6">
          {features.map((feature, idx) => (
            <div key={idx}>
              {feature}
              <Separator className="my-1 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0" />
            </div>
          ))}
        </div>

        {/* Plan Columns */}
        <div className="flex flex-1 space-x-1 items-center overflow-hidden">
          {pricingData.map((plan, idx) => {
            const card = (
              <Card
                key={idx}
                className={`flex flex-col justify-between h-full flex-1 rounded-2xl border border-[#15001a] shadow-xl text-center ${
                  idx === 0 || idx === 2
                    ? "bg-gradient-to-tl from-[#030105] to-[#15001a]"
                    : "bg-[linear-gradient(154deg,#000,#0d020d_129%)]"
                }`}
              >
                <CardContent className="p-6 flex flex-col justify-between items-center h-full">
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-sm opacity-70 w-64 mb-4">
                    {plan.description}
                  </p>
                  <Separator className="mb-4 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0" />
                  <div className="flex flex-col space-y-6 w-40  justify-center text-center text-sm">
                    {plan.values.map((val, i) => (
                      <div key={i}>
                        {val}
                        <Separator className="my-1 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0" />
                      </div>
                    ))}
                  </div>
                  <Button
                    variant={"outline"}
                    className="mt-6 text-white w-30 h-10 items-center text-center bg-gradient-to-b  from-[#9f8bcf] to-[#6242a5]"
                  >
                    Start Trading
                  </Button>
                </CardContent>
              </Card>
            );

            return idx === 1 ? (
              <AnimatedBorderWrapper key={idx} className="flex-1 h-fit z-10">
                {card}
              </AnimatedBorderWrapper>
            ) : (
              <div key={idx} className="flex-1 h-full z-10">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
