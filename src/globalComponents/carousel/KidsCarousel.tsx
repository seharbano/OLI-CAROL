"use client"
import React, { useRef, useState, useEffect } from "react";
import { Kidsproducts } from "@/utilis/MockData";
import HeroSliderCard from "../cards/HeroSliderCard";

const KidsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);


  const checkForScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkForScrollPosition();
    const ref = scrollRef.current;
    if (!ref) return;

    ref.addEventListener("scroll", checkForScrollPosition);
    window.addEventListener("resize", checkForScrollPosition);

    return () => {
      ref.removeEventListener("scroll", checkForScrollPosition);
      window.removeEventListener("resize", checkForScrollPosition);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">

      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-md shadow p-2 hover:bg-white"
        >

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="#000" fillRule="evenodd" clipRule="evenodd">
              <path d="M2.461 12a.75.75 0 0 1 .75-.75l17.79.012a.75.75 0 1 1-.002 1.5L3.21 12.75a.75.75 0 0 1-.749-.75" />
              <path d="M10.517 4.47a.75.75 0 0 1 .001 1.06L4.06 12l6.458 6.47a.75.75 0 0 1-1.061 1.06l-6.988-7a.75.75 0 0 1 0-1.06l6.988-7a.75.75 0 0 1 1.06 0" />
            </g>
          </svg>
        </button>
      )}


      <div
        ref={scrollRef}
        className="flex kids-carasoule-scroll overflow-x-auto no-scrollbar scroll-smooth gap-4 px-10"
      >
        {Kidsproducts.map((product) => (
          <HeroSliderCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            hoverImage={product.hoverImage}
            tag={product.tag}
          />
        ))}
      </div>


      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-md shadow p-2 hover:bg-white"
        >

          <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="#000" fillRule="evenodd" clipRule="evenodd">
              <path d="M2.461 12a.75.75 0 0 1 .75-.75l17.79.012a.75.75 0 1 1-.002 1.5L3.21 12.75a.75.75 0 0 1-.749-.75" />
              <path d="M10.517 4.47a.75.75 0 0 1 .001 1.06L4.06 12l6.458 6.47a.75.75 0 0 1-1.061 1.06l-6.988-7a.75.75 0 0 1 0-1.06l6.988-7a.75.75 0 0 1 1.06 0" />
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default KidsCarousel;
