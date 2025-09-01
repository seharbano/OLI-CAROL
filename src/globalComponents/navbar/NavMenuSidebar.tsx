import React, { useState } from "react";
import Link from "next/link";
import {
  moreThanToysMenus,
  shopMenus
} from "@/utilis/MockData";
import {
  ArrowRight,
  ArrowLeft,
  X
} from "lucide-react";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

const NavMenuSidebar = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const [activeMenu, setActiveMenu] = useState<"main" | "shop" | "toys">("main");

  const shopMenu = (
    <div className="p-6 h-full overflow-scroll kids-carasoule-scroll">
      <button
        onClick={() => setActiveMenu("main")}
        className="flex items-center justify-between group w-full gap-2 mb-4 font-bold"
      >
        <ArrowLeft size={18} className="group-hover:translate-x-[-10px] duration-300" />
        <p>Shop</p>
        <div />
      </button>
      <div className="flex flex-col gap-6 text-[16px] uppercase">
        {shopMenus.map((item, i) => (
          <Link key={i} href={item.path}>
            <p
              style={{ animationDelay: `${i * 100}ms` }}
              className="hover:text-[#b89778] menu-item cursor-pointer"
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>

    </div>
  );

  const toysMenu = (
    <div className="p-6">
      <button
        onClick={() => setActiveMenu("main")}
        className="flex items-center justify-between group w-full gap-2 mb-4 font-bold"
      >
        <ArrowLeft size={18} className="group-hover:translate-x-[-10px] duration-300" />
        <p>More than Toys</p>
        <div />
      </button>
      <div className="flex flex-col gap-6 text-[16px] font-[600] uppercase mt-4">
        {moreThanToysMenus.map((item, i) => (
          <Link key={i} href={item.path}>
            <p
              style={{ animationDelay: `${i * 100}ms` }}
              className="hover:text-[#b89778] menu-item cursor-pointer"
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>

    </div>
  );

  const mainMenu = (
    <ul className="flex flex-col gap-6 p-6 text-[16px] font-[700] uppercase">
      {[
        { label: "shop", hasArrow: true, action: () => setActiveMenu("shop") },
        { label: "mealtime" },
        { label: "stack & bounce" },
        { label: "collections" },
        { label: "more than toys", hasArrow: true, action: () => setActiveMenu("toys") },
      ].map((item, i) => (
        <li
          key={i}
          style={{ animationDelay: `${i * 100}ms` }}
          className={`menu-item flex justify-between cursor-pointer group`}
          onClick={item.action}
        >
          <span>{item.label}</span>
          {item.hasArrow && (
            <ArrowRight
              size={18}
              className="group-hover:translate-x-[10px] duration-300"
            />
          )}
        </li>
      ))}
    </ul>
  );


  return (
    <div>
      <div
        className={`fixed overflow-clip top-0 font-urbane-rounded left-0 w-[250px] sm:w-[350px] h-full bg-white text-black shadow-lg z-[350] transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >

        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <X onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
        </div>


        {activeMenu === "main" && mainMenu}
        {activeMenu === "shop" && shopMenu}
        {activeMenu === "toys" && toysMenu}
      </div>


      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-[250]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default NavMenuSidebar;