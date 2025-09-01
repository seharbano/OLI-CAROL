"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`
        fixed right-6 sm:right-12 z-[1000] h-10 w-10 flex items-center justify-center 
        rounded-[5px] bg-black hover:bg-black/80 text-white cursor-pointer
        transition-all duration-400 ease-in-out
        ${isVisible ? "bottom-12 opacity-100" : "-bottom-10 opacity-0"}
      `}
    >
      <ArrowUp />
    </div>
  );
};

export default GoTopButton;