"use client";

import React from "react";
import Image from "next/image";

import { Kidsproducts } from "@/utilis/MockData";
import GlobalButton from "@/globalComponents/buttons/GlobalButton";
import StarsRating from "@/globalComponents/starsRating/StarsRating";
import KidsCarousel from "@/globalComponents/carousel/KidsCarousel";
import ProductDetailCard from "@/globalComponents/cards/ProductDetailCard";
import { useParams } from "next/navigation";
import { useCart } from "@/utilis/CartContext";
import {Product} from "@/types/product";
import {useProductDetail} from "@/hooks/useProductDetail";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product: Product | undefined = Kidsproducts.find(
    (p) => p.id.toString() === id
  );

  const productDetail = useProductDetail(product);

  if (!product) {
    return <p className="p-6 text-red-500">Product not found</p>;
  }

  const { selectedColor, bigImage, handleColorChange, setBigImage } = productDetail;


  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 relative lg:px-16 md:px-6 px-4 py-10">

        <div>
        {bigImage && (
          <Image
            src={bigImage}
            alt={product.title}
            className="rounded-xl object-cover w-full mb-4"
          />
        )}
          {/* Thumbnails */}
          {selectedColor && (
          <div className="hidden md:grid grid-cols-2 gap-2">
            {selectedColor.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setBigImage(img)}
                className={`border-2 rounded-lg overflow-hidden
                   ${bigImage?.src === img.src ? "border-black" : "border-transparent"
                  }`}
                 
              >
                <Image src={img} alt={product.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          )}
        </div>
          

        <div className="md:pt-10">
          <p className="font-urbane-rounded text-2xl md:text-3xl">{product.title}</p>
          <div className="flex text-[13px] text-gray-700 items-center mt-3">
            <StarsRating /> 8 Reviews
          </div>
          <p className="text-sm text-gray-700">€{product.price}</p>

          <div className="mt-6">
            <p className="font-medium">Color</p>
            <p className="font-medium">{selectedColor?.name ?? "N/A"}</p>
            <div className="flex gap-3 mt-3 flex-wrap">
              {product.colorOptions.map((color, i) => (
                <button
                  key={i}
                  onClick={() => handleColorChange(color)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${selectedColor?.name === color.name ? "border-black" : "border-gray-300"
                    }`}
                >
                  <Image
                    src={color.images[0]}
                    alt={color.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <GlobalButton
            title="ADD TO CART"
            className="bg-[#b89778] rounded-full text-white mt-6 w-full py-3"
            font="300"
            onClick={() =>
              addToCart({
                id:product.id,
                title: product.title,
                price: product.price,
                image: bigImage!,
              })
            }
          />

          <div className="sticky top-20 md:mt-10">
            <ProductDetailCard />
          </div>
        </div>

      </div>

      <div className="md:mt-8 sm:mt-6 mt-4 ">
        <h1 className="lg:px-16 md:6 px-4 md:text-[35px]  text-[25px]  font-urbane-rounded font-bold">Related Products</h1>
        <KidsCarousel />
      </div>
    </>
  );
};

export default ProductDetail;



