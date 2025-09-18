
import React, { useState } from 'react';
import Image from 'next/image';
import StarsRating from '../starsRating/StarsRating';
import { useCart } from "@/utilis/CartContext";
import Link from 'next/link';
import { HeroSliderCardProps } from "@/types/product";
import { useAddToCart } from '@/hooks/useAddCartButton';

const HeroSliderCard = ({ image, hoverImage, title, price, tag, id, className }: HeroSliderCardProps) => {

  const { loading, handleAddToCart } = useAddToCart();
  return (
    <div className={`w-[280px] ${className} m-4 group flex flex-col justify-center`}>
      <div className={`relative  ${className}  w-[280px] h-[280px] overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:opacity-0"
        />

        <Image
          src={hoverImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
        />

        {tag &&
          <p className='absolute top-2 left-2 text-white bg-[#cf9f78] text-[12px] rounded-full p-1 px-2'>{tag}</p>
        }

        <div
          className="absolute bottom-[-60px] w-[100%] left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 
          group-hover:bottom-0 group-hover:opacity-100"
        >
          <button
            onClick={() => handleAddToCart({ id, title, price, image })}
            disabled={loading}
            className="bg-white/30 backdrop-blur-sm w-[100%] h-[47px] font-[600] text-[15px] rounded-0 text-black flex items-center justify-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                  <path fill="none" stroke="#000000" strokeLinecap="round" strokeWidth="1.5" d="M12 6.99998C9.1747 6.99987 6.99997 9.24998 7 12C7.00003 14.55 9.02119 17 12 17C14.7712 17 17 14.75 17 12">
                    <animateTransform attributeName="transform" attributeType="XML" dur="560ms" from="0,12,12" repeatCount="indefinite" to="360,12,12" type="rotate" />
                  </path>
                </svg>
              </span>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
      <Link href={`/product/${id}`}>
        <p className="mt-2 text-center sm:text-[15px] text-[13px] truncate">{title}</p>
      </Link>
      <div className='mx-auto flex sm:text-[15px] text-[13px]'><StarsRating />(6)</div>
      <p className="text-center sm:text-[15px] text-[13px]">€{price}</p>
    </div>
  );
};

export default HeroSliderCard;
