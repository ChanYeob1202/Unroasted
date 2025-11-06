import React from 'react'
import AnimatedSection from '../animation/AnimatedSection'
import { motion } from 'framer-motion'

export default function ValueSection({opacity}) {
  const values = [
    {
      title: "Community",
      src: "/images/value/community.jpg",
      alt: "community",
      description: "Coffee brings people together like nothing else can. Our community is built on shared moments, meaningful conversations, and the universal love for that perfect brew."
    },
    {
      title: "Discovery",
      src: "/images/value/discover.jpg",
      alt: "discovery",
      description: "Every coffee bean tells a story, and every brewing method unlocks new flavors waiting to be discovered. We guide you through the fascinating journey of coffee exploration."
    },
    {
      title: "Passion",
      src: "/images/value/passion.jpg",
      alt: "passion",
      description: "Our passion for coffee goes beyond the daily ritual - it's about celebrating the craft, honoring the farmers, and sharing the joy that comes with every perfectly brewed cup."
    }
  ]

  return (
    <motion.section 
      style={{opacity}}
      className="py-20 px-6 max-w-7xl mx-auto"
      >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl font-light text-coffee mb-4">
          Our Values
        </h3>
        <div className="w-24 h-0.5 bg-amber-600 mx-auto"></div>
    </motion.div>

      <AnimatedSection>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <h3 className="text-2xl font-medium transition-transform duration-500 group-hover:scale-105 text-coffee mb-4">
                  {value.title}
                </h3>
                <img 
                  src={value.src} 
                  alt={value.alt} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0  transition-colors duration-300">
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </motion.section>
  )
}