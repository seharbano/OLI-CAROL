"use client"
import React, { useState, useEffect } from 'react'
import search from "@/assets/svgs/search.svg";
import cart from "@/assets/svgs/cart.svg";
import profile from "@/assets/svgs/user-profile.svg";
import Image from 'next/image'

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");

  // Escape key se exit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearching(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Dummy search function (backend ke sath integrate karna baad me)
  const handleSearch = () => {
    if (query.trim()) {
      console.log("Searching for:", query);
      // API call ya route change yahan kare
    }
  };

  return (
    <div className="sticky top-0 z-[100]">
      {/* top strip */}
      <div className='bg-[#b89778] text-center'>
        <p>COOLEST 100% NATURAL & SUSTAINABLE TOYS</p>
      </div>

      {/* main navbar */}
      <div className=" shadow-md bg-white w-full h-[85px] md:h-20 xs:h-[70px] flex items-center px-16 lg:px-8 sm:px-6 xs:px-4">
        {isSearching ? (
          // 🔎 FULL NAVBAR SEARCH MODE
          <div className="flex w-full items-center gap-3">
            
            {/* Search button (left side) */}
            <button 
              onClick={handleSearch} 
              className="text-black font-semibold text-sm px-3 py-2 border border-black rounded-md hover:bg-black hover:text-white transition"
            >
              Search
            </button>

            {/* Input */}
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="flex-1 border-b-2 border-black outline-none px-3 py-2 text-[16px]"
            />

            {/* Buttons on right side */}
            {query ? (
              <>
                {/* Clear input */}
                <button 
                  onClick={() => setQuery("")} 
                  className="text-sm px-3 py-1 border rounded-md bg-gray-100 hover:bg-gray-200"
                >
                  Clear
                </button>

                {/* Close search mode */}
                <button
                  onClick={() => {
                    setIsSearching(false);
                    setQuery("");
                  }}
                  className="text-black font-bold text-xl"
                >
                  ✕
                </button>
              </>
            ) : (
              // Only close button if input empty
              <button
                onClick={() => setIsSearching(false)}
                className="text-black font-bold text-xl"
              >
                ✕
              </button>
            )}
          </div>
        ) : (
          // 🟢 DEFAULT NAVBAR
          <>
            {/* Logo */}
            <div className="cursor-pointer">
              <h1 className='text-[30px] text-black'>OLI&CAROL</h1>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex justify-center">
              <ul className='flex gap-10 text-[14px] font-[800] uppercase text-black'>
                <li>shop</li>
                <li>mealtime</li>
                <li>stack & bounce</li>
                <li>collections</li>
                <li>more than toys</li>
              </ul>
            </div>

            {/* Right icons */}
            <div className="flex justify-between gap-6 items-center">
              <button onClick={() => setIsSearching(true)}>
                <Image src={search} alt='search' />
              </button>
              <Image src={profile} alt='profile' />
              <Image src={cart} alt='cart' />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar;
