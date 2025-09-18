import { useState } from "react";

export type CheckoutFormData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
  cardNumber?: string;
  expiry?: string;
  cvc?: string;
  cardName?: string;
  paymentMethod: "card" | "paypal" | "cod";
};

export type ValidationErrors = Partial<Record<keyof CheckoutFormData, string>>;

// 🔎 validation logic
function validateCheckoutForm(data: CheckoutFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.email) errors.email = "Email is required";
  if (!data.firstName) errors.firstName = "First name is required";
  if (!data.lastName) errors.lastName = "Last name is required";
  if (!data.address) errors.address = "Address is required";
  if (!data.city) errors.city = "City is required";
  if (!data.phone) errors.phone = "Phone number is required";

  // Payment-specific validation
  if (data.paymentMethod === "card") {
    if (!data.cardNumber) errors.cardNumber = "Card number is required";
    if (!data.expiry) errors.expiry = "Expiry date is required";
    if (!data.cvc) errors.cvc = "Security code is required";
    if (!data.cardName) errors.cardName = "Name on card is required";
  }

  return errors;
}

// ✅ custom hook
export function useCheckoutForm(initialMethod: CheckoutFormData["paymentMethod"] = "card") {
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
    paymentMethod: initialMethod,
    cardNumber: "",
    expiry: "",    
    cvc: "",
    cardName: "", 
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handlePaymentChange = (method: CheckoutFormData["paymentMethod"]) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: method,
    }));
  };

  const handleSubmit = async (onSuccess: () => void | Promise<void>) => {
    const validationErrors = validateCheckoutForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      await onSuccess(); // ✅ ab async bhi handle hoga
    }
  };

  return { formData, errors, handleChange, handlePaymentChange, handleSubmit };
}
