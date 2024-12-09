import Image from "next/image";

const EditorsPick = () => {
  return (
    <section className="flex justify-center items-center bg-textgrayOne mb-16">
      <div className="w-full max-w-5xl px-4 mt-16 mx-auto container">
        {/* Title Section */}
        <div className="space-y-2 text-center">
          <h3 className="text-textColor font-semibold text-[1.6rem]">
            EDITOR'S PICK
          </h3>
          <p className="text-secondtextColor text-[0.875rem] mx-16 sm:mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mt-10 px-8 md:px-16 lg:px-36">
          {/* First Column */}
          <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-2 justify-center items-center relative">
            <div className="relative w-full sm:w-auto h-[400px]">
              <Image
                src="/images/productsimages/men.png"
                alt="Men"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-4 sm:left-1/4 transform sm:-translate-x-1/2 bg-white text-black px-7 py-2 font-semibold text-xs sm:text-[0.8rem]">
                MEN
              </button>
            </div>

            <div className="relative w-full sm:w-auto h-[400px]">
              <Image
                src="/images/productsimages/women.png"
                alt="Women"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-4 sm:left-1/2 transform sm:-translate-x-1/2 bg-white text-black px-4 py-2 font-semibold text-xs sm:text-[0.8rem]">
                WOMEN
              </button>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-y-2 sm:gap-x-2 mt-2 justify-center items-center relative">
            <div className="relative w-full sm:w-auto h-[200px]">
              <Image
                src="/images/productsimages/kids.png"
                alt="Kids"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-4 sm:left-1/2 transform sm:-translate-x-1/2 bg-white text-black px-4 py-2 font-semibold text-xs sm:text-[0.8rem]">
                ACCESSORIES
              </button>
            </div>

            <div className="relative w-full sm:w-auto h-[200px]">
              <Image
                src="/images/productsimages/acessories.png"
                alt="Accessories"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-4 sm:left-1/3 transform sm:-translate-x-1/2 bg-white text-black px-4 py-2 font-semibold text-xs sm:text-[0.8rem]">
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
