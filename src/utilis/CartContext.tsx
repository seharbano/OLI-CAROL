"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Type definitions
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
  total: number;
  discount: number;
  shipping: number;
  totalItems: number;
  applyCoupon: (code: string) => void;
};

// Context creation
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discount, setDiscount] = useState(0);

  const shipping = 99.99;

  // ✅ Add to cart
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

  // ✅ Remove from cart
  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Update item qty
  const updateQty = (id: string | number, qty: number) => {
    if (qty < 1) {
      setCart((prev) => prev.filter((item) => item.id !== id));
      return;
    }

    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  // ✅ Toggle cart sidebar
  const toggleCart = (open?: boolean) => {
    if (typeof open === "boolean") setIsCartOpen(open);
    else setIsCartOpen((prev) => !prev);
  };

  // ✅ Derived values
  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const subtotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cart]
  );

  const total = useMemo(
    () => subtotal - discount + (cart.length > 0 ? shipping : 0),
    [subtotal, discount, cart]
  );

  // ✅ Coupon logic
  const applyCoupon = (code: string) => {
    if (code.trim().toUpperCase() === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQty,
        toggleCart,
        subtotal,
        total,
        discount,
        shipping,
        totalItems,
        applyCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
