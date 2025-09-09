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

// ✅ validation logic
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

// ✅ custom hook for checkout form
export function useCheckoutForm(initialMethod: "card" | "paypal" | "cod" = "card") {
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
    paymentMethod: initialMethod,
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handlePaymentChange = (method: "card" | "paypal" | "cod") => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: method,
    }));
  };

  const handleSubmit = (onSuccess: () => void) => {
    const validationErrors = validateCheckoutForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSuccess(); 
    }
  };

  return { formData, errors, handleChange, handlePaymentChange, handleSubmit };
}
