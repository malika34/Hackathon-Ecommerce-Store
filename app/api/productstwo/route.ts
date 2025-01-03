import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-six.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-seven.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-one.png",
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product.png",
  },
  {
    id: 5,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-two.png",
  },
  {
    id: 6,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-three.png",
  },
  {
    id: 7,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-four.png",
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-eight.png",
  },
  {
    id: 9,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-nine.png",
  },
  {
    id: 10,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-ten.png",
  },
  {
    id: 11,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-eleven.png",
  },
  {
    id: 12,
    name: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    pricetwo: "$6.48",
    image: "/images/productsimages/product-twelve.png",
  },
];
export async function GET() {
  return NextResponse.json(products);
}
