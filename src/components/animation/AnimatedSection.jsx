import React, { useEffect, useRef } from 'react';

export default function  AnimatedSection  ({ children, delay = 0 }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    let observer;

    // Initial state - hidden
    section.style.opacity = '0';
    section.style.transform = 'translateY(200px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Delayed animation
          setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
          }, delay);
          
          // Unobserve after animation
          observer.unobserve(section);
        };
      });
    };

    // Create and start observing
    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1  // Trigger when 10% of the element is visible
    });
    
    observer.observe(section);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={sectionRef} className="transition-all duration-600">
      {children}
    </div>
  );
};



