"use client";

import React, { useState, useEffect, useRef } from "react";
import search from "@/assets/svgs/search.svg";
import cartIcon from "@/assets/svgs/cart.svg";
import profile from "@/assets/svgs/user-profile.svg";
import Image from "next/image";
import CartSidebar from "./CartSidebar";
import { Menu, Search, X } from "lucide-react";
import NavMenuSidebar from "./NavMenuSidebar";
import Link from "next/link";
import { useCart } from "@/utilis/CartContext";

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { cart, isCartOpen, toggleCart } = useCart();
  const { totalItems, toggleCart } = useCart();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="bg-[#b89778] font-urbane-rounded whitespace-nowrap max-[420px]:text-[12px] py-2 text-center">
        <p>COOLEST 100% NATURAL & SUSTAINABLE TOYS</p>
      </div>

      <div className="sticky top-0 z-[100] bg-white shadow-md">

        <div className={`absolute top-0 left-0 w-full bg-white shadow-md px-4 py-5 max-[768px]:py-4 max-[420px]:py-3 z-[200] transition-transform duration-500 ${isSearching ? "translate-y-0" : "-translate-y-[250px]"}`}>
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <Search />
            <input
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus={isSearching}
              className="flex-1 outline-none placeholder:text-black text-black px-3 py-2 text-[15px]"
            />
            <X onClick={() => setIsSearching(false)} className="shrink-0" />
          </div>
        </div>


        <div className="w-full justify-between py-4 flex items-center px-16 max-[1024px]:px-8 max-[768px]:px-4">

          <div className="xl:hidden flex items-center gap-3">
            <Menu
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer text-black"
            />
            <Image
              src={search}
              alt="search"
              onClick={() => setIsSearching(true)}
              className="cursor-pointer"
            />
          </div>


          <div className="cursor-pointer">
            <Link href="/">
            <h1 className="text-[30px] max-[768px]:text-[24px] max-[420px]:text-[18px] font-bold text-black">
              OLI&CAROL
            </h1>
            </Link>
          </div>


          <div className="flex-1 justify-center hidden xl:flex">
            <ul className="flex gap-10 text-[14px] font-[800] uppercase text-black">

              <li
                className="relative font-urbane-rounded cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
                onMouseEnter={() => handleMouseEnter("shop")}
                onMouseLeave={handleMouseLeave}
              >
                Shop
                {openDropdown === "shop" && (
                  <div
                    className="absolute left-0 mt-2 w-[300px] bg-white shadow-lg rounded-md py-2 z-50"
                    onMouseEnter={() => handleMouseEnter("shop")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">ALL PRODUCTS</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">BABY GIFT SETS 🎁</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">Baby Teethers</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">Mini Teethers for Newborns</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">Rattle Toys</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">Mini Doudou Teethers</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">Baby Bath Toys</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">Sensory Balls</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">BABY STACKING TOYS</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">PRETEND PLAY TOYS</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">BABY ACCESSORIES</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">Textile Products</p>
                  </div>
                )}
              </li>


              <li className="relative font-urbane-rounded cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">
                Mealtime
              </li>
              <li className="relative font-urbane-rounded cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">
                Stack & Bounce
              </li>
              <li className="relative font-urbane-rounded cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">
                Collections
              </li>


              <li
                className="relative font-urbane-rounded cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
                onMouseEnter={() => handleMouseEnter("more")}
                onMouseLeave={handleMouseLeave}
              >
                More Than Toys
                {openDropdown === "more" && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50"
                    onMouseEnter={() => handleMouseEnter("more")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href="/youngEntrepeneurs">
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">Young Entrepeneurs</p>
                    </Link>
                    <Link href="/whyChooseOliCarol">
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">Why Choose Oli&Carol</p>
                    </Link>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">We are Green</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]"> Save the Corals</p>
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#b89778]">LATEST NEWS BLOG</p>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="flex justify-between gap-6 max-[768px]:gap-3 items-center">
            <Image src={search} alt="search" className="xl:flex hidden cursor-pointer" onClick={() => setIsSearching(true)} />
            <Image src={profile} alt="profile" className="cursor-pointer" />
            <div className="relative cursor-pointer" onClick={() => toggleCart(true)}>
  <Image src={cartIcon} alt="cart" />
  <span className="absolute -top-2 -right-[10px] bg-white text-[#cf9f78] text-[10px] font-bold rounded-full px-1.5 py-0.5">
    {totalItems}
  </span>
</div>
          </div>
        </div>
      </div>

      <NavMenuSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <CartSidebar   />
    </>
  );
};

export default Navbar;