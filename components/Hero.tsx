import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto">
      {/* Hero Section for Desktop */}
      <div className="relative bg-[url('/images/bgimages/hero-bg.jpg')] bg-cover bg-top h-[39rem] hidden sm:flex items-center -mt-4 px-6 md:px-12 lg:px-40">
        <div className="text-white max-w-lg mt-24 space-y-6">
          <p className="text-sm font-semibold uppercase">Summer 2020</p>
          <h1 className="text-4xl uppercase font-semibold leading-tight">
            New Collection
          </h1>
          <p className="text-sm max-w-xs text-lighttextGray1">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 px-8 py-3 bg-sucessColor text-white font-semibold rounded-sm hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Hero Section for Mobile */}
      <div className="relative bg-[url('/images/bgimages/mob-hero-bg.jpg')] bg-cover bg-top h-[39rem] flex sm:hidden items-center mt-20 px-0">
        <div className="text-white max-w-lg mt-32 space-y-6 text-center">
          <p className="text-sm font-semibold uppercase">Summer 2020</p>
          <h1 className="text-3xl max-w-sm uppercase font-semibold leading-tight">
            New Collection
          </h1>
          <p className="text-sm max-w-xs text-lighttextGray1">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 px-8 py-3 bg-sucessColor text-white font-semibold rounded-sm hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
