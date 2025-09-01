import React from 'react';
import heroimg from '@/assets/pngs/hero-img.webp'
import Image from 'next/image';
import GlobalButton from '../globalButton/GlobalButton';
const HeroSection = () => {
  return (
    <div>
    <div className="relative">
        <Image src={heroimg} alt="" className=' h-[86vh]'/>
      {/* content inside hero */}
      <div className="flex absolute top-0 items-center w-full justify-center h-[100vh] text-white">
        <h1 className="text-4xl font-bold">Welcome to OLI & CAROL</h1>
      </div>
    </div>
  </div>
  )
}

export default HeroSection;