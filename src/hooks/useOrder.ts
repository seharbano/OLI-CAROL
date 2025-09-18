import { useState } from "react";
import { useCheckoutForm } from "@/utilis/checkoutValidation";

export function useOrder() {
  const { formData, errors, handleChange, handlePaymentChange, handleSubmit } =
    useCheckoutForm("card");

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderCompleted = () => {
    handleSubmit(async () => {
      try {
        setLoading(true);

        // 👇 fake API call (replace with real API later)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsModalOpen(true); // modal open
      } finally {
        setLoading(false); // loader hamesha band ho
      }
    });
  };

  const closeModal = () => setIsModalOpen(false);

  return {
    formData,
    errors,
    handleChange,
    handlePaymentChange,
    handleOrderCompleted,
    loading,
    isModalOpen,
    closeModal,
  };
}
