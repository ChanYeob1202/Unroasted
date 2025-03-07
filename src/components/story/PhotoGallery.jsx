import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function PhotoGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
      { src: '/images/latte/latte1.jpg', caption: 'Crafting Latte Art' },
      { src: '/images/latte/latte2.jpg', caption: 'Crafting Latte Art' },
      { src: '/images/latte/latte3.jpg', caption: 'Crafting Latte Art' },
      { src: '/images/latte/latte4.jpg', caption: 'Crafting Latte Art' },
      { src: '/images/latte/latte5.png', caption: 'Crafting Latte Art' },
      { src: '/images/latte/latte7.jpg', caption: 'Crafting Latte Art' },
      
      
      
      // Add more images here
    ];
  
    return (
      <div className="py-8">
        <h2 className="text-2xl text-coffee mb-8">Latte Art Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                rotate: Math.random() * 4 - 2, // Random slight rotation on hover
              }}
              className="cursor-pointer perspective-1000"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
  
        {/* Modal for selected image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl mx-auto p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="rounded-lg max-h-[80vh]"
              />
              <p className="text-white text-center mt-4">{selectedImage.caption}</p>
            </div>
          </motion.div>
        )}
      </div>
    );
}
