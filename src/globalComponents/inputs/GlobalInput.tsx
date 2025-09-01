"use client"
import React, { useState } from "react";

type Props = {
  id?: string;
  value?: string;
  type?: string;
  title: string; // label text
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
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full" style={{ width }}>
      {/* Input */}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ height }}
        className={`peer w-full px-4 pt-5 pb-2 border rounded-md outline-none transition-all
          ${error ? "border-red-500" : "border-gray-400 focus:border-[#cf9f78]"}`}
      />

      {/* Floating Label */}
      <label
        htmlFor={id}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all pointer-events-none
          peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:text-base
          peer-focus:top-2
          peer-focus:text-sm
          peer-focus:text-[#cf9f78]
          ${value ? "top-2 text-sm text-[#cf9f78]" : ""}`}
      >
        {title}
      </label>

      {/* Error */}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default GlobalInput;
