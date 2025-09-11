"use client";
import React from "react";
import { useCart } from "@/utilis/CartContext";
import AddToCartCard from "../cards/AddToCartCard";
import { cartSummary } from "@/types/product";
const CartSummary = ({ className }: cartSummary) => {
  const { cart, subtotal, removeFromCart, updateQty } = useCart();

  return (
    <div className="space-y-4">
      <div className={`${className}`}>
        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-gray-500 p-4">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <AddToCartCard
              key={item.id}
              img={item.image}
              title={item.title}
              price={`€${item.price}`}
              qty={item.qty}
              onRemove={() => removeFromCart(item.id)}
              onUpdateQty={(newQty) => updateQty(item.id, newQty)}
            />
          ))
        )}
      </div>
      {/* Totals */}
      <div className="flex justify-between p-4 border-t border-gray-200">
        <span>Subtotal</span>
        <span>€{subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
