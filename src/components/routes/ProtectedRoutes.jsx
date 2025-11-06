import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function ProtectedRoutes({ children }) {


    const { currentUser } = useAuth();
    // console.log(currentUser?.uid);

    if (!currentUser) {
        alert('Please sign in first to access this page');
        return <Navigate to="/signin" />;
    }
    return children;
}

