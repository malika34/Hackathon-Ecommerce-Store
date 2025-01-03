"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartContext"; // Import CartContext
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Nav = () => {
  const { cart, isCartOpen, toggleCart } = useCart(); // Access cart from context

  const totalPrice = cart.reduce((total, item) => {
    const price = Number(item.price); // Convert price to number
    const quantity = Number(item.quantity); // Convert quantity to number

    console.log("Item:", item);
    console.log("Price:", price, "Quantity:", quantity);

    return total + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
  }, 0);
  return (
    <header className="w-full h-auto mt-4 ml-auto md:-ml-3 xl:-ml-10">
      <div className="container mx-auto hidden sm:flex justify-around items-center">
        <div className="font-bold text-[1rem] xl:text-[1.3rem] text-darkbackgroundColor">
          <Link href="/">Bandage</Link>
        </div>
        <nav>
          <ul className="flex items-center text-[0.700rem] xl:text-[0.875rem] gap-x-3 font-semibold text-secondtextColor ml-2 xl:-ml-40">
            {[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop", hasDropdown: true },
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
                }`}
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

        <div className="flex items-center text-[0.700rem] xl:text-[0.875rem] gap-x-[1.7rem] -mr-2 md:-mr-14 xl:-mr-24">
          <div className="flex items-center gap-x-1 text-primaryColor font-bold">
            <Image
              src="/images/icons/user-icon.png"
              alt="User-icon"
              width={35}
              height={35}
              className="w-3 h-3"
            />
            <p>Login / Register</p>
          </div>
          <div className="flex items-center gap-x-[1.4rem]">
            {/* 🔹 Search & Wishlist Icons */}
            <Image
              src="/images/icons/search-icon.png"
              alt="Search-icon"
              width={20}
              height={20}
              className="w-[0.8rem] h-[0.8rem]"
            />

            {/* ✅ Cart Icon (Separated) */}
            <Sheet open={isCartOpen} onOpenChange={toggleCart}>
              <SheetTrigger className="relative">
                <Image
                  src="/images/icons/cart-icon.png"
                  alt="Cart-icon"
                  width={16}
                  height={16}
                  className="w-[0.8rem] h-[0.8rem]"
                />
                {cart.length > 0 && (
                  <span className="absolute -top-[0.1rem] left-4 text-primaryColor text-[0.7rem] font-normal flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </SheetTrigger>
              <Image
                src="/images/icons/wishlist-icon.png"
                alt="Wishlist-icon"
                width={16}
                height={16}
                className="w-[0.8rem] h-[0.8rem]"
              />
              <SheetContent className="h-full overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Bandage</SheetTitle>
                  <SheetDescription>
                    You have {cart.length} item(s) in your cart.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
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
                    Total: ${totalPrice.toFixed(2)}
                  </p>
                  <button className="bg-primaryColor text-white px-4 py-2 rounded">
                    Checkout
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
