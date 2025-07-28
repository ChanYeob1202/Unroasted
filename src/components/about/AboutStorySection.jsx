import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../animation/AnimatedSection'

export default function AboutStorySection() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <AnimatedSection>
      <div className="flex flex-col md:flex-row gap-10 py-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3"
        >
          <h2 className="text-3xl font-light text-coffee border-b-2 border-coffee/20 pb-4 mb-4">
            The Story Behind UnRoasted
          </h2>
          {/* <div className="h-40 w-full bg-coffee rounded-lg mt-6 hidden md:block" /> */}
          <img 
            src="/images/coffee/twoLattes.png"
            alt="about-1"
            className="w-full h-50 rounded-lg mt-6 hidden md:block"
          />
  
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-2/3"
        >
          <div className="font-light leading-relaxed space-y-6 text-gray-700 mt-40">
            <p>
              UnRoasted was born from a simple idea: to create a welcoming space where coffee lovers of all levels can connect, learn, and share their passion. Whether you're just starting your coffee journey or you're a seasoned enthusiast, you'll find your place here.
            </p>
            <p>
              We believe that every cup of coffee tells a story, and every coffee lover has a unique journey. At UnRoasted, we're building more than just a website - we're creating a community where coffee knowledge flows freely and friendships brew naturally.
            </p>


            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 overflow-hidden"
                >
                  <p>
                    From beginners to baristas, everyone contributes to our growing community. Share your discoveries, learn from others, and be part of a space where coffee brings people together.
                  </p>
                  <p>
                    Join us in celebrating the art and science of coffee. Your journey starts here.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            {/* <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-coffee hover:text-coffee-dark underline transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button> */}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
} 