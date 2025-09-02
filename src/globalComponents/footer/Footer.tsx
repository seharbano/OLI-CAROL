"use client";
import React, { useState } from "react";

import Link from 'next/link';
import Image from 'next/image';

import { ChevronDown } from "lucide-react";
import visa from "@/assets/pngs/visa-img.png";
import shop from "@/assets/pngs/shop-img.png";
import icon from '@/assets/pngs/mail-icon.png';
import Accordion from "../accordion/Accordion";
import apple from "@/assets/pngs/apple-img.png";
import google from "@/assets/pngs/google-img.jpg";
import klarna from "@/assets/pngs/klarna-img.png";
import paypal from "@/assets/pngs/paypal-img.png";
import union from "@/assets/pngs/unionpay-img.png";
import maestro from "@/assets/pngs/maestro-img.png";
import master from "@/assets/pngs/masterCard-img.png";
import american from "@/assets/pngs/american-img.png";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("English");

  const options = ["English", "Francais", "Italiano", "Espanol"];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className='px-16 max-[1050px]:px-10 max-[550px]:px-4 pt-10 max-[550px]:pt-6 pb-3 text-[black] bg-[#d3b192]'>
      <div className='grid grid-cols-5 max-[1050px]:grid-cols-4 max-[800px]:grid-cols-3 max-[550px]:grid-cols-1 gap-6 max-[1150px]:gap-3'>
        <div className='col-span-2'>
          <h2 className='text-[20px] max-[400px]:text-[18px] font-[700]'>JOIN THE OLI&CAROL COMMUNITY</h2>
          <div className='flex gap-7 mt-5 max-[550px]:mt-3'>
            <Image src={icon} alt='icon' className='w-[110px] max-[750px]:hidden' />
            <div className='w-[55%] max-[640px]:w-full'>
              <p className='text-[18px] leading-5'>Access exclusive discounts and discover our sustainable toys for cool kids.</p>
              <button className='bg-[black] text-[#d3b192] font-[500] text-[20px] w-[90%] h-10 rounded-full mt-5'>I'M IN</button>
            </div>
          </div>
        </div>
        <div className='max-[750px]:hidden'>
          <h2 className='text-[20px] font-[700]'>OLI&CAROL</h2>
          <ul className="mt-5 space-y-2">
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">About us</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">We Are Green</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px] !leading-4 block">Become a Brand <br />Ambassador</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Wholesale</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Invite a friend & get 10% OFF</Link>
            </li>
          </ul>
        </div>
        <div className='max-[750px]:hidden'>
          <h2 className='text-[20px] font-[700]'>SUPPORT</h2>
          <ul className="mt-5 space-y-2">
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Terms & Condition</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Shipment & Returns</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Washing & Care</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">FAQs</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='max-[750px]:hidden'>
          <h2 className='text-[20px] font-[700] leading-5'>FIND MORE BABY <br />GIFTS & TOYS IDEAS</h2>
          <ul className="mt-5 space-y-2">
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Teething Babies</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Baby Christening Gifts</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Baby Shower Gifts</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Fruits & Veggies</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Baby Teethers</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Rattle Toys</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Sensory Balls</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-[gray] text-[16px] md:text-[13px] sm:text-[12px]">Pacifier Cases</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ACCORDION */}
      <Accordion />

      <div>
        <h2 className="text-[23px] font-[700]">FOLLOW US</h2>
        <div className="flex gap-3 flex-wrap mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7.9a4.1 4.1 0 1 0 4.1 4.1A4.09 4.09 0 0 0 12 7.9m0 6.77A2.67 2.67 0 1 1 14.67 12A2.67 2.67 0 0 1 12 14.67m5.23-6.94a1 1 0 1 1-1-1a1 1 0 0 1 1 1m2.71 1a4.7 4.7 0 0 0-1.29-3.35a4.7 4.7 0 0 0-3.35-1.32C14 4 10 4 8.7 4.06a4.73 4.73 0 0 0-3.35 1.29A4.7 4.7 0 0 0 4.06 8.7C4 10 4 14 4.06 15.3a4.7 4.7 0 0 0 1.29 3.35a4.73 4.73 0 0 0 3.35 1.29c1.32.08 5.28.08 6.6 0a4.7 4.7 0 0 0 3.35-1.29a4.7 4.7 0 0 0 1.29-3.35c.06-1.3.06-5.3 0-6.6Zm-1.7 8a2.7 2.7 0 0 1-1.52 1.52a18 18 0 0 1-4.72.32a18 18 0 0 1-4.71-.32a2.7 2.7 0 0 1-1.52-1.52c-.42-1.06-.33-3.56-.33-4.72s-.09-3.67.33-4.72a2.65 2.65 0 0 1 1.52-1.53A18 18 0 0 1 12 5.44a18 18 0 0 1 4.72.32a2.7 2.7 0 0 1 1.52 1.52c.42 1.06.32 3.56.32 4.72s.1 3.67-.32 4.72Z" /></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5" /><path d="M10 12a3 3 0 1 0 3 3V6c.333 1 1.6 3 4 3" /></g></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M8 14.5c-3-4.5 1.462-8 4.5-8S18 8.154 18 12c0 3.038-2 5-4 5s-3-2-2.5-5m.5-2L9 21.5" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" /></g></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14 12l-3.5 2v-4z" /><path d="M2 12.708v-1.416c0-2.895 0-4.343.905-5.274c.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9s2.561.027 3.912.065c2.851.081 4.277.121 5.182 1.053S22 8.398 22 11.292v1.415c0 2.896 0 4.343-.905 5.275c-.906.931-2.331.972-5.183 1.052c-1.35.039-2.73.066-3.912.066s-2.561-.027-3.912-.066c-2.851-.08-4.277-.12-5.183-1.052S2 15.602 2 12.708Z" /></g></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5M7 17v-7" /><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" /></g></svg>
        </div>
      </div>

      <div className="flex max-[1160px]:flex-wrap items-center justify-between gap-4 mt-16 max-[1160px]:mt-10 max-[750px]:mt-5 mb-8 max-[1160px]:mb-3">
        {/* DROPDOWN */}
        <div className="relative">
          {/* Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-2 bg-[#d3b192] border border-gray-300 rounded-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 22C6.477 22 2 17.523 2 12a9.97 9.97 0 0 1 2.99-7.132M12 22c-.963-.714-.81-1.544-.326-2.375c.743-1.278.743-1.278.743-2.98c0-1.704 1.012-2.502 4.583-1.788c1.605.321 2.774-1.896 4.857-1.164M12 22c4.946 0 9.053-3.59 9.857-8.307m0 0Q22 12.867 22 12c0-4.881-3.498-8.946-8.123-9.824m0 0c.51.94.305 2.06-.774 2.487c-1.76.697-.5 1.98-2 2.773c-1 .528-2.499.396-3.998-1.189c-.79-.834-1.265-1.29-2.115-1.379m8.887-2.692A10 10 0 0 0 12 2a9.97 9.97 0 0 0-7.01 2.868" /></svg>
            <span className="flex-1 text-left">{selected}</span>
            <ChevronDown
              className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
              size={18}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute left-0 right-0 mt-2 bg-[#d3b192] border border-gray-200 rounded-lg shadow-md z-10">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-[#d3b199] transition"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className="flex gap-2 max-[500px]:flex-wrap">
          <li><Link href="#" className="text-[14px] text-black hover:text-[gray]">© Oli&Carol 2025</Link></li>
          <li><Link href="#" className="text-[14px] text-black hover:text-[gray]">Privacy Policy</Link></li>
          <li><Link href="#" className="text-[14px] text-black hover:text-[gray]">Cookies Policy</Link></li>
          <li><Link href="#" className="text-[14px] text-black hover:text-[gray]">Powered by Shopify</Link></li>
        </ul>
        <div className="flex gap-3 max-[500px]:flex-wrap">
          <Image src={american} alt="american" className="w-8 h-5" />
          <Image src={apple} alt="apple" className="w-8 h-5" />
          <Image src={google} alt="google" className="w-8 h-5" />
          <Image src={klarna} alt="klarna" className="w-8 h-5" />
          <Image src={maestro} alt="maestro" className="w-8 h-5" />
          <Image src={master} alt="master" className="w-8 h-5" />
          <Image src={paypal} alt="paypal" className="w-8 h-5" />
          <Image src={shop} alt="shop" className="w-8 h-5" />
          <Image src={union} alt="union" className="w-8 h-5" />
          <Image src={visa} alt="visa" className="w-8 h-5" />
        </div>
      </div>
      <h1 className="text-[100px] max-[1000px]:text-[70px] max-[750px]:text-[45px] max-[450px]:text-[25px] text-center font-[800]">MORE THAN TOYS</h1>
    </div>
  )
}

export default Footer