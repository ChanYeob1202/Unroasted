import React, { useState, useEffect, } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import AboutStorySection from '../components/home/AboutStorySection'
import ValueSection from '../components/home/ValueSection'
import BlogPreviewSection from '../components/home/BlogPreviewSection'
import JoinSection from '../components/home/JoinSection'
import ParallaxCoffee from '../ui/ParallaxCoffee'

export default function Home() {
  const [ featuredArticles, setFeaturedARticles ] = useState([]);
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const storyOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1,0]);



  useEffect(() => {
    const fetchArticleData = async () =>{
      try {
        const response = await fetch('http://localhost:1337/api/articles?populate=cover&pagination[pageSize]=3&sort[0]=publishedAt:desc')
        const result = await response.json()
        setFeaturedARticles(result.data);
      } catch (error) {
        console.error("Error fetching articles: ", error)
      }
    }
    fetchArticleData();
  }, [])

  return (
    <div className="min-h-screen">
      <ParallaxCoffee />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-coffee origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <HeroSection opacity={heroOpacity} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <AboutStorySection opacity = {storyOpacity}/>
        <BlogPreviewSection articles = { featuredArticles }/>
        <JoinSection  articles = {featuredArticles}/>
      </div>
    </div>
  )    
}
 

