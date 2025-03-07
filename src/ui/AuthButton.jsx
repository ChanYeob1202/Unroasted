import React from 'react'

export default function AuthButton({
    isLoading,
    buttonText
}) {
  return (
   <div>
     <button
        className={`
        w-full max-w-md
          mt-2  text-black
          py-2 rounded-md font-medium overflow-auto
          transition-all duration-200
          ${isLoading 
            ? 'bg-gray-200 cursor-not-allowed opacity-70'
            : 'bg-white hover:bg-blue-500 hover:text-white hover:border-transparent active:scale-95'
          }
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          shadow-sm hover:shadow-md
        `}
        disabled={isLoading}
      >
        {isLoading ? "loading..." : buttonText}
      </button>
   </div>
  )
}
