"use client";
import React, { useState, useEffect } from "react";
import {slides} from "@/utilis/MockData";

const CaraouselAlongAnimation = () => {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center px-6">
    
     <div className=" max-w-[470px]">
      <h2  key={current} className=" font-urbane-rounded md:text-[35px] text-[25px] font-bold transition-all duration-700">
        {slides[current].title}
      </h2>

 
      <p className="mt-4 h-[60px]  md:text-[17px]  text-[15px] text-gray-600 transition-all duration-700">
        {slides[current].description}
      </p>

      <div className="flex gap-3 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-[8px] h-[8px] rounded-full transition-all duration-500 ${
              index === current ? "bg-black " : "bg-transparent border border-black"
            }`}
          ></button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CaraouselAlongAnimation;
