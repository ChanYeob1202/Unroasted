import React, { useState } from 'react'

export default function PaymentButton({courseId, price, title, className}) {
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);
        try{
            const response = await fetch("/api/payment/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({courseId, price, title}),
            });
            const {url} = await response.json();
            window.location.href = url;
        } catch(error){
            console.error("Error creating checkout session:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }
  return (
    <button 
      onClick={handlePayment}
      className={className}
      disabled = {isLoading}
    >
        {isLoading ? "Processing..." : "Purchase Course"}
    </button>
  )
}
