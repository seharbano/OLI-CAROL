"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import Navbar from "@/globalComponents/navbar/Navbar";
import GoTopButton from "@/globalComponents/buttons/GoTopButton";

const ClientLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const hideNavbar = pathname === "/signin" || pathname === "/authenticationCode";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <GoTopButton />}
    </>
  );
}
export default ClientLayoutWrapper;
