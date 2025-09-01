'use client'

import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

type Props = {
  size?: number;
  reviews?: boolean;
  readonly?: boolean;
  initialValue?: number;
  allowHover?: boolean;
  totalReviews?: number;
  onClick?: (value: number) => void;
}

const StarsRating = ({
  size = 16,
  totalReviews,
  reviews = true,
  initialValue = 5,
  readonly = true,
  allowHover = false,
  onClick,
}: Props) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [initialValue]);

  if (!isMounted) {
 
    return (
      <div className="flex gap-1 pb-1" style={{ minHeight: size }}>
        <div style={{ width: size * 5, height: size, backgroundColor: '#F8F8F8', borderRadius: '4px' }} />
        {reviews && (
          <span className='text-[#77878F] text-[10px] font-[400] mt-2'>
            {totalReviews}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className='flex gap-1 pb-1'>
      <Rating
        key={initialValue}
        size={size}
        iconsCount={5}
        disableFillHover
        readonly={readonly}
        allowHover={allowHover}
        initialValue={initialValue}
        SVGclassName={`inline-block`}
        onClick={(value) => onClick && onClick(value)}
      />
      {
        reviews &&
          <span className='text-[#77878F] text-[10px] font-[400] mt-2'>{totalReviews}</span>
      }
    </div>
  );
};

export default StarsRating;
