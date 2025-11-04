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

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                UnRoasted was born from a simple idea: to create a welcoming space where coffee lovers of all levels can connect, learn, and share their passion.
              </p>
              <p>
                We believe that every cup of coffee tells a story, and every coffee lover has a unique journey. At UnRoasted, we're building more than just a website - we're creating a community where coffee knowledge flows freely and friendships brew naturally.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  )
}