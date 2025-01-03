"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext"; // Import the useCart hook

interface Product {
  id: number;
  image: string;
  name: string;
  department: string;
  price: string;
  colors: { name: string; colorClass: string }[];
}

const FeaturedProducts = () => {
  const { addToCart, toggleCart } = useCart(); // Destructure addToCart function from the context
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/homeproducts");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  const handleColorSelect = (productId: number, colorName: string) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorName,
    }));
  };

  const handleAddToCart = (product: Product) => {
    const selectedColor =
      selectedColors[product.id] || product.colors[0]?.name || "Default Color";
    // When the user clicks the "Add to Cart" button, call the addToCart function
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // Default quantity is 1
      image: product.image, // Include the image property
      colors: product.colors,
      color: selectedColor, // Include the selected color
      selectedColor: selectedColor,
    });
  };

  return (
    <section className="w-full h-auto">
      {/* Main container for the component */}
      <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
        {/* Header section */}
        <div className="flex flex-col items-center justify-center space-y-[0.3rem] mb-8 mx-20 text-center">
          <p className="text-secondtextColor font-normal text-[0.950rem]">
            Featured Products
          </p>
          <h2 className="font-bold text-textColor text-[1.1rem]">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-secondtextColor text-[0.950rem] font-normal">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {products.map((product) => (
            // Each product card
            <div
              key={product.id}
              className="flex flex-col items-center space-y-4 relative before:hidden after:hidden group"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                width={239}
                height={437}
                alt={product.name}
                className="w-80 cursor-pointer"
              />
              <div className="absolute top-60 sm:top-52 lg:top-28 xl:top-40 2xl:top-52 flex space-x-3 items-center justify-center">
                {/* Add to cart button */}
                <div
                  className="border border-textColor rounded-full py-4 px-4 hidden group-hover:block cursor-pointer"
                  onClick={() => handleAddToCart(product)} // Add product to cart when clicked
                >
                  <Image
                    src={"/images/icons/cart-two-icon.png"}
                    width={20}
                    height={20}
                    alt="cart-two-icon"
                    className="w-[1.5rem] sm:w-[1rem] hidden group-hover:block"
                  />
                </div>
                {/* Watchlist button */}
                <Link href={`/homeproducts/${product.id}`}>
                  <div className="border border-textColor rounded-full py-4 px-4 hidden group-hover:block cursor-pointer hover">
                    <Image
                      src={"/images/icons/watch-icon.png"}
                      width={20}
                      height={20}
                      alt="Watch-icon"
                      className="w-[1.5rem] sm:w-[1rem] hidden group-hover:block"
                    />
                  </div>
                </Link>
              </div>

              {/* Product Name */}
              <p className="text-[1rem] font-semibold text-textColor">
                {product.name}
              </p>
              {/* Department Name */}
              <p className="text-secondtextColor font-semibold text-[0.875rem]">
                {product.department}
              </p>
              {/* Pricing Section */}
              <div className="font-semibold text-[1rem] space-x-3">
                <span className="text-muttedColor">{product.price}</span>
                <span className="text-secondColorOne">{product.price}</span>
              </div>
              {/* Product Colors */}
              <div className="flex space-x-3 mt-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    title={color.name}
                    className={`${
                      color.colorClass
                    } w-5 h-5 rounded-full cursor-pointer border-2 ${
                      selectedColors[product.id] === color.name
                        ? "border-gray-400"
                        : "border-transparent"
                    } hover:border-gray-400 transition`}
                    onClick={() => handleColorSelect(product.id, color.name)}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
