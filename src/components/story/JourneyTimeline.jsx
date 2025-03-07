import React from 'react'
import { motion } from 'framer-motion'


export default function JourneyTimeline() {
    const events = [
        { year: '2019', title: 'First Steps', description: 'Started at Coffee Coffee in Larchmont Village' },
        { year: '2020', title: 'Specialty Coffee', description: 'Joined 6xs Coffee, diving deep into specialty coffee' },
        { year: '2021', title: 'Advanced Training', description: 'Mastered various brewing methods and coffee origins' },
        { year: '2023', title: 'Digital Journey', description: 'Created this platform combining tech and coffee' }
      ];
    
      return (
        <div className="py-8">
          <h2 className="text-2xl text-coffee mb-8">My Coffee Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-coffee/20"></div>
            
            {/* Timeline events */}
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8`}
              >
                <div className="w-1/2 px-8">
                  <div className="bg-white/50 p-6 rounded-xl shadow-sm">
                    <span className="text-xl font-bold text-coffee">{event.year}</span>
                    <h3 className="text-lg font-medium mt-2">{event.title}</h3>
                    <p className="text-gray-700 font-light mt-2">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
}
