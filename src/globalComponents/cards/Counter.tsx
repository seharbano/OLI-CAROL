"use client";
import React from "react";
import {CounterProps} from "@/types/product"
const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div className="flex items-center justify-between border border-gray-300 gap-2 h-[38px] rounded-[5px] w-[86px]">
      {/* Minus Button */}
      <button onClick={onDecrement} className="py-1 text-black rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="#000" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2" />
        </svg>
      </button>

      {/* Count Value */}
      <span className="text-[15px] font-medium">{count}</span>

      {/* Plus Button */}
      <button onClick={onIncrement} className="py-1 text-black rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="#000" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
