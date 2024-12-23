"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MobileNavOneProps {
  bgColorVisible: string; // Background color when nav links are visible
  bgColorHidden: string; // Background color when nav links are hidden
  paddingBottomVisible: string; // Padding bottom when links are visible
  marginBottomHidden: string; // Negative margin bottom when links are hidden
}

const MobileNavOne: React.FC<MobileNavOneProps> = ({
  bgColorVisible,
  bgColorHidden,
  paddingBottomVisible,
  marginBottomHidden,
}) => {
  // State to toggle the visibility of the navbar
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to handle the menu toggle
  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  return (
    <header
      className={`w-full h-auto -mt-3 pt-6 sm:pb-0 ${
        isNavVisible ? bgColorVisible : bgColorHidden
      } sm:bg-white`}
      style={{
        paddingBottom: isNavVisible ? paddingBottomVisible : undefined,
        marginBottom: !isNavVisible ? marginBottomHidden : undefined,
      }}
    >
      <div className="container mx-auto sm:hidden justify-around items-center">
        <div className="flex items-center space-x-44 justify-center">
          {/* Logo */}
          <div className="font-bold text-[1rem] xl:text-[1.5rem]">
            <Link href="/">Bandage</Link>
          </div>
          {/* Image */}
          <div className="flex space-x-5 items-center">
            <Image
              src={"/images/icons/mob-search-icon.png"}
              alt="Mobile-icon"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <Image
              src={"/images/icons/mob-cart-icon.png"}
              alt="Cart-icon"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            {/* Menu toggle button */}
            <div
              className="cursor-pointer"
              onClick={toggleNav} // Toggle navbar visibility
            >
              {isNavVisible ? (
                <span className="text-[1.5rem]">X</span> // Show "X" when menu is open
              ) : (
                <Image
                  src={"/images/icons/menu-icon.png"}
                  alt="Menu-icon"
                  width={22.86}
                  height={13.71}
                  className="w-[1.4rem] h-[0.875rem]"
                />
              )}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        {isNavVisible && (
          <nav>
            <ul className="flex items-center flex-col text-[1.400rem] mt-14 gap-y-5 font-medium text-secondtextColor pb-0">
              {[
                { label: "Home", href: "/" },
                { label: "Product", href: "/product", hasDropdown: false },
                { label: "Pricing", href: "/pricing" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((item, index) => (
                <li
                  key={index}
                  className={
                    item.hasDropdown
                      ? "flex gap-x-1 items-center text-textColor font-medium"
                      : item.label === "Home"
                      ? "text-secondtextColor"
                      : ""
                  }
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MobileNavOne;
