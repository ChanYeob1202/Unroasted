import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PiCoffeeBold } from "react-icons/pi";

export default function ParallaxCoffee() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed bottom-8 right-8 w-16 h-16 z-50"
      style={{
        rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
        scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
      }}
    >
      <PiCoffeeBold className="text-coffee text-4xl" />
    </motion.div>
  );
}