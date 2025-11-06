import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '../animation/AnimatedSection'
import ArticleCard from '../cms/ArticleCard'

export default function BlogPreviewSection({ articles = [], loading = false, error = null }) {
  const navigate = useNavigate();

  const openArticle = (slug) => {
    navigate(`/blog/${slug}`);
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-coffee rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading articles...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600 text-sm">Unable to load articles</p>
        </div>
      </section>
    );
  }

  // Empty state
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6">
      <AnimatedSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-coffee mb-6">
              Latest Articles
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          </div>

          {/* Articles Grid/Scroll */}
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                data={article}
                onClick={openArticle}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/blog')}
              className="px-6 py-3  text-gray-700 border  rounded-lg hover:bg-amber-700 transition-colors duration-200 font-medium"
            >
              View All Articles
            </button>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  )
}
