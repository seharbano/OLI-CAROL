'use client'
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  title: string;
  width?: string;
  font?: string;
  height?: string;
  loading?: boolean;
  disabled?: boolean;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  loaderColor?: string;
  borderColor?: string;
  borderWidth?: string;
  className?: string;
  onClick?: (e: React.FormEvent) => void;
  icon?: React.ReactNode; 
  showIcon?: boolean; 
};

const GlobalButton = ({
  width,
  title,
  height,
  onClick,
  loading,
  className = "",
  borderColor,
  borderWidth,
  font = "600",
  disabled = false,
  loaderColor = "#ffff",
  flexDirection = "row",
  icon,
  showIcon = false,
}: Props) => {
  return (
    <div
      onClick={(e) => {
        if (!disabled && onClick) onClick(e);
      }}
      style={{
        height,
        flexDirection,
        fontWeight: font,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        border: `${borderWidth} solid ${borderColor}`,
        userSelect: "none",
        ...(width ? { width } : {}),
      }}
      className={`gap-2 h-[48px] 2sm:h-[41px] flex justify-center items-center 
        text-[15px] 2sm:text-[12px] leading-[22px] tracking-[0.5px] cursor-pointer 
        transition-colors duration-300 ${className}`}
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
        <>
          {showIcon && icon && <span className="flex items-center">{icon}</span>}
          {title}
        </>
      )}
    </div>
  );
};

export default GlobalButton;
