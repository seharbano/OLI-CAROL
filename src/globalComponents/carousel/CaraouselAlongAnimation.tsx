"use client";
import React, { useState, useEffect } from "react";

type Slide = {
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    title: "I WAS ONCE A TREE",
    description:
      "Made from nature, by human hands for babies’ hands. No synthetic materials.",
  },
  {
    title: "SAFE FOR BABIES",
    description:
      "Each toy is carefully crafted to be safe, durable, and eco-friendly.",
  },
  {
    title: "INSPIRED BY NATURE",
    description:
      "Our designs come from the beauty of plants, trees, and life itself.",
  },
];

const CaraouselAlongAnimation = () => {
  const [current, setCurrent] = useState(0);

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center px-6">
      {/* Title */}
     <div className=" max-w-[470px]">
      <h2 className=" font-urbane-rounded text-[35px] font-bold transition-all duration-700">
        {slides[current].title}
      </h2>

      {/* Description */}
      <p className="mt-4 h-[60px] text-lg text-gray-600 transition-all duration-700">
        {slides[current].description}
      </p>

      {/* Dots */}
      <div className="flex gap-3 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
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
