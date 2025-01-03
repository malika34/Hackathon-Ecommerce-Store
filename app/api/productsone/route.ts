import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-1.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-2.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-3.png",
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-4.png",
  },
  {
    id: 5,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-5.png",
  },
  {
    id: 6,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-6.png",
  },
  {
    id: 7,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-7.png",
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-8.png",
  },
];
export async function GET() {
  return NextResponse.json(products);
}
