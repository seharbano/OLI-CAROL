import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { ShopByAgeCardProps } from "@/types/product";

const ShopByAgeCard = ({ img, text }: ShopByAgeCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/productList?age=${encodeURIComponent(text)}`)}
      className="flex flex-col items-center text-center group cursor-pointer"
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
          className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-full scale-x-0 origin-center bg-black transition-transform duration-700 group-hover:scale-x-100"
        ></span>
      </div>
    </div>
  );
};

export default ShopByAgeCard;

