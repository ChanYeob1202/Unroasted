import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SuccessPage() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState('loading');
    
    useEffect(() => {
        const verifyPayment = async () => {
            try {
                const sessionId = searchParams.get('session_id');
                const response = await fetch('/api/payment/verify-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ sessionId }),
                });
                
                if (response.ok) {
                    setStatus('success');
                } else {
                    setStatus('error');
                }
            } catch (error) {
                console.error('Payment verification failed:', error);
                setStatus('error');
            }
        };
        
        verifyPayment();
    }, [searchParams]);

    if (status === 'loading') return <div>Verifying your payment...</div>;
    if (status === 'error') return <div>There was an error verifying your payment.</div>;
    
    return (
        <div>
            <h1>Thank you for your purchase!</h1>
            <p>Your course access has been granted.</p>
        </div>
    );
} 