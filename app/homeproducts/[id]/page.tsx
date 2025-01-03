"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/button";
import TopHeader from "@/components/TopHeader";
import Nav from "@/components/Nav";
import MobileNavTwo from "@/components/MobileNavTwo";
import ProductDescription from "@/components/ProductDescription";
import { useCart } from "@/components/CartContext";
import Footer from "@/components/Footer";
interface Product {
  id: number;
  name: string;
  reviews: string;
  price: string;
  availability: string;
  inStock: string;
  pricetwo: number;
  description: string;
  department: string;
  image: any;
  image1: any;
  image2: any;
  colors: { name: string; colorClass: string }[];
}
const ProductDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [paramId, setParamId] = useState<string | null>(null);
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart, toggleCart } = useCart();
  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: string;
  }>({});
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
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/productsone");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    params.then((resolvedParams) => {
      setParamId(resolvedParams.id);
    });
  }, [params]);

  useEffect(() => {
    if (paramId) {
      // Fetch the specific product using the dynamic ID
      fetch(`/api/homeproductdetails`)
        .then((res) => res.json())
        .then((data) => {
          const foundProduct = data.find(
            (p: any) => p.id === parseInt(paramId)
          );
          if (!foundProduct) {
            router.push("/"); // Redirect if product not found
          }
          setProduct(foundProduct);
        })
        .catch((error) =>
          console.error("Error fetching product details:", error)
        );
    }
  }, [paramId, router]);

  if (!product) {
    return (
      <p className="flex justify-center items-center mt-96 sm:mt-64 text-textColor font-bold">
        Loading product details...
      </p>
    );
  }
  const colors = {
    colors: [
      // Array of color options with a name and CSS class
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  };

  return (
    <section>
      <TopHeader bgClass="bg-secondColorOne" />
      <Nav />
      <MobileNavTwo />
      {/* <Productcard /> */}
      <div className="w-full bg-textgrayOne mt-3 h-[62rem] sm:h-[45rem] md:h-[36rem]">
        {/* Breadcrumb navigation for user orientation */}
        <div className="container mx-auto">
          <div className="flex justify-center sm:justify-normal items-center font-semibold text-sm space-x-3 ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] mb-2 pt-7 pb-6">
            <span className="text-darkbackgroundColor">Home</span>
            <span>
              <Image
                src={"/images/icons/shoprightarrow-icon.png"}
                width={8.62}
                height={16}
                alt="Rightarrow-icon"
              />
            </span>
            <span className="text-muttedColor">Shop</span>
          </div>
        </div>

        {/* Main product content */}
        <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-normal">
          {/* Product image section with navigation arrows */}
          <div className="ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] relative">
            <Image
              src={product.image}
              width={506}
              height={450}
              alt="Product-one"
              className="w-[14rem] sm:w-[23rem] md:w-[13rem] lg:w-[13rem]"
            />
            {/* Left navigation arrow */}
            <Image
              src={"/images/icons/left-card-arrow.png"}
              width={24}
              height={42.47}
              alt="Product-one"
              className="absolute top-40 sm:top-48 w-[1.3rem] sm:w-[1.5rem] md:w-[1rem] left-[1.5rem] sm:left-[1.5rem] md:left-[1.2rem]"
            />
            {/* Right navigation arrow */}
            <Image
              src={"/images/icons/right-card-arrow.png"}
              width={24}
              height={42.47}
              alt="Product-one"
              className="absolute top-40 sm:top-48 left-[11.5rem] sm:left-[14.5rem] md:left-[10.5rem] w-[1.3rem] sm:w-[1.5rem] md:w-[1rem]"
            />
            {/* Thumbnail image options */}
            <div className="flex items-center gap-x-3 mt-5">
              <Image
                src={product.image1}
                width={100}
                height={75}
                alt="Watch-icon"
              />
              <Image
                src={product.image2}
                width={100}
                height={75}
                alt="Watch-icon"
              />
            </div>
          </div>

          {/* Product details section */}
          <div className="space-y-2 ml-[4rem] sm:ml-[2rem] md:ml-[2rem] lg:ml-[2.9rem] xl:ml-[2rem] 2xl:ml-[2.9rem] flex flex-col sm:flex-col items-start sm:items-start justify-center mx-[0rem] sm:mx-auto mt-8 sm:mt-2">
            {/* Product title */}
            <h3 className="text-[1.2rem] text-textColor">{product.name}</h3>

            {/* Product ratings */}
            <div className="flex gap-x-2">
              <Image
                src={"/images/icons/star-1.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <Image
                src={"/images/icons/star-1.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <Image
                src={"/images/icons/star-1.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <Image
                src={"/images/icons/star-1.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <Image
                src={"/images/icons/star-2.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <p className="text-secondtextColor text-[0.800rem] font-semibold">
                {product.reviews}
              </p>
            </div>

            {/* Product price and availability */}
            <div className="space-x-1">
              <h2 className="font-semibold text-[1.2rem]">{product.price}</h2>
              <span className="text-secondtextColor text-[0.800rem] font-semibold">
                {product.availability}
              </span>
              <span className="text-primaryColor text-[0.800rem] font-semibold">
                {product.inStock}
              </span>
            </div>

            {/* Product description */}
            <div className="space-y-5">
              <p className="text-thirdtextColor text-[0.800rem] max-w-[27rem] pt-2">
                {product.description}
              </p>
              <hr />
              {/* Product color options */}
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

              {/* Product action buttons */}
              <div className="flex items-center">
                <div className="flex items-center mt-7 space-x-[0.1rem] sm:space-x-2">
                  <Button
                    text="Select Options"
                    paddingY="10px"
                    paddingL="20px"
                    paddingR="20px"
                    rounded="rounded-sm"
                  />
                  {/* Wishlist button */}
                  <div className="border border-borderColor rounded-full py-2 px-2 w-[2rem]">
                    <Image
                      src={"/images/icons/wish-icon.png"}
                      width={20}
                      height={20}
                      alt="Wish-icon"
                      className="w-[1.3rem]"
                    />
                  </div>
                  {/* Add to cart button */}
                  <div onClick={() => handleAddToCart(product)}>
                    <div className="border border-borderColor rounded-full py-2 px-2 w-[2rem] cursor-pointer">
                      <Image
                        src={"/images/icons/cart-two-icon.png"}
                        width={20}
                        height={20}
                        alt="cart-two-icon"
                        className="w-[1.3rem]"
                      />
                    </div>
                  </div>

                  {/* Watchlist button */}
                  <div className="border border-borderColor rounded-full py-2 px-2 w-[2rem]">
                    <Image
                      src={"/images/icons/watch-icon.png"}
                      width={20}
                      height={20}
                      alt="Watch-icon"
                      className="w-[1.3rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDescription />
      {/* BestSellerProducts*/}
      <section className="w-full bg-textgrayOne h-auto mt-8">
        <div className="container mx-auto px-4 w-full md:px-[5rem] lg:px-[10rem] flex flex-col justify-center items-center sm:flex-row">
          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-start space-y-6 pb-7 space-x-4 bg-white"
              >
                {/* Product Image */}
                <Link href={`/homeproducts/${product.id}`}>
                  <Image
                    src={product.image}
                    width={239}
                    height={280}
                    alt={product.name}
                    className="w-80"
                  />
                </Link>
                {/* Product Info */}
                <p className="text-[1rem] font-semibold text-textColor">
                  {product.name}
                </p>
                <p className="text-secondtextColor font-semibold text-[0.875rem]">
                  {product.department}
                </p>
                <div className="font-semibold text-[1rem] space-x-3">
                  <span className="text-muttedColor">{product.price}</span>
                  <span className="text-secondColorOne">
                    {product.pricetwo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer topBgColor="bg-white" bottomBgColor="bg-textgrayOne" />
    </section>
  );
};

export default ProductDetails;
