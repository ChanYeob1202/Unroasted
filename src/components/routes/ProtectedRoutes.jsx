import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/* 
    protecting routes for non registered users
    key features : navigate, 
    return user ? <  >
*/

export default function ProtectedRoutes({ children }) {
    const { user } = useAuth();

    if (!user) {
        alert('Please sign in first to access this page');
        return <Navigate to="/signin" />;
    }
    return children;
}

