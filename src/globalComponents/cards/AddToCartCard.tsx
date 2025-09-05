import React from 'react'
import Image from 'next/image'
import Counter from './Counter'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
type Props = {
  img: string | StaticImport;
  title: string;
  price: string;
  qty?: number;
  onRemove: () => void;
  onUpdateQty: (newQty: number) => void;
}

const AddToCartCard = ({ img, title, price, qty = 1, onRemove, onUpdateQty }: Props) => {

  return (
    <div className='flex justify-start items-center gap-6 py-2 px-2 border-b border-b-gray-200'>
    
      <Image src={img} alt={title} width={80} height={80} className='w-[80px] h-auto' />

      <div className='flex justify-center items-start md:text-[15px] text-[13px] gap-2 flex-col'>
        <p>{title}</p>
        <p>{price}</p>


        <Counter
        count={qty}
        onIncrement={() => onUpdateQty(qty + 1)}
        onDecrement={() => {
          if (qty > 1) {
            onUpdateQty(qty - 1);
          } else {
            onRemove();
          }
        }}
      />
        <button onClick={onRemove} className="text-red-500 text-sm">
          REMOVE
        </button>
      </div>
    </div>
  )
}

export default AddToCartCard;
