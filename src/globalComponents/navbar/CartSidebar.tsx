import React from "react";
import { X } from "lucide-react"; 

type Props = {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
};

const CartSidebar = ({ isCartOpen, setIsCartOpen }: Props) => {
  return (
    <div>

      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[400px] max-w-full bg-white shadow-xl z-[300] transform transition-transform duration-500 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
 
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        
        <div className="p-4 flex-1 overflow-y-auto">
          <p className="text-gray-500">Your cart is empty.</p>
        </div>

        <div className="p-4 border-t">
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      </div>

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-[250]"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default CartSidebar;
