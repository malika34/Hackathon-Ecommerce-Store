import Image from "next/image";
import Button from "./button";

const About = () => {
  return (
    <section className="container mx-auto">
      {/* For Medium Screens (md) */}
      <div className="hidden sm:flex justify-center md:justify-around px-6 md:px-0 lg:px-0">
        {/* Text Content for Medium Screens */}
        <div className="max-w-md mt-16 md:mt-24 md:ml-6 space-y-8">
          {/* Highlighted Text */}
          <p className="text-[0.875rem] font-semibold uppercase text-darkbackgroundColor">
            ABOUT COMPANY
          </p>
          {/* Title */}
          <h1 className="text-darkbackgroundColor text-3xl md:text-4xl font-semibold leading-tight">
            ABOUT US
          </h1>
          {/* Description */}
          <p className="text-[1rem] md:text-[0.875rem] text-secondtextColor max-w-[17rem]">
            We know how large objects will act, but things on a small scale.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
            {/*Get Quote Now */}
            <Button
              text="Get Quote Now "
              paddingY="11px"
              paddingL="28px"
              paddingR="28px"
              rounded="rounded-sm rounded-bl-sm"
            />
          </div>
        </div>
        {/* Image Section for Medium Screens */}
        <div className="relative mr-2">
          <Image
            src={"/images/team/blob.png"}
            alt="Blob"
            width={632}
            height={612}
            className="w-[20rem] md:w-[50rem] absolute top-12 z-0"
          />
          <Image
            src={"/images/team/girl.png"}
            alt="Girl-image"
            width={571}
            height={668}
            className="w-[20rem] md:w-[25rem] relative z-10"
          />
        </div>
      </div>

      {/* For Small and Large Screens */}
      <div className="flex sm:hidden flex-col justify-center items-center px-4 text-center">
        {/* Text Content for All Screens */}
        <div className="mt-20 space-y-8 text-center">
          {/* Title */}
          <h1 className="text-darkbackgroundColor text-2xl font-semibold text-center">
            ABOUT US
          </h1>
          {/* Description */}
          <p className="text-[0.875rem] md:text-[1rem] text-secondtextColor mx-[4.7rem]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col justify-center space-y-4">
            {/* Get Quote Now */}
            <Button
              text="Get Quote Now"
              paddingY="11px"
              paddingL="28px"
              paddingR="28px"
              rounded="rounded-sm rounded-bl-sm"
            />
          </div>
        </div>

        {/* Image Section for All Screens */}
        <div className="relative mt-24 md:mt-0 flex justify-center">
          <Image
            src={"/images/team/blob.png"}
            alt="Blob"
            width={632}
            height={612}
            className="w-[15rem] absolute top-8 md:top-12 z-0"
          />
          <Image
            src={"/images/team/girl.png"}
            alt="Girl-image"
            width={571}
            height={668}
            className="w-[12rem] relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
