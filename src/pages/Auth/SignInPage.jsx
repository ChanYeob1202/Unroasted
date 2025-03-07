import React, { useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useResetPassword } from '../../hooks/useResetPassword';
import SignInWithGoogle from '../../components/auth/SignInWithGoogle';
import InputForm from '../../components/forms/InputForm';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

export default function SignInPage() {
  const { signIn } = useAuth();
  const { handleResetPassword } = useResetPassword();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showResetInput, setShowResetInput] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [user, setUser] = useState({
    email: localStorage.getItem('rememberedEmail') || "",
    password: ""
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleResetEmail = async (e) => {
    e.preventDefault();
    if (!resetEmail.trim()) {
      toast.error('Please enter your email address');
      return;
    }
    try {
      setIsLoading(true);
      await handleResetPassword(resetEmail);
      setShowResetInput(false);
      setResetEmail("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user.email.trim() || !user.password.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      await signIn(user.email, user.password);
      
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', user.email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      
      navigate("/home");
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthError = (error) => {
    switch(error.code) {
      case "auth/invalid-credential":
        toast.error("Invalid email or password");
        break;
      case "auth/user-not-found":
        toast.error("No account exists with this email");
        break;
      case "auth/invalid-email":
        toast.error("Please enter a valid email address");
        break;
      case "auth/missing-password":
        toast.error("Please enter a password");
        break;
      case "auth/network-request-failed":
        toast.error("Network error. Please check your connection");
        break;
      case "auth/too-many-requests":
        toast.error("Too many failed attempts. Please try again later");
        break;
      case "auth/user-disabled":
        toast.error("This account has been disabled");
        break;
      default:
        console.error(error);
        toast.error('An error occurred during sign in');
    }
  };

  return (
    <motion.div 
      className='min-h-screen flex flex-col items-center justify-center -mt-40 z-0'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="w-full max-w-md">
        <InputForm 
          user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          title="Welcome Back"
          buttonText="Sign In"
          isLoading={isLoading}
          error={error}
          isSignIn={true}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
        />
      </motion.div>
      
      <motion.div variants={itemVariants} className="w-full max-w-md mt-4">
        <SignInWithGoogle />
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className='flex flex-row gap-2 mt-4'
      >
        <span className="text-gray-600">Forgot Password?</span>
        <button 
          className="font-bold text-coffee underline hover:text-coffee/80 transition-colors"
          onClick={() => setShowResetInput(true)}
        >
          Reset it here
        </button>
      </motion.div>

      <AnimatePresence>
        {showResetInput && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetInput(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         bg-white p-8 rounded-xl shadow-xl z-50 w-full max-w-md mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <form onSubmit={handleResetEmail} className="space-y-4">
                <h2 className="text-2xl font-bold text-coffee mb-4">Reset Password</h2>
                <p className="text-gray-600 mb-4">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none 
                           focus:ring-2 focus:ring-coffee/50 transition-all"
                  placeholder="Enter your email"
                  autoFocus
                />
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowResetInput(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-coffee text-white rounded-lg 
                             hover:bg-coffee/90 transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div 
        variants={itemVariants}
        className='flex flex-row gap-2 mt-4'
      >
        <span className="text-gray-600">Don't have an account?</span>
        <Link 
          to="/signup" 
          className="font-bold text-coffee underline hover:text-coffee/80 transition-colors"
        >
          Sign up here
        </Link>
      </motion.div>
    </motion.div>
  );
}

