import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function SignInWithGoogle() {
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
  
    const googleSignIn = async() => {
      try {
        setIsLoading(true);
        await signInWithGoogle();
        navigate("/");
      } catch (error) {
        console.log(error);
        toast.error("Failed to sign in with Google");
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <motion.div 
        onClick={!isLoading ? googleSignIn : undefined}
        className={`flex items-center justify-center gap-3 p-3 rounded-lg border border-gray-300
                   hover:border-coffee hover:shadow-md transition-all duration-300
                   ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FcGoogle className="text-2xl" />
        <span className='text-gray-700 font-medium'>
          {isLoading ? 'Signing in...' : 'Sign in with Google'}
        </span>
      </motion.div>
    );
}