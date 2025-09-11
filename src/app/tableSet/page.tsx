import Image from 'next/image'
import React from 'react'
import table from "@/assets/pngs/table-header.webp"
import tableSet from "@/assets/pngs/main-table.webp"
import tablekidsSet from "@/assets/pngs/dinnerware-b2c-3.webp"
import dinnerTable from "@/assets/pngs/diner-table-img.webp"
const TableSets = () => {
    return (
        <div>
            <Image src={table} alt='' className='w-full h-auto' />
            <Image src={tableSet} alt='' className='w-full h-auto' />
            <div className='bg-[#d3b192] w-full py-6 lg:px-16  text-center px-4'>
                <h2 className='text-[30px] max-[700px]:text-[18px]  font-bold  font-urbane-rounded'>INTRODUCING THE FIRST-EVER HEVEA WOOD BABY DINNERWARE SET.</h2>
                <p className='text-[20px] max-[700px]:text-[15px]  font-semibold pb-6 font-urbane-rounded'>THE COOLEST DINNERWARE SET FOR A SAFE & A FUN MEALTIME. </p>
                <Image src={tablekidsSet} alt='' className='w-full overflow-hidden h-auto' />
            </div>
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    src="/table-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
            <div className='text-center py-6 bg-[#d3b192]'>
                <p className='text-[20px] max-[700px]:text-[15px] font-bold  font-urbane-rounded'>SLOW FAMILIES.</p>
                <p className='text-[20px] max-[700px]:text-[15px]  font-bold  font-urbane-rounded'>SLOW LIFE.</p>
                <p className='text-[20px] max-[700px]:text-[15px]  font-bold  font-urbane-rounded pb-6'>SLOW EATING</p>
                <Image src={dinnerTable} alt='' className='w-full overflow-hidden h-auto' />
            </div>
        </div>
    )
}

export default TableSets