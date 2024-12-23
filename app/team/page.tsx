import Footer from "@/components/Footer";
import InnovationTailored from "@/components/InnovationTailored";
import MobileNavOne from "@/components/MobileNavOne";
import NavTwo from "@/components/NavTwo";
import Trail from "@/components/Trail";
import React from "react";

const Teampage = () => {
  return (
    <div>
      <NavTwo />
      <MobileNavOne
        bgColorHidden="bg-white"
        bgColorVisible="bg-mobnavBg"
        paddingBottomVisible="4rem"
        marginBottomHidden="0rem"
      />
      <InnovationTailored />
      <Trail />
      <Footer topBgColor="bg-text-white" />
    </div>
  );
};

export default Teampage;
