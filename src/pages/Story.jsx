import React from 'react';
import StoryIntro from '../components/story/StoryIntro';
import { motion, useScroll } from 'framer-motion';
import PhotoGallery from '../components/story/PhotoGallery';
import JourneyTimeline from '../components/story/JourneyTimeline';
import ParallaxCoffee from '../ui/ParallaxCoffee';

export default function Story() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Elegant scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-coffee/30 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <ParallaxCoffee />

        {/* Interactive coffee spill effect on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center relative group"
        >
          <h1 className="text-5xl font-light mb-4 text-gray-900 relative z-10">
            From Code To Coffee
          </h1>
          {/* Coffee spill animation on hover */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 
                       bg-coffee/10 rounded-full opacity-0 group-hover:opacity-100"
            whileHover={{
              width: "300px",
              height: "300px",
              transition: { duration: 0.8 }
            }}
          />
          <div className="h-[1px] w-24 bg-coffee/30 mx-auto my-6" />
          <p className="text-xl font-extralight text-gray-600">A Journey of Two Passions</p>
        </motion.div>

        {/* Main content with staggered animation */}
        <motion.div 
          className="space-y-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <StoryIntro />
          <JourneyTimeline />
          <PhotoGallery />
        </motion.div>
      </div>
    </div>
  );
}
