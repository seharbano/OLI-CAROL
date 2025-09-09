"use client";
import { useSearchParams } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import { fruitsCard } from "@/utilis/MockData";

export function useProducts() {
  const searchParams = useSearchParams();

  // Query params read
  const age = searchParams.get("age");
  const category = searchParams.get("category");

  const [selected, setSelected] = useState("SORT BY");

  // Filter products
  const filteredProducts = useMemo(() => {
    return fruitsCard.filter((product) => {
      if (age && product.age?.toLowerCase() !== age.toLowerCase()) return false;
      if (category && product.category?.toLowerCase() !== category.toLowerCase()) return false;
      return true;
    });
  }, [age, category]);

  const [displayProducts, setDisplayProducts] = useState(filteredProducts);

  // Jab bhi filteredProducts update ho, display update karo
  useEffect(() => {
    setDisplayProducts(filteredProducts);
  }, [filteredProducts]);

  const handleSelect = (option: string) => {
    setSelected(option);
    const sorted = [...filteredProducts];
    if (option === "Price, low to high") sorted.sort((a, b) => a.price - b.price);
    if (option === "Price, high to low") sorted.sort((a, b) => b.price - a.price);
    setDisplayProducts(sorted);
  };

  return { displayProducts, selected, handleSelect };
}
