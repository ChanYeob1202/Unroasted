import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthButton({ user, onLogOut, className = '' }) {
  const navigate = useNavigate();
  
  return user ? (
    <div 
      className={`cursor-pointer text-sm font-light hover:text-[#9e7d79] ${className}`} 
      onClick={onLogOut}
    >
      Sign out
    </div>
  ) : (
    <div 
      className={`cursor-pointer text-sm font-light hover:text-[#9e7d79] ${className}`} 
      onClick={() => navigate("/signin")}
    >
      Sign in
    </div>
  )
}