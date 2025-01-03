"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartContext"; // Import your CartContext hook
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => setIsNavVisible((prevState) => !prevState);
  const { cart } = useCart(); // Access cart from context

  const totalPrice = cart.reduce((total, item) => {
    const price = Number(item.price); // Convert price to number
    const quantity = Number(item.quantity); // Convert quantity to number

    console.log("Item:", item);
    console.log("Price:", price, "Quantity:", quantity);

    return total + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
  }, 0);

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

          {/* Icons */}
          <div className="flex space-x-5 items-center">
            {/* Search Icon */}
            <Image
              src="/images/icons/mob-search-icon.png"
              alt="Mobile-icon"
              width={20}
              height={20}
              className="h-5 w-5"
            />

            {/* Cart Icon with Sheet */}
            <Sheet>
              <SheetTrigger className="relative">
                <Image
                  src="/images/icons/mob-cart-icon.png"
                  alt="Cart-icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-dangerColor text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </SheetTrigger>
              <SheetContent className="h-full overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Bandage</SheetTitle>
                  <SheetDescription>
                    You have {cart.length} item(s) in your cart.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-20 h-30"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                        <p className="font-bold">{item.price}</p>
                        <p className="text-sm text-gray-500">
                          Color: {item.selectedColor || "Not selected"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="font-semibold">
                    Total: {totalPrice.toFixed(2)}
                  </p>
                  <button className="bg-primaryColor text-white px-4 py-2 rounded">
                    Checkout
                  </button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Menu toggle button */}
            <div
              className="cursor-pointer"
              onClick={toggleNav} // Toggle navbar visibility
            >
              {isNavVisible ? (
                <span className="text-[1.5rem]">X</span> // Show "X" when menu is open
              ) : (
                <Image
                  src="/images/icons/menu-icon.png"
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
                { label: "Shop", href: "shop" },
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
