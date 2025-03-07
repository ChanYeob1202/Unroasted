import React, { useState } from 'react';
import heroImages from '../../data/heroImages';
import AnimatedSection from '../animation/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroImagesCard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  // Image hover animations
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 }
    }
  };

  // Caption animations
  const captionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatedSection duration={200}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {heroImages.map((image) => (
          <motion.div
            key={image.id}
            className='relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer'
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={() => setSelectedImage(image)}
            onHoverStart={() => setHoveredImage(image)}
            onHoverEnd={() => setHoveredImage(null)}
          >
            <motion.img 
              src={image.src}   
              alt={image.alt} 
              className='w-full h-full object-cover'
              layoutId={`image-${image.id}`}
            />
            
            {/* Hover Overlay */}
            <AnimatePresence>
              {hoveredImage?.id === image.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
                >
                  <motion.h3 
                    variants={captionVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-white text-lg font-medium"
                  >
                    {image.title}
                  </motion.h3>
                  <motion.p 
                    variants={captionVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-white/80 text-sm"
                  >
                    {image.description}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`image-${selectedImage.id}`}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h2 className="text-2xl font-medium text-gray-900 mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600">
                  {selectedImage.description}
                </p>
                {selectedImage.details && (
                  <div className="mt-4 space-y-2">
                    {selectedImage.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-coffee" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
