import React, { useState } from "react";

import Link from "next/link";

import { X } from "lucide-react";
import { Plus, Minus } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const FilterSidebar: React.FC<Props> = ({ open, onClose }) => {
  if (!open) return null;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Overlay - click karne se sidebar band */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-[25%] bg-white shadow-lg p-4 z-100">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[20px] font-[600]">FILTERS</p>
          <button onClick={onClose}>
            <X className="transition-transform duration-300 hover:rotate-90" />
          </button>
        </div>
        <div className="border-y border-white">
          <button
            className="w-full flex items-center justify-between p-3 text-[16px] max-[400px]:text-[13px] font-[700] transition cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <span>Promotion</span>
            {openIndex === 1 ? <Minus size={18} /> : <Plus size={18} />}
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? "px-3 pb-3" : "max-h-0"}`}>
            <p>Summer sale</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;