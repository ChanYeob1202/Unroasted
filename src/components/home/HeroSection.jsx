import React from 'react'
import { motion } from 'framer-motion'
import HeroIntro from './HeroIntro'

export default function HeroSection({ opacity }) {
  return (
    <motion.div
      style={{ opacity }}
      className="relative h-[60vh]"
    >
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/heroImage6.jpg)',
          backgroundPosition: 'center 25%', 
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <HeroIntro />
      </div>
    </motion.div>
  )
} 