import MobileNavOne from "@/components/MobileNavOne";
import React from "react";
import Hero from "@/components/Hero";
import EditorsPick from "@/components/EditorsPick";
import FeaturedProducts from "@/components/FeaturedProducts";
const Homepage = () => {
  return (
    <section>
      <MobileNavOne />
      <Hero />
      <EditorsPick />
      <FeaturedProducts />
    </section>
  );
};

export default Homepage;
