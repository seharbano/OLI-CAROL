import React, { useEffect, useState } from "react";

import { X } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

const FilterSidebar: React.FC<Props> = ({ open, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSearchParams(new URLSearchParams(window.location.search));
    }
  }, []);
  if (!open) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleFilterClick = (type: "age" | "category", value: string) => {
    const params = searchParams ? new URLSearchParams(searchParams.toString()) : new URLSearchParams();
    params.set(type, value);

    window.location.href = `/productList?${params.toString()}`;
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
            className="w-full flex items-center justify-between p-3 text-[16px] font-[700]"
            onClick={() => toggleAccordion(1)}
          >
            <span>Shop by Age</span>
            {openIndex === 1 ? <Minus size={18} /> : <Plus size={18} />}
          </button>
          <div className={`overflow-hidden text-[15px] transition-all duration-300 ${openIndex === 1 ? "px-3 pb-3" : "max-h-0"}`}>
            <p className="cursor-pointer" onClick={() => handleFilterClick("age", "0 - 6 months")}>0 - 6 months</p>
            <p className="cursor-pointer" onClick={() => handleFilterClick("age", "6 months - 1 years")}>6 months - 1 years</p>
            <p className="cursor-pointer" onClick={() => handleFilterClick("age", "1 - 3 years")}>1 - 3 years</p>
            <p className="cursor-pointer" onClick={() => handleFilterClick("age", "+3 years")}>+3 years</p>
          </div>
        </div>

        {/* Shop by Category */}
        <div className="border-y border-white">
          <button
            className="w-full flex items-center justify-between p-3 text-[16px] font-[700]"
            onClick={() => toggleAccordion(2)}
          >
            <span>Shop by Category</span>
            {openIndex === 2 ? <Minus size={18} /> : <Plus size={18} />}
          </button>
          <div className={`overflow-hidden text-[15px] transition-all duration-300 ${openIndex === 2 ? "px-3 pb-3" : "max-h-0"}`}>
            <p className="cursor-pointer" onClick={() => handleFilterClick("category", "Baby Teethers")}>Baby Teethers</p>
            <p className="cursor-pointer" onClick={() => handleFilterClick("category", "Cars")}>Cars</p>
            <p className="cursor-pointer" onClick={() => handleFilterClick("category", "Rattle Toys")}>Rattle Toys</p>
            <p className="cursor-pointer" onClick={() => handleFilterClick("category", "Bath Toys")}>Bath Toys</p>
          </div>
          <div className="w-full flex items-center justify-between p-3 text-[16px] font-[700] cursor-pointer"
               onClick={() => handleFilterClick("category", "Baby Gift Sets")}>
            <p>Baby Gift Sets</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;