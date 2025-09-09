"use client";

import { useState, useMemo, useEffect } from "react";
import { fruitsCard } from "@/utilis/MockData";

export function useProducts() {
  const [decodedAge, setDecodedAge] = useState<string | null>(null);
  const [decodedCategory, setDecodedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const age = params.get("age");
      const category = params.get("category");

      setDecodedAge(age ? decodeURIComponent(age).trim() : null);
      setDecodedCategory(category ? decodeURIComponent(category).trim() : null);
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return fruitsCard.filter((product) => {
      if (decodedAge && product.age?.toLowerCase() !== decodedAge.toLowerCase()) return false;
      if (decodedCategory && product.category?.toLowerCase() !== decodedCategory.toLowerCase()) return false;
      return true;
    });
  }, [decodedAge, decodedCategory]);

  const [selected, setSelected] = useState("SORT BY");
  const [displayProducts, setDisplayProducts] = useState(filteredProducts);

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
