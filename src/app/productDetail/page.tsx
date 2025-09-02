"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import { ProductDetailColorOptions } from "@/utilis/MockData";
import GlobalButton from "@/globalComponents/buttons/GlobalButton";
import StarsRating from "@/globalComponents/starsRating/StarsRating";
import KidsCarousel from "@/globalComponents/carousel/KidsCarousel";
import ProductDetailCard from "@/globalComponents/cards/ProductDetailCard";

export type ProductDetailColor = {
  name: string;
  images: StaticImageData[];
};


const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(ProductDetailColorOptions[0]);
  const [bigImage, setBigImage] = useState(ProductDetailColorOptions[0].images[0]);

  const handleColorChange = (color: ProductDetailColor) => {
    setSelectedColor(color);
    setBigImage(color.images[0]);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 relative lg:px-16 md:px-6 px-4 py-10">

        <div>
          <Image
            src={bigImage}
            alt="detail"
            className="rounded-xl object-cover w-full mb-4"
          />
          <div className="flex gap-3 w-full overflow-x-auto kids-carasoule-scroll md:hidden pb-2">
            {selectedColor.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setBigImage(img)}
                className={`flex-shrink-0 w-16 h-16 border-2 rounded-lg overflow-hidden ${bigImage.src === img.src ? "border-black" : "border-transparent"
                  }`}
              >
                <Image
                  src={img}
                  alt={`${selectedColor.name}-${i}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="hidden md:grid min-[900px]:grid-cols-2 gap-2">
            {selectedColor.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setBigImage(img)}
                className={`border-2 rounded-lg overflow-hidden ${bigImage.src === img.src ? "border-black" : "border-transparent"
                  }`}
              >
                <Image
                  src={img}
                  alt={`${selectedColor.name}-${i}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="md:pt-10">
          <p className="font-urbane-rounded text-2xl md:text-3xl">
            {selectedColor.name} Baby Car Toy
          </p>
          <div className="flex text-[13px] text-gray-700 items-center mt-3">
            <StarsRating />
            8 Reviews
          </div>
          <p className="text-sm text-gray-700">€24,90</p>
          <div className="mt-6">
            <p className="font-medium">🏁 KIT INCLUDES</p>
            <ul className="text-sm list-disc ml-5 mt-2 space-y-1">
              <li>{selectedColor.name} Baby Car x 1</li>
              <li>Garage x 1</li>
              <li>Racing ramp x 1</li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-600">Color</p>
              <p className="font-medium">{selectedColor.name}</p>
              <div className="flex gap-3 mt-3 flex-wrap">
                {ProductDetailColorOptions.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => handleColorChange(color)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition ${selectedColor.name === color.name
                      ? "border-black"
                      : "border-gray-300"
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
            />
          </div>

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
