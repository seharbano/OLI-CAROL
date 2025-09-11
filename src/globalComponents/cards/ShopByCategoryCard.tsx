import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import {ShopByCategoryCardProps} from "@/types/product";

const ShopByCategoryCard = ({ img, text }: ShopByCategoryCardProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer" 
    onClick={() => router.push(`/productList?category=${encodeURIComponent(text)}`)}
    >
      <div className="overflow-hidden">
        <Image
          src={img}
          alt={text}
          className="transition-transform duration-2000 group-hover:scale-110"
        />
      </div>
      <div className="relative mt-2">
        <p className="font-medium">{text}</p>
        <span
          className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-full scale-x-0 origin-center bg-black transition-transform duration-1000 group-hover:scale-x-100"
        ></span>
      </div>
    </div>
  );
};

export default ShopByCategoryCard;
