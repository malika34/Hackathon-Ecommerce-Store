"use client";
import { useEffect, useState } from "react";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import EditorsPick from "@/components/EditorsPick";
import FeaturedProducts from "@/components/FeaturedProducts";
import Vitaclassicproduct from "@/components/VitaclassicProduct";
import Neuraluniverse from "@/components/NeuralUniverse";
import FeaturedPosts from "@/components/FeaturedPosts";
import MobileNavOne from "@/components/MobileNavOne";
import Nav from "@/components/Nav";

const Homepage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section>
      <TopHeader />
      <Header />
      <MobileNavOne
        bgColorVisible="bg-white"
        bgColorHidden="bg-white"
        marginBottomHidden="-4rem"
        paddingBottomVisible="1rem"
      />
      <Hero />
      <EditorsPick />
      <FeaturedProducts />
      <Vitaclassicproduct />
      <Neuraluniverse />
      <FeaturedPosts />
      <Footer />
    </section>
  );
};

export default Homepage;
