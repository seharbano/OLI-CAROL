import React from "react";
import { X } from "lucide-react";
import AddToCartCard from "../cards/AddToCartCard";
import GlobalButton from "../buttons/GlobalButton";

type Props = {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
};

const CartSidebar = ({ isCartOpen, setIsCartOpen }: Props) => {
  return (
    <div>

      <div
        className={`fixed top-0 right-0 h-full w-[260px] sm:w-[350px] max-w-full bg-white shadow-xl z-[300] transform transition-transform duration-500 ${isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Cart(6)</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>


        <div className="flex-1 overflow-y-auto py-4 max-h-[calc(100vh-370px)] ">
          <p className="text-gray-500 px-4">Your cart is empty.</p>
          <AddToCartCard />
          <AddToCartCard />
          <AddToCartCard />
          <AddToCartCard />
          <AddToCartCard />
          <AddToCartCard />
          <AddToCartCard />
          <AddToCartCard />
          <AddToCartCard />
          <AddToCartCard />
        </div>
        <div>
          <div className="p-4 border-t border-b border-b-gray-200 border-t-gray-200">
            <GlobalButton title="Checkout" className="bg-[#cf9f78] text-white rounded-[5px]" showIcon={true}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#fff" d="M12 4c1.648 0 3 1.352 3 3v3H9V7c0-1.648 1.352-3 3-3m5 6V7c0-2.752-2.248-5-5-5S7 4.248 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zM6 12h12v8H6z" />
                </svg>
              }
            />
          </div>
          <div className="p-4 flex flex-col gap-3 ">
<GlobalButton title="Shop" className="bg-[#5434eb] text-white rounded-[5px]"/>
<GlobalButton title="xx" className="bg-[#ffc43a] text-white rounded-[5px]"/>
<GlobalButton title="Pay" className="bg-[#000] text-white rounded-[5px]"/>
<p className="text-black font-light text-[11px]">Shipping and discount codes are calculated at checkout</p>
</div>
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
