
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/globalComponents/navbar/Navbar";
import GoTopButton from "@/globalComponents/buttons/GoTopButton";


export const metadata: Metadata = {
  title: "OLI&CAROL",
  description: "Dentistry99",
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="gHVNKfkFMhEHazIR0iPvsOcXzb40-upmzWthRtfz6Yc" />
      </head>
      <body className="font-century-gothic bg-white text-black" cz-shortcut-listen="true" >
        <Navbar />
        <GoTopButton/>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

