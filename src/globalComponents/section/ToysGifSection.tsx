import React from 'react'
import HpGif from "@/assets/pngs/hp-gif.webp"
import Image from 'next/image'
const ToysGifSection = () => {
  return (
    <div>
  <Image src={HpGif} alt="animated radish" className="w-full h-auto" />
    </div>
  )
}

export default ToysGifSection