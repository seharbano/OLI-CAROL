
import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import StarsRating from '../starsRating/StarsRating';

type props = {
    image: string | StaticImport;
    hoverImage: string | StaticImport;
    title: string;
    price: number;
    discount?:string;
    discountBol?:boolean;
  };
  
const HeroSliderCard = ({ image, hoverImage, title, price,discount,discountBol=false }: props) => {
  return (
    <div className="w-[280px] m-4 group flex flex-col justify-center">
      <div className="relative w-[280px] h-[280px] overflow-hidden">
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
{discountBol ? 
      <p className='absolute top-2 left-2 text-white bg-[#cf9f78] text-[12px] rounded-full p-1 px-2'>{discount}</p>
      :""
}
        <div
          className="absolute bottom-[-60px] w-[100%] left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 
          group-hover:bottom-0 group-hover:opacity-100"
        >
          <button className='bg-white/30 backdrop-blur-sm w-[100%] h-[47px] font-[600] text-[15px] rounded-0 text-black'>
          add to cart
          </button>
        </div>
      </div>   
      <p className="mt-2 text-center sm:text-[15px] text-[13px]">{title}</p>
      <div className='mx-auto flex sm:text-[15px] text-[13px]'><StarsRating/>(6)</div>
      <p className="text-center sm:text-[15px] text-[13px]">€{price}</p>
    </div>
  );
};

export default HeroSliderCard;
