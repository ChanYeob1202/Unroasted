import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../animation/AnimatedSection'

export default function AboutStorySection({opacity}) {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <AnimatedSection>
        <motion.div
          style= {{opacity}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-coffee mb-6">
                Our Beginning
              </h2>
              <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              <p>
                UnRoasted is where I share my personal thoughts and experiences with coffee—f3rom barista life to the stories behind each cup.
              </p>
              <p>
                This is my space to reflect on coffee culture, craftsmanship, and the moments that make this journey meaningful.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  )
}