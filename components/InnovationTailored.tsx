import Image from "next/image";
import Team from "./Team";

const InnovationTailored = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center mt-7">
        {/* Title Section */}
        <div className="space-y-2 text-center">
          {/* Subtitle */}
          <p className="text-secondtextColor font-semibold  text-[0.875rem] mx-16 sm:mx-auto">
            WHAT WE DO
          </p>
          {/* Heading */}
          <h3 className="text-textColor font-semibold text-[3rem] sm:text-[3.2rem]">
            Innovation tailored for you
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
            <span className="text-muttedColor font-semibold">Team</span>
          </div>
        </div>
      </div>
      {/* Images */}
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-14">
        <div>
          <Image
            src={"/images/team/tailored-1.png"}
            width={700}
            height={530}
            alt="Rightarrow-icon"
            className="w-[38.7rem]"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
          <Image
            src={"/images/team/tailored-2.png"}
            width={700}
            height={530}
            alt="Rightarrow-icon"
            className="w-[20rem]"
          />
          <Image
            src={"/images/team/tailored-3.png"}
            width={700}
            height={530}
            alt="Rightarrow-icon"
            className="w-[20rem]"
          />
          <Image
            src={"/images/team/tailored-4.png"}
            width={700}
            height={530}
            alt="Rightarrow-icon"
            className="w-[20rem]"
          />
          <Image
            src={"/images/team/tailored-5.png"}
            width={700}
            height={530}
            alt="Rightarrow-icon"
            className="w-[20rem]"
          />
        </div>
      </div>
      {/* Team */}
      <Team />
    </section>
  );
};

export default InnovationTailored;
