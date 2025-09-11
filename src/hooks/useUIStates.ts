"use client";
import { useState } from "react";

// Sidebar toggle
export function useSidebar() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}

// Dropdown toggle
export function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
}

// Accordion (FilterSidebar ke liye)
export function useAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return { openIndex, toggleAccordion };
}
