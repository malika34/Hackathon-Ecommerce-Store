import Image from "next/image";
import BrandLogo from "./BrandLogo";
import Button from "./button";
const BigCompanies = () => {
  return (
    <section className="bg-textgrayOne w-full">
      <div className="container mx-auto mt-40">
        {/* Text */}
        <div className="flex flex-col justify-center items-center text-center mx-[4.7rem] sm:mx-[0rem] space-y-2">
          <h3 className="font-semibold text-[2.3rem] text-textColor">
            Big Companies Are Here
          </h3>
          <p className="text-[0.875rem] text-secondtextColor flex sm:hidden">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <p className="text-[0.875rem] text-secondtextColor hidden sm:flex">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        {/* Brand logo */}
        <div className="container mx-auto">
          <BrandLogo />
        </div>
        <div className="bg-hoverColor mt-44 -mb-24 conainer mx-auto">
          <div className="hidden sm:flex justify-center md:justify-around px-6 md:px-0 lg:px-0">
            {/* Text Content for Medium Screens */}
            <div className="max-w-md mt-16 md:mt-44 md:ml-9 space-y-7">
              {/* Highlighted Text */}
              <p className="text-[0.875rem] font-semibold uppercase text-white">
                WORK WITH US
              </p>
              {/* Title */}
              <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
                Now Let’s grow Yours
              </h1>
              {/* Description */}
              <p className="text-[1rem] md:text-[0.875rem] text-white max-w-[27rem]">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
                {/*Button*/}
                <Button
                  text="Button"
                  paddingY="11px"
                  paddingL="28px"
                  paddingR="28px"
                  rounded="rounded-sm rounded-bl-sm"
                  backgroundColor="bg-transparent"
                  outline={true}
                />
              </div>
            </div>
            <div className="hidden sm:flex lg:-mr-[6.4rem] xl:-mr-[6.3rem] 2xl:-mr-[5.9rem]">
              <Image
                src={"/images/productsimages/work.png"}
                alt="Girl-image"
                width={590}
                height={640}
                className=" md:w-[30rem] lg:w-[32rem] xl:w-[32rem] 2xl:w-[49rem]  h-[35rem] md:h-[32rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigCompanies;
