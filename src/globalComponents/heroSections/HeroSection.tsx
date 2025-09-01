import React from 'react';
import heroimg from '@/assets/pngs/hero-img.webp'
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div>
      <div className="relative">
        <Image src={heroimg} alt="" className=' md:h-[86vh] sm:h-[60vh] h-[350px]' />
        <div className="flex flex-col absolute top-0 items-center w-full justify-center md:h-[100vh] sm:h-[60vh] h-[350px] text-white">
          <h1 className="md:text-[35px] sm:text-[30px] text-[25px] font-bold text-black font-urbane-rounded">THE TABLE IS SET</h1>
          <p className="text-black md:text-[17px]  text-[15px] flex gap-2 items-center group cursor-pointer">
            Pre Access Now
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;