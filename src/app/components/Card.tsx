import React from "react";
import Reusablebanner from "./Reusablebanner";
import PricingTable from "./PricingTable";

type Props = {};

export default function Card({}: Props) {
  return (
    <div className="h-auto flex flex-col w-full relative">
      <Reusablebanner
        buttonText={"Compare Plans"}
        headerstart="Compare Your  "
        headerspan="Abcd "
        headerend="plan"
        subtext="Flexible Deposits for Every Trader"
      />
      <PricingTable />
    </div>
  );
}
