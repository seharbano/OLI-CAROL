"use client";
import { useState } from "react";
import { useCart } from "@/utilis/CartContext";

export function useAddToCart() {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (product: {
    id: string | number;
    title: string;
    price: number;
    image: any;
  }) => {
    setLoading(true);

    // simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    addToCart(product);

    setLoading(false);
  };

  return { loading, handleAddToCart };
}
