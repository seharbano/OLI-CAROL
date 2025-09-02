"use client";
import React, { useState } from "react";

import Link from "next/link";

import { Plus, Minus } from "lucide-react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-6 max-[750px]:mb-2">
      <div className="border-y border-white min-[750px]:hidden">
        <button
          className="w-full flex items-center justify-between p-3 text-[16px] max-[400px]:text-[13px] font-[700] transition cursor-pointer"
          onClick={() => toggleAccordion(1)}
        >
          <span>OLI&CAROL</span>
          {openIndex === 1 ? <Minus size={18} /> : <Plus size={18} />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? "px-3 pb-3" : "max-h-0"}`}>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">About us</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">We Are Green</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px] !leading-4 block">Become a Brand <br />Ambassador</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Wholesale</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Invite a friend & get 10% OFF</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b border-white min-[750px]:hidden">
        <button
          className="w-full flex items-center justify-between p-3 text-[16px] max-[400px]:text-[13px] font-[700] transition"
          onClick={() => toggleAccordion(2)}
        >
          <span>SUPPORT</span>
          {openIndex === 2 ? <Minus size={18} /> : <Plus size={18} />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${openIndex === 2 ? "px-3 pb-3" : "max-h-0"}`}>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-black hover:text-gray-500 text-[16px] md:text-[13px] sm:text-[12px]">Terms & Condition</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-gray-500 text-[16px] md:text-[13px] sm:text-[12px]">Shipment & Returns</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-gray-500 text-[16px] md:text-[13px] sm:text-[12px]">Washing & Care</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-gray-500 text-[16px] md:text-[13px] sm:text-[12px]">FAQs</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-gray-500 text-[16px] md:text-[13px] sm:text-[12px]">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b border-white min-[750px]:hidden">
        <button
          className="w-full flex items-center justify-between p-3 text-[16px] max-[400px]:text-[13px] font-[700] transition"
          onClick={() => toggleAccordion(3)}
        >
          <span>FIND MORE BABY GIFTS & TOYS IDEAS</span>
          {openIndex === 3 ? <Minus size={18} /> : <Plus size={18} />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${openIndex === 3 ? "px-3 pb-3" : "max-h-0"}`}>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Teething Babies</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Baby Christening Gifts</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Baby Shower Gifts</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Fruits & Veggies</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Baby Teethers</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Rattle Toys</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Sensory Balls</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Pacifier Cases</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;