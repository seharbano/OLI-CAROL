"use client";

import React, { useState, useEffect } from "react";
import search from "@/assets/svgs/search.svg";
import cart from "@/assets/svgs/cart.svg";
import profile from "@/assets/svgs/user-profile.svg";
import Image from "next/image";
import CartSidebar from "./CartSidebar";
import { Menu, Search, X } from "lucide-react";

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearching(false);
        setIsCartOpen(false);
        setIsMenuOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
            <Menu onClick={() => setIsMenuOpen(true)} />
            <Image src={search} alt="search" onClick={() => setIsSearching(true)} />
          </div>

          <div className="cursor-pointer">
            <h1 className="text-[30px] max-[768px]:text-[24px] max-[420px]:text-[18px] font-bold text-black">OLI&CAROL</h1>
          </div>


          <div className="flex-1 justify-center hidden xl:flex">
            <ul className="flex gap-10 text-[14px] font-[800] uppercase text-black">
              {["shop", "mealtime", "stack & bounce", "collections", "more than toys"].map((item, i) => (
                <li
                  key={i}
                  className="relative font-urbane-rounded cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>



          <div className="flex justify-between gap-6 max-[768px]:gap-3 items-center">
            <button className="xl:flex hidden" onClick={() => setIsSearching(true)}>
              <Image src={search} alt="search" />
            </button>
            <Image src={profile} alt="profile" />
            <button onClick={() => setIsCartOpen(true)}>
              <Image src={cart} alt="cart" />
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-[280px] sm:w-[400px] h-full bg-white shadow-lg z-[350] transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <X onClick={() => setIsMenuOpen(false)} />
        </div>
        <ul className="flex flex-col gap-6 p-6 text-[16px] font-[700] uppercase">
          <li>shop</li>
          <li>mealtime</li>
          <li>stack & bounce</li>
          <li>collections</li>
          <li>more than toys</li>
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-[250]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <CartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

export default Navbar;