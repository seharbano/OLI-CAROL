"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
type CartItem = {
  id: string | number;
  title: string;
  price: number;
  image: string | StaticImport;
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: string | number) => void;
  updateQty: (id: string | number, qty: number) => void;
  toggleCart: (open?: boolean) => void;
  subtotal: number;
  totalItems: number; 
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Omit<CartItem, "qty">) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true); 
  };

  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: string | number, qty: number) => {
    if (qty < 1) {
      setCart((prev) => prev.filter((item) => item.id !== id));
      return;
    }
  
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const toggleCart = (open?: boolean) => {
    if (typeof open === "boolean") setIsCartOpen(open);
    else setIsCartOpen((prev) => !prev);
  };

  const totalItems = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }, [cart]);
  
  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);
  
  
  return (
    <CartContext.Provider
      value={{ cart, isCartOpen, addToCart, removeFromCart, updateQty, toggleCart ,subtotal,totalItems}}
    >
      {children}
    </CartContext.Provider>
  );
};



export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
