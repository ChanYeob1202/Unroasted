import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function InputForm({ 
  user, 
  handleChange, 
  handleSubmit, 
  title,  
  buttonText, 
  isLoading, 
  error,
  isSignIn = false,
  showPassword,
  setShowPassword,
  rememberMe,
  setRememberMe
}) {
  // Input field animation variants
  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center mb-8 text-coffee">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username field will show when isSignIn is false */}
        {!isSignIn && (
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              animate="blur"
            >
              <input
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 
                         focus:border-coffee focus:outline-none focus:ring-1 focus:ring-coffee/50
                         transition-all duration-200"
                placeholder="Enter your username"
              />
            </motion.div>
          </div>
        )}

        {/* Email field */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            animate="blur"
          >
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 
                       focus:border-coffee focus:outline-none focus:ring-1 focus:ring-coffee/50
                       transition-all duration-200"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </motion.div>
        </div>

        {/* Password field with toggle */}
        <div>
          <label 
            htmlFor="password" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            animate="blur"
            className="relative"
          >
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 
                       focus:border-coffee focus:outline-none focus:ring-1 focus:ring-coffee/50
                       transition-all duration-200 pr-12"
              placeholder="Enter your password"
              autoComplete={isSignIn ? "current-password" : "new-password"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700
                       focus:outline-none"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Remember me checkbox for signin */}
        {isSignIn && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-coffee focus:ring-coffee/50 border-gray-300 rounded
                         cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                Remember me
              </label>
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <motion.p 
            className="text-red-500 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm 
                   font-medium text-white bg-coffee hover:bg-coffee/90 focus:outline-none 
                   focus:ring-2 focus:ring-offset-2 focus:ring-coffee/50 transition-colors
                   ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Processing...
            </div>
          ) : (
            buttonText
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

