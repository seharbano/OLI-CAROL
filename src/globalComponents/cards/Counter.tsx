"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // increment function
  const increment = () => {
    setCount(count + 1);
  };

  // decrement function with check
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-between border border-gray-300 gap-2 h-[38px] rounded-[5px] w-[86px]">
      {/* Minus Button */}
      <button
        onClick={decrement}
        className=" py-1  text-black rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="#000" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2" />
        </svg>
      </button>

      {/* Count Value */}
      <span className="text-[15px] font-meduim">{count}</span>

      {/* Plus Button */}
      <button
        onClick={increment}
        className="py-1 text-black rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="#000" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
