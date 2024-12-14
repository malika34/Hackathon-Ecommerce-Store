"use client";
import Image from "next/image";
import { useState } from "react";
import PricingCards from "./PricingCards";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full container mx-auto ">
      <div className="flex flex-col justify-center items-center mt-8">
        {/* Title Section */}
        <div className="space-y-2 text-center">
          {/* Subtitle */}
          <p className="text-secondtextColor font-semibold  text-[0.875rem] mx-16 sm:mx-auto">
            PRICING
          </p>
          {/* Heading */}
          <h3 className="text-textColor font-semibold text-[3.2rem]">
            Simple Pricing
          </h3>
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-center text-[0.875rem] space-x-3">
            <span className="text-darkbackgroundColor font-semibold">Home</span>
            <span>
              <Image
                src={"/images/icons/shoprightarrow-icon.png"}
                width={8.62}
                height={16}
                alt="Rightarrow-icon"
              />
            </span>
            <span className="text-muttedColor font-semibold">Pricing</span>
          </div>
        </div>
      </div>
      {/* Pricing Section */}
      <div className="bg-textgrayOne mt-11 pt-16">
        <div className="space-y-2 text-center">
          {/* Heading */}
          <h3 className="text-textColor font-semibold text-[2.3rem]">
            Pricing
          </h3>
          <p className="text-secondtextColor  text-[0.875rem] mx-16 sm:mx-auto">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 my-10">
          {/* Monthly Text */}
          <span
            className={`text-[1rem] font-semibold ${
              !isYearly ? "text-textColor" : "text-textColor"
            }`}
          >
            Monthly
          </span>

          {/* Toggle Switch */}
          <div
            onClick={() => setIsYearly(!isYearly)}
            className={`w-[3.3rem] h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 border-[0.1rem] border-primaryColor ${
              isYearly ? "bg-primaryColor" : "bg-white"
            }`}
          >
            <div
              className={`h-5 w-5 rounded-full border-[0.1rem] border-roundedOutline bg-roundedBg shadow-md transform duration-300 ${
                isYearly ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>

          {/* Yearly Text */}
          <span
            className={`text-[1rem] font-semibold ${
              isYearly ? "text-textColor" : "text-textColor"
            }`}
          >
            Yearly
          </span>

          {/* Save 25% Badge */}
          {isYearly && (
            <span className="bg-fadedPrimaryColor text-primaryColor text-[0.875rem] font-semibold px-[1rem] py-[0.7rem] rounded-full">
              Save 25%
            </span>
          )}
        </div>
        <div>
          <PricingCards />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
