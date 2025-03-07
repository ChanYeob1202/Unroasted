import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

export default function PublicRoutes({children}) {
  const { user } = useAuth();

  return(
       <>
           { user ? <Navigate to ="/" /> : children}
       </>

  )
}
