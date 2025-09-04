"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import Navbar from "@/globalComponents/navbar/Navbar";
import GoTopButton from "@/globalComponents/buttons/GoTopButton";
import Footer from '@/globalComponents/footer/Footer';
import { CartProvider } from '@/utilis/CartContext';
const ClientLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const hideNavbar = pathname === "/signin" || pathname === "/authenticationCode";

  return (
    <CartProvider>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <GoTopButton />}
      {!hideNavbar && <Footer />}
    </CartProvider>
  );
}
export default ClientLayoutWrapper;
