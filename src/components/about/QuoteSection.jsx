import React from 'react'
import AnimatedSection from '../animation/AnimatedSection'

export default function QuoteSection() {
  return (
    <AnimatedSection duration={2000}>
        <div className="w-full flex flex-col md:flex-row my-10 justify-center items-center mt-20 gap-10 px-20">
          <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center">
            <span className="absolute -left-8 -top-8 text-6xl font-serif text-coffee">"</span>
            <p className="font-light italic text-xl text-center text-coffee">Every cup of coffee is a new adventure. Join us in exploring, learning, and sharing the simple joy of brewing - where every mistake is a lesson and every success is worth celebrating.</p>
            <span className="absolute -right-8 -bottom-8 text-6xl font-serif text-coffee">"</span>
            <p className="mt-6 text-gray-400 font-light text-sm">Michael Kim - Founder of UnRoasted</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src= "/images/hero/heroImage6.jpg" 
              alt = "about-1" 
              className = "h-[400px] w-[400px] object-cover rounded-lg" />
          </div>
        </div>
    </AnimatedSection>
  )
}
