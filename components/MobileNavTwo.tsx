"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/components/CartContext"; // Import CartContext for cart data

interface MobileNavTwoProps {
  visiblePaddingBottom?: string; // Padding for visible links
  hiddenMarginBottom?: string; // Negative margin for hidden links
}

const MobileNavTwo: React.FC<MobileNavTwoProps> = ({
  visiblePaddingBottom = "pb-0",
  hiddenMarginBottom = "mb-5",
}) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { cart } = useCart(); // Access cart from context

  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = Number(item.price); // Convert price to number
    const quantity = Number(item.quantity); // Convert quantity to number

    console.log("Item:", item);
    console.log("Price:", price, "Quantity:", quantity);

    return total + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
  }, 0);

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
                { label: "Shop", href: "/shop" },
                { label: "Product", href: "/product" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/" },
                { label: "Contact", href: "/contact" },
                { label: "Pages", href: "/" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Icons Section */}
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
          </div>
        )}

        {/* Sheet Trigger for Cart */}
        {isNavVisible && (
          <Sheet>
            <div className="flex flex-col space-y-6 items-center mt-3">
              <Image
                src="/images/icons/search-icon.png"
                alt="Search-icon"
                width={64}
                height={64}
                className="w-[1.4rem] h-[1.5rem]"
              />
              <SheetTrigger className="relative">
                <div className="flex items-center gap-x-1 text-primaryColor font-normal cursor-pointer">
                  <Image
                    src="/images/icons/cart-icon.png"
                    alt="Cart-icon"
                    width={34.69}
                    height={34.69}
                    className="w-[1.4rem] h-[1.5rem]"
                  />
                </div>
                {cart.length > 0 && (
                  <span className="absolute -top-1 left-7 text-primaryColor text-[1.375rem] font-normal flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </SheetTrigger>

              <Image
                src="/images/icons/wishlist-icon.png"
                alt="Wishlist-icon"
                width={34.69}
                height={34.69}
                className="w-[1.4rem] h-[1.5rem]"
              />
            </div>
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
                      <p className="font-bold">${item.price}</p>
                      <p className="text-sm text-gray-500">
                        Color: {item.selectedColor || "Not selected"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="font-semibold">Total: ${totalPrice.toFixed(2)}</p>
                <button className="bg-primaryColor text-white px-4 py-2 rounded">
                  Checkout
                </button>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default MobileNavTwo;
