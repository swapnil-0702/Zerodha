import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import AccountCharges from "./AccountCharges";
import AMC from "./AMC";
import OptionalServices from "./OptionalServices";
import ChargesExplained from "./ChargesExplained";

function Pricing() {
  return (
    <>
      <Hero />
      <Brokerage />
      <AccountCharges />
      <AMC />
      <OptionalServices />
      <ChargesExplained />
      <OpenAccount />
    </>
  );
}

export default Pricing;
