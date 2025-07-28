import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { motion } from 'framer-motion';
import BlogHero from '../components/blog/BlogHero';
import BlogSearch from '../components/blog/BlogSearch';
import BlogGrid from '../components/blog/BlogGrid';
import BlogFilter from '../components/blog/BlogFilter';

export default function Blog() {
  const { data: posts, loading, error } = useFetchData('posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  //Set because it removes duplicated category
  const postCategories = ['all', ...new Set(posts.flatMap(post => post.primaryCategory))];
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = selectedFilter === 'all' || post.primaryCategory === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-white">
      <motion.div 
        initial = {{opacity: 0, y: 20}}
        animate = {{opacity: 1, y:0}}
        transition = {{duration: 0.8, ease: "easeOut"}}
      >
       <BlogHero />
      </motion.div>
      <div className="max-w-6xl mx-auto px-4">
        <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <BlogFilter 
          categories={postCategories}
          selectedFilter={selectedFilter}
          onFilterSelect={setSelectedFilter}
        />
        <div className="pb-20">
          <BlogGrid posts={filteredPosts} loading={loading} />
        </div>
      </div>
    </div>
  );
}