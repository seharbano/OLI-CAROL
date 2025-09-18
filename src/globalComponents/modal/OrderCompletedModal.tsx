import React from 'react'
import duckIcon from "../../../public/duck-icon.png"
import Image from 'next/image'
const OrderCompletedModal = () => {
  return (
    <div  className="h-[150px] flex flex-col justify-center items-center" >
        <Image src={duckIcon} alt='' className='h-auto w-[120px]' />
        <h1 className='text-[20px] max-[700px]:text-[14px] max-[500px]:text-[12px] text-center  font-urbane-rounded font-bold'>Congratulations! Your Order is Completed Successfully! 🥳</h1>
    </div>
  )
}

export default OrderCompletedModal