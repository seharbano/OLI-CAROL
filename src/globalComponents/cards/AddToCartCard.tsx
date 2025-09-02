import React from 'react'
import Image from 'next/image'
import CartImg from "@/assets/pngs/slider-img-1.webp"
import Counter from './Counter'
const AddToCartCard = () => {
  return (
    <div className='flex justify-start items-center gap-6 py-2 px-2 border-b border-b-gray-200'>
        <Image src={CartImg} alt='' className='w-[80px] h-auto' />
        <div className='flex justify-center items-start md:text-[15px] text-[13px] gap-2 flex-col'>
            <p>Cathy The Carrot Baby Car Toy</p>
            <p>€24,90</p>
            <Counter/>
            <p>REMOVE</p>
        </div>
    </div>
  )
}

export default AddToCartCard