"use client"
import React from "react";

type Props = {
  id?: string;
  value?: string;
  type?: string;
  title: string; 
  width?: string;
  height?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const GlobalInput = ({
  id,
  value,
  type = "text",
  title,
  width = "100%",
  height = "50px",
  error,
  onChange,
}: Props) => {
  const hasValue = value && value.length > 0;

  return (
    <div className="relative w-full" style={{ width }}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        style={{ height }}
        className={`peer w-full px-4 pt-3 pb-3 rounded-[10px] outline-none transition-all
          ${error ? "border-red-500" : "border-[#dedede] border focus:border-[1.5px] focus:border-[#cf9f78]"}`}
        placeholder=" " 
      />

      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
          ${hasValue
            ? "top-[1px] text-[12px] text-[#cf9f78] translate-y-0"  
            : "top-1/2 -translate-y-1/2 text-[15px] text-gray-400"} 
        `}
      >
        {title}
      </label>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default GlobalInput;
