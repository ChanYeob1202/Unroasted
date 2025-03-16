import React, { useState } from 'react';
import axios from 'axios';

export default function PaymentButton({ courseId, price, title, className }) {
  
const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await axios.post("/payment/create-checkout-session", {
        courseId,
        price,
        title
      });
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setError(err.response?.data?.error || 'Payment failed');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={loading}
        className={`
          relative
          inline-flex
          items-center
          justify-center
          ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}
          transition-all
          duration-300
          ${className}
        `}
      >
        {loading ? (
          <>
            <span className="opacity-0">Purchase</span>
            <span className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="animate-spin h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </span>
          </>
        ) : (
          <span className="flex items-center">
            <span>Purchase</span>
            <svg 
              className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        )}
      </button>
      {error && (
        <div className="text-red-500 text-sm mt-2">{error}</div>
      )}
    </div>
  );
}
