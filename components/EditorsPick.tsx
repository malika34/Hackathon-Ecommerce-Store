import Image from "next/image";

const EditorsPick = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-textgrayOne">
      <div className="w-full max-w-5xl text-center px-4">
        {/* Title Section */}
        <div className="space-y-2">
          <h3 className="text-textColor font-semibold text-xl sm:text-2xl">
            EDITOR'S PICK
          </h3>
          <p className="text-secondtextColor text-sm sm:text-base">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 mt-10 px-8 md:px-16 lg:px-36">
          {/* First Column */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Image
              src="/images/productsimages/men.png"
              alt="Men"
              width={250}
              height={250}
              className="w-[25rem] sm:w-[15rem] md:w-[20rem] h-[25rem] sm:h-[18rem] md:h-[21rem]"
            />
            <Image
              src="/images/productsimages/women.png"
              alt="Women"
              width={200}
              height={200}
              className="w-[25rem] sm:w-[12rem] md:w-[15rem] h-[25rem] sm:h-[18rem] md:h-[21rem]"
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <Image
              src="/images/productsimages/kids.png"
              alt="Kids"
              width={150}
              height={150}
              className="w-[25rem] sm:w-[10rem] md:w-[12rem] h-[10rem] sm:h-[8rem] md:h-[10rem]"
            />
            <Image
              src="/images/productsimages/acessories.png"
              alt="Accessories"
              width={150}
              height={150}
              className="w-[25rem] sm:w-[10rem] md:w-[12rem] h-[10rem] sm:h-[8rem] md:h-[10rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
