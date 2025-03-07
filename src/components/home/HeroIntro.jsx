import React from 'react';
import { motion } from 'framer-motion';

export default function HeroIntro() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-white"
    >
      <h1 className="text-5xl font-light mb-4">UnRoasted</h1>
      <p className="text-xl font-extralight">A cozy corner of the internet where coffee stories brew and communities grow</p>
    </motion.div>
  );
}
