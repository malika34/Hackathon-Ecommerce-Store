"use client";
import Image from "next/image";
import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

interface Product {
  id: number;
  image: string;
  name: string;
  department: string;
  price: string;
  colors: { name: string; colorClass: string }[];
}

const Products = () => {
  const { addToCart, toggleCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/shopproducts");
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
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      colors: product.colors,
      color: selectedColor, // Include the selected color
      selectedColor: selectedColor,
    });
  };

  return (
    <section className="w-full h-auto mt-8">
      <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center space-y-4 relative group"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                width={240}
                height={300}
                alt={product.name}
                className="w-80"
              />
              <div className="absolute top-40 sm:top-52 md:top-36 lg:top-14 xl:top-24 2xl:top-36 flex space-x-3 items-center justify-center">
                {/* Add to Cart Button */}
                <div
                  className="border border-textColor rounded-full py-4 px-4 hidden group-hover:block cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  <Image
                    src={"/images/icons/cart-two-icon.png"}
                    width={20}
                    height={20}
                    alt="cart-icon"
                    className="w-[1.5rem] sm:w-[1rem]"
                  />
                </div>
                {/* Watchlist Button */}
                <Link href={`/shopproducts/${product.id}`}>
                  <div className="border border-textColor rounded-full py-4 px-4 hidden group-hover:block cursor-pointer">
                    <Image
                      src={"/images/icons/watch-icon.png"}
                      width={20}
                      height={20}
                      alt="watch-icon"
                      className="w-[1.5rem] sm:w-[1rem]"
                    />
                  </div>
                </Link>
              </div>
              {/* Product Info */}
              <p className="text-[1rem] font-semibold text-textColor">
                {product.name}
              </p>
              <p className="text-secondtextColor font-semibold text-[0.875rem]">
                {product.department}
              </p>
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
        <Pagination />
      </div>
    </section>
  );
};

export default Products;
