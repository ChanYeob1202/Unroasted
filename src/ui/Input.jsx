import React from 'react'

export default function Input({
  label,
  name,
  value,
  error,
  type,
  onChange,
  placeholder,
}) {
  return (
    <div className='flex flex-col gap-2 w-full items-center'>
      {label && (
        <label
          htmlFor={name}
          className='text-sm font-medium'
        >
          {label}
        </label>
      )}

      <input 
        className="w-full max-w-md border rounded-md p-2 text-center 
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          hover:border-blue-400"
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />

      {error && (
        <span className='text-sm text-red-500'>
          {error}
        </span>
      )}
    </div>
  )
}