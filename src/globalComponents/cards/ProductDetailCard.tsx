"use client";

import { useState } from "react";
import Image from "next/image";

const features = [
  {
    icon: "https://oliandcarol.com/cdn/shop/files/STAMPS_Mesa_de_trabajo_1_copia_2.png?v=1709212743&width=100",
    text: "Develop fine & gross motor skills",
  },
  {
    icon: "https://oliandcarol.com/cdn/shop/files/Hand_Made.png?v=1686922853&width=100",
    text: "No plastic or silicone: Mix of natural rubber & fsc wood",
  },
  {
    icon: "https://oliandcarol.com/cdn/shop/files/STAMPS_Mesa_de_trabajo_1_copia_2.png?v=1709212743&width=100",
    text: "Handcrafted one by one & hand painted with natural pigments",
  },
  {
    icon: "https://oliandcarol.com/cdn/shop/files/STAMPS_Mesa_de_trabajo_1_copia_2.png?v=1709212743&width=100",
    text: "Biodegradable toys: generating the least possible carbon footprint & waste in the planet",
  },
  {
    icon: "https://oliandcarol.com/cdn/shop/files/STAMPS_Mesa_de_trabajo_1_copia_2.png?v=1709212743&width=100",
    text: "Solidary toys: we contribute with causes for the planet & the people",
  },
];


const tabs = [
  {
    label: "DESCRIPTION",
    content: (
      <>
        <p>
          Introducing Betty, the sustainable baby car toy! A beetroot-inspired
          design handcrafted with natural rubber & FSC wood. This baby car
          promotes interactive play, cognitive development and social skills.
          It&apos;s packaging has a drop-down ramp inside making it reusable &
          fun to play with!
        </p>
        <p className="mt-2">
          Perfect for ages +0 & up to 4 years old, baby car toys are the ultimate
          playtime choice for eco-conscious parents and young kiddos. Because
          cool toys can also care for the planet and build lifelong habits.
        </p>
      </>
    ),
  },
  {
    label: "WASHING & CARE",
    content: (
      <p>
        To clean, simply wipe your toy with a damp cloth and mild soap. Do not
        sterilize, boil, or place in the dishwasher. Store in a dry place away
        from direct sunlight.
      </p>
    ),
  },
  {
    label: "CERTIFICATES",
    content: (
      <p>
        All Oli&Carol products meet international safety standards including
        EN71, ASTM, and CE certifications. They are tested for non-toxic,
        eco-friendly materials.
      </p>
    ),
  },
  {
    label: "SHIPPING RATES",
    content: (
      <p>
        Free shipping on orders above €50. Standard delivery within 3-5 business
        days. International shipping rates may vary depending on destination.
      </p>
    ),
  },
];

const ProductDetailCard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

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
        {tabs.map((tab) => (
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
        {tabs.find((t) => t.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default ProductDetailCard;
