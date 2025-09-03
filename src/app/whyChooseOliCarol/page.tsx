import Image from 'next/image'
import React from 'react'
import chooseImg from "@/assets/pngs/choose-oli-carol-img.webp"
import WhyChooseOliCarolCard from '@/globalComponents/cards/WhyChooseOliCarolCard'
import { whyChooseOliCarolData } from '@/utilis/MockData'
const WhyChooseOliCarol = () => {
  return (
    <div>
      <h1 className='lg:px-16 md:6 px-4 md:text-[35px]  text-[25px]  font-urbane-rounded font-bold text-center my-6'>WHY CHOOSE OLI&CAROL</h1>
      <div className='md:flex justify-between items-center my-6'>
        <Image src={chooseImg}  alt='' className='md:h-[80vh] h-auto md:w-[50%] w-full' />
        <p className='md:text-[15px] text-[12px] font-light lg:pl-26 lg:px-16 md:6 px-4 md:w-[50%] md:mt-0 mt-6'>At Oli&Carol we offer the greenest possible toys for babies. Our goal is to introduce our community into consuming biodegradable, natural rubber, plastic-free, handcrafted toys, always following a slow production process. Made from 100% natural raw materials which enriches children's growth, education, skills and creativity from a young age. </p>
      </div>
      <h1 className='lg:px-16 md:6 px-4 md:text-[35px]  text-[25px]  font-urbane-rounded font-bold text-center my-6'>Find out what makes our products so special.</h1>
    <div className='grid sm:grid-cols-3 min-[425px]:grid-cols-2 grid-cols-1 gap-6 md:gap-12 lg:px-16 md:6 px-4 my-12'>
    {whyChooseOliCarolData.map((item) => (
          <WhyChooseOliCarolCard 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            img={item.img} 
          />
        ))}
    </div>
    <h2 className='lg:px-16 md:6 px-4 md:text-[35px]  text-[25px]  font-urbane-rounded font-bold mt-6 mb-2'>OUR HANDCRAFTED PROCESS</h2>
    <p className='md:text-[15px] text-[12px] font-light  lg:px-16 md:6 px-4 mb-12'>
    Each piece is artisanally made one by one from beginning to end. Our slow production process makes each design unique and different, finding beauty in small imperfections.</p>
    </div>
  )
}

export default WhyChooseOliCarol