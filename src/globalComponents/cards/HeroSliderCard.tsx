// components/HeroSliderCard.jsx
import React from 'react';
import GlobalButton from '../globalButton/GlobalButton';
import Image from 'next/image';

type props = {
    image: any;
    // rating: boolean;
    hoverImage:any;
    title: string;
    price: number;
  };
  
const HeroSliderCard = ({ image, hoverImage, title, price }: props) => {
  return (
    <div className="w-[280px] m-4 group">
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

      
        <div
          className="absolute bottom-[-60px] w-[100%] left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 
          group-hover:bottom-0 group-hover:opacity-100"
        >
          <GlobalButton title="add to cart" width="100%" borderRadius="0px" />
        </div>
      </div>

      
      <p className="mt-2 text-center">{title}</p>
      <p className="text-center">€{price}</p>
    </div>
  );
};

export default HeroSliderCard;
