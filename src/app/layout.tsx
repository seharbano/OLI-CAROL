import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
export const metadata: Metadata = {
  title: "OLI&CAROL",
  description: "kids toys",
  icons: {
    icon: "/duck-icon.png", 
    shortcut: "/duck-icon.png",
    apple: "/duck-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className="font-century-gothic bg-white text-black" cz-shortcut-listen="true">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
