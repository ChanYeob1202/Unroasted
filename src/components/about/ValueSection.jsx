import React, { useState } from 'react'
import AnimatedSection from '../animation/AnimatedSection'
import { motion } from 'framer-motion'

export default function ValueSection() {
  const [activeValue, setActiveValue] = useState(0)

  const values = [
    {
      title: 'Community',
      shortDesc: 'Uniting coffee lovers',
      longDesc: 'Connecting coffee enthusiasts across borders through shared passion. We create spaces for meaningful discussions and relationships to flourish.',
      highlights: ['Global meetups', 'Knowledge sharing', 'Collaborative events', 'Mentorship programs']
    },
    {
      title: 'Education',
      shortDesc: 'Empowering knowledge',
      longDesc: 'Democratizing coffee knowledge and making specialty coffee accessible to everyone through comprehensive learning resources.',
      highlights: ['Interactive courses', 'Expert workshops', 'Brewing guides', 'Origin deep-dives']
    },
    {
      title: 'Innovation',
      shortDesc: 'Advancing coffee craft',
      longDesc: 'Creating innovative solutions and tools to enhance the coffee brewing experience for enthusiasts at every level.',
      highlights: ['Digital brewing tools', 'Recipe database', 'Taste profiling', 'Equipment reviews']
    },
    {
      title: 'Quality',
      shortDesc: 'Excellence in every cup',
      longDesc: 'Committed to the highest standards in coffee selection, roasting, and preparation to deliver exceptional experiences in every cup.',
      highlights: ['Cupping sessions', 'Quality control', 'Roast profiling', 'Bean selection']
    }
  ]

  return (
    <div className="w-full py-32 px-10 bg-gradient-to-b from-coffee/5 to-transparent">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-light text-coffee text-center mb-12"
      >
        OUR VALUES
      </motion.h2>
      
      <AnimatedSection>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`cursor-pointer rounded-lg p-6 transition-all duration-300 ${
                activeValue === index 
                  ? 'bg-coffee text-white' 
                  : 'bg-white hover:bg-coffee/5'
              }`}
              onClick={() => setActiveValue(activeValue === index ? null : index)}
            >
              <h3 className="text-xl font-light mb-3">{value.title}</h3>
              <p className={`text-sm ${
                activeValue === index ? 'text-white/90' : 'text-gray-600'
              }`}>
                {value.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>

        {activeValue !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg p-6"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6">{values[activeValue].longDesc}</p>
              <div className="grid md:grid-cols-2 gap-3">
                {values[activeValue].highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-coffee" />
                    <span className="text-gray-600 text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatedSection>
    </div>
  )
}
