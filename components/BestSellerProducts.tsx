"use client";
import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";
import React, { useEffect, useState } from "react";
interface Product {
  id: number;
  image: string;
  name: string;
  department: string;
  price: string;
  pricetwo: string;
}

const BestSellerProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="w-full bg-textgrayOne h-auto mt-8">
      <div className="container mx-auto px-4 w-full md:px-[5rem] lg:px-[10rem]">
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-start space-y-6 pb-7 space-x-4 bg-white"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                width={239}
                height={280}
                alt={product.name}
                className="w-80"
              />
              {/* Product Info */}
              <p className="text-[1rem] font-semibold text-textColor">
                {product.name}
              </p>
              <p className="text-secondtextColor font-semibold text-[0.875rem]">
                {product.department}
              </p>
              <div className="font-semibold text-[1rem] space-x-3">
                <span className="text-muttedColor">{product.price}</span>
                <span className="text-secondColorOne">{product.pricetwo}</span>
              </div>
            </div>
          ))}
        </div>
        <BrandLogo />
      </div>
    </section>
  );
};

export default BestSellerProducts;
