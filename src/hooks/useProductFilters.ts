"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccordion } from "./useUIStates"; 

export function useProductFilters(open: boolean) {
  const { openIndex, toggleAccordion } = useAccordion();
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSearchParams(new URLSearchParams(window.location.search));
    }
  }, []);

  const handleFilterClick = (type: "age" | "category", value: string) => {
    const params = searchParams
      ? new URLSearchParams(searchParams.toString())
      : new URLSearchParams();

    params.set(type, value);
    router.push(`/productList?${params.toString()}`, { scroll: false });
  };

  return {
    openIndex,
    toggleAccordion,
    handleFilterClick,
  };
}
