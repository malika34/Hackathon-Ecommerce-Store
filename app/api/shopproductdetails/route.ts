import { NextResponse } from "next/server";

const productDetails = [
  {
    id: 1,
    name: "Mens Jacket",
    reviews: "2 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-six.png",
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
    name: "Womens Shirt",
    reviews: "10 reviews",
    price: "$11.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-seven.png",
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
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-one.png",
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
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product.png",
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
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-two.png",
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
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-three.png",
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
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-four.png",
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
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-eight.png",
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
    id: 9,
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-nine.png",
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
    id: 10,
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-ten.png",
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
    id: 11,
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-eleven.png",
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
    id: 12,
    name: "Graphic Design",
    reviews: "10 reviews",
    price: "$16.48",
    availability: "Availability :",
    inStock: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    image: "/images/productsimages/product-twelve.png",
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