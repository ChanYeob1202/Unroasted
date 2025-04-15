import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function AdminRoute({ children }) {
  const { currentUser, isAdmin } = useAuth();

  if (!currentUser) {
    alert("Access denied. Admin privileges required.");
    return <Navigate to="/" />
  }

  if (!isAdmin) {
    alert("Access denied. Admin privileges required.");
    return <Navigate to="/" />
  }

  return children
}
