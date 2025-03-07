import React from 'react'
import { motion } from 'framer-motion'

export default function SkillsShowcase() {
    const skills = [
      { category: 'Coffee Skills', items: ['Espresso Extraction', 'Latte Art', 'Coffee Cupping', 'Brewing Methods'] },
      { category: 'Technical Skills', items: ['React.js', 'Node.js', 'UI/UX Design', 'Database Management'] },
      { category: 'Knowledge', items: ['Coffee Origins', 'Roasting Profiles', 'Bean Varieties', 'Processing Methods'] }
    ];
  
    return (
      <div className="py-8">
        <h2 className="text-2xl text-coffee mb-8">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillSet) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-white/50 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-medium text-coffee mb-4">{skillSet.category}</h3>
              <div className="space-y-3">
                {skillSet.items.map((item) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center gap-2"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-coffee rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-gray-700 font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };