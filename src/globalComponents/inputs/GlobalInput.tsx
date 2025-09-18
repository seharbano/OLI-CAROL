"use client";
import React from "react";

type Props = {
  id?: string;
  value?: string;
  type?: string;
  placeholder: string; // ✅ ab "title" ki jagah placeholder use hoga
  width?: string;
  height?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const GlobalInput = ({
  id,
  value,
  type = "text",
  placeholder,
  width = "100%",
  height = "50px",
  error,
  onChange,
}: Props) => {
  return (
    <div className="relative w-full" style={{ width }}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        style={{ height }}
        placeholder={placeholder}
        className={`w-full px-4 rounded-[10px] outline-none transition-all
          ${error 
            ? "border border-red-500 placeholder-red-400" 
            : "border border-[#dedede] focus:border-[1.5px] focus:border-[#cf9f78]"}`}
      />
      {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default GlobalInput;
