import React from 'react'

export default function StorySection({ title, children, className = "" }) {
  return (
    <div className={`mt-8 bg-white/50 rounded-xl p-6 shadow-sm ${className}`}>
      <h2 className="text-2xl text-coffee mb-4">{title}</h2>
      {children}
    </div>
  )
}