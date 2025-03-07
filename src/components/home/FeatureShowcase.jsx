import React, { useState }  from 'react'
import { motion } from 'framer-motion'

export default function FeatureShowcase() {
    const [activeFeature, setActiveFeature] = useState('education')
  
    const features = {
      education: {
        title: 'Educational Platform',
        description: 'Comprehensive guides, tutorials, and resources for every stage of your coffee journey.',
        icon: '📚',
        details: [
          'In-depth brewing guides',
          'Coffee origin exploration',
          'Roasting fundamentals',
          'Tasting techniques'
        ]
      },
      community: {
        title: 'Community Platform',
        description: 'A space for coffee enthusiasts to connect, share experiences, and grow together.',
        icon: '🤝',
        details: [
          'Discussion forums',
          'Knowledge sharing',
          'Event announcements',
          'Coffee meetups'
        ]
      },
      tools: {
        title: 'Coffee Tools',
        description: 'Interactive tools and calculators to perfect your coffee brewing.',
        icon: '⚡',
        details: [
          'Brew ratio calculator',
          'Extraction timer',
          'Tasting notes tracker',
          'Brewing recipes'
        ]
      }
    }
  
    return (
      <div className="py-16 px-4">
        <h2 className="text-2xl text-coffee text-center mb-12">Platform Features</h2>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(features).map((key) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full ${
                  activeFeature === key 
                    ? 'bg-coffee text-white' 
                    : 'bg-coffee/10 text-coffee hover:bg-coffee/20'
                }`}
                onClick={() => setActiveFeature(key)}
              >
                {features[key].title}
              </motion.button>
            ))}
          </div>
  
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{features[activeFeature].icon}</span>
              <div>
                <h3 className="text-2xl font-medium text-coffee">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {features[activeFeature].description}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {features[activeFeature].details.map((detail, index) => (
                <motion.div
                  key={detail}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-coffee" />
                  <span className="text-gray-700">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    )
  }
  
