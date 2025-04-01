import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth'; // Update this import to use your hooks folder

export default function PaymentButton({ courseId, price, title, className }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasPurchased, setHasPurchased] = useState(false);
    const { user } = useAuth(); // Get current user from auth context

    // Check if user has already purchased the course
    useEffect(() => {
        const checkPurchaseStatus = async () => {
            if (!user) return;
            
            try {
                const response = await axios.get(`/payment/check-purchase/${courseId}`);
                setHasPurchased(response.data.hasPurchased);
            } catch (error) {
                console.error("Error checking purchase status:", error);
            }
        };

        checkPurchaseStatus();
    }, [user, courseId]);

    const handleClick = async () => {
        if (hasPurchased) {
            // Navigate to course content
            window.location.href = `/courses/${courseId}/content`;
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            const response = await axios.post("/payment/create-checkout-session", {
                courseId,
                price,
                title,
                userId: user.uid // pass the user id to the server
            });
        
            if (response.data.url) {
                window.location.href = response.data.url;
            } else {
                throw new Error("Invalid response from server");
            }
        } catch (error) {
            console.error("Full error:", error);
            setError(error.response?.data?.error || error.message || "Payment initiation failed");
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
                    ${hasPurchased ? 'bg-green-500 hover:bg-green-600' : ''}
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
                        {hasPurchased ? (
                            <>
                                <span>Access Course</span>
                                <svg 
                                    className="ml-2 h-4 w-4" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    </span>
                )}
            </button>
            {error && (
                <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
        </div>
    );
}
