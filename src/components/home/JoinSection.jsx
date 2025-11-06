import React from 'react'
import AnimatedSection from '../animation/AnimatedSection'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function JoinSection() {
  const navigate = useNavigate()
  const handleClick =()=> {
      navigate("/signin")
  }

  return (
    <AnimatedSection>
      <div className="w-full flex flex-col md:flex-row my-20 justify-center items-center gap-16 px-8 md:px-20">
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <img 
              src="/images/hero/heroImage3.jpg" 
              alt="about-2" 
              className="h-[500px] w-[500px] object-cover rounded-lg shadow-2xl" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
          </div>
        </motion.div>
        
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-light text-coffee mb-8"
          >
            Join Our Community
          </motion.h2>
          <div className="flex flex-col space-y-6 text-gray-600 leading-relaxed">
            <p>
              Whether you're taking your first steps into specialty coffee or you're a seasoned professional, there's a place for you at Unroasted. Here, we believe that every person's coffee journey is unique and valuable, and we're excited to be part of yours.
            </p>
            <p>
              Together, we're building more than just a coffee community – we're creating a space where passion meets knowledge, where curiosity leads to discovery, and where every coffee story matters.
            </p>
            <p>
              Welcome to Unroasted. Your coffee journey continues here.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-8 py-3 bg-coffee text-white rounded-lg shadow-lg hover:bg-coffee/90 transition-all"
            onClick = {handleClick}
          >
            Join Now
          </motion.button>
        </div>
      </div>
    </AnimatedSection>
  )
}
