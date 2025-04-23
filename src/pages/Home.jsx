import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AboutStorySection from '../components/about/AboutStorySection'
import JoinSection from '../components/about/JoinSection'
import ValueSection from '../components/about/ValueSection'
import HeroSection from '../components/home/HeroSection'
import ParallaxCoffee from '../ui/ParallaxCoffee'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="min-h-screen">
      <ParallaxCoffee />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-coffee origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <HeroSection opacity={opacity} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <AboutStorySection />
        <ValueSection />
        <JoinSection />
      </div>
    </div>
  )    
}
 

