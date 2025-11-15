import React from 'react'
import { motion } from 'framer-motion';

export default function StorySection({ title, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative mt-12 bg-gradient-to-br from-white via-amber-50/20 to-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200/50 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coffee via-amber-600 to-coffee" />
      
      {/* Title Section */}
      <div className="mb-6 pb-4 border-b border-slate-200/50">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee relative inline-block">
          {title}
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-coffee to-amber-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </h2>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle background decoration */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-coffee/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  )
}