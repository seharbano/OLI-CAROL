"use client";

import { useState } from "react";
import Image from "next/image";
import { features, tabsProductDetail } from "@/utilis/MockData";

const ProductDetailCard = () => {
  const [activeTab, setActiveTab] = useState(tabsProductDetail[0].label);

  return (
    <div className="w-full mx-auto px-4 py-6 text-gray-800">

      <div className="mb-6">
        <p className="text-xl font-bold flex items-center gap-2">
          <Image width={36} height={36} src="https://oliandcarol.com/cdn/shop/files/STAMPS_Mesa_de_trabajo_1.png?v=1709212656&width=100" alt="" />
          Baby car toy for ages 0 and up (0-4)!
        </p>
      </div>


      <div className="space-y-5 mb-8">
        {features.map((f, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Image src={f.icon} alt="" width={36} height={36} />
            <p className="max-[768px]:text-[12px] text-[14px] leading-snug">{f.text}</p>
          </div>
        ))}
      </div>


      <div className="flex overflow-auto whitespace-nowrap kids-carasoule-scroll gap-6 border-b border-gray-200 mb-4">
        {tabsProductDetail.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`pb-2 text-sm font-medium ${activeTab === tab.label
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-[768px]:text-[12px] text-[14px] leading-relaxed">
        {tabsProductDetail.find((t) => t.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default ProductDetailCard;
