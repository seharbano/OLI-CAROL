import { useState } from "react";
import { Product, ProductDetailColor } from "@/types/product";
import { StaticImageData } from "next/image";

export const useProductDetail = (product: Product | undefined) => {
  const [selectedColor, setSelectedColor] = useState<ProductDetailColor | null>(
    product?.colorOptions?.[0] ?? null
  );

  const [bigImage, setBigImage] = useState<StaticImageData | null>(
    product?.colorOptions?.[0]?.images?.[0] ?? null
  );

  const handleColorChange = (color: ProductDetailColor) => {
    setSelectedColor(color);
    setBigImage(color.images[0]);
  };

  return {
    selectedColor,
    bigImage,
    handleColorChange,
    setBigImage,
  };
};
