'use client'
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  title: string;
  width?: string;
  font?: string;
  color?: string;
  height?: string;
  bgColor?: string;
  loading?: boolean;
  disabled?: boolean;
  flexDirection?: any;
  loaderColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  className?: string;
  hover?: {
    bgColor?: string;
    color?: string;
    borderColor?: string;
  };
  onClick?: (e: React.FormEvent) => void;
};

const GlobalButton = ({
  hover,
  width,
  title,
  height,
  onClick,
  loading,
  className = "",
  borderColor,
  borderWidth,
  font = "600",
  color = "black",
  disabled = false,
  borderRadius = "5px",
  bgColor = "bg-white/30 backdrop-blur-sm",
  loaderColor = "#ffff",
  flexDirection = "row",
}: Props) => {
  const hoverBgColor = hover?.bgColor || "";

  return (
    <div
      onClick={(e) => {
        if (!disabled && onClick) onClick(e);
      }}
      style={{
        color,
        height,
        borderRadius,
        flexDirection,
        fontWeight: font,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        border: `${borderWidth} solid ${borderColor}`,
        userSelect: "none",
        ...(width ? { width } : {}),
      }}
      className={`gap-2 h-[48px] 2sm:h-[41px] flex justify-center items-center 
        text-[15px] 2sm:text-[12px] leading-[22px] tracking-[0.1px] cursor-pointer 
        transition-colors duration-300 ${bgColor} ${className}`}
      onMouseEnter={(e) => {
        if (hoverBgColor) e.currentTarget.classList.add(hoverBgColor);
      }}
      onMouseLeave={(e) => {
        if (hoverBgColor) e.currentTarget.classList.remove(hoverBgColor);
      }}
    >
      {loading ? (
        <ClipLoader
          size={21}
          loading={loading}
          color={loaderColor}
          data-testid="loader"
          aria-label="Loading Spinner"
        />
      ) : (
        title
      )}
    </div>
  );
};

export default GlobalButton;
