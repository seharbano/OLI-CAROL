"use client";
import { useState } from "react";
import { useCart } from "@/utilis/CartContext";
import { StaticImageData } from "next/image";

export function useAddToCart() {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (product: {
    id: string | number;
    title: string;
    price: number;
    image: string | StaticImageData;
  }) => {
    setLoading(true);

    // simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    addToCart(product);

    setLoading(false);
  };

  return { loading, handleAddToCart };
}
