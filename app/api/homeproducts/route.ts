import { NextResponse } from "next/server";

const homeProducts = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    image: "/images/productsimages/product-1.png",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$16.48",
    image: "/images/productsimages/product-2.png",
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
    department: "English Department",
    price: "$16.48",
    pricetwo: "$16.48",
    image: "/images/productsimages/product-3.png",
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
    department: "English Department",
    price: "$16.48",
    pricetwo: "$16.48",
    image: "/images/productsimages/product-4.png",
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
    department: "English Department",
    price: "$16.48",
    pricetwo: "$16.48",
    image: "/images/productsimages/product-5.png",
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
    department: "English Department",
    price: "$16.48",
    pricetwo: "$16.48",
    image: "/images/productsimages/product-6.png",
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
    department: "English Department",
    price: "$16.48",
    pricetwo: "$16.48",
    image: "/images/productsimages/product-7.png",
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
    department: "English Department",
    price: "$16.48",
    pricetwo: "$16.48",
    image: "/images/productsimages/product-8.png",
    colors: [
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  },
];

export async function GET() {
  return NextResponse.json(homeProducts);
}
