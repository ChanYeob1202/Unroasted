import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import AboutStorySection from '../components/home/AboutStorySection'
import ValueSection from '../components/home/ValueSection'
import BlogPreviewSection from '../components/home/BlogPreviewSection'
import JoinSection from '../components/home/JoinSection'
import ParallaxCoffee from '../ui/ParallaxCoffee'
import { useFetchApi } from '../hooks/useFetchApi'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const storyOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1,0]);

  const { data: featuredArticles, loading, error } = useFetchApi(
    `${process.env.REACT_APP_STRAPI_URL}/api/articles?populate=cover&pagination[pageSize]=3&sort[0]=publishedAt:desc`,
    {},
    [],
    (result) => result.data || []
  )

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
        <BlogPreviewSection 
          articles={featuredArticles} 
          loading={loading}
          error={error}
        />
        <JoinSection  articles = {featuredArticles}/>
      </div>
    </div>
  )    
}
 

