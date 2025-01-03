import { NextResponse } from "next/server";

const productDetails = [
  {
    id: 1,
    name: "Ladies Shirts",
    reviews: "4 reviews",
    price: "$10.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-1.png",
    image1: "/images/productsimages/single-product-3.jpg",
    image2: "/images/productsimages/single-product-2.jpg",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
  {
    id: 2,
    name: "Mens Fashion",
    reviews: "4 reviews",
    price: "$11.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-2.png",
    image1: "/images/productsimages/single-product-3.jpg",
    image2: "/images/productsimages/single-product-2.jpg",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
  {
    id: 3,
    name: "Ladies Shirts",
    reviews: "4 reviews",
    price: "$25.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-3.png",
    image1: "/images/productsimages/single-product-3.jpg",
    image2: "/images/productsimages/single-product-2.jpg",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
  {
    id: 4,
    name: "Ladies Jacket",
    reviews: "4 reviews",
    price: "$36.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-4.png",
    image1: "/images/productsimages/single-product-3.jpg",
    image2: "/images/productsimages/single-product-2.jpg",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
  {
    id: 5,
    name: "Sports Wear",
    reviews: "4 reviews",
    price: "$46.18",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-5.png",
    image1: "/images/productsimages/single-product-3.jpg",
    image2: "/images/productsimages/single-product-2.jpg",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
  {
    id: 6,
    name: "Ladies Fashion",
    reviews: "4 reviews",
    price: "$15.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-6.png",
    image1: "/images/productsimages/single-product-3.jpg",
    image2: "/images/productsimages/single-product-2.jpg",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
  {
    id: 7,
    name: "Track Suits",
    reviews: "4 reviews",
    price: "$26.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-7.png",
    image1: "/images/productsimages/single-product-3.jpg",
    image2: "/images/productsimages/single-product-2.jpg",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
  {
    id: 8,
    name: "Mens Shirts",
    reviews: "4 reviews",
    price: "$6.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-8.png",
    image1: "/images/productsimages/single-product-3.jpg",
    image2: "/images/productsimages/single-product-2.jpg",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
];

export async function GET() {
  return NextResponse.json(productDetails);
}
