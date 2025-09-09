"use client";
import React, { useState } from "react";
import GlobalInput from "@/globalComponents/inputs/GlobalInput";
import { useCart } from "@/utilis/CartContext";
import CartSummary from "@/globalComponents/cards/CartSummary";
import GlobalButton from "@/globalComponents/buttons/GlobalButton";
import { useCheckoutForm } from "@/utilis/checkoutValidation";

const CheckoutPage = () => {
  const { subtotal, discount, shipping, total, applyCoupon } = useCart();
  const [coupon, setCoupon] = useState("");
  const { formData, errors, handleChange, handlePaymentChange, handleSubmit } =
    useCheckoutForm("card");

  const handleApplyCoupon = () => {
    applyCoupon(coupon.trim());
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col lg:flex-row max-w-6xl mx-auto px-4 py-10 gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Contact Info */}
          <GlobalInput
            id="email"
            title="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          {/* Delivery */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Delivery</h2>
            <div className="flex gap-3 max-[425px]:flex-col">
              <GlobalInput
                id="firstName"
                title="First Name"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <GlobalInput
                id="lastName"
                title="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>
            <GlobalInput
              id="address"
              title="Address"
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
            />
            <GlobalInput
              id="city"
              title="City"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
            />
            <GlobalInput
              id="phone"
              title="Phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>

          {/* Payment */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Payment</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={() => handlePaymentChange("card")}
                />
                Credit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={() => handlePaymentChange("paypal")}
                />
                PayPal
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={() => handlePaymentChange("cod")}
                />
                Cash on Delivery
              </label>
            </div>

            {formData.paymentMethod === "card" && (
              <div className="space-y-3 mt-3">
                <GlobalInput
                  id="cardNumber"
                  title="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  error={errors.cardNumber}
                />
                <div className="flex max-[425px]:flex-col gap-3">
                  <GlobalInput
                    id="expiry"
                    title="Expiration date (MM / YY)"
                    value={formData.expiry}
                    onChange={handleChange}
                    error={errors.expiry}
                  />
                  <GlobalInput
                    id="cvc"
                    title="Security code"
                    value={formData.cvc}
                    onChange={handleChange}
                    error={errors.cvc}
                  />
                </div>
                <GlobalInput
                  id="cardName"
                  title="Name on Card"
                  value={formData.cardName}
                  onChange={handleChange}
                  error={errors.cardName}
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <GlobalButton
            title="Order Completed"
            className="bg-[#cf9f78] rounded-md w-full"
            onClick={() => handleSubmit(() => alert("🎉 Order Completed Successfully!"))}
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 border border-gray-200 rounded-md p-6 space-y-4">
          <CartSummary className="min-h-full h-full" />
          <div className="flex gap-2">
            <GlobalInput
              id="discount"
              title="Discount code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <GlobalButton
              title="Apply"
              className="bg-[#cf9f78] rounded-md w-[120px]"
              onClick={handleApplyCoupon}
            />
          </div>
          <div className="flex justify-between"><span>Subtotal</span><span>€{subtotal.toFixed(2)}</span></div>
          {discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>-€{discount.toFixed(2)}</span></div>}
          <div className="flex justify-between"><span>Shipping</span><span>€{shipping.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold text-lg"><span>Total</span><span>€{total.toFixed(2)}</span></div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
