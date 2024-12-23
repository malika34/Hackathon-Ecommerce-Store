import Image from "next/image";

const EditorsPick = () => {
  return (
    <section className="flex justify-center items-center bg-textgrayOne mb-16 pb-14">
      {/* Container for the Editor's Pick section */}
      <div className="w-full max-w-5xl px-4 mt-16 mx-auto container">
        {/* Title Section */}
        <div className="space-y-2 text-center">
          {/* Heading */}
          <h3 className="text-textColor font-semibold text-[1.6rem]">
            EDITOR'S PICK
          </h3>
          {/* Subtitle */}
          <p className="text-secondtextColor text-[0.875rem] mx-16 sm:mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 px-8 md:px-16 lg:px-4">
          {/* First Column: Men */}
          <div className="relative w-full lg:col-span-2 h-[500px]">
            <Image
              src="/images/productsimages/men.png"
              alt="Men"
              layout="fill"
              className="object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-14 py-[0.7rem] font-semibold text-xs sm:text-[0.8rem]">
              MEN
            </button>
          </div>

          {/* Second Column: Women */}
          <div className="relative w-full h-[500px] lg:h-auto">
            <Image
              src="/images/productsimages/women.png"
              alt="Women"
              layout="fill"
              className="object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-6 py-[0.7rem] font-semibold text-xs sm:text-[0.8rem]">
              WOMEN
            </button>
          </div>

          {/* Third Column: Kids and Accessories */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[240px]">
              <Image
                src="/images/productsimages/kids.png"
                alt="Kids"
                layout="fill"
                className="object-cover"
              />
              <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-[0.7rem] font-semibold text-xs sm:text-[0.8rem]">
                ACCESSORIES
              </button>
            </div>
            <div className="relative w-full h-[240px]">
              <Image
                src="/images/productsimages/acessories.png"
                alt="Accessories"
                layout="fill"
                className="object-cover"
              />
              <button className="absolute bottom-4 left-4 bg-white text-black px-7 py-[0.6rem] font-semibold text-xs sm:text-[0.8rem]">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
