"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MobileNavTwoProps {
  visiblePaddingBottom?: string; // Padding for visible links
  hiddenMarginBottom?: string; // Negative margin for hidden links
}

const MobileNavTwo: React.FC<MobileNavTwoProps> = ({
  visiblePaddingBottom = "pb-0",
  hiddenMarginBottom = "mb-5",
}) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to handle the menu toggle
  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  return (
    <header
      className={`w-full h-auto mt-6 ml-auto md:-ml-3 xl:-ml-10 ${
        isNavVisible ? visiblePaddingBottom : hiddenMarginBottom
      }`}
    >
      <div className="container mx-auto flex sm:hidden justify-around items-center flex-col">
        <div className="flex items-center justify-between w-full px-5">
          {/* Logo */}
          <div className="font-bold text-[1rem] xl:text-[1.5rem]">
            <Link href="/">Bandage</Link>
          </div>
          {/* Menu toggle button */}
          <div onClick={toggleNav} className="cursor-pointer">
            {isNavVisible ? (
              <span className="text-[1.5rem]">X</span> // Close icon
            ) : (
              <Image
                src={"/images/icons/menu-icon.png"}
                alt="Menu-icon"
                width={20}
                height={20}
              />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        {isNavVisible && (
          <nav>
            <ul className="flex items-center flex-col text-[1.300rem] mt-10 gap-y-3 font-medium text-secondtextColor">
              {[
                { label: "Home", href: "/" },
                { label: "Shop", href: "/shop", hasDropdown: false },
                { label: "Product", href: "/product" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/" },
                { label: "Contact", href: "/contact" },
                { label: "Pages", href: "/" },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`${
                    item.hasDropdown
                      ? "flex gap-x-1 items-center text-textColor font-medium"
                      : ""
                  } ${item.label === "Home" ? "text-textColor" : ""}`}
                >
                  <Link href={item.href}>{item.label}</Link>
                  {item.hasDropdown && (
                    <Image
                      src="/images/icons/dropdown-icon.png"
                      alt="Dropdown-icon"
                      width={16}
                      height={16}
                      className="w-2 h-2"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Icons and Login/Register */}
        {isNavVisible && (
          <div className="flex flex-col items-center text-[1.300rem] gap-x-[0.3rem] mt-5">
            <div className="flex items-center gap-x-1 text-primaryColor font-normal">
              <Image
                src="/images/icons/user-icon.png"
                alt="User-icon"
                width={50}
                height={50}
                className="w-6 h-6"
              />
              <p>Login / Register</p>
            </div>
            <div className="flex flex-col -space-y-6">
              {[
                { src: "/images/icons/search-icon.png", alt: "Search-icon" },
                { src: "/images/icons/cart-icon.png", alt: "Cart-icon" },
                {
                  src: "/images/icons/wishlist-icon.png",
                  alt: "Wishlist-icon",
                },
              ].map((icon, index) => (
                <Image
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  width={50}
                  height={50}
                  className="w-20 h-20"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MobileNavTwo;
