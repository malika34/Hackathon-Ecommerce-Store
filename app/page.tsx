import MobileNavOne from "@/components/MobileNavOne";
import React from "react";
import Hero from "@/components/Hero";
import EditorsPick from "@/components/EditorsPick";
import FeaturedProducts from "@/components/FeaturedProducts";
import Vitaclassicproduct from "@/components/VitaclassicProduct";
import Neuraluniverse from "@/components/NeuralUniverse";
import FeaturedPosts from "@/components/FeaturedPosts";
const Homepage = () => {
  return (
    <section>
      <MobileNavOne />
      <Hero />
      <EditorsPick />
      <FeaturedProducts />
      <Vitaclassicproduct />
      <Neuraluniverse />
      <FeaturedPosts />
    </section>
  );
};

export default Homepage;
