"use client"
import React, { useState } from 'react';

import { ChevronDown, Funnel, X } from "lucide-react";
import { fruitsCard } from "@/utilis/MockData";
import GlobalButton from '@/globalComponents/buttons/GlobalButton';
import HeroSliderCard from '@/globalComponents/cards/HeroSliderCard';
import FilterSidebar from '@/globalComponents/sidebar/FilterSidebar';

const ProductList = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("SORT BY");

  const options = ["Featured", "Best selling", "Alphabetically, A-Z", "Alphabetically, A-Z", "Price, low to high", "Price, high to low", "Date, old to new", "Date, new to old"];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className='py-4 max-[500px]:py-2'>
      <div className='flex flex-col items-center gap-2 px-16 max-[1024px]:px-10 max-[768px]:px-5'>
        <h2 className='text-[40px] max-[420px]:text-[30px] font-[600] font-urbane-rounded'>ALL PRODUCTS</h2>
        <p className='text-[20px] max-[850px]:text-[16px] font-[600] max-[420px]:font-[500] w-[90%] max-[800px]:w-full text-center'>The greenest baby teethers, baby bath toys, mini teethers, rattle toys, mini doudou-teethers, car toys, stackable toys & pretend play toys</p>
      </div>
      <div className='px-16 max-[1024px]:px-10 max-[768px]:px-5 grid grid-cols-3 max-[750px]:grid-cols-none gap-9 max-[1000px]:gap-3 my-10 max-[750px]:my-5 max-[750px]:overflow-x-auto max-[750px]:flex scrollbar-custom'>
        <GlobalButton title='BABY TEETHERS' borderColor='black' borderWidth='1px' font='500' className='rounded-full max-[900px]:text-[13px] max-[750px]:px-12 max-[750px]:flex-shrink-0' />
        <GlobalButton title='RATTLE TOYS' borderColor='black' borderWidth='1px' font='500' className='rounded-full max-[900px]:text-[13px] max-[750px]:px-12 max-[750px]:flex-shrink-0' />
        <GlobalButton title='BABY GIFT SETS' borderColor='black' borderWidth='1px' font='500' className='rounded-full max-[900px]:text-[13px] max-[750px]:px-12 max-[750px]:flex-shrink-0' />
        <GlobalButton title='PACIFIER HOLDERS' borderColor='black' borderWidth='1px' font='500' className='rounded-full max-[900px]:text-[13px] max-[750px]:px-12 max-[750px]:flex-shrink-0' />
        <GlobalButton title='SENSORY BALLS' borderColor='black' borderWidth='1px' font='500' className='rounded-full max-[900px]:text-[13px] max-[750px]:px-12 max-[750px]:flex-shrink-0' />
        <GlobalButton title='MINI TEETHERS FOR NEWBORNS' borderColor='black' borderWidth='1px' font='500' className='rounded-full max-[900px]:text-[13px] max-[750px]:px-12 max-[750px]:flex-shrink-0' />
        <GlobalButton title='BABY BATH TOYS' borderColor='black' borderWidth='1px' font='500' className='rounded-full max-[900px]:text-[13px] max-[750px]:px-12 max-[750px]:flex-shrink-0' />
        <GlobalButton title='MINI DOUDOU-TEETHERS' borderColor='black' borderWidth='1px' font='500' className='rounded-full max-[900px]:text-[13px] max-[750px]:px-12 max-[750px]:flex-shrink-0' />
        <GlobalButton title='BABY CARS TOYS' borderColor='black' borderWidth='1px' font='500' className='rounded-full max-[900px]:text-[13px] max-[750px]:px-12 max-[750px]:flex-shrink-0' />
      </div>
      {/* Sidebar & Dropdown */}
      <div className='sticky top-[75px] z-100 bg-white flex justify-between items-center border-y-[1px] border-[#d1cdc4]'>
        <div
          onClick={() => setOpen(true)}
          className='flex items-center gap-1 py-7 px-16 border-r-[1px] border-[#d1cdc4] cursor-pointer'>
          <Funnel className='h-[17px] w-[17px]' />
          <p className='text-[14px]'>FILTERS</p>
        </div>
        <FilterSidebar open={open} onClose={() => setOpen(false)} />

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center cursor-pointer py-7 px-16 border-l-[1px] border-[#d1cdc4]"
          >
            <span className="text-[14px]">{selected}</span>
            <ChevronDown
              className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
              size={18}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute left-0 right-0 top-20 bg-white shadow-lg z-10 py-2">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-[2px] cursor-pointer hover:bg-[gray]/20 text-[15px] font-[500]"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-4 px-16 max-[1024px]:px-10 max-[768px]:px-5">
          {fruitsCard.map((card) => (
            <HeroSliderCard
              key={card.id}
              tag={card.tag}
              title={card.title}
              price={card.price}
              image={card.image}
              hoverImage={card.hoverImage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList;