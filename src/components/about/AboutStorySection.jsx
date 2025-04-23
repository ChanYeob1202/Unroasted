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
          <div className="font-light leading-relaxed space-y-6 text-gray-700">
            <p>
              Born from a passion for connecting people across the globe, Unroasted emerged as a response to a simple observation: while coffee brings people together in cafes worldwide, there wasn't a dedicated online space where anyone curious about coffee could truly belong, learn, and grow. We set out to change that.
            </p>
            <p>
              At Unroasted, we believe every cup of coffee tells a story, and everyone—whether you're taking your first sip or have been brewing for decades—has a place at our table. Founded with a simple yet powerful vision, we've created more than just a website – we've built a thriving digital sanctuary where coffee journeys begin, evolve, and flourish.
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
                    Whether you're just beginning to explore beyond your regular morning cup, or you're a seasoned enthusiast cataloging single-origin beans from around the world—Unroasted welcomes you with open arms. Here, curiosity is celebrated, every question enriches our community, and every coffee journey is valued. Your adventure with coffee starts exactly where you are, and unfolds at your own pace among friends who share your passion.
                  </p>
                  <p>
                    Unroasted is built on the foundation of community participation. Here, every member—from beginners taking their first steps into the wonderful world of coffee to experienced baristas—contributes to our collective knowledge and passion. If you're just discovering coffee beyond the standard morning cup, you'll find patient guides and friendly advice. If you're sharing your latest coffee discovery or perfected technique, you're helping others grow in their appreciation.
                  </p>
                  <p>
                    While coffee is at our core, Unroasted is about the connections we forge over our shared curiosity. We're a community where friendships brew alongside coffee, where knowledge flows as freely as conversation, and where every member—regardless of experience level—adds their unique flavor to our collective experience.
                  </p>
                  <p>
                    So whether you're here to learn what makes a great cup of coffee, discover your personal taste preferences, or share your expertise with eager learners, you've found your home. At Unroasted, your coffee journey—wherever it may start—matters to us all.
                  </p>
                  <p>
                    Join us. The coffee's brewing, and your seat is waiting.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-coffee hover:text-coffee-dark underline transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
} 