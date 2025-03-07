import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({children}) {

  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    //Ensure refs are available 
    if(!wrapperRef.current || !contentRef.current) return;

    //create scroll smoother instance
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
    });
    return () => {
      smoother.kill();
    };
  }, []);
  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}


  


  

