import Footer from "@/components/Footer";
import MobileNavOne from "@/components/MobileNavOne";
import NavTwo from "@/components/NavTwo";
import Pricing from "@/components/Pricing";
import Trail from "@/components/Trail";
import { Nabla } from "next/font/google";
import React from "react";

const Pricingpage = () => {
  return (
    <div>
      <NavTwo />
      <MobileNavOne
        bgColorHidden="bg-white"
        bgColorVisible="bg-mobnavBg"
        paddingBottomVisible="4rem"
        marginBottomHidden="0rem"
      />
      <Pricing />
      <Trail />
      <Footer topBgColor="bg-text-white" />
    </div>
  );
};

export default Pricingpage;
