import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import InputForm from '../../components/forms/InputForm';


export default function SignUpPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event, user) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await signUp(user.email, user.password, user.username);
      toast.success('Successfully signed up!');
      navigate("/signin");
    } catch (error) {
      setError(error.message);
      switch(error.code) {
        case 'auth/email-already-in-use':
          toast.error('Email is already registered');
          break;
        case 'auth/invalid-email':
          toast.error('Please enter a valid email address');
          break;
        case 'auth/weak-password':
          toast.error('Password should be at least 6 characters');
          break;
        case 'auth/network-request-failed':
          toast.error('Network error. Please check your connection');
          break;
        case 'auth/operation-not-allowed':
          toast.error('Email/password sign up is not enabled');
          break;
        case 'auth/too-many-requests':
          toast.error('Too many attempts. Please try again later');
          break;
        case 'auth/invalid-password':
          toast.error('Password must be a string with at least 6 characters');
          break;
        case 'auth/internal-error':
          toast.error('Internal server error. Please try again later');
          break;
        default:
          if(error.response?.status === 400){
            toast.error("Invalid registration data. Please check your inputs.");
          } else if(error.response?.status === 500) {
            toast.error("Server error. Please try again later");
          } else {
            console.error('Sign up error:', error);
            toast.error('An error occurred during sign up');
          }
      }
      return;
    } finally {
      setIsLoading(false);
    }
  };  
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  

  return (
    <div className='min-h-screen sm:x-[100vw] flex flex-col items-center justify-center -mt-[200px]'>
      <InputForm 
        user={user}
        handleUsernameChange={handleChange}
        handleChange={handleChange}
        handleSubmit={(e) => handleSubmit(e, user)}
        isLoading={isLoading}
        error={error}
        buttonText={isLoading ? "Signing up..." : "Sign up"}
      />
    </div>
  );
}